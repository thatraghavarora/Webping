import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export default function SitePage() {
  return (
    <>
      <meta charset={"utf-8"} />
      <meta
        name={"description"}
        content={
          "We are a small, product-focused team at Webpeaker building WebPing — a practical WhatsApp CRM on the official Business Platform. If you care about clear UX, reliable systems, and helpful customer conversations, we would love to hear from you."
        }
      />
      <meta name={"robots"} content={"index, follow"} />
      <meta name={"theme-color"} content={"#25d366"} />
      <link rel={"canonical"} href={"https://webping.webpeaker.com/careers"} />
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <link
        rel={"icon"}
        type={"image/png"}
        sizes={"32x32"}
        href={"/favicon-32x32.png"}
      />
      <link rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />
      <title>{"Careers | WebPing"}</title>
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
          <p className={"kicker"}>{"Company"}</p>
          <h1>{"Build WhatsApp tools teams actually enjoy using."}</h1>
          <p className={"lead"}>
            {
              "We are a small, product-focused team at Webpeaker building WebPing — a practical WhatsApp CRM on the official Business Platform. If you care about clear UX, reliable systems, and helpful customer conversations, we would love to hear from you."
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
              <p className={"kicker"}>{"Why WebPing"}</p>
              <h2>{"Work on a focused product"}</h2>
            </div>
            <div className={"grid cols-3"}>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Real customer impact"}</h3>
                <p>
                  {
                    "Solve everyday problems for sales, support, and marketing teams using WhatsApp."
                  }
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Small, fast team"}</h3>
                <p>
                  {
                    "Ship meaningful improvements quickly with ownership and clear priorities."
                  }
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Quality over noise"}</h3>
                <p>
                  {
                    "We value simple design, honest communication, and dependable engineering."
                  }
                </p>
              </div>
            </div>
            <div style={{ marginTop: "22px" }}>
              <div className={"steps"}>
                <div className={"step"}>
                  <span className={"step-n"}>{"1"}</span>
                  <div>
                    <h3>{"Share your profile"}</h3>
                    <p>
                      {
                        "Email your resume/portfolio and the role you are interested in."
                      }
                    </p>
                  </div>
                </div>
                <div className={"step"}>
                  <span className={"step-n"}>{"2"}</span>
                  <div>
                    <h3>{"Intro conversation"}</h3>
                    <p>
                      {
                        "We discuss your experience, what you enjoy building, and fit."
                      }
                    </p>
                  </div>
                </div>
                <div className={"step"}>
                  <span className={"step-n"}>{"3"}</span>
                  <div>
                    <h3>{"Practical discussion"}</h3>
                    <p>
                      {
                        "A short, role-relevant conversation or exercise — no long hoops."
                      }
                    </p>
                  </div>
                </div>
                <div className={"step"}>
                  <span className={"step-n"}>{"4"}</span>
                  <div>
                    <h3>{"Offer & onboarding"}</h3>
                    <p>{"Clear role, expectations, and a supportive start."}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"section"}>
          <div className={"wrap"}>
            <div className={"section-head"}>
              <p className={"kicker"}>{"Open roles"}</p>
              <h2>{"Roles we often hire for"}</h2>
            </div>
            <div className={"grid cols-3"}>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Product & Design"}</h3>
                <p>
                  {
                    "Design clear workflows, UI, and content for WhatsApp-first teams."
                  }
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Engineering"}</h3>
                <p>
                  {"Build reliable web, backend, and integration features."}
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Customer Success"}</h3>
                <p>
                  {"Help customers set up, learn, and get value from WebPing."}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={"section sec-mint"}>
          <div className={"wrap"}>
            <div className={"section-head"}>
              <p className={"kicker"}>{"Apply"}</p>
              <h2>{"Interested?"}</h2>
            </div>
            <div
              className={"card webping-card-enter motion-reduce:animate-none"}
            >
              <h3>{"Send us a note"}</h3>
              <p>
                {"Email "}
                <a href={"mailto:webping@webpeaker.com"}>
                  {"webping@webpeaker.com"}
                </a>
                {
                  " with your profile, links, and the kind of work you want to do. Even if a role is not listed, we are happy to hear from great people."
                }
              </p>
              <p style={{ marginTop: "10px" }}>
                <a
                  className={"btn"}
                  href={
                    "mailto:webping@webpeaker.com?subject=Careers%20at%20WebPing"
                  }
                >
                  {"Email careers"}
                </a>
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
