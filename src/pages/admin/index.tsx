import { Layout } from "@/components/layout";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

const AdminPage = () => {
  return (
    <Layout>
      <div className="container py-12">
        <AdminDashboard />
      </div>
    </Layout>
  );
};

export default AdminPage;
