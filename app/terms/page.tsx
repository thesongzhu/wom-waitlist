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
          <p className="text-sm text-gray-400 mb-10">Last Updated: February 1, 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">

            {/* 1. Acceptance of Terms */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing, browsing, or using the WOM platform (&quot;Service&quot;), operated by WOM (&quot;Word of Mouth,&quot; &quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), available at{' '}
                <a href="https://wom.app" className="text-purple-600 hover:underline">wom.app</a>,{' '}
                <a href="https://womlanding.com" className="text-purple-600 hover:underline">womlanding.com</a>, and any associated subdomains, mobile applications, or services, you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) acknowledge that you have read, understood, and agree to be bound by these Terms of Service (&quot;Terms&quot;), our{' '}
                <Link href="/privacy" className="text-purple-600 hover:underline">Privacy Policy</Link>, and any additional guidelines, policies, or rules posted on the Service, all of which are incorporated by reference into these Terms.
              </p>
              <p className="mt-3">
                If you are using the Service on behalf of a business, organization, or other legal entity, you represent and warrant that you have the authority to bind that entity to these Terms, and references to &quot;you&quot; or &quot;your&quot; shall include that entity.
              </p>
              <p className="mt-3">
                <strong>IF YOU DO NOT AGREE TO ALL OF THESE TERMS, DO NOT ACCESS OR USE THE SERVICE.</strong>
              </p>
            </section>

            {/* 2. Definitions */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Definitions</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>&quot;Brand&quot;</strong> or <strong>&quot;Brand Customer&quot;</strong> means a business, agency, or entity that uses the Service to discover, evaluate, or engage creators for marketing campaigns or collaborations.</li>
                <li><strong>&quot;Creator&quot;</strong> means an individual who controls and operates one or more social media accounts and who is captured in, or registers for, the WOM Service.</li>
                <li><strong>&quot;Claimed Profile&quot;</strong> means a Creator profile on the Service that has been verified and registered by the Creator themselves.</li>
                <li><strong>&quot;Unclaimed Profile&quot;</strong> or <strong>&quot;Potential Creator Profile&quot;</strong> means a Creator profile on the Service created by WOM based on publicly available information, where the Creator has not registered for or claimed the profile.</li>
                <li><strong>&quot;Public Creator Data&quot;</strong> means publicly available information about creators collected from social media platforms, including usernames, display names, bios, profile photographs, follower counts, engagement metrics, public posts, videos, and comments.</li>
                <li><strong>&quot;Content&quot;</strong> means any text, images, videos, audio, data, or other materials uploaded, submitted, posted, or displayed through the Service.</li>
                <li><strong>&quot;AI Features&quot;</strong> means the artificial intelligence and machine learning capabilities integrated into the Service, including Creator DNA analysis, deal suggestions, content analysis, and related features.</li>
                <li><strong>&quot;Platform&quot;</strong> or <strong>&quot;Service&quot;</strong> means the WOM website, applications, APIs, and all associated services.</li>
              </ul>
            </section>

            {/* 3. Eligibility */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Eligibility</h2>
              <p>To use the Service, you must:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Be at least 18 years of age;</li>
                <li>Have the legal capacity to enter into a binding agreement;</li>
                <li>Not be prohibited from using the Service under any applicable law or regulation;</li>
                <li>Not have been previously suspended or removed from the Service; and</li>
                <li>If using the Service on behalf of an entity, have the authority to bind that entity to these Terms.</li>
              </ul>
              <p className="mt-3">
                By using the Service, you represent and warrant that you meet all of the foregoing eligibility requirements. If you do not meet these requirements, you must not access or use the Service.
              </p>
            </section>

            {/* 4. Description of Services */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Description of Services</h2>
              <p>
                WOM is a creator-brand matching platform that leverages artificial intelligence and data analytics to connect brands with content creators and influencers across social media platforms. Our Service includes, but is not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Creator discovery and search across multiple social media platforms (including TikTok, YouTube, and Xiaohongshu);</li>
                <li>AI-powered creator analysis and profiling (&quot;Creator DNA&quot;);</li>
                <li>Brand-creator matching based on audience demographics, content style, engagement metrics, and other criteria;</li>
                <li>AI-generated deal suggestions, campaign briefs, and pricing recommendations;</li>
                <li>Campaign management and collaboration tools;</li>
                <li>Creator and brand profile management; and</li>
                <li>Analytics and reporting features.</li>
              </ul>
              <p className="mt-3">
                <strong>Platform Intermediary Disclaimer.</strong> WOM is a platform that facilitates connections between brands and creators. WOM IS NOT A PARTY TO ANY AGREEMENT, COMMUNICATION, OR TRANSACTION BETWEEN BRANDS AND CREATORS. WOM does not endorse, recommend, or guarantee any creator, brand, campaign, or outcome. Users are solely responsible for evaluating other users and for any agreements they enter into through or as a result of using the Service.
              </p>
            </section>

            {/* 5. User Accounts */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. User Accounts</h2>
              <p>To access certain features of the Service, you must create an account. When creating an account, you agree to:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Provide accurate, current, and complete information during the registration process;</li>
                <li>Maintain and promptly update your account information to keep it accurate, current, and complete;</li>
                <li>Maintain the security and confidentiality of your login credentials and not share them with any third party;</li>
                <li>Accept sole responsibility for all activities that occur under your account;</li>
                <li>Notify us immediately at <a href="mailto:legal@wom.app" className="text-purple-600 hover:underline">legal@wom.app</a> of any unauthorized use of your account or any other security breach; and</li>
                <li>Not create more than one account per person or create an account on behalf of another person without their authorization.</li>
              </ul>
              <p className="mt-3">
                You may register directly or through third-party authentication services (e.g., Google). If you register through a third-party service, you authorize us to access and collect information from that service as permitted by its terms. We are not responsible for any acts or omissions by such third-party authentication providers.
              </p>
            </section>

            {/* 6. User Types */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. User Types</h2>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">6.1 Brand Customers</h3>
              <p>
                Brand Customers are businesses, agencies, or entities that use the Service to discover, evaluate, and engage creators. Brand Customers may access creator profiles (including Unclaimed Profiles), use analytics and AI features, and manage campaigns through the Service.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">6.2 Creators (Registered)</h3>
              <p>
                Registered Creators are individuals who have created an account on WOM and claimed their profile. Registered Creators have full control over their profile information and can manage their visibility, data, and interactions on the platform.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">6.3 Unclaimed / Potential Creator Profiles</h3>
              <p>
                The Service includes the creation of profiles for creators based on publicly available social media data, even if those creators have not registered for or are not aware of the Service (&quot;Unclaimed Profiles&quot; or &quot;Potential Creator Profiles&quot;). These profiles are created to enable Brand Customers to discover and evaluate potential creator partners. Unclaimed Profiles contain only Public Creator Data and are clearly distinguished from Claimed Profiles on the platform.
              </p>
            </section>

            {/* 7. Unclaimed Creator Profiles */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Unclaimed Creator Profiles</h2>
              <p>
                <strong>Disclosure.</strong> WOM creates Unclaimed Profiles based on publicly available information from social media platforms, including but not limited to usernames, display names, biographical information, profile photographs, follower and following counts, engagement metrics, public posts, videos, and comments. This data is collected through official platform APIs and from publicly accessible web pages.
              </p>
              <p className="mt-3">
                <strong>Purpose.</strong> Unclaimed Profiles are created solely to enable Brand Customers to discover and evaluate potential creator partners for marketing campaigns and collaborations. WOM will never post on behalf of unclaimed creators, manage their social media accounts, or represent that an unclaimed creator has endorsed or agreed to any relationship with WOM or any Brand Customer.
              </p>
              <p className="mt-3">
                <strong>Claiming Your Profile.</strong> If you are a creator with an Unclaimed Profile, you may claim your profile by registering for a WOM account and verifying your identity. Upon claiming your profile, you will gain full control over your profile information and visibility settings.
              </p>
              <p className="mt-3">
                <strong>Requesting Removal.</strong> If you are a creator and wish to have your Unclaimed Profile removed from the Service, you may request removal at any time by contacting us at <a href="mailto:privacy@wom.app" className="text-purple-600 hover:underline">privacy@wom.app</a>. We will process removal requests within fifteen (15) business days.
              </p>
              <p className="mt-3">
                <strong>Data Accuracy.</strong> WOM does not guarantee the accuracy, completeness, or timeliness of information contained in Unclaimed Profiles. Public data may be outdated, incomplete, or incorrect. Brand Customers are solely responsible for verifying creator information before making any decisions or entering into any agreements.
              </p>
            </section>

            {/* 8. Acceptable Use */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Acceptable Use</h2>
              <p>You agree not to use the Service to:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Violate any applicable law, regulation, or ordinance, including laws relating to data privacy, intellectual property, anti-spam, or export control;</li>
                <li>Impersonate any person or entity, or falsely state or misrepresent your affiliation with a person or entity;</li>
                <li>Use any manual or automated software, devices, scripts, robots, bots, spiders, crawlers, or scrapers to access, frame, mirror, scrape, or crawl the Service or any content therein without our express written permission;</li>
                <li>Interfere with, disrupt, or impose an unreasonable or disproportionately large load on the Service or its underlying infrastructure;</li>
                <li>Attempt to gain unauthorized access to any portion of the Service, other users&apos; accounts, or any systems or networks connected to the Service;</li>
                <li>Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code, algorithms, or underlying structure of the Service;</li>
                <li>Use the Service to harvest, collect, or store personal information about other users for any purpose not expressly permitted by these Terms;</li>
                <li>Upload, transmit, or distribute viruses, worms, malware, or other harmful computer code;</li>
                <li>Harass, abuse, threaten, stalk, or intimidate other users;</li>
                <li>Use the Service to send unsolicited or unauthorized advertising, spam, or promotional messages;</li>
                <li>Use creator data obtained through the Service for any purpose that violates applicable law, including but not limited to discrimination, harassment, or defamation;</li>
                <li>Sublicense, resell, or redistribute the Service or any data obtained through the Service without our express written consent; or</li>
                <li>Encourage or facilitate any of the foregoing.</li>
              </ul>
              <p className="mt-3">
                <strong>Brand-Specific Obligations.</strong> Brand Customers must comply with all applicable laws when using creator data obtained through the Service, including the Federal Trade Commission&apos;s Endorsement Guides, the California Consumer Privacy Act (CCPA), and all platform-specific terms of service. Brand Customers may not use creator data for purposes unrelated to legitimate influencer marketing campaigns.
              </p>
              <p className="mt-3">
                <strong>Creator-Specific Obligations.</strong> Creators who participate in campaigns facilitated through the Service are solely responsible for compliance with the Federal Trade Commission&apos;s Endorsement Guides and all applicable disclosure requirements for sponsored content.
              </p>
            </section>

            {/* 9. AI Features Disclosure */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. AI-Powered Features</h2>
              <p>
                WOM integrates artificial intelligence (&quot;AI&quot;) and machine learning (&quot;ML&quot;) technologies into the Service to enhance creator discovery, analysis, and campaign planning. By using the Service, you acknowledge and agree to the following:
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">9.1 AI Capabilities</h3>
              <p>WOM uses AI/ML to power the following features:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong>Creator DNA Analysis:</strong> AI-powered analysis of creator content, engagement patterns, audience demographics, and content style to generate a comprehensive creator profile;</li>
                <li><strong>Deal and Pricing Suggestions:</strong> AI-generated recommendations for campaign pricing, terms, and structures;</li>
                <li><strong>Comment and Sentiment Analysis:</strong> AI analysis of public comments and engagement to assess audience sentiment and brand safety;</li>
                <li><strong>Bio and Content Extraction:</strong> AI processing of creator bios, video content, and posts to extract relevant information and categorize content themes;</li>
                <li><strong>Campaign Brief Generation:</strong> AI-generated campaign briefs and content recommendations; and</li>
                <li><strong>Brand-Creator Matching:</strong> AI-powered matching algorithms that suggest suitable creators for brand campaigns based on multiple data points.</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">9.2 Third-Party AI Providers</h3>
              <p>
                WOM uses third-party AI service providers, including OpenAI, to process certain data and generate AI outputs. These providers operate under contractual obligations that prohibit them from using your data or creator data to train their general-purpose AI models. For more information about how data is processed by our AI providers, please see our{' '}
                <Link href="/privacy" className="text-purple-600 hover:underline">Privacy Policy</Link>.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">9.3 No Guarantee of Accuracy</h3>
              <p>
                <strong>AI-GENERATED OUTPUTS, INCLUDING BUT NOT LIMITED TO CREATOR DNA PROFILES, PRICING SUGGESTIONS, CAMPAIGN BRIEFS, AND CONTENT ANALYSES, ARE RECOMMENDATIONS ONLY AND ARE NOT GUARANTEED TO BE ACCURATE, COMPLETE, OR RELIABLE.</strong> AI outputs are provided for informational and planning purposes and should not be relied upon as the sole basis for any business decision. WOM does not make automated decisions that produce legal or similarly significant effects on individuals without human review. Users are solely responsible for reviewing AI outputs and making their own independent business decisions.
              </p>
            </section>

            {/* 10. Creator Content and Data */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Creator Content and Data</h2>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">10.1 Public Data Collection</h3>
              <p>
                WOM collects and processes publicly available information about creators and influencers from social media platforms (&quot;Public Creator Data&quot;). This collection occurs regardless of whether a creator has registered for the Service. We collect this information through official platform APIs and from publicly accessible web pages. We process Public Creator Data based on our legitimate business interest in providing creator discovery and analytics services to Brand Customers, and because this information has been made publicly available by the creators themselves.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">10.2 How Creator Data Is Used</h3>
              <p>Creator data is used to:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Create and maintain creator profiles (including Unclaimed Profiles) on the Service;</li>
                <li>Enable Brand Customers to discover, evaluate, and connect with creators;</li>
                <li>Power AI features such as Creator DNA analysis, sentiment analysis, and matching algorithms;</li>
                <li>Generate analytics, metrics, and insights for Brand Customers; and</li>
                <li>Improve and develop the Service.</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">10.3 Opt-Out Rights</h3>
              <p>
                Creators may opt out of data collection and profile creation at any time by contacting us at <a href="mailto:privacy@wom.app" className="text-purple-600 hover:underline">privacy@wom.app</a>. Upon receiving a valid opt-out request, we will:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Remove your profile from the Service within fifteen (15) business days;</li>
                <li>Cease collection of your Public Creator Data;</li>
                <li>Delete or anonymize previously collected data, subject to legal retention requirements; and</li>
                <li>Notify you when the process is complete.</li>
              </ul>
              <p className="mt-3">
                We will not discriminate against any creator for exercising their opt-out rights.
              </p>
            </section>

            {/* 11. Brand Responsibilities */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">11. Brand Responsibilities</h2>
              <p>Brand Customers acknowledge and agree that:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Creator data available through the Service (including data from Unclaimed Profiles) is provided for the purpose of evaluating potential creator partnerships and managing influencer marketing campaigns;</li>
                <li>Brand Customers are solely responsible for verifying the accuracy and suitability of creator data before making any decisions;</li>
                <li>Brand Customers may not use creator data obtained through the Service for any unlawful purpose, including discrimination, harassment, or unauthorized commercial use;</li>
                <li>Brand Customers must comply with all applicable data protection laws (including CCPA) when processing creator data obtained through the Service;</li>
                <li>An Unclaimed Profile does not indicate that a creator has endorsed, agreed to work with, or is otherwise affiliated with any brand or with WOM;</li>
                <li>Brand Customers are solely responsible for ensuring that any creator engagement complies with applicable laws, including FTC disclosure requirements; and</li>
                <li>WOM provides estimates, analytics, and AI-generated insights as informational tools only — not as guarantees of creator performance or campaign outcomes.</li>
              </ul>
            </section>

            {/* 12. Intellectual Property */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">12. Intellectual Property</h2>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">12.1 WOM&apos;s Intellectual Property</h3>
              <p>
                The Service, including but not limited to its design, layout, features, functionality, text, graphics, images, algorithms, AI models, machine learning outputs, data compilations, software, code, and all related intellectual property, is owned by or licensed to WOM and is protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. The WOM name, WOM logo, &quot;Word of Mouth,&quot; &quot;Creator DNA,&quot; and all related names, logos, product and service names, designs, and slogans are trademarks of WOM.
              </p>
              <p className="mt-3">
                You may not copy, modify, distribute, sell, lease, sublicense, or create derivative works based on any part of the Service without our prior written consent.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">12.2 User Content License</h3>
              <p>
                You retain ownership of any Content you submit, post, or display on or through the Service. By submitting Content, you grant WOM a non-exclusive, worldwide, royalty-free, sublicensable, and transferable license to use, reproduce, modify, adapt, publish, translate, distribute, and display such Content solely for the purposes of operating, developing, providing, and improving the Service and promoting your profile to other users. This license continues for a commercially reasonable period after you remove or delete your Content from the Service, except where your Content has been shared with other users or third parties who have not deleted it.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">12.3 License to Users</h3>
              <p>
                Subject to your compliance with these Terms, WOM grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Service for your personal or internal business purposes. This license does not include any right to resell or commercially exploit the Service or its contents.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">12.4 Copyright Complaints (DMCA)</h3>
              <p>
                If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement, please provide our designated copyright agent with a written notice containing: (a) a description of the copyrighted work; (b) a description of where the allegedly infringing material is located on the Service; (c) your contact information; (d) a statement that you have a good faith belief that the use is not authorized; (e) a statement, under penalty of perjury, that the information in the notice is accurate and that you are the copyright owner or authorized to act on the owner&apos;s behalf; and (f) your physical or electronic signature. Send DMCA notices to <a href="mailto:legal@wom.app" className="text-purple-600 hover:underline">legal@wom.app</a>.
              </p>
            </section>

            {/* 13. Third-Party Services */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">13. Third-Party Platform Integration</h2>
              <p>
                The Service integrates with and accesses data from third-party platforms. By using the Service, you acknowledge the following:
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">13.1 YouTube API Services</h3>
              <p>
                The Service uses YouTube API Services. By using features that access YouTube data, you are also bound by the{' '}
                <a href="https://www.youtube.com/t/terms" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">YouTube Terms of Service</a> and{' '}
                <a href="https://policies.google.com/privacy" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>. WOM&apos;s use of YouTube API data complies with the{' '}
                <a href="https://developers.google.com/youtube/terms/api-services-terms-of-service" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">YouTube API Services Terms of Service</a> and{' '}
                Google&apos;s Limited Use Requirements. You may revoke WOM&apos;s access to your Google data at any time via{' '}
                <a href="https://security.google.com/settings/security/permissions" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Security Settings</a>.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">13.2 TikTok API</h3>
              <p>
                The Service uses the TikTok API. By using features that access TikTok data, you acknowledge that such use is subject to{' '}
                <a href="https://www.tiktok.com/legal/terms-of-service" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">TikTok&apos;s Terms of Service</a> and{' '}
                <a href="https://www.tiktok.com/legal/privacy-policy" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">TikTok&apos;s Privacy Policy</a>. WOM&apos;s use of TikTok data complies with the TikTok for Developers Terms.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">13.3 Other Platforms</h3>
              <p>
                The Service may integrate with additional social media platforms (including Xiaohongshu and Instagram). Your use of features that access data from these platforms is subject to the respective terms of service and privacy policies of those platforms.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">13.4 General</h3>
              <p>
                WOM will never post on your behalf, manage your ad campaigns, or take actions on your social media accounts without your explicit authorization. WOM is not responsible for the availability, accuracy, or practices of any third-party platform. Third-party platforms may change their APIs, terms, or policies at any time, which may affect the availability of certain Service features.
              </p>
            </section>

            {/* 14. Payment Terms */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">14. Payment Terms</h2>
              <p>
                Certain features of the Service may require payment of fees. If you elect to use paid features:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>You agree to pay all applicable fees as described on the Service at the time of purchase;</li>
                <li>Fees are exclusive of taxes, and you are responsible for all applicable taxes;</li>
                <li>Subscriptions automatically renew unless cancelled prior to the renewal date;</li>
                <li>WOM reserves the right to modify pricing with at least thirty (30) days&apos; prior notice;</li>
                <li>Unless otherwise stated, all fees are non-refundable; and</li>
                <li>Payment processing is handled by third-party payment processors, and your use of such processors is subject to their terms and privacy policies.</li>
              </ul>
              <p className="mt-3">
                Specific pricing, plans, and payment terms will be presented to you before any purchase is finalized. WOM reserves the right to offer promotional pricing, free trials, or other incentives at its sole discretion.
              </p>
            </section>

            {/* 15. Disclaimer of Warranties */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">15. Disclaimer of Warranties</h2>
              <p>
                THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, WOM DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
              </p>
              <p className="mt-3">
                WITHOUT LIMITING THE FOREGOING, WOM DOES NOT WARRANT THAT: (A) THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE; (B) THE RESULTS OBTAINED FROM THE SERVICE WILL BE ACCURATE, RELIABLE, OR COMPLETE; (C) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL OBTAINED THROUGH THE SERVICE WILL MEET YOUR EXPECTATIONS; (D) ANY CREATOR DATA, METRICS, ANALYTICS, OR AI-GENERATED OUTPUTS WILL BE ACCURATE, CURRENT, OR RELIABLE; OR (E) ANY ERRORS IN THE SERVICE WILL BE CORRECTED.
              </p>
              <p className="mt-3">
                ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICE IS ACCESSED AT YOUR OWN DISCRETION AND RISK. YOU ARE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR DEVICE OR LOSS OF DATA RESULTING FROM SUCH MATERIAL.
              </p>
            </section>

            {/* 16. Limitation of Liability */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">16. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WOM, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, REVENUE, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, REGARDLESS OF THE THEORY OF LIABILITY (INCLUDING CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE), EVEN IF WOM HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="mt-3">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WOM&apos;S TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE GREATER OF: (A) THE AMOUNTS YOU HAVE PAID TO WOM IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM; OR (B) ONE HUNDRED UNITED STATES DOLLARS ($100.00).
              </p>
              <p className="mt-3">
                THE LIMITATIONS IN THIS SECTION APPLY REGARDLESS OF WHETHER THE ALLEGED LIABILITY IS BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR ANY OTHER BASIS, EVEN IF WOM HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATIONS OR EXCLUSIONS MAY NOT APPLY TO YOU.
              </p>
            </section>

            {/* 17. Indemnification */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">17. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless WOM and its affiliates, officers, directors, employees, agents, suppliers, and licensors (collectively, the &quot;Indemnified Parties&quot;) from and against any and all claims, demands, actions, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or relating to:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Your use of or access to the Service;</li>
                <li>Your violation of these Terms or any applicable law or regulation;</li>
                <li>Your Content or any content you submit, post, or transmit through the Service;</li>
                <li>Your violation or infringement of any third-party right, including intellectual property, privacy, or publicity rights;</li>
                <li>Any dispute between you and another user of the Service;</li>
                <li>Your use of creator data obtained through the Service (applicable to Brand Customers); and</li>
                <li>Any campaign, agreement, or transaction between you and another user facilitated through the Service.</li>
              </ul>
              <p className="mt-3">
                WOM reserves the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate with our defense of such claims. You will not settle any claim without WOM&apos;s prior written consent.
              </p>
            </section>

            {/* 18. Arbitration and Class Action Waiver */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">18. Arbitration Agreement and Class Action Waiver</h2>
              <p className="font-semibold">
                PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT AND TO HAVE A JURY TRIAL.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">18.1 Agreement to Arbitrate</h3>
              <p>
                You and WOM agree that any dispute, claim, or controversy arising out of or relating to these Terms, the Service, or the relationship between you and WOM (collectively, &quot;Disputes&quot;) will be resolved exclusively through final and binding individual arbitration, rather than in court, except that: (a) either party may bring individual claims in small claims court if the claims qualify; and (b) either party may seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation, or violation of intellectual property rights.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">18.2 Arbitration Rules and Procedures</h3>
              <p>
                Arbitration will be administered by JAMS under the JAMS Streamlined Arbitration Rules and Procedures (&quot;JAMS Rules&quot;), as modified by this Section. The JAMS Rules are available at{' '}
                <a href="https://www.jamsadr.com" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">www.jamsadr.com</a>. The arbitration will be conducted by a single arbitrator. The arbitration will be held in the State of California, or at another mutually agreed location. The arbitrator shall apply California law consistent with the Federal Arbitration Act. The arbitrator&apos;s decision will be final and binding, and judgment on the award may be entered in any court of competent jurisdiction.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">18.3 CLASS ACTION WAIVER</h3>
              <p>
                <strong>YOU AND WOM AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, CONSOLIDATED, OR REPRESENTATIVE PROCEEDING.</strong> Unless both you and WOM agree otherwise in writing, the arbitrator may not consolidate more than one person&apos;s claims and may not otherwise preside over any form of a class, consolidated, or representative proceeding. The arbitrator may award relief only in favor of the individual party seeking relief and only to the extent necessary to provide relief warranted by that party&apos;s individual claim. If a court decides that applicable law precludes enforcement of any of this Section&apos;s limitations as to a particular claim for relief, then that claim (and only that claim) must be severed from the arbitration and may be brought in court.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">18.4 Opt-Out</h3>
              <p>
                You may opt out of this arbitration agreement by sending written notice of your decision to opt out to <a href="mailto:legal@wom.app" className="text-purple-600 hover:underline">legal@wom.app</a> within thirty (30) days of first accepting these Terms. Your notice must include your name, mailing address, and a clear statement that you want to opt out of this arbitration agreement. If you opt out, the remainder of these Terms will continue to apply to you.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">18.5 Fees</h3>
              <p>
                Each party shall bear its own costs and expenses in connection with the arbitration. If you are a consumer and the arbitration filing fee exceeds what it would cost to file a lawsuit in court, WOM will pay the difference in filing fees.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">18.6 Survival</h3>
              <p>
                This arbitration agreement will survive the termination of your relationship with WOM and your use of the Service.
              </p>
            </section>

            {/* 19. Termination */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">19. Termination</h2>
              <p>
                <strong>Termination by WOM.</strong> We reserve the right to suspend or terminate your access to the Service at any time, with or without cause and with or without notice, in our sole discretion, including if we believe you have violated these Terms or any applicable law.
              </p>
              <p className="mt-3">
                <strong>Termination by You.</strong> You may terminate your account at any time by contacting us at <a href="mailto:legal@wom.app" className="text-purple-600 hover:underline">legal@wom.app</a> or through the account settings in the Service.
              </p>
              <p className="mt-3">
                <strong>Effect of Termination.</strong> Upon termination: (a) your right to use the Service will immediately cease; (b) we may delete your account information and Content, subject to our data retention obligations; (c) any outstanding payment obligations will remain due; and (d) provisions of these Terms that by their nature should survive termination will survive, including but not limited to Sections 12 (Intellectual Property), 15 (Disclaimer of Warranties), 16 (Limitation of Liability), 17 (Indemnification), 18 (Arbitration and Class Action Waiver), 20 (Governing Law), and this Section 19.
              </p>
            </section>

            {/* 20. Governing Law */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">20. Governing Law</h2>
              <p>
                These Terms and any dispute arising out of or related to these Terms or the Service shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. The Federal Arbitration Act governs the interpretation and enforcement of the arbitration provisions set forth in Section 18. To the extent that any lawsuit or court proceeding is permitted hereunder, you and WOM agree to submit to the exclusive personal jurisdiction of the state and federal courts located in the County of Los Angeles, State of California, for the purpose of litigating any such dispute.
              </p>
            </section>

            {/* 21. Changes to Terms */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">21. Changes to Terms</h2>
              <p>
                WOM reserves the right to modify these Terms at any time. If we make material changes to these Terms, we will provide notice by: (a) posting the updated Terms on the Service with a revised &quot;Last Updated&quot; date; (b) sending an email notification to the address associated with your account (for material changes); or (c) displaying a prominent notice on the Service. Material changes will become effective thirty (30) days after notice is provided, unless stated otherwise. Your continued use of the Service after the effective date of any changes constitutes your acceptance of the revised Terms. If you do not agree to the revised Terms, your sole remedy is to discontinue use of the Service.
              </p>
            </section>

            {/* 22. Miscellaneous */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">22. General Provisions</h2>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">22.1 Entire Agreement</h3>
              <p>
                These Terms, together with the Privacy Policy and any other policies incorporated by reference, constitute the entire agreement between you and WOM regarding the Service and supersede all prior agreements, understandings, and communications, whether written or oral.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">22.2 Severability</h3>
              <p>
                If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions will remain in full force and effect. The invalid, illegal, or unenforceable provision will be modified to the minimum extent necessary to make it valid, legal, and enforceable while preserving its original intent.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">22.3 Waiver</h3>
              <p>
                The failure of WOM to enforce any right or provision of these Terms will not constitute a waiver of such right or provision. Any waiver of any provision of these Terms will be effective only if in writing and signed by WOM.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">22.4 Assignment</h3>
              <p>
                You may not assign or transfer these Terms or your rights under these Terms, in whole or in part, without WOM&apos;s prior written consent. WOM may assign or transfer these Terms, in whole or in part, without restriction. Subject to the foregoing, these Terms will bind and inure to the benefit of the parties and their respective successors and assigns.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">22.5 Force Majeure</h3>
              <p>
                WOM shall not be liable for any failure or delay in performing its obligations under these Terms due to causes beyond its reasonable control, including but not limited to acts of God, natural disasters, pandemics, war, terrorism, government actions, third-party platform outages or policy changes (including TikTok, YouTube, or other social media platform disruptions), internet service provider failures, power outages, or labor disputes.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">22.6 Notices</h3>
              <p>
                All notices to WOM under these Terms shall be sent to <a href="mailto:legal@wom.app" className="text-purple-600 hover:underline">legal@wom.app</a>. Notices to you may be sent to the email address associated with your account or posted on the Service.
              </p>
            </section>

            {/* 23. Contact Information */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">23. Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <ul className="list-none space-y-1 mt-3">
                <li><strong>Legal Inquiries:</strong>{' '}<a href="mailto:legal@wom.app" className="text-purple-600 hover:underline">legal@wom.app</a></li>
                <li><strong>Privacy Inquiries:</strong>{' '}<a href="mailto:privacy@wom.app" className="text-purple-600 hover:underline">privacy@wom.app</a></li>
                <li><strong>General Support:</strong>{' '}<a href="mailto:support@wom.app" className="text-purple-600 hover:underline">support@wom.app</a></li>
                <li><strong>Website:</strong>{' '}<a href="https://wom.app" className="text-purple-600 hover:underline">wom.app</a></li>
              </ul>
              <p className="mt-3 text-sm text-gray-500">
                WOM (Word of Mouth)<br />
                State of California, United States
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
        &copy; 2026 WOM — Word of Mouth
      </footer>
    </div>
  )
}
