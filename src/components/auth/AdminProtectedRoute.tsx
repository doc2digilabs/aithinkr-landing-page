import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { supabase } from '@/lib/supabaseClient';
import { Session } from '@supabase/supabase-js';

const useAdminRole = (session: Session | null) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!session?.user) {
            setLoading(false);
            return;
        }

        const checkAdminRole = async () => {
            const { data, error } = await supabase
                .from('registrations')
                .select('role')
                .eq('email', session.user.email)
                .single();

            if (data && data.role === 'admin') {
                setIsAdmin(true);
            }
            setLoading(false);
        };

        checkAdminRole();
    }, [session]);

    return { isAdmin, loading };
};


export const AdminProtectedRoute = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loadingSession, setLoadingSession] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoadingSession(false);
    };

    fetchSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const { isAdmin, loading: loadingRole } = useAdminRole(session);

  if (loadingSession || loadingRole) {
    return <div>Loading...</div>; // Or a spinner component
  }

  if (!session) {
    return <Navigate to="/auth" />;
  }

  return isAdmin ? <Outlet /> : <Navigate to="/dashboard" />;
};
