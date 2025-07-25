import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TermsOfService = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl">Terms of Service</CardTitle>
        <p className="text-sm text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">1. Agreement to Terms</h2>
          <p className="text-muted-foreground">
            By using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">2. Use of Services</h2>
          <p className="text-muted-foreground">
            You must be at least 18 years old to use our services. You are responsible for your account and all activities that occur under it. You agree not to use the services for any illegal or unauthorized purpose.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">3. Intellectual Property</h2>
          <p className="text-muted-foreground">
            All content and materials available on our services, including but not limited to text, graphics, website name, code, images, and logos are the intellectual property of AiThinkr and are protected by applicable copyright and trademark law.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">4. Termination</h2>
          <p className="text-muted-foreground">
            We may terminate or suspend your account and bar access to the services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">5. Disclaimer of Warranties</h2>
          <p className="text-muted-foreground">
            Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that the services will be uninterrupted, timely, secure, or error-free.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">6. Limitation of Liability</h2>
          <p className="text-muted-foreground">
            In no event shall AiThinkr, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">7. Governing Law</h2>
          <p className="text-muted-foreground">
            These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which our company is established, without regard to its conflict of law provisions.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
