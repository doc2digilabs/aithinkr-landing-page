import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { supabase } from '@/lib/supabaseClient';
import { Session } from '@supabase/supabase-js';

// 1. Consolidated `useAuth` hook
const useAuth = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) throw sessionError;
        setSession(session);

        // If session exists, fetch profile and check role
        if (session?.user) {
          const { data, error } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', session.user.id)
            .single();

          if (error) {
            // It's possible the profile doesn't exist yet or RLS is blocking.
            // Log the error but don't throw, as we want to handle this gracefully.
            console.error('Error fetching user profile:', error.message);
            setIsAdmin(false);
          } else {
            setIsAdmin(data?.role === 'admin');
          }
        } else {
          setIsAdmin(false);
        }
      } catch (e) {
        console.error('An error occurred in useAuth:', e);
        setIsAdmin(false);
        setSession(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        setSession(newSession);
        // Re-check role when auth state changes
        fetchData();
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { session, isAdmin, loading };
};


// 2. Simplified AdminProtectedRoute component
export const AdminProtectedRoute = () => {
  const { session, isAdmin, loading } = useAuth();

  console.log('Auth state:', { loading, isAdmin, session: !!session });

  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  if (!session) {
    console.log('Redirecting: No session. Target: /auth');
    return <Navigate to="/auth" />;
  }

  if (!isAdmin) {
    console.log('Redirecting: User is not an admin. Target: /dashboard');
    return <Navigate to="/dashboard" />;
  }

  console.log('Access granted: User is an admin.');
  return <Outlet />;
};
