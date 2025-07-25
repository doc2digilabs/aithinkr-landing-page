import { Layout } from "@/components/layout";
import { Dashboard } from "@/components/dashboard/Dashboard";

const DashboardPage = () => {
  return (
    <Layout>
      <div className="container py-12">
        <Dashboard />
      </div>
    </Layout>
  );
};

export default DashboardPage;
