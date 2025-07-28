import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

const useAdminRole = (user: any) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            setLoading(false);
            return;
        }

        const checkAdminRole = async () => {
            const { data, error } = await supabase
                .from('profiles')
                .select('role')
                .eq('id', user.id)
                .single();

            if (error) {
                console.error('useAdminRole: Error fetching profile', error);
            }

            if (data && data.role === 'admin') {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }
            setLoading(false);
        };

        checkAdminRole();
    }, [user]);

    return { isAdmin, loading };
};

export const AdminProtectedRoute = () => {
  const { user, loading: authLoading } = useAuth();
  const { isAdmin, loading: roleLoading } = useAdminRole(user);

  if (authLoading || roleLoading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  if (!user) {
    return <Navigate to="/auth" />;
  }

  if (isAdmin) {
    return <Outlet />;
  } else {
    return <Navigate to="/dashboard" />;
  }
};
