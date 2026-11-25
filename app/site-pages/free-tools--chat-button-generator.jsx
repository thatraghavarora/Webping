import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export default function SitePage() {
  return (
    <>
      <meta charset={"utf-8"} />
      <meta
        name={"description"}
        content={
          "Generate a simple HTML snippet for a “Chat on WhatsApp” button you can add to your website. No account required."
        }
      />
      <meta name={"robots"} content={"index, follow"} />
      <meta name={"theme-color"} content={"#25d366"} />
      <link
        rel={"canonical"}
        href={"https://webping.webpeaker.com/free-tools/chat-button-generator"}
      />
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <link
        rel={"icon"}
        type={"image/png"}
        sizes={"32x32"}
        href={"/favicon-32x32.png"}
      />
      <link rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />
      <title>{"Chat Button Generator | WebPing Free Tools"}</title>
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
          <p className={"kicker"}>{"Free tool"}</p>
          <h1>{"WhatsApp Chat Button Generator"}</h1>
          <p className={"lead"}>
            {
              "Generate a simple HTML snippet for a “Chat on WhatsApp” button you can add to your website. No account required."
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
              <p className={"kicker"}>{"Generator"}</p>
              <h2>{"Create your button snippet"}</h2>
            </div>
            <div className={"tool-box"}>
              <h3>{"Button settings"}</h3>
              <div className={"grid cols-2"} style={{ gap: "14px" }}>
                <label>
                  {"Phone number (digits with country code)"}
                  <input id={"cb-phone"} placeholder={"918696778246"} />
                </label>
                <label>
                  {"Button label"}
                  <input id={"cb-label"} defaultValue={"Chat on WhatsApp"} />
                </label>
                <label style={{ gridColumn: "1/-1" }}>
                  {"Pre-filled message (optional)"}
                  <input
                    id={"cb-msg"}
                    placeholder={"Hi! I need help with..."}
                  />
                </label>
              </div>
              <p style={{ margin: "16px 0 4px" }}>
                <button className={"btn"} id={"cb-gen"} type={"button"}>
                  {"Generate snippet"}
                </button>
              </p>
              <div className={"out"} id={"cb-out"} hidden={true}>
                <p>{"Copy this HTML:"}</p>
                <pre
                  style={{
                    whiteSpace: "pre-wrap",
                    background: "#0f172a",
                    color: "#e5e7eb",
                    padding: "14px",
                    borderRadius: "12px",
                    overflow: "auto",
                  }}
                >
                  <code id={"cb-code"} />
                </pre>
                <p>
                  <b>{"Preview:"}</b>
                </p>
                <div id={"cb-prev"} />
              </div>
            </div>
            <script>
              {
                '(function(){var g=document.getElementById("cb-gen");if(!g)return;g.onclick=function(){var p=(document.getElementById("cb-phone").value||"").replace(/[^0-9]/g,"");var m=encodeURIComponent(document.getElementById("cb-msg").value||"");var label=(document.getElementById("cb-label").value||"Chat on WhatsApp").replace(/</g,"&lt;");var u="https://wa.me/"+p+(m?("?text="+m):"");var snip="<a href=\\""+u+"\\" target=\\"_blank\\" rel=\\"noopener\\" style=\\"display:inline-flex;align-items:center;gap:8px;background:#25D366;color:#fff;padding:12px 18px;border-radius:999px;font:600 16px system-ui;text-decoration:none\\">"+label+"</a>";document.getElementById("cb-out").hidden=false;document.getElementById("cb-code").textContent=snip;document.getElementById("cb-prev").innerHTML=snip;};})();'
              }
            </script>
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
