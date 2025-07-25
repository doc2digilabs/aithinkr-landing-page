import { Layout } from "@/components/layout";
import { TermsOfService } from "@/components/legal/TermsOfService";

const TermsOfServicePage = () => {
  return (
    <Layout>
      <div className="container py-12">
        <TermsOfService />
      </div>
    </Layout>
  );
};

export default TermsOfServicePage;
