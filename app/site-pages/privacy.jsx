import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export default function SitePage() {
  return (
    <>
      <meta charset={"utf-8"} />
      <meta
        name={"description"}
        content={
          "How WebPing handles data: what we collect, what we don't, third-party processors, GDPR compliance, retention and contact information."
        }
      />
      <meta name={"robots"} content={"index, follow"} />
      <meta name={"theme-color"} content={"#25d366"} />
      <link rel={"canonical"} href={"https://webping.webpeaker.com/privacy"} />
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <link
        rel={"icon"}
        type={"image/png"}
        sizes={"32x32"}
        href={"/favicon-32x32.png"}
      />
      <link rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />
      <title>{"Privacy Policy | WebPing WhatsApp CRM"}</title>
      <link rel={"preconnect"} href={"https://fonts.googleapis.com"} />
      <link
        rel={"preconnect"}
        href={"https://fonts.gstatic.com"}
        crossOrigin={""}
      />
      <link
        href={
          "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400..800&display=swap"
        }
        rel={"stylesheet"}
      />
      <script type={"application/ld+json"}>
        {
          '\n{"@context":"https://schema.org","@type":"Organization","name":"WebPing","url":"https://webping.webpeaker.com","email":"webping@webpeaker.com","telephone":"+91 8696778246"}\n'
        }
      </script>
      <SiteHeader />
      <main>
        {"\n\n"}
        <section className={"page-head"}>
          <p className={"kicker"}>{"Legal"}</p>
          <h1>{"Privacy policy"}</h1>
        </section>
        {"\n"}
        <section className={"section no-b"}>
          <div className={"wrap"}>
            <div style={{ maxWidth: "760px" }}>
              {"\n"}
              <p>
                {
                  "Your privacy is our utmost priority. Learn how WebPing protects your information with encrypted credential storage, tenant isolation and end-to-end transport encryption."
                }
              </p>
              {"\n\n\n\n"}
              {"\n\n\n\n\n      "}
              <h2>{"Key Privacy Guarantees"}</h2>
              {"\n      "}
              <span>{"✓"}</span>
              <span>
                <b>{"Encrypted Secrets:"}</b>
                {
                  " Your WhatsApp access tokens and webhook verify tokens are encrypted at rest (AES-256-GCM) and are never readable from the browser."
                }
              </span>
              {"\n      "}
              <span>{"✓"}</span>
              <span>
                <b>{"Tenant Isolation:"}</b>
                {
                  " Every table in your workspace is protected by database row-level security scoped to your Company — no cross-tenant access."
                }
              </span>
              {"\n      "}
              <span>{"✓"}</span>
              <span>
                <b>{"No Sale or Monetization of Data:"}</b>
                {
                  " We do not sell, rent, or monetize your contact book or client phone numbers with advertising brokers."
                }
              </span>
              {"\n\n\n    "}
              <h2>{"1. Introduction"}</h2>
              {"\n    "}
              <p>
                {
                  "WebPing (“we”, “our”, or “us”), a product of Webpeaker, respects your privacy and is committed to protecting the personal data of our users. This Privacy Policy explains how the WebPing WhatsApp CRM platform (webping.webpeaker.com) collects, uses, discloses, and safeguards your information when you use our website, your WebPing workspace, and the WhatsApp connections you create in it. It also describes how we handle messages that your customers exchange with you through the connected WhatsApp Business numbers."
                }
              </p>
              {"\n\n    "}
              <h2>{"2. Information We Do NOT Collect"}</h2>
              {"\n    "}
              <p>
                {
                  "WebPing is built so that you stay in control of your own WhatsApp Business data. We strictly adhere to the following non-collection principles:"
                }
              </p>
              {"\n    "}
              <ul>
                {"\n      "}
                <li>
                  {
                    "We do NOT store your WhatsApp account passwords or two-factor authentication codes."
                  }
                </li>
                {"\n      "}
                <li>
                  {
                    "We do NOT sell, rent, or monetize your contact book or client phone numbers with third-party advertising brokers."
                  }
                </li>
                {"\n      "}
                <li>
                  {
                    "We do NOT use your conversations or contacts for advertising, profiling, or to train third-party AI models."
                  }
                </li>
                {"\n    "}
              </ul>
              {"\n\n    "}
              <h2>{"3. Information We Collect"}</h2>
              {"\n    "}
              <p>
                {
                  "To deliver the CRM service over the official WhatsApp Business Cloud API, we process:"
                }
              </p>
              {"\n    "}
              <ul>
                {"\n      "}
                <li>
                  <b>{"Account Information:"}</b>
                  {
                    " Your name, work email address, and password — authentication is hashed and verified by Supabase Auth; we never store your password in plain text."
                  }
                </li>
                {"\n      "}
                <li>
                  <b>{"Billing Details:"}</b>
                  {
                    " Plan and subscription records, invoices and payment status. Payment card details are processed securely via Stripe (or PayPal); we never store raw credit card numbers."
                  }
                </li>
                {"\n      "}
                <li>
                  <b>{"WhatsApp Business Configuration:"}</b>
                  {
                    " The WhatsApp Business phone numbers your Company connects, WhatsApp Business Account (WABA) identifiers, and your permanent access tokens — tokens are encrypted at rest with AES-256-GCM to enable direct API communication with Meta."
                  }
                </li>
                {"\n      "}
                <li>
                  <b>{"Conversations & Contacts:"}</b>
                  {
                    " Message content, timestamps and delivery/read status of the chats exchanged through numbers connected to your workspace, plus the contact names, numbers, tags and notes your team adds."
                  }
                </li>
                {"\n      "}
                <li>
                  <b>{"Media Content:"}</b>
                  {
                    " Images, audio, documents and files exchanged in those conversations, stored on our servers so chats remain complete."
                  }
                </li>
                {"\n      "}
                <li>
                  <b>{"CRM Content You Add:"}</b>
                  {
                    " Deals, pipelines, broadcasts, message templates (submitted to Meta for approval), no-code automation definitions, quick replies and knowledge-base documents."
                  }
                </li>
                {"\n      "}
                <li>
                  <b>{"Operational & Security Logs:"}</b>
                  {
                    " Audit records of sign-ins, configuration changes and administrative access (including time-boxed, logged support sessions), IP address and user-agent, and API keys you issue for the WebPing REST API."
                  }
                </li>
                {"\n    "}
              </ul>
              {"\n\n    "}
              <h2>{"4. How We Use Information"}</h2>
              {"\n    "}
              <p>{"We use collected information solely to:"}</p>
              {"\n    "}
              <ul>
                {"\n      "}
                <li>
                  {
                    "Deliver the CRM service: shared inbox, contacts, sales pipelines, broadcasts, no-code automations, analytics and the public REST API."
                  }
                </li>
                {"\n      "}
                <li>
                  {
                    "Send and receive WhatsApp messages on your behalf through the official WhatsApp Business Cloud API, and route Meta webhook events to the right workspace."
                  }
                </li>
                {"\n      "}
                <li>
                  {
                    "Authenticate your subscription status across browser sessions, manage plans and provide customer support."
                  }
                </li>
                {"\n      "}
                <li>
                  {
                    "Prevent abusive, malicious, or automated spamming activity that violates WhatsApp terms of service, and keep audit trails for security investigations."
                  }
                </li>
                {"\n    "}
              </ul>
              {"\n    "}
              <p>
                {
                  "If your Company enables the optional AI reply assistant, message content and selected knowledge-base text are sent to the AI provider your Company configures (OpenAI or Anthropic, with your Company’s own API key) only to draft or answer replies. It can be disabled at any time."
                }
              </p>
              {"\n\n    "}
              <h2>{"5. Third-Party Processors"}</h2>
              {"\n    "}
              <ul>
                {"\n      "}
                <li>
                  <b>{"Meta Platforms, Inc."}</b>
                  {
                    " — the WhatsApp Business Cloud API processes message delivery, phone-number registration, template review and webhook events under Meta’s own terms and privacy policy."
                  }
                </li>
                {"\n      "}
                <li>
                  <b>{"Stripe / PayPal"}</b>
                  {
                    " — payment processing for subscriptions; card data goes directly to the processor."
                  }
                </li>
                {"\n      "}
                <li>
                  <b>{"Email delivery service"}</b>
                  {
                    " — account verification, password reset and notification emails."
                  }
                </li>
                {"\n    "}
              </ul>
              {"\n\n    "}
              <h2>{"6. Compliance with GDPR & International Privacy Laws"}</h2>
              {"\n    "}
              <p>
                {
                  "If you are located in the European Economic Area (EEA), United Kingdom, or California, you possess statutory rights under the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA):"
                }
              </p>
              {"\n    "}
              <ul>
                {"\n      "}
                <li>
                  {
                    "The right to access and obtain a portable copy of personal account data we hold about you."
                  }
                </li>
                {"\n      "}
                <li>
                  {
                    "The right to rectify inaccurate account details or request full erasure (“Right to be Forgotten”) — deletion removes your workspace data, configurations and stored media from our platform."
                  }
                </li>
                {"\n      "}
                <li>
                  {
                    "The right to withdraw consent for marketing communications at any time."
                  }
                </li>
                {"\n    "}
              </ul>
              {"\n    "}
              <p>
                {
                  "End customers of a Company using WebPing who want their conversation data removed should contact that Company directly; the Company’s administrator can delete the contact and its conversations from the workspace."
                }
              </p>
              {"\n    "}
              <p>
                {
                  "To exercise any of these statutory rights, please contact our Data Protection Officer at "
                }
                <a href={"mailto:Webping@webpeaker.com"}>
                  {"Webping@webpeaker.com"}
                </a>
                {"."}
              </p>
              {"\n\n    "}
              <h2>{"7. Data Retention & Deletion"}</h2>
              {"\n    "}
              <ul>
                {"\n      "}
                <li>
                  {
                    "Workspace data is retained while your account is active. On request or account closure, business data, configurations and stored media are deleted; minimal records are kept only where required for security, abuse-prevention or legal obligations."
                  }
                </li>
                {"\n      "}
                <li>
                  {
                    "Password-reset tokens and verification links expire automatically."
                  }
                </li>
                {"\n      "}
                <li>
                  {
                    "API keys can be revoked by you at any time and stop working immediately."
                  }
                </li>
                {"\n      "}
                <li>
                  {
                    "Audit logs are kept for a limited period to investigate abuse and security incidents."
                  }
                </li>
                {"\n    "}
              </ul>
              {"\n\n    "}
              <h2>{"8. Security Protocols"}</h2>
              {"\n    "}
              <p>
                {
                  "We employ industry-standard administrative, physical, and technical safeguards. All data in transit between your browser and our servers is secured using Transport Layer Security (TLS 1.3/256-bit). WhatsApp secrets are stored encrypted (AES-256-GCM) at rest, tenant data is isolated by row-level security between Companies, and automatic server backups protect against data loss. Any administrative support session is time-boxed, visible to the Company while active, and fully audited."
                }
              </p>
              {"\n\n    "}
              <h2>{"9. Contact Information"}</h2>
              {"\n    "}
              <p>
                {
                  "If you have questions or concerns regarding our privacy policies or data protection practices, please contact us at:"
                }
              </p>
              {"\n\n      "}
              <b>{"WebPing Privacy & Data Protection Office"}</b>
              <br />
              {"\n      Webpeaker"}
              <br />
              {"\n      Phone: "}
              <span>{"+91 8696 77 8246"}</span>
              <br />
              {"\n      General Contact: "}
              <a href={"mailto:Webping@webpeaker.com"}>
                {"Webping@webpeaker.com"}
              </a>
              <br />
              {"\n      Security & Vulnerability Reports: "}
              <a href={"mailto:security@webpeaker.com"}>
                {"security@webpeaker.com"}
              </a>
              <br />
              {
                "\n      Headquarters: Rajasthan and Madhya Pradesh (India)\n\n\n\n\n"
              }
              {"\n\n\n    "}
              <span>{"▦"}</span>
              {" Automatic server backups\n    "}
              <span>{"🔒"}</span>
              {" TLS 256-bit encryption\n    "}
              <span>{"▶"}</span>
              {" On-demand live demo\n    "}
              <span>{"●"}</span>
              {" Friendly 24/7 support\n\n\n\n"}
              {"\n\n"}
            </div>
          </div>
        </section>
        {"\n"}
      </main>
      <section className={"wl-sec"} id={"contact-form"}>
        <div className={"wl-wrap"}>
          {"\n  "}
          <div className={"wl-copy"}>
            {"\n    "}
            <h2>{"Talk to our team about WebPing"}</h2>
            {"\n    "}
            <p>
              {
                "Share your details and we'll help you with setup, features, pricing, or the right WhatsApp workflow for your team. We'll get back to you by email or WhatsApp."
              }
            </p>
            {"\n    "}
            <div className={"wl-points"}>
              {"\n      "}
              <div className={"wl-point"}>
                <div className={"wl-point-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.8"}
                  >
                    <path d={"M22 12h-6l-2 3h-4l-2-3H2"} />
                    <path
                      d={
                        "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                      }
                    />
                  </svg>
                </div>
                <div>
                  <b>{"Shared inbox & support"}</b>
                  <span>
                    {
                      "Handle WhatsApp conversations with your team from one place."
                    }
                  </span>
                </div>
              </div>
              {"\n      "}
              <div className={"wl-point"}>
                <div className={"wl-point-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.8"}
                  >
                    <path
                      d={
                        "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
                      }
                    />
                    <path
                      d={
                        "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
                      }
                    />
                    <path d={"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"} />
                    <path d={"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"} />
                  </svg>
                </div>
                <div>
                  <b>{"Broadcasts & follow-ups"}</b>
                  <span>
                    {
                      "Send approved templates, manage replies, and keep context."
                    }
                  </span>
                </div>
              </div>
              {"\n      "}
              <div className={"wl-point"}>
                <div className={"wl-point-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.8"}
                  >
                    <path d={"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"} />
                  </svg>
                </div>
                <div>
                  <b>{"Official WhatsApp platform"}</b>
                  <span>
                    {
                      "Built for compliant, practical business messaging workflows."
                    }
                  </span>
                </div>
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
          {"\n  "}
          <div
            className={"wl-card webping-card-enter motion-reduce:animate-none"}
          >
            {"\n    "}
            <div className={"wl-card-head"}>
              <div className={"wl-head-ico"}>
                <svg
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"1.8"}
                >
                  <path d={"M4 4h16v16H4z"} />
                  <path d={"m22 6-10 7L2 6"} />
                </svg>
              </div>
              <div>
                <b>{"Send us a message"}</b>
                <span>{"We usually reply by email or WhatsApp."}</span>
              </div>
            </div>
            {"\n    "}
            <form className={"wl-form"} novalidate={""}>
              {"\n      "}
              <div className={"wl-grid"}>
                {"\n        "}
                <div className={"wl-field"}>
                  <label>
                    {"Full name "}
                    <span className={"req"}>{"*"}</span>
                  </label>
                  <div className={"wl-inp"}>
                    <span className={"fi"}>
                      <svg
                        viewBox={"0 0 24 24"}
                        fill={"none"}
                        stroke={"currentColor"}
                        strokeWidth={"1.8"}
                      >
                        <path d={"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"} />
                        <circle cx={"12"} cy={"7"} r={"4"} />
                      </svg>
                    </span>
                    <input
                      name={"full_name"}
                      type={"text"}
                      autoComplete={"name"}
                      required={true}
                      placeholder={"Your full name"}
                    />
                  </div>
                </div>
                {"\n        "}
                <div className={"wl-field"}>
                  <label>
                    {"Business name "}
                    <span className={"req"}>{"*"}</span>
                  </label>
                  <div className={"wl-inp"}>
                    <span className={"fi"}>
                      <svg
                        viewBox={"0 0 24 24"}
                        fill={"none"}
                        stroke={"currentColor"}
                        strokeWidth={"1.8"}
                      >
                        <path d={"M3 21h18"} />
                        <path d={"M5 21V7l8-4v18"} />
                        <path d={"M19 21V11l-6-4"} />
                        <path d={"M9 9v.01M9 12v.01M9 15v.01M9 18v.01"} />
                      </svg>
                    </span>
                    <input
                      name={"business_name"}
                      type={"text"}
                      autoComplete={"organization"}
                      required={true}
                      placeholder={"Your business name"}
                    />
                  </div>
                </div>
                {"\n      "}
              </div>
              {"\n      "}
              <div className={"wl-grid"}>
                {"\n        "}
                <div className={"wl-field"}>
                  <label>
                    {"Email "}
                    <span className={"req"}>{"*"}</span>
                  </label>
                  <div className={"wl-inp"}>
                    <span className={"fi"}>
                      <svg
                        viewBox={"0 0 24 24"}
                        fill={"none"}
                        stroke={"currentColor"}
                        strokeWidth={"1.8"}
                      >
                        <rect
                          x={"2"}
                          y={"4"}
                          width={"20"}
                          height={"16"}
                          rx={"2"}
                        />
                        <path d={"m22 7-10 6L2 7"} />
                      </svg>
                    </span>
                    <input
                      name={"email"}
                      type={"email"}
                      autoComplete={"email"}
                      required={true}
                      placeholder={"you@company.com"}
                    />
                  </div>
                </div>
                {"\n        "}
                <div className={"wl-field"}>
                  <label>
                    {"Phone "}
                    <span style={{ color: "#78716c", fontWeight: "500" }}>
                      {"(optional)"}
                    </span>
                  </label>
                  <div className={"wl-inp"}>
                    <span className={"fi"}>
                      <svg
                        viewBox={"0 0 24 24"}
                        fill={"none"}
                        stroke={"currentColor"}
                        strokeWidth={"1.8"}
                      >
                        <path
                          d={
                            "M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.6 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.17a2 2 0 0 1 2.11-.45c.85.28 1.73.48 2.63.6A2 2 0 0 1 22 16.92z"
                          }
                        />
                      </svg>
                    </span>
                    <input
                      name={"phone"}
                      type={"tel"}
                      autoComplete={"tel"}
                      placeholder={"+91 98765 43210"}
                    />
                  </div>
                </div>
                {"\n      "}
              </div>
              {"\n      "}
              <div className={"wl-field"}>
                <label>
                  {"Company website "}
                  <span style={{ color: "#78716c", fontWeight: "500" }}>
                    {"(optional)"}
                  </span>
                </label>
                <div className={"wl-inp"}>
                  <span className={"fi"}>
                    <svg
                      viewBox={"0 0 24 24"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"1.8"}
                    >
                      <circle cx={"12"} cy={"12"} r={"10"} />
                      <path d={"M2 12h20"} />
                      <path d={"M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"} />
                    </svg>
                  </span>
                  <input
                    name={"company_website"}
                    type={"url"}
                    autoComplete={"url"}
                    placeholder={"https://yourcompany.com"}
                  />
                </div>
              </div>
              {"\n      "}
              <div className={"wl-field"}>
                <label>
                  {"Message "}
                  <span className={"req"}>{"*"}</span>
                </label>
                <div className={"wl-inp ta"}>
                  <span className={"fi"}>
                    <svg
                      viewBox={"0 0 24 24"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"1.8"}
                    >
                      <path
                        d={
                          "M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"
                        }
                      />
                    </svg>
                  </span>
                  <textarea
                    name={"message"}
                    required={true}
                    placeholder={
                      "Tell us what you need: setup, features, pricing, number of agents, or your use case."
                    }
                  />
                </div>
                <div className={"wl-hint"}>
                  {
                    "We'll use this to contact you about WebPing. You can also reach "
                  }
                  <a href={"mailto:webping@webpeaker.com"}>
                    {"webping@webpeaker.com"}
                  </a>
                  {"."}
                </div>
              </div>
              {"\n      "}
              <div className={"wl-actions"}>
                <button className={"btn"} type={"submit"}>
                  {"Send message "}
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2"}
                    width={"16"}
                    height={"16"}
                    aria-hidden={"true"}
                  >
                    <path d={"M5 12h14m-7-7 7 7-7 7"} />
                  </svg>
                </button>
                <span className={"wl-msg"} aria-live={"polite"} />
              </div>
              {"\n    "}
            </form>
            {"\n  "}
          </div>
          {"\n"}
        </div>
      </section>
      <SiteFooter />
      <script defer={true} src={"/assets/site.js?v=80"} />
      <a
        className={"wa-float"}
        href={"https://wa.me/918696778246"}
        target={"_blank"}
        rel={"noopener"}
      >
        {"\n  "}
        <svg viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"}>
          <path
            d={
              "M12.04 2a9.9 9.9 0 0 0-8.24 15.36L2.2 21.8l4.56-1.17A9.9 9.9 0 1 0 12.04 2zm5.44 13.66c-.24.68-1.4 1.3-1.93 1.35-.5.05-1.13.07-1.76-.12a13.5 13.5 0 0 1-5.1-3.3 12.4 12.4 0 0 1-2.35-3.3c-.26-.5-.4-1.1-.4-1.7 0-.6.24-1.15.52-1.5.28-.36.62-.85.9-1.1.3-.3.6-.36.8-.36.2 0 .5.02.5.02h.02c.24 0 .4.16.5.4l.86 2.1c.08.18.05.42-.1.6l-.5.63c-.16.2-.18.4-.06.6a9.8 9.8 0 0 0 4.5 4.06c.24.1.44.08.6-.1l.74-.86c.18-.2.42-.24.62-.14l2.1 1c.24.1.4.28.4.5 0 .12-.02.9-.12 1.1z"
            }
          />
        </svg>
        {"\n  Chat with us\n"}
      </a>
      <script defer={true} src={"/assets/webping-leads.js?v=3"} />
    </>
  );
}
