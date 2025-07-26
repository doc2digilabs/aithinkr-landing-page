import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Layout } from "@/components/layout";
import { Dashboard } from "@/components/dashboard/Dashboard";
import { FirstTimeSetup } from "@/components/auth/FirstTimeSetup";

const DashboardPage = () => {
  const [loading, setLoading] = useState(true);
  const [showWizard, setShowWizard] = useState(false);

  useEffect(() => {
    const checkUserProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from("profiles")
          .select("wizard_completed")
          .eq("id", user.id)
          .single();

        if (error) {
          console.error("Error fetching profile:", error);
        } else if (data && !data.wizard_completed) {
          setShowWizard(true);
        }
      }
      setLoading(false);
    };

    checkUserProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  return (
    <Layout>
      {showWizard ? (
        <FirstTimeSetup />
      ) : (
        <div className="container py-12">
          <Dashboard />
        </div>
      )}
    </Layout>
  );
};

export default DashboardPage;
