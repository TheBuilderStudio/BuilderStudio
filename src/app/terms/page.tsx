import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Builder Studio services and products.",
  alternates: {
    canonical: 'https://thebuilderstudio.com/terms',
  },
  openGraph: {
    title: "Terms & Conditions | Builder Studio",
    description: "Terms and conditions for Builder Studio services and products.",
    url: 'https://thebuilderstudio.com/terms',
  }
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-40 pb-24 px-6 md:px-12 max-w-4xl mx-auto z-10 relative">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">Terms and Conditions</h1>
      <div className="prose prose-invert max-w-none text-white/70 space-y-6">
        <p className="text-sm font-mono text-emerald-400/80 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">1. Introduction</h2>
        <p>Welcome to Builder Studio ("we," "our," or "us"). These Terms and Conditions govern your access to and use of our website, as well as any products, SaaS applications, and software development services we provide. By accessing our platform or engaging our services, you agree to be bound by these Terms.</p>
        
        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">2. Our Services</h2>
        <p>Builder Studio operates under a dual model:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-white">Internal Products:</strong> We design, build, and maintain our own proprietary digital products and SaaS platforms.</li>
          <li><strong className="text-white">Client Services:</strong> We provide end-to-end product development services, including UI/UX design, MVP development, and software engineering for founders and businesses.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">3. Intellectual Property Rights</h2>
        <p><strong className="text-white">3.1 Builder Studio Products:</strong> All intellectual property rights in our internal products, website, branding, and proprietary codebase remain the exclusive property of Builder Studio.</p>
        <p><strong className="text-white">3.2 Client Projects:</strong> For custom client services, upon full receipt of all scheduled payments, all intellectual property rights for the custom-developed deliverables (e.g., custom code, designs) will be transferred to the client. However, Builder Studio retains ownership of any pre-existing background technology, libraries, or open-source components utilized during development, granting the client a non-exclusive, perpetual license to use them as part of the final product.</p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">4. Client Obligations</h2>
        <p>When engaging us for development services, you agree to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide clear, timely, and accurate requirements, materials, and feedback necessary for project completion.</li>
          <li>Ensure you have the legal right and necessary permissions for any assets, logos, or third-party integrations you provide to us.</li>
          <li>Adhere to the agreed-upon communication and milestone schedules.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">5. Payments and Fees</h2>
        <p>Pricing for our custom development services will be outlined in a separate Statement of Work (SOW) or proposal. Payments are generally structured around project milestones. Due to the custom nature of software development, payments for completed and approved milestones are non-refundable. For our SaaS products, subscription fees are billed as outlined on their respective pricing pages.</p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">6. Confidentiality</h2>
        <p>We respect the sensitive nature of your startup ideas and business data. Builder Studio agrees to keep all non-public information, business plans, and intellectual property shared by clients strictly confidential and will only use such information for the purpose of fulfilling our service obligations.</p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">7. Warranties and Disclaimers</h2>
        <p>While we strive to write clean, secure, and highly functional code, software development inherently involves risks. Our services and products are provided "as is" and "as available," without any warranties of any kind, either express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee that our software will be entirely error-free or uninterrupted.</p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">8. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, Builder Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of your use of our services or products. Our total liability for any claims under these Terms shall not exceed the amount paid by you to Builder Studio for the specific service or product giving rise to the claim.</p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">9. Termination</h2>
        <p>We may terminate or suspend your access to our products or services immediately, without prior notice, if you breach these Terms. For client projects, termination clauses, including notice periods and payment obligations for work completed to date, will be specified in your individual service agreement.</p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">10. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with the laws of our operating jurisdiction, without regard to its conflict of law provisions.</p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">11. Contact Information</h2>
        <p>If you have any questions about these Terms, please contact us at <strong className="text-white">manavhustles@gmail.com</strong> or via our contact channels.</p>
      </div>
    </main>
  );
}
