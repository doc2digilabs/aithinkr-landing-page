import { Layout } from "@/components/layout";
import { PrivacyPolicy } from "@/components/legal/PrivacyPolicy";

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <div className="container py-12">
        <PrivacyPolicy />
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;
