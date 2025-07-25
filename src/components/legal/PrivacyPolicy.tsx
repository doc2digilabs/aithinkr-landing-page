import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const PrivacyPolicy = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl">Privacy Policy</CardTitle>
        <p className="text-sm text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p className="text-muted-foreground">
            Welcome to AiThinkr. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">2. Information We Collect</h2>
          <p className="text-muted-foreground">
            We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use. The personal information we collect may include the following: Name, Email Address, Phone Number, and Password.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
          <p className="text-muted-foreground">
            We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">4. Will Your Information Be Shared With Anyone?</h2>
          <p className="text-muted-foreground">
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell, rent, or trade any of your personal information with third parties for their promotional purposes.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">5. How We Keep Your Information Safe</h2>
          <p className="text-muted-foreground">
            We aim to protect your personal information through a system of organizational and technical security measures. We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">6. Policy for Children</h2>
          <p className="text-muted-foreground">
            We do not knowingly solicit data from or market to children under 18 years of age. By using the Website, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Website.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">7. Changes to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
