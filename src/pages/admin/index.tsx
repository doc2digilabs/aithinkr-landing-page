import { Layout } from "@/components/layout";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

const AdminPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <AdminDashboard />
      </div>
    </Layout>
  );
};

export default AdminPage;
