import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Builder Studio.",
  alternates: {
    canonical: 'https://thebuilderstudio.com/privacy',
  },
  openGraph: {
    title: "Privacy Policy | Builder Studio",
    description: "Privacy policy for Builder Studio.",
    url: 'https://thebuilderstudio.com/privacy',
  }
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-40 pb-24 px-6 md:px-12 max-w-4xl mx-auto z-10 relative">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none text-white/70 space-y-6">
        <p className="text-sm font-mono text-emerald-400/80 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">1. Introduction</h2>
        <p>Builder Studio ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our proprietary SaaS products, or engage our software development services.</p>
        
        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">2. Information We Collect</h2>
        <p>We may collect several types of information from and about users of our services, including:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-white">Personal Data:</strong> Name, email address, phone number, and billing information when you register for our products or contact us for development services.</li>
          <li><strong className="text-white">Project Data:</strong> Business requirements, designs, codebases, and credentials provided by you during the execution of our client services.</li>
          <li><strong className="text-white">Usage Data:</strong> Information on how you interact with our website and products, such as IP addresses, browser types, page views, and diagnostic data.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">3. How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To provide, operate, and maintain our products and development services.</li>
          <li>To communicate with you regarding project updates, invoices, technical support, and administrative notices.</li>
          <li>To analyze and improve the user experience, functionality, and security of our proprietary platforms.</li>
          <li>To enforce our terms, conditions, and policies.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">4. Data Sharing and Disclosure</h2>
        <p>We do not sell your personal data. We may share your information only in the following situations:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-white">Service Providers:</strong> We share data with trusted third-party vendors (e.g., hosting providers like AWS or Vercel, payment processors like Stripe) who assist us in operating our business. These providers are bound by strict confidentiality agreements.</li>
          <li><strong className="text-white">Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
          <li><strong className="text-white">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your personal data may be transferred as a business asset.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">5. Data Security</h2>
        <p>We implement industry-standard security measures, including encryption and secure infrastructure practices, to protect your personal information and project data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">6. Your Data Protection Rights</h2>
        <p>Depending on your location, you may have the following rights regarding your personal data:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The right to access, update, or delete the personal information we have on you.</li>
          <li>The right of rectification if your information is inaccurate or incomplete.</li>
          <li>The right to object to our processing of your personal data.</li>
          <li>The right to request data portability.</li>
        </ul>
        <p>To exercise any of these rights, please contact us directly.</p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">7. Third-Party Links</h2>
        <p>Our website or products may contain links to third-party sites that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">8. Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.</p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">9. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with Builder Studio, please contact us at <strong className="text-white">manavhustles@gmail.com</strong>.</p>
      </div>
    </main>
  );
}
