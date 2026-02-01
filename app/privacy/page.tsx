import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - WOM',
  description: 'Privacy Policy for WOM (Word of Mouth) creator-brand matching platform.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 flex flex-col">
      {/* Header */}
      <header className="py-6 px-6 text-center">
        <Link href="/" className="text-2xl font-extrabold bg-gradient-to-r from-orange-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          WOM
        </Link>
      </header>

      {/* Content */}
      <main className="flex-1 px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-400 mb-10">Last updated: January 30, 2025</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
              <p>
                WOM (&quot;Word of Mouth,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the creator-brand matching platform available at <a href="https://wom.app" className="text-purple-600 hover:underline">wom.app</a> and <a href="https://womlanding.com" className="text-purple-600 hover:underline">womlanding.com</a> (the &quot;Service&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
              </p>
              <p className="mt-2">
                Please read this Privacy Policy carefully. By using the Service, you consent to the practices described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">2.1 Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Account Information:</strong> Name, email address, password, and profile details when you create an account</li>
                <li><strong>Profile Data:</strong> Creator profiles, brand information, portfolio content, and social media handles</li>
                <li><strong>Communications:</strong> Messages and content shared through our platform</li>
                <li><strong>Waitlist Information:</strong> Email address when you sign up for our waitlist</li>
                <li><strong>Payment Information:</strong> Billing details processed through our third-party payment processors</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">2.2 Information Collected Automatically</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Usage Data:</strong> Pages visited, features used, actions taken, time spent on the Service</li>
                <li><strong>Device Information:</strong> Browser type, operating system, device identifiers, IP address</li>
                <li><strong>Log Data:</strong> Server logs including access times, referring URLs, and error logs</li>
                <li><strong>Cookies and Similar Technologies:</strong> See Section 7 below</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">2.3 Information from Third-Party Platforms</h3>
              <p>
                When you connect your social media accounts, we may collect publicly available information from platforms including:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong>TikTok:</strong> Public profile information, follower counts, content performance metrics, and publicly available videos via the TikTok API</li>
                <li><strong>YouTube:</strong> Channel information, subscriber counts, video statistics, and publicly available content via the YouTube API Services</li>
                <li><strong>Instagram:</strong> Public profile data, follower counts, and engagement metrics</li>
              </ul>
              <p className="mt-2">
                We only access data you authorize and that is publicly available or permitted through official platform APIs.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
              <p className="mb-2">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide, operate, and maintain the Service</li>
                <li>Match creators with brands based on audience, niche, and performance data</li>
                <li>Process transactions and manage your account</li>
                <li>Communicate with you about the Service, updates, and promotions</li>
                <li>Analyze usage patterns to improve the Service and user experience</li>
                <li>Detect, prevent, and address fraud, abuse, and technical issues</li>
                <li>Comply with legal obligations and enforce our Terms of Service</li>
                <li>Provide customer support and respond to inquiries</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. How We Share Your Information</h2>
              <p className="mb-2">We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>With Other Users:</strong> Profile information visible to brands (for creators) or creators (for brands) as part of the matching and collaboration features</li>
                <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating the Service (hosting, analytics, payment processing)</li>
                <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize sharing</li>
              </ul>
              <p className="mt-2">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Third-Party Services</h2>
              <p className="mb-2">Our Service integrates with or uses the following third-party services:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>TikTok API:</strong> To access creator profile data and content metrics. Subject to <a href="https://www.tiktok.com/legal/terms-of-service" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">TikTok&apos;s Terms of Service</a> and <a href="https://www.tiktok.com/legal/privacy-policy" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                <li><strong>YouTube API Services:</strong> To access channel and video data. Subject to <a href="https://www.youtube.com/t/terms" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">YouTube&apos;s Terms of Service</a> and <a href="https://policies.google.com/privacy" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a></li>
                <li><strong>Analytics Providers:</strong> To help us understand how the Service is used</li>
                <li><strong>Hosting Providers:</strong> To host and deliver the Service</li>
              </ul>
              <p className="mt-2">
                Each third-party service has its own privacy policy governing the use of your information. We encourage you to review their policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Data Retention</h2>
              <p>
                We retain your personal information for as long as your account is active or as needed to provide the Service. We may also retain information as necessary to comply with legal obligations, resolve disputes, and enforce our agreements. Waitlist email addresses are retained until the Service launches or you request removal. When you delete your account, we will delete or anonymize your personal data within 30 days, except where retention is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Cookies and Tracking Technologies</h2>
              <p className="mb-2">We use cookies and similar tracking technologies to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Keep you signed in to your account</li>
                <li>Remember your preferences and settings</li>
                <li>Understand how you use the Service</li>
                <li>Analyze and improve the Service</li>
              </ul>
              <p className="mt-2">
                You can control cookies through your browser settings. Disabling cookies may limit your ability to use certain features of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Your Rights and Choices</h2>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">9.1 General Rights</h3>
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">9.2 California Residents (CCPA)</h3>
              <p className="mb-2">If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Right to Know:</strong> You may request the categories and specific pieces of personal information we have collected about you</li>
                <li><strong>Right to Delete:</strong> You may request that we delete your personal information, subject to certain exceptions</li>
                <li><strong>Right to Opt-Out:</strong> You may opt out of the sale of your personal information. We do not sell personal information</li>
                <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights</li>
              </ul>
              <p className="mt-2">
                To exercise your rights, please contact us at <a href="mailto:support@wom.app" className="text-purple-600 hover:underline">support@wom.app</a>. We will respond to verified requests within 45 days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Children&apos;s Privacy</h2>
              <p>
                The Service is not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">11. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from those of your country. We take appropriate measures to ensure that your personal information remains protected in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on the Service with a revised &quot;Last updated&quot; date. Your continued use of the Service after changes constitutes acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">13. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:support@wom.app" className="text-purple-600 hover:underline">support@wom.app</a>
              </p>
              <p>
                <strong>Website:</strong>{' '}
                <a href="https://wom.app" className="text-purple-600 hover:underline">wom.app</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-50 text-gray-400 text-xs">
        <div className="flex justify-center gap-4 mb-2">
          <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms of Service</Link>
          <span>·</span>
          <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy Policy</Link>
        </div>
        &copy; 2025 WOM — Word of Mouth
      </footer>
    </div>
  )
}
