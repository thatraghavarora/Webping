import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export default function SitePage() {
  return (
    <>
      <meta charset={"utf-8"} />
      <meta
        name={"description"}
        content={
          "Create clear, compliant WhatsApp templates for marketing, utility, and authentication use cases. Keep messages helpful, expected, and easy for customers to act on."
        }
      />
      <meta name={"robots"} content={"index, follow"} />
      <meta name={"theme-color"} content={"#25d366"} />
      <link
        rel={"canonical"}
        href={"https://webping.webpeaker.com/whatsapp-templates"}
      />
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <link
        rel={"icon"}
        type={"image/png"}
        sizes={"32x32"}
        href={"/favicon-32x32.png"}
      />
      <link rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />
      <title>{"WhatsApp Templates | WebPing"}</title>
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
          <p className={"kicker"}>{"Resources"}</p>
          <h1>
            {"WhatsApp message templates that get approved and get replies."}
          </h1>
          <p className={"lead"}>
            {
              "Create clear, compliant WhatsApp templates for marketing, utility, and authentication use cases. Keep messages helpful, expected, and easy for customers to act on."
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
              <p className={"kicker"}>{"Template types"}</p>
              <h2>{"Choose the right category"}</h2>
            </div>
            <div className={"grid cols-3"}>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Marketing templates"}</h3>
                <p>
                  {
                    "Promotions, offers, launches, and re-engagement messages sent to opted-in audiences."
                  }
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Utility templates"}</h3>
                <p>
                  {
                    "Order updates, reminders, confirmations, and important account/service notifications."
                  }
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Authentication templates"}</h3>
                <p>
                  {
                    "One-time passwords and verification codes where applicable."
                  }
                </p>
              </div>
            </div>
            <div
              className={"card webping-card-enter motion-reduce:animate-none"}
              style={{ marginTop: "18px" }}
            >
              <h3>{"Approval tip"}</h3>
              <p>
                {
                  "Use clear language, state who you are, avoid spammy phrasing, and match the selected category to your actual purpose."
                }
              </p>
            </div>
          </div>
        </section>
        <section className={"section"}>
          <div className={"wrap"}>
            <div className={"section-head"}>
              <p className={"kicker"}>{"Examples"}</p>
              <h2>{"Ready-to-adapt examples"}</h2>
            </div>
            <div className={"grid cols-3"}>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Order update"}</h3>
                <p>
                  {
                    "Hi {{1}}, your order {{2}} has been confirmed. We will notify you when it ships. Reply HELP if you need assistance."
                  }
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Appointment reminder"}</h3>
                <p>
                  {
                    "Hi {{1}}, this is a reminder for your appointment on {{2}} at {{3}}. Reply YES to confirm or RESCHEDULE to change it."
                  }
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Offer for opted-in users"}</h3>
                <p>
                  {
                    "Hi {{1}}, thanks for subscribing. Our {{2}} offer is live now. View details: {{3}}. Reply STOP to opt out."
                  }
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={"section sec-lav"}>
          <div className={"wrap"}>
            <div className={"section-head"}>
              <p className={"kicker"}>{"How to use"}</p>
              <h2>{"Template workflow in WebPing"}</h2>
            </div>
            <div className={"steps"}>
              <div className={"step"}>
                <span className={"step-n"}>{"1"}</span>
                <div>
                  <h3>{"Draft with purpose"}</h3>
                  <p>
                    {
                      "Write a short, specific message that matches your use case and audience."
                    }
                  </p>
                </div>
              </div>
              <div className={"step"}>
                <span className={"step-n"}>{"2"}</span>
                <div>
                  <h3>{"Submit for approval"}</h3>
                  <p>
                    {
                      "Send the template for WhatsApp approval in the correct category/language."
                    }
                  </p>
                </div>
              </div>
              <div className={"step"}>
                <span className={"step-n"}>{"3"}</span>
                <div>
                  <h3>{"Send to the right audience"}</h3>
                  <p>
                    {
                      "Use approved templates for broadcasts or business-initiated conversations with opted-in contacts."
                    }
                  </p>
                </div>
              </div>
              <div className={"step"}>
                <span className={"step-n"}>{"4"}</span>
                <div>
                  <h3>{"Track and refine"}</h3>
                  <p>
                    {
                      "Monitor delivery/read/reply outcomes and improve clarity over time."
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
              <h2>{"Template questions"}</h2>
            </div>
            <div className={"fd-faqs"}>
              <details className={"fd-faq"}>
                <summary>{"Why was my template rejected?"}</summary>
                <p>
                  {
                    "Common reasons include unclear purpose, wrong category, promotional content in utility/auth, or policy-violating language."
                  }
                </p>
              </details>
              <details className={"fd-faq"}>
                <summary>{"Can I edit an approved template?"}</summary>
                <p>
                  {
                    "Edits usually require a new submission/approval depending on the change; create a new version when needed."
                  }
                </p>
              </details>
              <details className={"fd-faq"}>
                <summary>{"When do I need a template?"}</summary>
                <p>
                  {
                    "Business-initiated messages outside the customer service window generally require an approved template."
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
