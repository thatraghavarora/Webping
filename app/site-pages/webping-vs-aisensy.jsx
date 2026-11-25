import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export default function SitePage() {
  return (
    <>
      <meta charset={"utf-8"} />
      <meta
        name={"description"}
        content={
          "A practical comparison to help you choose the right WhatsApp platform for your team. Features and pricing can change — always verify current details on each vendor’s official site."
        }
      />
      <meta name={"robots"} content={"index, follow"} />
      <meta name={"theme-color"} content={"#25d366"} />
      <link
        rel={"canonical"}
        href={"https://webping.webpeaker.com/webping-vs-aisensy"}
      />
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <link
        rel={"icon"}
        type={"image/png"}
        sizes={"32x32"}
        href={"/favicon-32x32.png"}
      />
      <link rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />
      <title>{"WebPing vs AiSensy | WebPing"}</title>
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
      <link rel={"stylesheet"} href={"/assets/site.css?v=85"} />
      <link rel={"stylesheet"} href={"/assets/webping-leads.css?v=3"} />
      <SiteHeader />
      <main>
        {"\n"}
        <section className={"page-head"}>
          <p className={"kicker"}>{"Comparison"}</p>
          <h1>{"WebPing vs. AiSensy"}</h1>
          <p className={"lead"}>
            {
              "A practical comparison to help you choose the right WhatsApp platform for your team. Features and pricing can change — always verify current details on each vendor’s official site."
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
        <section className={"section"}>
          <div className={"wrap"}>
            <div className={"section-head"}>
              <p className={"kicker"}>{"Overview"}</p>
              <h2>{"How to evaluate"}</h2>
            </div>
            <div className={"grid cols-3"}>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Your primary goal"}</h3>
                <p>
                  {
                    "Choose based on what matters most: shared inbox/support, broadcasts, automations, sales workflow, or integrations."
                  }
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Ease & onboarding"}</h3>
                <p>
                  {
                    "Consider setup time, team training, template/broadcast workflow, and day-to-day usability."
                  }
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Total cost & fit"}</h3>
                <p>
                  {
                    "Look at plan limits, per-user/number costs, WhatsApp conversation charges, and the features you actually need."
                  }
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={"section sec-cream"}>
          <div className={"wrap"}>
            <div className={"section-head"}>
              <p className={"kicker"}>{"Why teams consider WebPing"}</p>
              <h2>{"Built for clear WhatsApp workflows"}</h2>
            </div>
            <div className={"grid cols-3"}>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Shared team inbox"}</h3>
                <p>
                  {"One number, clear ownership, context, and faster replies."}
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Campaigns & automations"}</h3>
                <p>
                  {
                    "Approved-template broadcasts and practical automation rules for routine work."
                  }
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"CRM workflow"}</h3>
                <p>
                  {
                    "Contacts, fields, and pipeline visibility alongside conversations."
                  }
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={"section"}>
          <div className={"wrap"}>
            <div className={"section-head"}>
              <p className={"kicker"}>{"Compare checklist"}</p>
              <h2>{"Questions to ask when comparing with AiSensy"}</h2>
            </div>
            <div className={"steps"}>
              <div className={"step"}>
                <span className={"step-n"}>{"1"}</span>
                <div>
                  <h3>{"Inbox & collaboration"}</h3>
                  <p>
                    {
                      "Does it support assignment, roles, notes, and smooth team handoffs?"
                    }
                  </p>
                </div>
              </div>
              <div className={"step"}>
                <span className={"step-n"}>{"2"}</span>
                <div>
                  <h3>{"Broadcasts & compliance"}</h3>
                  <p>
                    {
                      "How easy is template management, audience selection, scheduling, and reporting?"
                    }
                  </p>
                </div>
              </div>
              <div className={"step"}>
                <span className={"step-n"}>{"3"}</span>
                <div>
                  <h3>{"Automation & AI assist"}</h3>
                  <p>
                    {
                      "What can be automated safely, and is human review supported for replies?"
                    }
                  </p>
                </div>
              </div>
              <div className={"step"}>
                <span className={"step-n"}>{"4"}</span>
                <div>
                  <h3>{"Integrations & API"}</h3>
                  <p>
                    {
                      "Does it connect to your CRM/store/tools with the reliability and security you need?"
                    }
                  </p>
                </div>
              </div>
              <div className={"step"}>
                <span className={"step-n"}>{"5"}</span>
                <div>
                  <h3>{"Support & transparency"}</h3>
                  <p>
                    {
                      "Is documentation clear and support responsive when you need help?"
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"section sec-mint"}>
          <div className={"wrap"}>
            <div className={"section-head"}>
              <p className={"kicker"}>{"Next step"}</p>
              <h2>{"See WebPing in action"}</h2>
            </div>
            <div
              className={"card webping-card-enter motion-reduce:animate-none"}
            >
              <h3>{"Try it with your workflow"}</h3>
              <p>
                {
                  "The best comparison is hands-on: test your real use cases — inbox, templates, broadcasts, and follow-ups."
                }
              </p>
              <p style={{ marginTop: "10px" }}>
                <a className={"btn"} href={"/app"}>
                  {"Start free"}
                </a>{" "}
                <a className={"btn-ghost"} href={"/pricing"}>
                  {"View pricing"}
                </a>
              </p>
              <p
                style={{
                  marginTop: "12px",
                  color: "var(--muted)",
                  fontSize: ".9rem",
                }}
              >
                {
                  "Note: AiSensy is a third-party product name. This page is an independent, general comparison guide; confirm current capabilities and pricing on the official AiSensy website."
                }
              </p>
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
