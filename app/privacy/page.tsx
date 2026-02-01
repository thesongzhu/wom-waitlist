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
          <p className="text-sm text-gray-400 mb-10">Last Updated: February 1, 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">

            {/* 1. Introduction */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
              <p>
                WOM (&quot;Word of Mouth,&quot; &quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a California-based company that operates a creator-brand matching platform available at{' '}
                <a href="https://wom.app" className="text-purple-600 hover:underline">wom.app</a>,{' '}
                <a href="https://womlanding.com" className="text-purple-600 hover:underline">womlanding.com</a>, and any associated subdomains, mobile applications, or services (collectively, the &quot;Service&quot;).
              </p>
              <p className="mt-3">
                This Privacy Policy explains how we collect, use, disclose, retain, and safeguard information when you interact with our Service. This policy applies to all users of the Service, including:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong>Website Visitors:</strong> Individuals who visit our website without creating an account;</li>
                <li><strong>Brand Customers:</strong> Businesses, agencies, or entities that use the Service to discover and engage creators;</li>
                <li><strong>Registered Creators:</strong> Content creators and influencers who have created an account on the Service; and</li>
                <li><strong>Unregistered / Unclaimed Creators:</strong> Content creators and influencers whose publicly available information is collected and displayed on the Service, even if they have not registered for an account.</li>
              </ul>
              <p className="mt-3">
                By using the Service, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with our practices, please do not use the Service. If you are a creator with an Unclaimed Profile and wish to opt out, please see Section 11 below.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">2.1 Information You Provide Directly</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Account Information:</strong> When you create an account, we collect your name, email address, password, company name (for Brand Customers), job title, and profile details.</li>
                <li><strong>Waitlist Information:</strong> When you sign up for our waitlist, we collect your email address and any additional information you provide.</li>
                <li><strong>Payment Information:</strong> If you subscribe to paid features, we collect billing details such as credit card information, billing address, and tax identification numbers, which are processed through our third-party payment processors.</li>
                <li><strong>Communications:</strong> When you contact us for support, submit feedback, or communicate through the platform, we collect the content of those communications.</li>
                <li><strong>Content:</strong> Any content you upload, submit, or post through the Service, including profile information, campaign materials, and messages to other users.</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">2.2 Publicly Available Creator Information</h3>
              <p>
                <strong>We collect publicly available information about creators and influencers from social media platforms, regardless of whether those creators have registered for the Service.</strong> This is a core function of our platform that enables Brand Customers to discover and evaluate potential creator partners.
              </p>
              <p className="mt-2">Categories of Public Creator Data we collect include:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Usernames, display names, and profile URLs;</li>
                <li>Biographical information and profile descriptions;</li>
                <li>Profile photographs and avatars;</li>
                <li>Follower and following counts;</li>
                <li>Engagement metrics (likes, comments, shares, views);</li>
                <li>Public posts, videos, and other published content;</li>
                <li>Public comments and replies;</li>
                <li>Hashtags, brand mentions, and content tags;</li>
                <li>Content categories and topics; and</li>
                <li>Publicly visible location information (city/region level only).</li>
              </ul>
              <p className="mt-3">
                <strong>Legal Basis:</strong> We collect this information based on our legitimate business interest in providing creator discovery and analytics services, and because this information has been made publicly available by the creators themselves. Under the California Consumer Privacy Act (CCPA), this information qualifies as &quot;publicly available information&quot; as defined in California Civil Code Section 1798.140(v)(2).
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">2.3 Information from Third-Party Platform APIs</h3>
              <p>
                We access data from third-party platforms through their official APIs, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>TikTok:</strong> Public profile information, follower counts, video performance metrics, engagement data, and publicly available video content via the TikTok API.</li>
                <li><strong>YouTube:</strong> Channel information, subscriber counts, video statistics, view counts, engagement data, and publicly available video content via the YouTube API Services.</li>
                <li><strong>Xiaohongshu (XHS):</strong> Public profile information, follower counts, engagement metrics, and publicly available posts and content.</li>
                <li><strong>Instagram:</strong> Public profile data, follower counts, engagement metrics, and publicly available content (where available through official APIs).</li>
              </ul>
              <p className="mt-3">
                <strong>Authenticated Data:</strong> When a registered creator connects their social media accounts to WOM, we may access additional data authorized by that creator through the platform&apos;s OAuth or similar authentication mechanisms. We clearly distinguish between data collected from public sources and data authorized by authenticated creators.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">2.4 Information Collected Automatically</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Usage Data:</strong> Pages visited, features used, actions taken (searches, matches, swipes, clicks), time spent on the Service, and interaction patterns.</li>
                <li><strong>Device Information:</strong> Browser type and version, operating system, device type, device identifiers, screen resolution, and language preferences.</li>
                <li><strong>Network Information:</strong> IP address, internet service provider, and approximate geographic location derived from IP address.</li>
                <li><strong>Log Data:</strong> Server logs including access times, pages viewed, referring URLs, exit pages, and error logs.</li>
                <li><strong>Cookies and Similar Technologies:</strong> Information collected through cookies, pixels, web beacons, and similar tracking technologies (see Section 12 below).</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">2.5 AI-Generated Data</h3>
              <p>
                Our AI and machine learning systems generate additional data based on the information described above, including:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong>Creator DNA Profiles:</strong> AI-generated analysis of a creator&apos;s content style, themes, audience fit, brand safety, and engagement quality;</li>
                <li><strong>Sentiment Analysis:</strong> AI-generated assessments of audience sentiment based on public comments and engagement;</li>
                <li><strong>Content Classifications:</strong> AI-generated categorization of creator content by topic, style, demographic appeal, and other attributes;</li>
                <li><strong>Matching Scores:</strong> AI-generated compatibility scores between brands and creators; and</li>
                <li><strong>Pricing and Deal Recommendations:</strong> AI-generated suggested pricing, deal structures, and campaign briefs.</li>
              </ul>
              <p className="mt-2">
                AI-generated data is derived from analysis of publicly available information and data provided by registered users. AI outputs are labeled as such on the Service where applicable.
              </p>
            </section>

            {/* 3. How We Collect Information */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Collect Information</h2>
              <p>We collect information through the following methods:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Directly from you:</strong> When you create an account, subscribe, communicate with us, or submit content through the Service.</li>
                <li><strong>From public sources:</strong> We collect publicly available creator data from social media platforms through their official APIs and from publicly accessible web pages. This collection occurs automatically and on an ongoing basis to keep creator profiles current.</li>
                <li><strong>From third-party APIs:</strong> We access data from TikTok, YouTube, Xiaohongshu, Instagram, and other social media platforms through their official developer APIs, in compliance with their respective terms of service.</li>
                <li><strong>From authenticated connections:</strong> When a registered creator authorizes access to their social media accounts, we collect additional data through the platform&apos;s authentication mechanisms.</li>
                <li><strong>Automatically:</strong> Through cookies, pixels, server logs, and similar technologies when you interact with the Service.</li>
                <li><strong>Generated by our AI systems:</strong> Our AI and machine learning systems generate additional analytical data (Creator DNA, sentiment analysis, matching scores, etc.) based on the data collected through the methods described above.</li>
                <li><strong>From Brand Customers:</strong> Brand Customers may provide us with additional creator information, campaign data, CRM notes, and creator ratings. WOM acts as a data processor for data provided directly by Brand Customers about specific creators.</li>
              </ul>
            </section>

            {/* 4. How We Use Your Information */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. How We Use Your Information</h2>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">4.1 Service Provision and Operation</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Create and maintain creator profiles, including Unclaimed Profiles;</li>
                <li>Enable Brand Customers to discover, search, evaluate, and connect with creators;</li>
                <li>Facilitate brand-creator matching and campaign management;</li>
                <li>Process payments and manage subscriptions;</li>
                <li>Provide customer support and respond to inquiries; and</li>
                <li>Authenticate users and maintain account security.</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">4.2 AI and Machine Learning Analysis</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Generate Creator DNA profiles (content style, themes, audience fit, engagement quality);</li>
                <li>Produce deal pricing suggestions and campaign brief recommendations;</li>
                <li>Perform comment and engagement sentiment analysis;</li>
                <li>Extract and categorize information from creator bios and content;</li>
                <li>Power brand-creator matching algorithms; and</li>
                <li>Identify trends, patterns, and insights across creator data.</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">4.3 Analytics and Service Improvement</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Analyze usage patterns to improve the Service and user experience;</li>
                <li>Conduct internal research and development;</li>
                <li>Generate aggregated, anonymized analytics and reports; and</li>
                <li>Test and develop new features and functionality.</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">4.4 Communications</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Send service-related notifications, updates, and administrative messages;</li>
                <li>Send marketing communications (with your consent, where required); and</li>
                <li>Respond to your requests, questions, and feedback.</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">4.5 Legal and Safety</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Detect, prevent, and address fraud, abuse, and security issues;</li>
                <li>Enforce our Terms of Service and other policies;</li>
                <li>Comply with applicable laws, regulations, and legal processes; and</li>
                <li>Protect the rights, property, and safety of WOM, our users, and the public.</li>
              </ul>
            </section>

            {/* 5. How We Share Your Information */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. How We Share Your Information</h2>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">5.1 With Brand Customers</h3>
              <p>
                We make creator profile data — including data from Unclaimed Profiles — available to our Brand Customers for the purpose of discovering, evaluating, and engaging creators for marketing campaigns. This includes Public Creator Data, AI-generated analytics (such as Creator DNA profiles and matching scores), and engagement metrics.
              </p>
              <p className="mt-2 font-semibold">
                Under California law (CCPA/CPRA), this disclosure of personal information to Brand Customers for business purposes may constitute a &quot;sale&quot; or &quot;sharing&quot; of personal information. You have the right to opt out of this sale or sharing. See Section 10 (&quot;Your California Privacy Rights&quot;) for details on how to exercise this right.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">5.2 With Creators</h3>
              <p>
                We may share Brand Customer profile information (company name, industry, campaign details) with registered creators for the purpose of facilitating brand-creator partnerships and collaborations.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">5.3 With Service Providers</h3>
              <p>We share information with third-party service providers who assist us in operating the Service, including:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong>AI Processors:</strong> OpenAI and other AI service providers that process data to power our AI features. These providers operate under contractual obligations that prohibit them from using data to train their general-purpose AI models (see Section 7 for details).</li>
                <li><strong>Cloud Hosting:</strong> Cloud infrastructure providers that host and deliver the Service.</li>
                <li><strong>Analytics Providers:</strong> Services that help us understand how the Service is used.</li>
                <li><strong>Payment Processors:</strong> Third-party payment processors that handle billing and payment transactions.</li>
                <li><strong>Email Service Providers:</strong> Services that deliver transactional and marketing emails on our behalf.</li>
              </ul>
              <p className="mt-2">
                All service providers are contractually obligated to use personal information only for the purposes for which it is disclosed and in accordance with applicable data protection laws.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">5.4 Business Transfers</h3>
              <p>
                If WOM is involved in a merger, acquisition, reorganization, bankruptcy, or sale of all or a portion of its assets, your information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on the Service of any change in ownership or use of your personal information.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">5.5 Legal Requirements</h3>
              <p>
                We may disclose your information if required to do so by law, regulation, legal process, or governmental request, or if we believe in good faith that disclosure is necessary to: (a) comply with applicable law; (b) protect the rights, property, or safety of WOM, our users, or the public; (c) detect, prevent, or address fraud, security, or technical issues; or (d) enforce our Terms of Service.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">5.6 With Your Consent</h3>
              <p>
                We may share your information with third parties when you have given us explicit consent to do so.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">5.7 Aggregated and De-Identified Data</h3>
              <p>
                We may share aggregated, anonymized, or de-identified data that cannot reasonably be used to identify you. This data is not subject to the restrictions in this Privacy Policy.
              </p>
            </section>

            {/* 6. Cross-Platform Identity Linking */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Cross-Platform Identity Linking</h2>
              <p>
                WOM may associate your public profiles across multiple social media platforms (such as TikTok, YouTube, Instagram, and Xiaohongshu) to create a unified creator profile. We do this using publicly available information, including:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Matching usernames or display names across platforms;</li>
                <li>Linked accounts or cross-platform references listed in bios;</li>
                <li>Similar profile photographs or branding elements;</li>
                <li>Content cross-posting patterns; and</li>
                <li>Other publicly visible signals that indicate the same individual operates accounts on multiple platforms.</li>
              </ul>
              <p className="mt-3">
                <strong>Purpose.</strong> Cross-platform identity linking enables Brand Customers to see a comprehensive view of a creator&apos;s presence across all platforms, providing more accurate analytics and a better matching experience.
              </p>
              <p className="mt-3">
                <strong>Dispute Incorrect Linking.</strong> If you believe your profiles have been incorrectly linked, or that a profile not belonging to you has been associated with your identity, you may request correction by contacting us at <a href="mailto:privacy@wom.app" className="text-purple-600 hover:underline">privacy@wom.app</a>. We will investigate and correct any errors within fifteen (15) business days.
              </p>
              <p className="mt-3">
                <strong>Opt-Out.</strong> If you opt out of data collection or request removal of your profile (see Sections 10 and 11), the opt-out will apply to ALL linked profiles across all platforms, not just a single platform.
              </p>
            </section>

            {/* 7. AI Data Processing */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. AI Data Processing</h2>
              <p>
                WOM uses artificial intelligence and machine learning technologies extensively to power the Service. We believe in transparency about how AI processes your data.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">7.1 AI Capabilities and Uses</h3>
              <p>Our AI systems perform the following functions:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Creator DNA Analysis:</strong> Semantic analysis of creator content, including video themes, writing style, audience engagement patterns, and content quality, to generate comprehensive creator profiles.</li>
                <li><strong>Content and Demographic Classification:</strong> Categorization of creator content by topic, style, audience demographics, and brand safety indicators.</li>
                <li><strong>Sentiment Analysis:</strong> Analysis of public comments and engagement to assess audience sentiment and reception toward creators and their content.</li>
                <li><strong>Bio and Profile Extraction:</strong> Processing of creator bios, descriptions, and profile information to extract structured data such as contact information, content categories, and collaboration preferences.</li>
                <li><strong>Deal and Pricing Suggestions:</strong> Generation of recommended pricing, deal structures, and campaign terms based on creator metrics, market data, and historical patterns.</li>
                <li><strong>Campaign Brief Generation:</strong> AI-generated campaign concepts, content recommendations, and creative briefs.</li>
                <li><strong>Brand-Creator Matching:</strong> Algorithmic matching of brands with creators based on audience alignment, content style compatibility, engagement metrics, and campaign objectives.</li>
                <li><strong>Metrics and Predictions:</strong> Estimation and prediction of performance metrics such as engagement rates, audience growth, and campaign outcomes.</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">7.2 Third-Party AI Processors</h3>
              <p>
                We use third-party AI service providers to process certain data. Our primary AI processor is <strong>OpenAI</strong>. When data is sent to OpenAI for processing:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Data is processed through OpenAI&apos;s API services, which operate under a &quot;zero data retention&quot; or &quot;no training&quot; policy for API customers — meaning your data is <strong>not used to train OpenAI&apos;s general-purpose models</strong>;</li>
                <li>Data sent includes publicly available creator content, bios, comments, and engagement data necessary for the specific AI function being performed;</li>
                <li>OpenAI processes the data and returns analytical outputs (e.g., Creator DNA profiles, sentiment scores) to WOM;</li>
                <li>WOM retains the AI-generated outputs as part of the Service; and</li>
                <li>Our agreement with OpenAI includes contractual protections regarding data security, confidentiality, and prohibited uses.</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">7.3 Human Oversight</h3>
              <p>
                AI-generated outputs are recommendations and analytical tools, not automated decisions. WOM does not make automated decisions that produce legal or similarly significant effects on individuals without human review. Users of the Service are responsible for applying their own judgment to AI-generated suggestions and recommendations.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">7.4 AI Output Labeling</h3>
              <p>
                Where applicable, AI-generated content and analyses are labeled as such on the Service to distinguish them from human-generated or verified information.
              </p>
            </section>

            {/* 8. Third-Party Platform Compliance */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Third-Party Platform Compliance</h2>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">8.1 YouTube API Services</h3>
              <p>
                Our Service uses YouTube API Services. By using features of the Service that access YouTube data, you are also bound by:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><a href="https://www.youtube.com/t/terms" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">YouTube Terms of Service</a></li>
                <li><a href="https://policies.google.com/privacy" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
                <li><a href="https://developers.google.com/youtube/terms/api-services-terms-of-service" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">YouTube API Services Terms of Service</a></li>
              </ul>
              <p className="mt-3">
                <strong>Google&apos;s Limited Use Requirements.</strong> WOM&apos;s use and transfer of information received from Google APIs to any other app will adhere to the{' '}
                <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements. Specifically:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>We will only use Google API data to provide and improve user-facing features of the Service;</li>
                <li>We will not transfer Google API data to third parties except as necessary to provide or improve the Service, to comply with applicable laws, or as part of a merger/acquisition;</li>
                <li>We will not use Google API data for serving advertisements;</li>
                <li>We will not allow humans to read Google API data unless we have your affirmative consent, it is necessary for security purposes, it is necessary to comply with applicable law, or the data has been aggregated and anonymized; and</li>
                <li>We will not use Google API data to train generalized AI or machine learning models.</li>
              </ul>
              <p className="mt-3">
                <strong>Revoke Access.</strong> You may revoke WOM&apos;s access to your Google account data at any time through{' '}
                <a href="https://security.google.com/settings/security/permissions" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">Google&apos;s Security Settings</a>. Upon revocation, we will cease accessing new data from your Google account. Previously collected data may be retained as described in Section 9 (Data Retention).
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">8.2 TikTok API</h3>
              <p>
                Our Service uses the TikTok API. Our use of TikTok data complies with{' '}
                <a href="https://www.tiktok.com/legal/terms-of-service" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">TikTok&apos;s Terms of Service</a>,{' '}
                <a href="https://www.tiktok.com/legal/privacy-policy" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">TikTok&apos;s Privacy Policy</a>, and the TikTok for Developers Terms.
              </p>
              <p className="mt-2">
                WOM will never post content on your behalf on TikTok, manage your TikTok ad campaigns, or take any actions on your TikTok account without your explicit authorization.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">8.3 Xiaohongshu (XHS) and Other Platforms</h3>
              <p>
                Our Service may access publicly available data from Xiaohongshu, Instagram, and other social media platforms through their official APIs or from publicly accessible web pages. Our use of data from these platforms complies with their respective terms of service and developer policies.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">8.4 General Platform Commitments</h3>
              <p>Regardless of the platform, WOM commits to the following:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>We will never post on behalf of creators or manage their social media accounts without explicit authorization;</li>
                <li>We will never manage advertising campaigns on your social media accounts;</li>
                <li>We will comply with the data use limitations specified by each platform&apos;s API terms; and</li>
                <li>We will respect data retention limits imposed by platform API terms.</li>
              </ul>
            </section>

            {/* 9. Data Retention */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Data Retention</h2>
              <p>We retain information for the following periods:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Account Data (Registered Users):</strong> Retained for as long as your account is active, plus a reasonable period (up to 90 days) after account deletion to process the deletion and comply with legal obligations.</li>
                <li><strong>Unclaimed Profile Data:</strong> Retained until the creator opts out, requests deletion, or claims the profile. We periodically refresh Public Creator Data to maintain accuracy.</li>
                <li><strong>Platform API Data:</strong> Retained in accordance with the data retention requirements of each platform&apos;s API terms. YouTube API data is retained for the period necessary to provide the Service, subject to Google&apos;s Limited Use Requirements.</li>
                <li><strong>AI-Generated Data:</strong> Creator DNA profiles, sentiment analyses, and other AI outputs are retained for as long as the associated creator profile exists on the Service.</li>
                <li><strong>Usage Data:</strong> Retained for up to twenty-four (24) months for analytics purposes, after which it is aggregated or anonymized.</li>
                <li><strong>Waitlist Data:</strong> Retained until the Service launches or you request removal, whichever occurs first.</li>
                <li><strong>Payment Data:</strong> Retained as required by applicable tax and financial reporting laws.</li>
                <li><strong>Communications:</strong> Support communications are retained for up to thirty-six (36) months.</li>
              </ul>
              <p className="mt-3">
                Upon expiration of the applicable retention period, or upon a valid deletion request, we will delete or anonymize your personal information, except where retention is required by law or for legitimate business purposes (such as resolving disputes or enforcing our Terms). If deletion is not immediately possible due to technical limitations, we will securely isolate the information and cease further processing.
              </p>
            </section>

            {/* 10. Your California Privacy Rights (CCPA) */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">10. Your California Privacy Rights (CCPA/CPRA)</h2>
              <p>
                If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA):
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">10.1 Right to Know</h3>
              <p>
                You may request that we disclose the categories and specific pieces of personal information we have collected about you, the categories of sources from which it was collected, the business or commercial purpose for collecting or selling it, and the categories of third parties with whom we share it.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">10.2 Right to Delete</h3>
              <p>
                You may request that we delete your personal information, subject to certain exceptions (e.g., where the information is needed to complete a transaction, detect security incidents, comply with legal obligations, or exercise free speech rights).
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">10.3 Right to Correct</h3>
              <p>
                You may request that we correct inaccurate personal information that we maintain about you.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">10.4 Right to Opt-Out of Sale or Sharing</h3>
              <p>
                As described in Section 5.1, we make creator profile data available to Brand Customers, which may constitute a &quot;sale&quot; or &quot;sharing&quot; of personal information under the CCPA. <strong>You have the right to opt out of this sale or sharing.</strong>
              </p>
              <p className="mt-2">To opt out, you may:</p>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Email us at <a href="mailto:privacy@wom.app" className="text-purple-600 hover:underline">privacy@wom.app</a> with the subject line &quot;Do Not Sell or Share My Personal Information&quot;;</li>
                <li>Submit a request through the Service (when available); or</li>
                <li>Contact us using the information provided in Section 17.</li>
              </ul>
              <p className="mt-2">
                We will process your opt-out request within fifteen (15) business days.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">10.5 Right to Limit Use of Sensitive Personal Information</h3>
              <p>
                If we collect sensitive personal information (as defined under the CPRA), you may request that we limit the use and disclosure of such information to purposes necessary for providing the Service.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">10.6 Right to Non-Discrimination</h3>
              <p>
                We will not discriminate against you for exercising any of your CCPA/CPRA rights. We will not deny you the Service, charge different prices, provide a different level of service, or suggest that you would receive a different price or level of service for exercising your rights.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">10.7 How to Submit Requests</h3>
              <p>To exercise any of your California privacy rights, you may:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Email us at <a href="mailto:privacy@wom.app" className="text-purple-600 hover:underline">privacy@wom.app</a>; or</li>
                <li>Submit a request through the Service (when available).</li>
              </ul>
              <p className="mt-3">
                <strong>Verification.</strong> We will verify your identity before processing your request. For requests related to specific pieces of personal information, we may require you to provide information sufficient for us to verify your identity (such as matching two or more data points we already have). If you have an account, we may verify through your account authentication. For Unclaimed Profiles, we may verify by requiring you to confirm ownership of the relevant social media accounts.
              </p>
              <p className="mt-2">
                <strong>Authorized Agents.</strong> You may designate an authorized agent to submit requests on your behalf. Authorized agents must provide written proof of authorization and we may still require you to verify your identity directly.
              </p>
              <p className="mt-2">
                <strong>Response Timeline.</strong> We will acknowledge your request within ten (10) business days and provide a substantive response within forty-five (45) days of receiving a verifiable request. If we need additional time, we may extend the response period by an additional forty-five (45) days, provided we notify you of the extension and the reason for it.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">10.8 Categories of Personal Information</h3>
              <p className="mb-2">In the preceding twelve (12) months, we have collected the following categories of personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identifiers:</strong> Name, email address, username, social media handles, IP address. <em>Sources: directly from users, public sources, platform APIs. Shared with: Brand Customers, service providers.</em></li>
                <li><strong>Personal Information under Cal. Civ. Code § 1798.80:</strong> Name, address (if provided). <em>Sources: directly from users. Shared with: service providers.</em></li>
                <li><strong>Commercial Information:</strong> Subscription records, payment history. <em>Sources: directly from users. Shared with: payment processors.</em></li>
                <li><strong>Internet or Electronic Network Activity:</strong> Browsing history, search history, interaction data. <em>Sources: automatically collected. Shared with: analytics providers.</em></li>
                <li><strong>Professional or Employment-Related Information:</strong> Company name, job title (Brand Customers). <em>Sources: directly from users. Shared with: service providers.</em></li>
                <li><strong>Inferences:</strong> Creator DNA profiles, sentiment scores, matching scores, content classifications. <em>Sources: generated by our AI systems. Shared with: Brand Customers.</em></li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">10.9 Do Not Sell or Share My Personal Information</h3>
              <p>
                As described above, making creator data available to Brand Customers may constitute a &quot;sale&quot; or &quot;sharing&quot; under the CCPA. To opt out, contact us at <a href="mailto:privacy@wom.app" className="text-purple-600 hover:underline">privacy@wom.app</a>. We honor Global Privacy Control (GPC) signals as a valid opt-out of sale/sharing.
              </p>
            </section>

            {/* 11. Unclaimed Creator Profiles */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">11. Unclaimed Creator Profiles</h2>
              <p>
                This section applies specifically to creators whose profiles appear on the Service without having registered for an account (&quot;Unclaimed Profiles&quot; or &quot;Potential Creator Profiles&quot;).
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">11.1 What Data We Collect</h3>
              <p>
                Unclaimed Profiles contain only publicly available information collected from social media platforms, including usernames, display names, bios, profile photos, follower/following counts, engagement metrics, public posts, videos, comments, hashtags, and content categories. We do not collect private messages, non-public account settings, or data that requires authentication for Unclaimed Profiles.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">11.2 How to Claim Your Profile</h3>
              <p>
                If you are a creator with an Unclaimed Profile, you may claim your profile by registering for a WOM account and verifying your identity (e.g., by confirming ownership of the linked social media accounts). Upon claiming your profile:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>You will gain full control over your profile information and visibility settings;</li>
                <li>You can edit, supplement, or correct your profile data;</li>
                <li>You can manage which information is visible to Brand Customers; and</li>
                <li>You will have access to all registered creator features.</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">11.3 How to Request Removal</h3>
              <p>
                If you wish to have your Unclaimed Profile removed entirely from the Service, you may:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Email us at <a href="mailto:privacy@wom.app" className="text-purple-600 hover:underline">privacy@wom.app</a> with the subject line &quot;Remove My Unclaimed Profile&quot;;</li>
                <li>Include sufficient information for us to identify your profile (e.g., your social media username(s) and the platform(s)).</li>
              </ul>
              <p className="mt-3">
                Upon receiving a valid removal request, we will:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Remove your profile from the Service within fifteen (15) business days;</li>
                <li>Cease future collection of your Public Creator Data;</li>
                <li>Delete or anonymize previously collected data, subject to legal retention requirements;</li>
                <li>Remove all associated AI-generated data (Creator DNA, sentiment analysis, etc.); and</li>
                <li>Send you a confirmation when the removal is complete.</li>
              </ul>
              <p className="mt-3">
                If your profiles are linked across multiple platforms (see Section 6), a removal request will apply to all linked profiles.
              </p>
            </section>

            {/* 12. Cookies and Tracking */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">12. Cookies and Tracking Technologies</h2>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">12.1 Types of Cookies We Use</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the operation of the Service, including login, security, and session management. These cannot be disabled.</li>
                <li><strong>Functional Cookies:</strong> Used to remember your preferences, settings, and customizations.</li>
                <li><strong>Analytics Cookies:</strong> Used to understand how the Service is used, including page views, feature usage, and navigation patterns. We may use third-party analytics services such as Google Analytics.</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and measure their effectiveness (if applicable).</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">12.2 Managing Cookies</h3>
              <p>
                You can control cookies through your browser settings. Most browsers allow you to refuse or delete cookies. Please note that disabling cookies may limit your ability to use certain features of the Service.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">12.3 Do Not Track</h3>
              <p>
                Some browsers transmit &quot;Do Not Track&quot; (DNT) signals. We currently honor Global Privacy Control (GPC) signals as a valid opt-out mechanism. We may not respond to other DNT signals, as there is no industry-standard interpretation.
              </p>
            </section>

            {/* 13. Data Security */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">13. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Encryption of data in transit (TLS/SSL) and at rest;</li>
                <li>Access controls and authentication mechanisms to limit data access to authorized personnel;</li>
                <li>Regular security assessments and vulnerability testing;</li>
                <li>Secure development practices and code review;</li>
                <li>Incident response procedures for security breaches; and</li>
                <li>Employee training on data security and privacy practices.</li>
              </ul>
              <p className="mt-3">
                However, no method of transmission over the Internet or electronic storage is completely secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security. In the event of a data breach that affects your personal information, we will notify you in accordance with applicable law.
              </p>
            </section>

            {/* 14. Children's Privacy */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">14. Children&apos;s Privacy</h2>
              <p>
                The Service is not directed to, and is not intended for use by, anyone under the age of eighteen (18). We do not knowingly collect personal information from individuals under 18. If we become aware that we have collected personal information from an individual under 18, we will take immediate steps to delete such information.
              </p>
              <p className="mt-3">
                If you are a parent or guardian and believe that your child under 18 has provided personal information to WOM, please contact us immediately at <a href="mailto:privacy@wom.app" className="text-purple-600 hover:underline">privacy@wom.app</a>, and we will delete the information promptly.
              </p>
            </section>

            {/* 15. International Data Transfers */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">15. International Data Transfers</h2>
              <p>
                WOM is based in the State of California, United States. Your information may be transferred to, stored, and processed in the United States and other countries where our service providers operate. These countries may have data protection laws that are different from those of your country of residence.
              </p>
              <p className="mt-3">
                If you are located outside of the United States and choose to use the Service or provide information to us, you acknowledge and consent to the transfer of your information to the United States. We take appropriate measures to ensure that personal information transferred internationally receives adequate protection, including through contractual safeguards such as Standard Contractual Clauses where required by applicable law.
              </p>
            </section>

            {/* 16. Changes to Policy */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">16. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. If we make material changes, we will notify you by: (a) posting the updated Privacy Policy on the Service with a revised &quot;Last Updated&quot; date; (b) sending an email notification to the address associated with your account (for material changes); or (c) displaying a prominent notice on the Service.
              </p>
              <p className="mt-3">
                We encourage you to review this Privacy Policy periodically. Your continued use of the Service after the effective date of any changes constitutes your acceptance of the revised Privacy Policy. If you do not agree to the revised policy, your sole remedy is to discontinue use of the Service.
              </p>
            </section>

            {/* 17. Contact Us */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">17. Contact Information</h2>
              <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
              <ul className="list-none space-y-1 mt-3">
                <li><strong>Privacy Inquiries & Data Requests:</strong>{' '}<a href="mailto:privacy@wom.app" className="text-purple-600 hover:underline">privacy@wom.app</a></li>
                <li><strong>Creator Opt-Out & Profile Removal:</strong>{' '}<a href="mailto:privacy@wom.app" className="text-purple-600 hover:underline">privacy@wom.app</a></li>
                <li><strong>CCPA / Do Not Sell Requests:</strong>{' '}<a href="mailto:privacy@wom.app" className="text-purple-600 hover:underline">privacy@wom.app</a></li>
                <li><strong>Legal Inquiries:</strong>{' '}<a href="mailto:legal@wom.app" className="text-purple-600 hover:underline">legal@wom.app</a></li>
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
