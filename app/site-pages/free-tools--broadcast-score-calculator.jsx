import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export default function SitePage() {
  return (
    <>
      <meta charset={"utf-8"} />
      <meta
        name={"description"}
        content={
          "Estimate how ready your broadcast is before you send. Review audience, opt-in, template clarity, timing, and relevance to improve engagement and reduce risk."
        }
      />
      <meta name={"robots"} content={"index, follow"} />
      <meta name={"theme-color"} content={"#25d366"} />
      <link
        rel={"canonical"}
        href={
          "https://webping.webpeaker.com/free-tools/broadcast-score-calculator"
        }
      />
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <link
        rel={"icon"}
        type={"image/png"}
        sizes={"32x32"}
        href={"/favicon-32x32.png"}
      />
      <link rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />
      <title>{"Broadcast Score Calculator | WebPing Free Tools"}</title>
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
          <p className={"kicker"}>{"Free tool"}</p>
          <h1>{"WhatsApp Broadcast Score Calculator"}</h1>
          <p className={"lead"}>
            {
              "Estimate how ready your broadcast is before you send. Review audience, opt-in, template clarity, timing, and relevance to improve engagement and reduce risk."
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
              <p className={"kicker"}>{"Calculator"}</p>
              <h2>{"Check your broadcast readiness"}</h2>
            </div>
            <div className={"tool-box"}>
              <h3>{"Score your campaign"}</h3>
              <p>
                {
                  "Rate each factor from 1 (needs work) to 5 (strong). This is a simple planning helper, not a guarantee of delivery or results."
                }
              </p>
              <div
                id={"bsc"}
                className={"grid cols-2"}
                style={{ gap: "14px", marginTop: "12px" }}
              >
                <label style={{ display: "block" }}>
                  <span
                    style={{
                      display: "block",
                      fontWeight: "600",
                      marginBottom: "4px",
                    }}
                  >
                    {"Opt-in & audience relevance"}
                  </span>
                  <select
                    data-w={"25"}
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "10px",
                    }}
                  >
                    <option value={"1"}>{"1 - Poor"}</option>
                    <option value={"2"}>{"2"}</option>
                    <option value={"3"} selected={""}>
                      {"3 - OK"}
                    </option>
                    <option value={"4"}>{"4"}</option>
                    <option value={"5"}>{"5 - Strong"}</option>
                  </select>
                </label>
                <label style={{ display: "block" }}>
                  <span
                    style={{
                      display: "block",
                      fontWeight: "600",
                      marginBottom: "4px",
                    }}
                  >
                    {"Template clarity & value"}
                  </span>
                  <select
                    data-w={"20"}
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "10px",
                    }}
                  >
                    <option value={"1"}>{"1 - Poor"}</option>
                    <option value={"2"}>{"2"}</option>
                    <option value={"3"} selected={""}>
                      {"3 - OK"}
                    </option>
                    <option value={"4"}>{"4"}</option>
                    <option value={"5"}>{"5 - Strong"}</option>
                  </select>
                </label>
                <label style={{ display: "block" }}>
                  <span
                    style={{
                      display: "block",
                      fontWeight: "600",
                      marginBottom: "4px",
                    }}
                  >
                    {"Timing & frequency"}
                  </span>
                  <select
                    data-w={"15"}
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "10px",
                    }}
                  >
                    <option value={"1"}>{"1 - Poor"}</option>
                    <option value={"2"}>{"2"}</option>
                    <option value={"3"} selected={""}>
                      {"3 - OK"}
                    </option>
                    <option value={"4"}>{"4"}</option>
                    <option value={"5"}>{"5 - Strong"}</option>
                  </select>
                </label>
                <label style={{ display: "block" }}>
                  <span
                    style={{
                      display: "block",
                      fontWeight: "600",
                      marginBottom: "4px",
                    }}
                  >
                    {"Personalization/segmentation"}
                  </span>
                  <select
                    data-w={"15"}
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "10px",
                    }}
                  >
                    <option value={"1"}>{"1 - Poor"}</option>
                    <option value={"2"}>{"2"}</option>
                    <option value={"3"} selected={""}>
                      {"3 - OK"}
                    </option>
                    <option value={"4"}>{"4"}</option>
                    <option value={"5"}>{"5 - Strong"}</option>
                  </select>
                </label>
                <label style={{ display: "block" }}>
                  <span
                    style={{
                      display: "block",
                      fontWeight: "600",
                      marginBottom: "4px",
                    }}
                  >
                    {"Clear call-to-action"}
                  </span>
                  <select
                    data-w={"15"}
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "10px",
                    }}
                  >
                    <option value={"1"}>{"1 - Poor"}</option>
                    <option value={"2"}>{"2"}</option>
                    <option value={"3"} selected={""}>
                      {"3 - OK"}
                    </option>
                    <option value={"4"}>{"4"}</option>
                    <option value={"5"}>{"5 - Strong"}</option>
                  </select>
                </label>
                <label style={{ display: "block" }}>
                  <span
                    style={{
                      display: "block",
                      fontWeight: "600",
                      marginBottom: "4px",
                    }}
                  >
                    {"Compliance & opt-out clarity"}
                  </span>
                  <select
                    data-w={"10"}
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "10px",
                    }}
                  >
                    <option value={"1"}>{"1 - Poor"}</option>
                    <option value={"2"}>{"2"}</option>
                    <option value={"3"} selected={""}>
                      {"3 - OK"}
                    </option>
                    <option value={"4"}>{"4"}</option>
                    <option value={"5"}>{"5 - Strong"}</option>
                  </select>
                </label>
              </div>
              <p style={{ margin: "16px 0 6px" }}>
                <button className={"btn"} id={"bsc-go"} type={"button"}>
                  {"Calculate score"}
                </button>
              </p>
              <div
                className={"out"}
                id={"bsc-out"}
                style={{
                  marginTop: "10px",
                  padding: "14px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                }}
              >
                <b>{"Score: —"}</b>
                <p
                  id={"bsc-tip"}
                  style={{ margin: "6px 0 0", color: "var(--muted)" }}
                >
                  {"Select ratings and calculate."}
                </p>
              </div>
            </div>
            <script>
              {
                '(function(){var b=document.getElementById("bsc-go");if(!b)return;b.onclick=function(){var t=0;document.querySelectorAll("#bsc select").forEach(function(s){t+=Number(s.value)*Number(s.dataset.w||1);});var score=Math.round(t/5);var tip=score>=80?"Strong: audience and message look ready — send to a relevant segment.":score>=60?"Decent: improve weak areas (clarity, relevance, or timing) before sending.":"Needs work: tighten opt-in, value, and compliance before broadcasting.";document.querySelector("#bsc-out b").textContent="Score: "+score+"/100";document.getElementById("bsc-tip").textContent=tip;};})();'
              }
            </script>
          </div>
        </section>
        <section className={"section sec-cream"}>
          <div className={"wrap"}>
            <div className={"section-head"}>
              <p className={"kicker"}>{"Tips"}</p>
              <h2>{"Improve your broadcast"}</h2>
            </div>
            <div className={"grid cols-3"}>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Message opted-in users"}</h3>
                <p>
                  {
                    "Send relevant messages to people who expect to hear from you."
                  }
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Lead with value"}</h3>
                <p>
                  {
                    "Be clear, helpful, and specific about why you are messaging."
                  }
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Test and learn"}</h3>
                <p>
                  {"Review results and refine audience, timing, and template."}
                </p>
              </div>
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
