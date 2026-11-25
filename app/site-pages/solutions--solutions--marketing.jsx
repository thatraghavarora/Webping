import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export default function SitePage() {
  return (
    <>
      <meta charset={"utf-8"} />
      <meta
        name={"description"}
        content={
          "Reach opted-in audiences with approved templates, run targeted campaigns, capture leads, and follow up in one place — all on the official WhatsApp Business Platform."
        }
      />
      <meta name={"robots"} content={"index, follow"} />
      <meta name={"theme-color"} content={"#25d366"} />
      <link
        rel={"canonical"}
        href={"https://webping.webpeaker.com/solutions/marketing"}
      />
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <link
        rel={"icon"}
        type={"image/png"}
        sizes={"32x32"}
        href={"/favicon-32x32.png"}
      />
      <link rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />
      <title>{"WebPing for Marketing | WebPing Solutions"}</title>
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
      <SiteHeader />
      <main>
        {"\n"}
        <section className={"page-head"}>
          <p className={"kicker"}>{"Solutions"}</p>
          <h1>{"Turn WhatsApp into a high-converting marketing channel."}</h1>
          <p className={"lead"}>
            {
              "Reach opted-in audiences with approved templates, run targeted campaigns, capture leads, and follow up in one place — all on the official WhatsApp Business Platform."
            }
          </p>
          <div className={"hero-actions"}>
            <a className={"btn"} href={"/app"}>
              {"Start free"}
            </a>
            <a className={"btn-ghost"} href={"/contact"}>
              {"Talk to sales"}
            </a>
          </div>
        </section>
        {"\n"}
        <section className={"section sec-cream"}>
          <div className={"wrap"}>
            <div className={"section-head"}>
              <p className={"kicker"}>{"Use cases"}</p>
              <h2>{"How WebPing for Marketing teams use WebPing"}</h2>
            </div>
            <div className={"grid cols-3"}>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Targeted broadcasts"}</h3>
                <p>
                  {
                    "Send promotions, launches, and updates to segmented, opted-in audiences."
                  }
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Click-to-WhatsApp ads"}</h3>
                <p>
                  {"Bring ad conversations into your inbox and convert faster."}
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Lead capture & qualification"}</h3>
                <p>
                  {"Collect details, tag intent, and route hot leads to sales."}
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Campaign analytics"}</h3>
                <p>
                  {
                    "Track delivery, reads, replies, and outcomes to improve results."
                  }
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Automated follow-ups"}</h3>
                <p>
                  {
                    "Nurture interested contacts with timely, relevant messages."
                  }
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Reusable templates"}</h3>
                <p>
                  {
                    "Create and manage approved templates for consistent messaging."
                  }
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={"section"}>
          <div className={"wrap"}>
            <div className={"section-head"}>
              <p className={"kicker"}>{"What you get"}</p>
              <h2>{"Features that fit this workflow"}</h2>
            </div>
            <div className={"grid cols-3"}>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Broadcasts"}</h3>
                <p>
                  {"Schedule and send compliant template campaigns. "}
                  <a href={"/features/broadcasts"}>{"Learn more"}</a>
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Automations"}</h3>
                <p>
                  {"Rules for routing, tagging, and follow-ups. "}
                  <a href={"/features/automations"}>{"Learn more"}</a>
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Shared inbox"}</h3>
                <p>
                  {"Handle replies with your team in one place. "}
                  <a href={"/features/shared-inbox"}>{"Learn more"}</a>
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Contacts & segments"}</h3>
                <p>
                  {"Organize audiences and personalize outreach. "}
                  <a href={"/features/contacts"}>{"Learn more"}</a>
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Reply drafts"}</h3>
                <p>
                  {"Respond quickly with reviewed, consistent drafts. "}
                  <a href={"/features/ai-assistant"}>{"Learn more"}</a>
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Dashboard"}</h3>
                <p>
                  {"Monitor performance and response times. "}
                  <a href={"/features/dashboard"}>{"Learn more"}</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={"section sec-lav"}>
          <div className={"wrap"}>
            <div className={"section-head"}>
              <p className={"kicker"}>{"How it works"}</p>
              <h2>{"Get started in simple steps"}</h2>
            </div>
            <div className={"steps"}>
              <div className={"step"}>
                <span className={"step-n"}>{"1"}</span>
                <div>
                  <h3>{"Connect & set up"}</h3>
                  <p>
                    {
                      "Connect your WhatsApp number, invite your team, and set roles."
                    }
                  </p>
                </div>
              </div>
              <div className={"step"}>
                <span className={"step-n"}>{"2"}</span>
                <div>
                  <h3>{"Organize conversations"}</h3>
                  <p>
                    {
                      "Use inbox, tags, and pipeline/fields to keep context clear."
                    }
                  </p>
                </div>
              </div>
              <div className={"step"}>
                <span className={"step-n"}>{"3"}</span>
                <div>
                  <h3>{"Automate & broadcast"}</h3>
                  <p>
                    {
                      "Send approved templates, set rules, and follow up on time."
                    }
                  </p>
                </div>
              </div>
              <div className={"step"}>
                <span className={"step-n"}>{"4"}</span>
                <div>
                  <h3>{"Track results"}</h3>
                  <p>
                    {
                      "Measure replies, outcomes, and team performance from the dashboard."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"section"}>
          <div className={"wrap"}>
            <div className={"section-head"}>
              <p className={"kicker"}>{"FAQ"}</p>
              <h2>{"Questions about WebPing for Marketing"}</h2>
            </div>
            <div className={"fd-faqs"}>
              <details className={"fd-faq"}>
                <summary>{"Do I need approved templates?"}</summary>
                <p>
                  {
                    "Yes, business-initiated marketing messages generally require approved WhatsApp templates."
                  }
                </p>
              </details>
              <details className={"fd-faq"}>
                <summary>{"Can I message anyone?"}</summary>
                <p>
                  {
                    "You should message opted-in users who expect to hear from you and follow WhatsApp policies."
                  }
                </p>
              </details>
              <details className={"fd-faq"}>
                <summary>{"Can I track campaign results?"}</summary>
                <p>
                  {
                    "Yes, you can monitor delivery/read/reply outcomes and refine campaigns over time."
                  }
                </p>
              </details>
            </div>
          </div>
        </section>
        {"\n"}
      </main>
      <section className={"wl-sec"} id={"contact-form"}>
        <div className={"wl-wrap"}>
          <div className={"wl-copy"}>
            <h2>{"Talk to our team about WebPing"}</h2>
            <p>
              {
                "Share your details and we'll help you with setup, features, pricing, or the right WhatsApp workflow for your team."
              }
            </p>
          </div>
          <div
            className={"wl-card webping-card-enter motion-reduce:animate-none"}
          >
            <div className={"wl-card-head"}>
              <div>
                <b>{"Send us a message"}</b>
                <span>{"We usually reply by email or WhatsApp."}</span>
              </div>
            </div>
            <form className={"wl-form"} novalidate={""}>
              <div className={"wl-grid"}>
                <div className={"wl-field"}>
                  <label>
                    {"Full name "}
                    <span className={"req"}>{"*"}</span>
                  </label>
                  <div className={"wl-inp"}>
                    <input
                      name={"full_name"}
                      type={"text"}
                      required={true}
                      placeholder={"Your full name"}
                    />
                  </div>
                </div>
                <div className={"wl-field"}>
                  <label>
                    {"Business name "}
                    <span className={"req"}>{"*"}</span>
                  </label>
                  <div className={"wl-inp"}>
                    <input
                      name={"business_name"}
                      type={"text"}
                      required={true}
                      placeholder={"Your business name"}
                    />
                  </div>
                </div>
              </div>
              <div className={"wl-grid"}>
                <div className={"wl-field"}>
                  <label>
                    {"Email "}
                    <span className={"req"}>{"*"}</span>
                  </label>
                  <div className={"wl-inp"}>
                    <input
                      name={"email"}
                      type={"email"}
                      required={true}
                      placeholder={"you@company.com"}
                    />
                  </div>
                </div>
                <div className={"wl-field"}>
                  <label>{"Phone"}</label>
                  <div className={"wl-inp"}>
                    <input
                      name={"phone"}
                      type={"tel"}
                      placeholder={"+91 98765 43210"}
                    />
                  </div>
                </div>
              </div>
              <div className={"wl-field"}>
                <label>
                  {"Message "}
                  <span className={"req"}>{"*"}</span>
                </label>
                <div className={"wl-inp ta"}>
                  <textarea
                    name={"message"}
                    required={true}
                    placeholder={"Tell us what you need."}
                  />
                </div>
              </div>
              <div className={"wl-actions"}>
                <button className={"btn"} type={"submit"}>
                  {"Send message"}
                </button>
                <span className={"wl-msg"} aria-live={"polite"} />
              </div>
            </form>
          </div>
        </div>
      </section>
      <SiteFooter />
      <a
        className={"wa-float"}
        href={"https://wa.me/918696778246"}
        target={"_blank"}
        rel={"noopener"}
      >
        <svg viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"}>
          <path
            d={
              "M12.04 2a9.9 9.9 0 0 0-8.24 15.36L2.2 21.8l4.56-1.17A9.9 9.9 0 1 0 12.04 2zm5.44 13.66c-.24.68-1.4 1.3-1.93 1.35-.5.05-1.13.07-1.76-.12a13.5 13.5 0 0 1-5.1-3.3 12.4 12.4 0 0 1-2.35-3.3c-.26-.5-.4-1.1-.4-1.7 0-.6.24-1.15.52-1.5.28-.36.62-.85.9-1.1.3-.3.6-.36.8-.36.2 0 .5.02.5.02h.02c.24 0 .4.16.5.4l.86 2.1c.08.18.05.42-.1.6l-.5.63c-.16.2-.18.4-.06.6a9.8 9.8 0 0 0 4.5 4.06c.24.1.44.08.6-.1l.74-.86c.18-.2.42-.24.62-.14l2.1 1c.24.1.4.28.4.5 0 .12-.02.9-.12 1.1z"
            }
          />
        </svg>
        {"Chat with us"}
      </a>
      <script defer={true} src={"/assets/site.js?v=80"} />
      <script defer={true} src={"/assets/webping-leads.js?v=3"} />
    </>
  );
}
