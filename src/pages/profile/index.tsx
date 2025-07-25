import { Layout } from "@/components/layout";
import ProfileForm from "@/components/profile/ProfileForm";

const ProfilePage = () => {
  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-8">My Profile</h1>
        <ProfileForm />
      </div>
    </Layout>
  );
};

export default ProfilePage;
