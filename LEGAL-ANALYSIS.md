# WOM Legal Analysis — Terms of Service & Privacy Policy

**Date:** February 1, 2026  
**Prepared by:** CX Legal Research Agent  
**Purpose:** Competitive analysis + legal framework for WOM's Terms of Service and Privacy Policy

---

## Table of Contents
1. [Competitor Analysis](#1-competitor-analysis)
2. [WOM-Specific High-Risk Areas](#2-wom-specific-high-risk-areas)
3. [Key Protective Clauses](#3-key-protective-clauses)
4. [Recommended Language for High-Risk Areas](#4-recommended-language-for-high-risk-areas)
5. [Full Terms of Service Outline](#5-full-terms-of-service-outline)
6. [Full Privacy Policy Outline](#6-full-privacy-policy-outline)

---

## 1. Competitor Analysis

### 1.1 CreatorIQ (Enterprise Leader)

**Terms of Use:** Generic website terms (Shopify-template style). Covers prohibited uses, disclaimer of warranties, limitation of liability, indemnification. Notably LACKS arbitration clause — relies on general jurisdiction. Separate Subscription Services Agreement for paying customers.

**Privacy Policy (Strongest in Industry):**
- **Three-part structure:** Website Visitors → Platform Data Processing → General Provisions
- **Creator data collection WITHOUT consent:** Explicitly states they collect "names and handles, bio, profile picture, public posting activity, public conversations, engagement, followers" from social network platforms and third-party data providers
- **Legal basis:** "Legitimate interests" — "This is information that has been made available publicly by the Creators"
- **Opt-out mechanism:** Dedicated creator opt-out page (creatoriq.com/creator-opt-out)
- **AI disclosure (October 2025 update):** Full section on AI/ML usage including:
  - Creator Discovery (semantic content matching)
  - Content and Demographic Classification
  - Metrics and Predictions
  - Multimodal Data Creation (audio transcripts from video)
  - Brand Safety Monitoring
  - Third-party AI processors with "Will Not Train" agreements
  - AI-generated content labeling
- **Authenticated vs. Public Data distinction:** Clear separation between data scraped publicly vs. data authorized by creator
- **CCPA compliance:** California annex referenced, "Do Not Sell or Share" link
- **YouTube API compliance:** Links to YouTube ToS, Google Privacy Policy, API Services ToS
- **Data controller vs. processor distinction:** Acts as controller for public data, processor for customer-inputted data
- **Children's privacy:** "Not intended for children" — brief but present
- **Data retention:** "Only as long as necessary" — no specific timeframes

**Key Takeaway:** CreatorIQ is the gold standard. Their AI disclosure section and public data collection framework are directly relevant to WOM.

### 1.2 GRIN (Direct Competitor)

**Terms of Use:** Comprehensive. Includes arbitration clause + class action waiver with opt-out option. Separate Creator Terms of Service. Age minimum 13 (with parental consent) or 18.

**Creator Terms of Service:**
- **"Creator" definition:** "An individual who controls and operates a Social Media Account and who is **captured in the GRIN Services**" — note "captured" language acknowledges unclaimed profiles
- **Account Profiles section (Section 6):** "The Services includes creation of a profile for Users that may become Creators, based on that Creator's **publicly available social network posts, followers and activity**" — explicitly acknowledges creating profiles from public data WITHOUT the creator signing up
- **Content licensing:** Perpetual, irrevocable, worldwide license to use creator content posted through the platform
- **Brand pixel/tracking:** Creators agree brands can include "metadata files, pixels, tagging software, or other tracking technology" in content
- **FTC compliance:** Creator bears responsibility for FTC endorsement compliance

**Privacy Policy:**
- **"Potential Creator" concept:** Explicitly defines and processes data about creators who haven't signed up
- **"Sale" of personal data acknowledged:** "This is considered a 'sale' of personal data under applicable law" — remarkably honest about sharing Potential Creator data with Brand Customers
- **YouTube API compliance:** Links to YouTube ToS, Google Privacy, API Services ToS
- **Data categories table:** Identity, Contact, Creator, Financial, Technical, Usage, Communications, Call Recordings
- **Cookie notice:** Separate page
- **CCPA:** "Do Not Sell My Personal Information" link in footer
- **Data processor vs. controller:** Acts as processor for Brand Customer data about Potential Creators

**Key Takeaway:** GRIN's "Potential Creator" framework and explicit "sale" acknowledgment is the most directly comparable model to WOM's unclaimed profiles. Their honesty about what constitutes a "sale" under CCPA is notable.

### 1.3 Aspire (AspireIQ)

**Terms of Service:** Most traditional/comprehensive structure. 22+ sections. Key features:
- **Arbitration + class action waiver** (Section 22) with opt-out instructions
- **Age minimum: 18** (no exceptions)
- **Platform as intermediary:** "ASPIREIQ IS NOT A PARTY TO ANY COMMUNICATIONS OR AGREEMENTS BETWEEN BRANDS AND MEMBERS"
- **Anti-scraping clause:** Users must not "use manual or automated software, devices, scripts... to access, frame, mirror, scrape, crawl or spider"
- **Content licensing:** Users grant rights for content posted on platform
- **YouTube ToS compliance:** Explicit reference
- **No endorsement disclaimer:** AspireIQ doesn't endorse brands or creators
- **User investigation responsibility:** Users responsible for verifying other users' identity/credentials

**Privacy Policy:**
- **Data minimization approach:** "We may ask You to provide Us with certain personally identifiable information"
- **Third-party service integration:** Instagram, Facebook, Twitter, YouTube via TPS accounts
- **YouTube API Services:** Explicit binding to YouTube ToS, Google Privacy Policy, API Services ToS
- **Google API Limited Use Requirements:** Explicit compliance statement
- **Gmail API restrictions:** Detailed restrictions on email data usage (won't use for ads, won't allow humans to read without consent)
- **Cookie categories:** Essential, Functionality, Analytics/Performance, Social Media
- **Data retention:** YouTube API data retained max 30 days unless required for service
- **Children's privacy:** Under 13 — standard COPPA language
- **Do Not Track:** "We currently do not respond to do not track signals"

**Key Takeaway:** Aspire is more conservative — focuses on registered users rather than unclaimed profiles. Their Google API compliance language is exemplary.

### 1.4 Reacher (Smaller Competitor)

**Terms of Service:** Very simple/commercial-focused. Primarily a subscription agreement. Covers:
- Pricing tiers and payment terms
- Auto-renewal with cancellation
- "As-is" warranty disclaimer
- Liability limited to 3 months of payments
- Delaware governing law, California arbitration
- Force majeure including TikTok Shop disruptions
- Logo usage rights
- No refunds

**Privacy Policy:** Basic/template-based. Covers:
- Standard personal data collection (email, name, usage data)
- Third-party social media (Google only mentioned)
- **Google user data restrictions:** Explicit compliance with Google's Limited Use Requirements — won't sell, won't use for ads, won't train AI models
- Children's privacy: Under 13
- No CCPA-specific provisions
- No mention of creator data scraping
- No AI disclosure

**Key Takeaway:** Reacher's legal docs are insufficient for a platform like WOM. However, their Google API compliance language and TikTok-specific force majeure clause are worth noting.

---

## 2. WOM-Specific High-Risk Areas

### 2.1 Creator Data Scraping (CRITICAL — Lawsuit Risk: HIGH)

**What WOM does:** Scrapes public creator data (bios, follower counts, videos, engagement metrics) from TikTok, YouTube, XHS without creator consent and creates "unclaimed" profiles.

**Legal precedent:** *hiQ Labs v. LinkedIn* (9th Cir. 2022) — scraping publicly available data does not violate the CFAA. However, this is limited and evolving.

**What competitors do:**
| Platform | Scrapes Public Data? | Discloses? | Opt-Out? |
|----------|---------------------|-----------|----------|
| CreatorIQ | ✅ Yes | ✅ Detailed | ✅ Dedicated form |
| GRIN | ✅ Yes ("Potential Creators") | ✅ Explicit | ✅ Yes |
| Aspire | ❌ Primarily registered | N/A | N/A |
| Reacher | ❌ Not mentioned | N/A | N/A |

**WOM MUST:**
1. ✅ Disclose that public creator data is collected without direct consent
2. ✅ State legal basis: "legitimate interests" (GDPR language) and "publicly available information" (CCPA language)
3. ✅ Provide clear, easy opt-out mechanism (dedicated form/email)
4. ✅ Specify exactly what data is collected (handles, bios, follower counts, videos, engagement)
5. ✅ Explain purpose: "to enable brands to discover and evaluate creators for marketing campaigns"
6. ✅ Promise: never post on behalf of creators, never manage their accounts

### 2.2 AI Processing (CRITICAL — Regulatory Risk: HIGH)

**What WOM does:** Uses OpenAI/GPT to analyze creator content ("DNA"), comments, bios. Generates AI-powered deal suggestions (pricing, briefs).

**What competitors do:**
| Platform | AI Disclosure? | Detail Level |
|----------|---------------|-------------|
| CreatorIQ | ✅ Full section | Capabilities, processors, retention, labeling |
| GRIN | ⚠️ Mentioned in analytics | Minimal |
| Aspire | ❌ None | N/A |
| Reacher | ❌ None | N/A |

**WOM MUST (following CreatorIQ's model + emerging AI laws):**
1. ✅ Full AI disclosure section in Privacy Policy
2. ✅ List specific AI capabilities: creator DNA analysis, content analysis, deal pricing suggestions, brief generation, comment sentiment analysis
3. ✅ Name third-party AI processors (OpenAI) or at minimum acknowledge third-party AI use
4. ✅ "Will Not Train" assurance — OpenAI API does not train on customer data (verify and state this)
5. ✅ AI-generated content labeling policy
6. ✅ Data retention for AI inference/outputs
7. ✅ Human oversight statement: "AI-generated suggestions are not final decisions"
8. ✅ Comply with California AB 2013 (AI Training Data Transparency Act, effective Jan 2026) — disclose training data sources
9. ✅ Comply with EU AI Act transparency requirements if serving EU users

### 2.3 Cross-Platform Identity Linking (HIGH RISK)

**What WOM does:** Links creator identities across TikTok, YouTube, XHS, potentially Instagram.

**What competitors do:** CreatorIQ and GRIN do this but don't explicitly disclose the linking process in their privacy policies. This is a gap in the industry that WOM should fill proactively.

**WOM MUST:**
1. ✅ Disclose that cross-platform identity linking occurs
2. ✅ Explain methodology at high level (public handles, content matching, etc.)
3. ✅ Allow creators to dispute incorrect linking
4. ✅ Opt-out must cover ALL linked profiles, not just one platform

### 2.4 "Unclaimed" Creator Profiles (HIGH RISK)

**What WOM does:** Creates profiles for creators who have NOT signed up for WOM.

**Industry precedent:** GRIN does this explicitly — calls them "Potential Creators." CreatorIQ creates profiles from public data without creator signup.

**WOM MUST:**
1. ✅ Use clear language: "We may create a profile based on your publicly available information even if you have not registered for our service"
2. ✅ Distinguish between "claimed" (user-registered) and "unclaimed" profiles
3. ✅ Unclaimed profiles should have LIMITED data (public only)
4. ✅ Claiming mechanism: easy process for creators to claim and control their profile
5. ✅ Deletion mechanism: easy process to have unclaimed profile removed entirely
6. ✅ CCPA: This constitutes "collection" of personal information — must be disclosed

### 2.5 Brand-Creator Data Sharing (HIGH RISK)

**What WOM does:** Shares creator data (including unclaimed profiles) with brand customers.

**GRIN's approach:** Explicitly acknowledges this is a "sale" of personal data under CCPA. This is legally honest and defensible.

**WOM MUST:**
1. ✅ Disclose that creator data is shared with brand customers
2. ✅ Under CCPA, this likely constitutes "sale" or "sharing" — must be disclosed
3. ✅ "Do Not Sell or Share My Personal Information" link required
4. ✅ Opt-out of sale must be honored within 15 business days (CCPA requirement)
5. ✅ Cannot discriminate against creators who opt out

### 2.6 Third-Party Platform API Compliance (MEDIUM-HIGH RISK)

**What WOM uses:** TikTok API, YouTube API, XHS data

**Industry standard (ALL competitors do this):**
- YouTube: Must link to YouTube ToS, Google Privacy Policy, YouTube API Services ToS
- Must comply with Google's Limited Use Requirements
- YouTube data retention: 30 days max (Aspire's approach) unless service requires longer
- Provide mechanism for users to revoke Google account access via Google security settings

**WOM MUST:**
1. ✅ YouTube/Google API compliance: Link to all three Google policies
2. ✅ State adherence to Google's Limited Use Requirements
3. ✅ TikTok API: Comply with TikTok for Developers ToS (link required)
4. ✅ XHS/Xiaohongshu: Compliance with their API terms (research specific requirements)
5. ✅ Data retention limits per platform API terms
6. ✅ User revocation mechanism for authenticated data

### 2.7 California Compliance — CCPA/CPRA (CRITICAL)

**WOM is based in California** — must comply even as a startup. CCPA applies if: annual revenue >$25M, OR buy/sell personal info of 100K+ consumers, OR derive 50%+ revenue from selling personal info.

**Even before thresholds are met,** compliance is best practice and protects against lawsuits.

**What competitors do:**
| Platform | CCPA Compliance | Detail Level |
|----------|----------------|-------------|
| CreatorIQ | ✅ Full (California Annex) | Comprehensive |
| GRIN | ✅ Full | Explicit "sale" acknowledgment |
| Aspire | ⚠️ Partial | General rights mentioned |
| Reacher | ❌ None | Missing |

**WOM MUST include:**
1. ✅ Right to Know: What personal info is collected, categories, sources, purposes
2. ✅ Right to Delete: Request deletion of personal info
3. ✅ Right to Opt-Out of Sale/Sharing: "Do Not Sell or Share My Personal Information" link
4. ✅ Right to Non-Discrimination: Cannot penalize for exercising rights
5. ✅ Right to Correct: Request correction of inaccurate info
6. ✅ Right to Limit Use of Sensitive Personal Info
7. ✅ Categories of PI collected in past 12 months
8. ✅ Categories of sources
9. ✅ Business/commercial purpose for collecting
10. ✅ Categories of third parties with whom PI is shared
11. ✅ Verification process for requests
12. ✅ Authorized agent provisions
13. ✅ Response timeline: 45 days (extendable to 90)
14. ✅ Financial incentive disclosures (if offering incentives for data)

### 2.8 Children's Privacy — COPPA (MEDIUM RISK)

**All competitors address this.** WOM must too.

**WOM MUST:**
1. ✅ "Our Service is not directed to anyone under the age of 18" (use 18, not 13, for creator marketing)
2. ✅ "We do not knowingly collect personal information from anyone under 18"
3. ✅ Deletion procedure if child's data is discovered
4. ✅ Contact method for parents/guardians

---

## 3. Key Protective Clauses

### 3.1 Must-Have Lawsuit Protection

**1. Arbitration + Class Action Waiver** (GRIN, Aspire model)
- Mandatory binding arbitration
- Class action waiver
- Opt-out window (30 days from first use)
- Small claims court exception
- **Why:** Prevents class action lawsuits from creators whose data was scraped

**2. Limitation of Liability** (All competitors)
- Cap liability at amount paid in last 12 months (or $100 for free users)
- Exclude indirect, consequential, special, punitive damages
- "As-is" / "as-available" warranty disclaimer
- **Why:** Limits financial exposure from data processing disputes

**3. Indemnification** (GRIN, Aspire model)
- Users (brands) indemnify WOM for their use of creator data
- Creators indemnify WOM for content they post
- **Why:** Shifts liability to the party taking the action

**4. Platform Intermediary Disclaimer** (Aspire model)
- "WOM is not a party to agreements between brands and creators"
- "WOM does not endorse or recommend any creator or brand"
- **Why:** Avoids liability for brand-creator disputes

**5. Data Accuracy Disclaimer**
- "We do not guarantee the accuracy, completeness, or timeliness of creator data"
- "Public data may be outdated or incorrect"
- **Why:** Protects against claims of inaccurate creator metrics

**6. Anti-Scraping Clause** (Aspire, GRIN model)
- Prohibit users from scraping WOM's platform
- **Why:** Protects WOM's own data/platform value

**7. IP Ownership**
- WOM owns all platform IP, algorithms, models
- Users retain ownership of their own content
- License grant FROM users TO WOM for content on platform
- **Why:** Protects WOM's technology investment

### 3.2 Insurance Recommendations (Non-Legal but Important)
- Cyber liability insurance
- E&O (Errors & Omissions) insurance
- Directors & Officers insurance
- General commercial liability

---

## 4. Recommended Language for High-Risk Areas

### 4.1 Public Data Collection Disclosure

> **Publicly Available Creator Information.** We collect and process publicly available information about creators and influencers from social media platforms, including but not limited to usernames, display names, profile photographs, biographical information, follower and following counts, engagement metrics, public posts, videos, and comments ("Public Creator Data"). We collect this information directly from social media platforms through their APIs and from publicly accessible web pages. This collection occurs regardless of whether a creator has registered for an account with WOM. We process Public Creator Data based on our legitimate business interest in providing creator discovery and analytics services to our brand customers, and because this information has been made publicly available by the creators themselves. If you are a creator and wish to opt out of this data collection, please visit [OPT-OUT URL] or contact us at [EMAIL].

### 4.2 Unclaimed Profile Disclosure

> **Creator Profiles.** WOM may create a profile for you based on your publicly available information, even if you have not registered for a WOM account ("Unclaimed Profile"). Unclaimed Profiles contain only Public Creator Data and are made available to our brand customers for the purpose of discovering and evaluating potential creator partners. You may claim your profile by registering for a WOM account, at which point you will gain control over your profile information. You may also request deletion of your Unclaimed Profile at any time by contacting us at [EMAIL] or submitting a request at [OPT-OUT URL]. We will process deletion requests within 15 business days.

### 4.3 AI Processing Disclosure

> **Artificial Intelligence and Machine Learning.** WOM uses artificial intelligence ("AI") and machine learning ("ML") technologies to enhance our platform and services. Specifically, we use AI/ML to:
> - Analyze creator content, engagement patterns, and audience demographics ("Creator DNA")
> - Generate suggested pricing and deal terms for brand-creator partnerships
> - Create campaign briefs and content recommendations
> - Classify and categorize creator content
> - Perform sentiment analysis on comments and engagement
>
> We use third-party AI service providers, including OpenAI, to process certain data. These providers operate under contractual obligations that prohibit them from using your data to train their AI models. AI-generated outputs (such as suggested pricing or content analysis) are recommendations only and are not final decisions. WOM does not make automated decisions that produce legal or similarly significant effects on creators without human review.

### 4.4 Cross-Platform Identity Linking

> **Cross-Platform Identity Association.** WOM may associate your public profiles across multiple social media platforms (such as TikTok, YouTube, Instagram, and Xiaohongshu) to create a unified creator profile. We do this using publicly available information such as matching usernames, display names, linked accounts listed in bios, and similar public signals. If you believe your profiles have been incorrectly linked, you may request correction by contacting us at [EMAIL].

### 4.5 Data Sharing with Brands ("Sale" Disclosure)

> **Sharing Creator Data with Brand Customers.** We make creator profile data, including data from Unclaimed Profiles, available to our brand customers for the purpose of discovering, evaluating, and engaging creators for marketing campaigns. Under California law (CCPA/CPRA), this disclosure of personal information to third parties for business purposes may constitute a "sale" or "sharing" of personal information. You have the right to opt out of this sale or sharing by visiting [DO NOT SELL LINK] or submitting a request to [EMAIL]. We will not discriminate against you for exercising this right.

### 4.6 CCPA Rights Notice

> **Your California Privacy Rights.** If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA):
> - **Right to Know:** You may request that we disclose the categories and specific pieces of personal information we have collected about you, the sources of that information, the business purposes for collection, and the categories of third parties with whom we share it.
> - **Right to Delete:** You may request deletion of your personal information, subject to certain exceptions.
> - **Right to Correct:** You may request correction of inaccurate personal information.
> - **Right to Opt-Out of Sale/Sharing:** You may opt out of the sale or sharing of your personal information by clicking "Do Not Sell or Share My Personal Information" or by contacting us at [EMAIL].
> - **Right to Limit Use of Sensitive Personal Information:** If we collect sensitive personal information, you may limit its use to specific purposes.
> - **Right to Non-Discrimination:** We will not discriminate against you for exercising any of these rights.
>
> To submit a request, contact us at [EMAIL] or visit [PRIVACY REQUEST URL]. We will verify your identity before processing your request and will respond within 45 days (which may be extended by an additional 45 days if necessary).

---

## 5. Full Terms of Service Outline

```
WOM TERMS OF SERVICE
Last Updated: [DATE]

1. ACCEPTANCE OF TERMS
   - Agreement to be bound
   - Incorporation of Privacy Policy, Acceptable Use Policy
   - If acting on behalf of company, authority to bind

2. DEFINITIONS
   - "Brand" / "Brand Customer"
   - "Creator"
   - "Unclaimed Profile"
   - "Content"
   - "Service" / "Platform"
   - "Public Creator Data"
   - "User"

3. ELIGIBILITY
   - Must be 18 or older
   - Not legally prohibited from using service
   - Authority to bind legal entity if applicable

4. DESCRIPTION OF SERVICES
   - Creator discovery and analytics platform
   - Brand-creator matching
   - Campaign management tools
   - AI-powered analytics and suggestions
   - Payment facilitation (if applicable)
   - Platform intermediary disclaimer: WOM is not party to brand-creator agreements

5. ACCOUNT REGISTRATION
   - Direct registration
   - Third-party service registration (Google, social platforms)
   - Account security responsibilities
   - Accurate information requirement

6. CREATOR PROFILES
   - Unclaimed Profiles from public data
   - Claimed Profiles via registration
   - Profile claiming process
   - Profile deletion process
   - Data accuracy disclaimer

7. THIRD-PARTY PLATFORM INTEGRATION
   - YouTube API Services (link to YouTube ToS, Google Privacy, API ToS)
   - TikTok API (link to TikTok Developer ToS)
   - Other platform APIs
   - User authorization of account access
   - Never post on behalf of users
   - Never manage ad campaigns

8. USER CONDUCT AND PROHIBITED USES
   - No illegal use
   - No scraping WOM platform
   - No reverse engineering
   - No impersonation
   - No interference with service
   - No data harvesting
   - FTC compliance for sponsored content (creators)
   - Compliance with all applicable laws

9. INTELLECTUAL PROPERTY
   - WOM owns platform, technology, algorithms, AI models
   - User retains ownership of their content
   - License FROM users TO WOM (non-exclusive, worldwide, to operate service)
   - License FROM WOM TO users (limited, revocable, to use service)
   - DMCA / Copyright takedown process

10. FEES AND PAYMENT (Brand Customers)
    - Subscription model
    - Payment terms
    - Auto-renewal
    - No refunds (with exceptions)
    - Right to modify pricing with notice

11. AI-POWERED FEATURES
    - AI features are tools, not decisions
    - No guaranteed accuracy of AI outputs
    - Human oversight recommended
    - WOM not liable for decisions based on AI suggestions

12. DATA ACCURACY DISCLAIMER
    - Public data may be inaccurate or outdated
    - WOM does not verify all creator data
    - Brand responsible for verifying creator suitability
    - Metrics are estimates, not guarantees

13. NO ENDORSEMENT
    - WOM does not endorse brands or creators
    - WOM not responsible for brand-creator disputes
    - Users investigate other parties at own risk

14. PRIVACY
    - Reference to Privacy Policy
    - Data processing overview

15. DISCLAIMERS OF WARRANTIES
    - Service provided "AS IS" and "AS AVAILABLE"
    - No warranty of accuracy, completeness, merchantability, fitness for purpose
    - No warranty of uninterrupted or error-free service

16. LIMITATION OF LIABILITY
    - Cap: greater of (a) amount paid in last 12 months or (b) $100
    - Exclude indirect, consequential, incidental, special, punitive damages
    - Includes lost profits, data loss, goodwill
    - Some jurisdictions may not allow — limited to max extent of law

17. INDEMNIFICATION
    - User indemnifies WOM for:
      - Breach of Terms
      - Violation of law
      - Infringement of third-party rights
      - User's content
      - Use of creator data by brand customers

18. TERMINATION
    - WOM may terminate with or without cause
    - User may terminate by closing account
    - Survival of certain provisions (IP, indemnity, liability, arbitration)

19. MODIFICATION OF TERMS
    - WOM may modify at any time
    - Material changes: 30 days notice
    - Continued use = acceptance
    - If unacceptable: only recourse is to stop using service

20. ARBITRATION AND CLASS ACTION WAIVER (CRITICAL)
    - Binding arbitration (JAMS or AAA rules)
    - Individual basis only — NO class actions
    - Small claims court exception
    - 30-day opt-out window from first use
    - Location: California
    - Each party bears own costs (WOM may pay filing fees for consumers)

21. GOVERNING LAW
    - California law
    - Federal Arbitration Act governs arbitration clause

22. MISCELLANEOUS
    - Entire agreement
    - Severability
    - Waiver
    - Assignment
    - Force majeure (including third-party platform actions, e.g., TikTok)
    - Contact information
```

---

## 6. Full Privacy Policy Outline

```
WOM PRIVACY POLICY
Last Updated: [DATE]

1. INTRODUCTION
   - Who we are (WOM, Inc. / entity name)
   - California-based company
   - Scope: website, platform, services
   - Types of users: Website Visitors, Brand Customers, Creators (registered), 
     Creators (unclaimed/unregistered)

2. INFORMATION WE COLLECT

   2.1 Information You Provide Directly
       - Account registration (name, email, company, role)
       - Payment information (brand customers)
       - Communications (support, emails)
       - Content uploaded to platform

   2.2 Information Collected Automatically
       - Device Information (IP, browser, OS, timezone)
       - Usage Data (pages visited, clicks, features used)
       - Cookies, pixels, web beacons
       - Log files

   2.3 Information from Third-Party Platforms (API Data)
       - TikTok: public profiles, follower counts, engagement, videos
       - YouTube: public profiles, subscriber counts, video data
       - Xiaohongshu (XHS): public profiles, engagement, content
       - Instagram: public profiles, engagement (if applicable)
       - Data collected via platform APIs and publicly accessible pages
       - Authenticated Data: additional data when creator links their account

   2.4 Publicly Available Creator Information
       - Collected WITHOUT direct consent
       - Categories: usernames, display names, bios, profile photos,
         follower/following counts, engagement metrics, public posts,
         videos, comments, hashtags, brand mentions
       - Sources: social media platform APIs, publicly accessible web pages,
         third-party data providers
       - Legal basis: legitimate business interest; publicly available information
       - Used for: creator discovery, analytics, brand-creator matching

   2.5 Cross-Platform Identity Data
       - We may link your identities across platforms
       - Methods: matching usernames, bios, content signals
       - Purpose: unified creator profile for brand discovery

   2.6 Information from Brand Customers
       - CRM notes, campaign data, creator ratings
       - WOM acts as data processor for this data

3. HOW WE USE YOUR INFORMATION

   3.1 Service Provision
       - Creator discovery and search
       - Profile creation and management (including Unclaimed Profiles)
       - Brand-creator matching
       - Campaign management
       - Payment processing

   3.2 AI and Machine Learning Processing
       - Creator DNA analysis (content style, themes, audience fit)
       - Deal pricing suggestions
       - Campaign brief generation
       - Comment and engagement sentiment analysis
       - Content classification and categorization
       - Third-party AI processors: OpenAI (with "Will Not Train" agreement)
       - AI outputs are recommendations, not automated decisions
       - AI-generated content is labeled where applicable

   3.3 Analytics and Improvements
       - Platform analytics
       - Service improvements
       - Aggregated, anonymized research

   3.4 Communications
       - Service notifications
       - Marketing (with consent)
       - Creator outreach on behalf of brands

   3.5 Legal and Safety
       - Fraud detection
       - Legal compliance
       - Enforce Terms of Service

4. HOW WE SHARE YOUR INFORMATION

   4.1 With Brand Customers
       - Creator profiles (including Unclaimed Profiles)
       - Public Creator Data, analytics, metrics
       - This may constitute "sale" or "sharing" under CCPA

   4.2 With Service Providers
       - Cloud hosting (AWS/GCP)
       - AI processors (OpenAI)
       - Analytics providers
       - Payment processors
       - Email service providers

   4.3 With Third-Party Platform APIs
       - Data shared back per API requirements

   4.4 Business Transfers
       - Merger, acquisition, sale of assets

   4.5 Legal Requirements
       - Law enforcement, court orders, subpoenas

   4.6 With Your Consent
       - Any other sharing with explicit consent

5. CREATOR DATA RIGHTS AND OPT-OUT

   5.1 For Creators with Unclaimed Profiles
       - Right to know what data we have
       - Right to claim your profile (register for account)
       - Right to opt out of inclusion in platform
       - Right to request deletion
       - Opt-out form: [URL]
       - Email: [privacy@wom.com]
       - We will process requests within 15 business days

   5.2 For Registered Creators
       - Full account control
       - Edit/delete profile information
       - Revoke third-party platform access
       - Download your data
       - Delete your account

   5.3 For Brand Customers
       - Access to account data
       - Data portability
       - Account deletion

6. YOUR CALIFORNIA PRIVACY RIGHTS (CCPA/CPRA)

   6.1 Categories of PI Collected
       [Table: Category | Examples | Source | Purpose | Sold/Shared?]

   6.2 Right to Know
   6.3 Right to Delete
   6.4 Right to Correct
   6.5 Right to Opt-Out of Sale/Sharing
       - "Do Not Sell or Share My Personal Information" link
   6.6 Right to Limit Use of Sensitive PI
   6.7 Right to Non-Discrimination
   6.8 How to Submit Requests
       - Verification process
       - Authorized agent provisions
       - Response timeline: 45 days (extendable to 90)
   6.9 Categories of PI Sold/Shared in Past 12 Months
   6.10 Financial Incentive Disclosures

7. THIRD-PARTY PLATFORM COMPLIANCE

   7.1 YouTube API Services
       - Bound by YouTube ToS: https://www.youtube.com/t/terms
       - Google Privacy Policy: https://policies.google.com/privacy
       - YouTube API Services ToS: https://developers.google.com/youtube/terms/api-services-terms-of-service
       - Google's Limited Use Requirements: compliance statement
       - Revoke access: https://security.google.com/settings/security/permissions
       - We will never post on your behalf or manage your ad campaigns

   7.2 TikTok API
       - TikTok Terms of Service: [URL]
       - TikTok for Developers Terms: [URL]

   7.3 Xiaohongshu (XHS)
       - Applicable terms: [URL]

   7.4 Other Platforms
       - Instagram Graph API terms
       - Other applicable terms

8. COOKIES AND TRACKING

   8.1 Types of Cookies
       - Essential (login, security)
       - Functional (preferences)
       - Analytics (Google Analytics, etc.)
       - Marketing (if applicable)

   8.2 Managing Cookies
       - Browser settings
       - Cookie preference center

   8.3 Do Not Track
       - Current response to DNT signals

9. DATA SECURITY
   - Encryption in transit and at rest
   - Access controls
   - Regular security assessments
   - Incident response procedures
   - No absolute security guarantee

10. DATA RETENTION
    - Retain as long as necessary for stated purposes
    - Platform API data: per platform requirements
    - Account data: until account deletion + reasonable period
    - Unclaimed Profile data: until opt-out/deletion request
    - Legal hold exceptions
    - Anonymization after retention period

11. INTERNATIONAL DATA TRANSFERS
    - Data processed in United States
    - Safeguards for international transfers (if serving non-US users)
    - Standard Contractual Clauses (if applicable)

12. CHILDREN'S PRIVACY
    - Service not directed to anyone under 18
    - Do not knowingly collect data from under 18
    - If discovered: immediate deletion
    - Parent/guardian contact procedure

13. CHANGES TO THIS POLICY
    - May update from time to time
    - Material changes: notice via email or prominent website notice
    - "Last Updated" date
    - Continued use = acceptance

14. CONTACT US
    - Privacy inquiries email: [privacy@wom.com]
    - Mailing address: [California address]
    - Data protection inquiries
    - Creator opt-out requests
```

---

## Summary: What WOM MUST Include That Competitors Often Miss

| Requirement | CreatorIQ | GRIN | Aspire | Reacher | WOM Must? |
|------------|-----------|------|--------|---------|-----------|
| Public data scraping disclosure | ✅ | ✅ | ❌ | ❌ | ✅ CRITICAL |
| Unclaimed profile disclosure | ⚠️ Implicit | ✅ Explicit | ❌ | ❌ | ✅ CRITICAL |
| AI/ML disclosure | ✅ Full | ⚠️ Minimal | ❌ | ❌ | ✅ CRITICAL |
| Cross-platform linking disclosure | ❌ | ❌ | ❌ | ❌ | ✅ HIGH |
| CCPA "sale" acknowledgment | ⚠️ Implicit | ✅ Explicit | ❌ | ❌ | ✅ CRITICAL |
| Creator opt-out mechanism | ✅ | ✅ | ❌ | ❌ | ✅ CRITICAL |
| YouTube API compliance | ✅ | ✅ | ✅ | ❌ | ✅ REQUIRED |
| Arbitration + class action waiver | ❌ | ✅ | ✅ | ⚠️ Basic | ✅ HIGH |
| Children's privacy (18+) | ⚠️ (vague) | ⚠️ (13+) | ✅ (18+) | ⚠️ (13+) | ✅ (18+) |
| Data accuracy disclaimer | ❌ | ❌ | ❌ | ❌ | ✅ HIGH |
| AI output disclaimer | ✅ | ❌ | ❌ | ❌ | ✅ HIGH |
| Platform intermediary disclaimer | ❌ | ✅ | ✅ | ❌ | ✅ HIGH |
| Google Limited Use Requirements | ❌ | ❌ | ✅ | ✅ | ✅ REQUIRED |

---

## Final Recommendation

**Priority order for legal document drafting:**

1. **Privacy Policy** (most urgent — creator data collection is already happening)
2. **Terms of Service** (needed before any brand customer signs up)
3. **Creator Opt-Out Page** (operational requirement for Privacy Policy compliance)
4. **Cookie Notice** (separate page, can be simpler)
5. **Acceptable Use Policy** (can be incorporated into ToS initially)

**Suggested legal review:** These documents should be reviewed by a California-licensed attorney specializing in privacy law (CCPA/CPRA) and technology/AI law before publication. Budget: $3,000-$8,000 for attorney review of drafted documents.

**Key differentiator opportunity:** WOM can be MORE transparent than competitors (especially about AI processing and cross-platform linking) and use this as a trust signal. CreatorIQ's October 2025 AI disclosure update shows the industry is moving toward transparency — WOM should lead, not follow.
