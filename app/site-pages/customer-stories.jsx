import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export default function SitePage() {
  return (
    <>
      <meta charset={"utf-8"} />
      <meta
        name={"description"}
        content={
          "Stories and example outcomes from teams using WebPing to manage inboxes, campaigns, and follow-ups on WhatsApp. (Representative scenarios — replace with verified customer quotes when available.)"
        }
      />
      <meta name={"robots"} content={"index, follow"} />
      <meta name={"theme-color"} content={"#25d366"} />
      <link
        rel={"canonical"}
        href={"https://webping.webpeaker.com/customer-stories"}
      />
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <link
        rel={"icon"}
        type={"image/png"}
        sizes={"32x32"}
        href={"/favicon-32x32.png"}
      />
      <link rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />
      <title>{"Customer Stories | WebPing"}</title>
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
          <p className={"kicker"}>{"Resources"}</p>
          <h1>{"How teams run better WhatsApp conversations with WebPing."}</h1>
          <p className={"lead"}>
            {
              "Stories and example outcomes from teams using WebPing to manage inboxes, campaigns, and follow-ups on WhatsApp. (Representative scenarios — replace with verified customer quotes when available.)"
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
              <p className={"kicker"}>{"Outcomes"}</p>
              <h2>{"What teams achieve"}</h2>
            </div>
            <div className={"grid cols-3"}>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Faster replies"}</h3>
                <p>
                  {
                    "Teams respond quicker by sharing one inbox, assigning chats, and using drafts/quick replies."
                  }
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Organized follow-ups"}</h3>
                <p>
                  {
                    "Leads and support requests move through clear stages instead of getting lost in personal phones."
                  }
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Smarter campaigns"}</h3>
                <p>
                  {
                    "Targeted, approved broadcasts reach the right audience with measurable results."
                  }
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={"section sec-cream"}>
          <div className={"wrap"}>
            <div className={"section-head"}>
              <p className={"kicker"}>{"Stories"}</p>
              <h2>{"Representative team scenarios"}</h2>
            </div>
            <div className={"grid cols-2"}>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <p className={"kicker"}>{"Education"}</p>
                <h3>{"Admissions team"}</h3>
                <p>
                  {
                    "Handled enquiries, campus-visit scheduling, and fee reminders from one number."
                  }
                </p>
                <ul className={"check"} style={{ marginTop: "10px" }}>
                  <li>
                    <span className={"tick"} />
                    <span>{"Shared inbox for counsellors"}</span>
                  </li>
                  <li>
                    <span className={"tick"} />
                    <span>{"Template reminders for follow-ups"}</span>
                  </li>
                  <li>
                    <span className={"tick"} />
                    <span>{"Clear lead stages"}</span>
                  </li>
                </ul>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <p className={"kicker"}>{"E-commerce"}</p>
                <h3>{"D2C support"}</h3>
                <p>
                  {
                    "Reduced missed order queries by centralizing WhatsApp support and updates."
                  }
                </p>
                <ul className={"check"} style={{ marginTop: "10px" }}>
                  <li>
                    <span className={"tick"} />
                    <span>{"Faster first response"}</span>
                  </li>
                  <li>
                    <span className={"tick"} />
                    <span>{"Broadcasts to opted-in buyers"}</span>
                  </li>
                  <li>
                    <span className={"tick"} />
                    <span>{"Better conversation context"}</span>
                  </li>
                </ul>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <p className={"kicker"}>{"Healthcare"}</p>
                <h3>{"Clinic front desk"}</h3>
                <p>
                  {
                    "Managed appointment confirmations and patient queries with timely replies."
                  }
                </p>
                <ul className={"check"} style={{ marginTop: "10px" }}>
                  <li>
                    <span className={"tick"} />
                    <span>{"Reminder templates"}</span>
                  </li>
                  <li>
                    <span className={"tick"} />
                    <span>{"Team assignment"}</span>
                  </li>
                  <li>
                    <span className={"tick"} />
                    <span>{"Consistent responses"}</span>
                  </li>
                </ul>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <p className={"kicker"}>{"Real estate"}</p>
                <h3>{"Sales team"}</h3>
                <p>
                  {
                    "Tracked site-visit leads and follow-ups without losing chat history."
                  }
                </p>
                <ul className={"check"} style={{ marginTop: "10px" }}>
                  <li>
                    <span className={"tick"} />
                    <span>{"Pipeline visibility"}</span>
                  </li>
                  <li>
                    <span className={"tick"} />
                    <span>{"Quick replies"}</span>
                  </li>
                  <li>
                    <span className={"tick"} />
                    <span>{"Owner-based follow-up"}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={"section"}>
          <div className={"wrap"}>
            <div className={"section-head"}>
              <p className={"kicker"}>{"Your story"}</p>
              <h2>{"Want to be featured?"}</h2>
            </div>
            <div
              className={"card webping-card-enter motion-reduce:animate-none"}
            >
              <h3>{"Share your results"}</h3>
              <p>
                {
                  "If you use WebPing and would like to share your experience, email "
                }
                <a href={"mailto:webping@webpeaker.com"}>
                  {"webping@webpeaker.com"}
                </a>
                {". We only publish verified, approved customer stories."}
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
