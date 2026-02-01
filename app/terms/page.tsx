import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service - WOM',
  description: 'Terms of Service for WOM (Word of Mouth) creator-brand matching platform.',
}

export default function TermsOfService() {
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
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-400 mb-10">Last updated: January 30, 2025</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing or using the WOM platform (&quot;Service&quot;), operated by WOM (&quot;Word of Mouth,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), available at <a href="https://wom.app" className="text-purple-600 hover:underline">wom.app</a> and <a href="https://womlanding.com" className="text-purple-600 hover:underline">womlanding.com</a>, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Description of Service</h2>
              <p>
                WOM is a creator-brand matching platform that connects businesses with content creators and influencers across social media platforms. Our Service facilitates discovery, communication, and collaboration between brands and creators.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. User Accounts</h2>
              <p className="mb-2">
                To access certain features of the Service, you may be required to create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your password secure and confidential</li>
                <li>Accept responsibility for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
              <p className="mt-2">
                You must be at least 18 years old to create an account and use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Acceptable Use</h2>
              <p className="mb-2">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use the Service for any unlawful purpose or in violation of any applicable laws</li>
                <li>Impersonate any person or entity, or misrepresent your affiliation</li>
                <li>Interfere with or disrupt the Service or servers connected to the Service</li>
                <li>Attempt to gain unauthorized access to any portion of the Service</li>
                <li>Use automated means (bots, scrapers, etc.) to access the Service without our written permission</li>
                <li>Upload or transmit viruses, malware, or other harmful code</li>
                <li>Harass, abuse, or harm other users of the Service</li>
                <li>Use the Service to send spam or unsolicited communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Creator and Brand Content</h2>
              <p>
                Users are solely responsible for the content they publish, share, or transmit through the Service. By submitting content, you represent that you have the right to do so and grant WOM a non-exclusive, worldwide, royalty-free license to use, display, and distribute such content solely for the purpose of operating and improving the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Intellectual Property</h2>
              <p>
                The Service, including its design, features, and content created by WOM, is protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works based on any part of the Service without our prior written consent. The WOM name, logo, and all related marks are trademarks of WOM.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Third-Party Services</h2>
              <p>
                The Service may integrate with third-party platforms including, but not limited to, TikTok, YouTube, and Instagram. Your use of these third-party services is subject to their respective terms of service and privacy policies. WOM is not responsible for the practices or content of third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Disclaimer of Warranties</h2>
              <p>
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WOM AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUE, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE SERVICE.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless WOM and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of the Service or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">11. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to the Service at any time, with or without cause and with or without notice. Upon termination, your right to use the Service will immediately cease. You may also terminate your account at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">12. Changes to Terms</h2>
              <p>
                We may update these Terms of Service from time to time. We will notify you of material changes by posting the updated terms on the Service with a revised &quot;Last updated&quot; date. Your continued use of the Service after changes constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">13. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">14. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
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
