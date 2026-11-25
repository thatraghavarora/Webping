import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export default function SitePage() {
  return (
    <>
      <meta charset={"utf-8"} />
      <meta
        name={"description"}
        content={
          "WebPing help: WhatsApp number connection, Meta charges, the 24-hour window, imports, refunds and the API — answered plainly."
        }
      />
      <meta name={"robots"} content={"index, follow"} />
      <meta name={"theme-color"} content={"#25d366"} />
      <link rel={"canonical"} href={"https://webping.webpeaker.com/help"} />
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <link
        rel={"icon"}
        type={"image/png"}
        sizes={"32x32"}
        href={"/favicon-32x32.png"}
      />
      <link rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />
      <title>{"Help Center | WebPing support & FAQ"}</title>
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
          <p className={"kicker"}>{"Help centre"}</p>
          <h1>{"Common questions, straight answers."}</h1>
        </section>
        {"\n"}
        <div className={"wrap"}>
          <details className={"faq"}>
            <summary>{"How do I connect my WhatsApp Business number?"}</summary>
            <p>
              {
                "Through the WhatsApp Cloud API with your Meta Business account. The "
              }
              <a href={"/docs/getting-started"}>{"getting-started doc"}</a>
              {
                " walks through it. The number must be one not registered on a phone as a WhatsApp consumer account."
              }
            </p>
          </details>
          <details className={"faq"}>
            <summary>{"Are Meta's WhatsApp charges included?"}</summary>
            <p>
              {
                "No. Conversation and template charges go to Meta on your own Cloud API account. WebPing's plans cover the CRM software."
              }
            </p>
          </details>
          <details className={"faq"}>
            <summary>{"How does the 24-hour window work?"}</summary>
            <p>
              {
                "When a customer writes, a 24-hour service conversation opens for free-form replies. After it closes, replies must use approved message templates. The composer switches over automatically and shows the countdown."
              }
            </p>
          </details>
          <details className={"faq"}>
            <summary>{"Can I import my contact list?"}</summary>
            <p>
              {
                "Yes — CSV import with column mapping and deduplication on phone number. The "
              }
              <a href={"/docs/contacts"}>{"contacts doc"}</a>
              {" shows it."}
            </p>
          </details>
          <details className={"faq"}>
            <summary>
              {"What happens if an automated reply goes wrong?"}
            </summary>
            <p>
              {
                "Agents can take over any chat in one step. The bot can be muted per-chat by keyword triggers and sentiment thresholds; anything it drafts in the inbox requires a human to hit send."
              }
            </p>
          </details>
          <details className={"faq"}>
            <summary>{"Do you read our messages?"}</summary>
            <p>
              {
                "Messages are encrypted in transit with TLS 1.3 and stored encrypted at rest. We don't sell conversation data — see the "
              }
              <a href={"/privacy"}>{"privacy policy"}</a>
              {"."}
            </p>
          </details>
          <details className={"faq"}>
            <summary>{"How does broadcasting avoid bans?"}</summary>
            <p>
              {
                "Only approved templates go out; sending is paced to your number's messaging tier; and replies come through as one-to-one threads where people can opt out by asking."
              }
            </p>
          </details>
          <details className={"faq"}>
            <summary>{"What's your refund policy?"}</summary>
            <p>
              {
                "A full 100% refund within 1 day of purchase on every plan — see "
              }
              <a href={"/refund"}>{"the refund policy"}</a>
              {" or write to webping@webpeaker.com."}
            </p>
          </details>
          <details className={"faq"}>
            <summary>{"Is there an API?"}</summary>
            <p>
              {
                "Yes, on Enterprise — REST endpoints with scoped keys and HMAC-signed webhooks. See "
              }
              <a href={"/features/api"}>{"the API overview"}</a>
              {"."}
            </p>
          </details>
          <details className={"faq"}>
            <summary>{"Are you the same as WhatsApp?"}</summary>
            <p>
              {
                "No — WhatsApp is Meta's product. WebPing is a separate CRM built on the official WhatsApp Business Platform."
              }
            </p>
          </details>
        </div>
        {"\n"}
        <section className={"section"}>
          <div className={"wrap"}>
            <p>
              {"Not covered? Write to\n"}
              <a href={"mailto:webping@webpeaker.com"}>
                {"webping@webpeaker.com"}
              </a>
              {" or WhatsApp\n"}
              <a href={"https://wa.me/918696778246"}>{"+91 86967 78246"}</a>
              {"."}
            </p>
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
