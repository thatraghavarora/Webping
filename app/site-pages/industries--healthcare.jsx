import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export default function SitePage() {
  return (
    <>
      <meta charset={"utf-8"} />
      <meta
        name={"description"}
        content={
          "Appointment reminders, report-ready alerts and health camp broadcasts on WhatsApp for hospitals, clinics and labs — opt-in, template-approved and paced sending."
        }
      />
      <meta name={"robots"} content={"index, follow"} />
      <meta name={"theme-color"} content={"#25d366"} />
      <link
        rel={"canonical"}
        href={"https://webping.webpeaker.com/industries/healthcare/"}
      />
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <link
        rel={"icon"}
        type={"image/png"}
        sizes={"32x32"}
        href={"/favicon-32x32.png"}
      />
      <link rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />
      <title>{"Healthcare — WhatsApp bulk messaging & CRM | WebPing"}</title>
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
      <link rel={"stylesheet"} href={"/assets/site.css?v=80"} />
      <script type={"application/ld+json"}>
        {
          '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Industries","item":"https://webping.webpeaker.com/industries/"},{"@type":"ListItem","position":2,"name":"Healthcare","item":"https://webping.webpeaker.com/industries/healthcare/"}]}'
        }
      </script>
      <link rel={"stylesheet"} href={"/assets/webping-leads.css?v=3"} />
      <SiteHeader />
      <main>
        <p className={"breadcrumb"}>
          <a href={"/industries"}>{"Industries"}</a>
          {" / Healthcare"}
        </p>
        <section className={"page-head"}>
          <p className={"kicker"}>{"Industry"}</p>
          <h1>{"WhatsApp for hospitals, clinics & labs"}</h1>
          <p className={"lead"}>
            {
              "Appointment reminders, report-ready alerts and camp invitations, sent in bulk with opt-in lists — no-shows drop, the front desk stops chasing."
            }
          </p>
          <div className={"btn-row"}>
            <a className={"btn"} href={"/app"}>
              {"Start free →"}
            </a>
            <a className={"btn-ghost"} href={"/pricing"}>
              {"See pricing"}
            </a>
          </div>
        </section>
        <section className={"section no-b"}>
          <div className={"wrap"}>
            <div className={"two-col"}>
              <div>
                <p className={"kicker"}>{"Front-desk bottlenecks"}</p>
                <h3>{"What stalls your growth"}</h3>
                <ul className={"plain"}>
                  <li>
                    <b>{"No-shows waste slots"}</b>
                    {
                      " — Reminders by call take staff hours and still miss patients."
                    }
                  </li>
                  <li>
                    <b>{"Report-calls pile up"}</b>
                    {
                      " — Patients phone constantly to ask whether reports are ready."
                    }
                  </li>
                  <li>
                    <b>{"Queue day chaos"}</b>
                    {
                      " — Schedules and doctor rotations change; families arrive unprepared."
                    }
                  </li>
                  <li>
                    <b>{"Camp turnout is luck"}</b>
                    {" — Awareness days depend on word of mouth and posters."}
                  </li>
                  <li>
                    <b>{"Refills get forgotten"}</b>
                    {
                      " — Chronic patients lapse between visits with no nudge plan."
                    }
                  </li>
                  <li>
                    <b>{"One helpline, ten questions"}</b>
                    {" — Everything lands on a single overloaded number."}
                  </li>
                </ul>
              </div>
              <div>
                <p className={"kicker"}>{"The fix"}</p>
                <h3>{"How WebPing fixes it"}</h3>
                <p>
                  {
                    "One opt-in WhatsApp channel for patient lifecycle messaging: appointment flows, report alerts and camp campaigns — template approved, paced by tier, with replies managed by a team in the shared inbox."
                  }
                </p>
                <div className={"metric-cards"}>
                  <div
                    className={
                      "metric-card webping-card-enter motion-reduce:animate-none"
                    }
                  >
                    <b>{"Fewer no-shows"}</b>
                    <span>{"reminders that confirm back"}</span>
                  </div>
                  <div
                    className={
                      "metric-card webping-card-enter motion-reduce:animate-none"
                    }
                  >
                    <b>{"Reports by link"}</b>
                    <span>{"pickup calls replaced"}</span>
                  </div>
                  <div
                    className={
                      "metric-card webping-card-enter motion-reduce:animate-none"
                    }
                  >
                    <b>{"One helpline"}</b>
                    <span>{"the whole department answers"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"section sec-cream"}>
          <div className={"wrap"}>
            <div className={"section-head"}>
              <p className={"kicker"}>{"Bulk messaging use cases"}</p>
              <h2>{"What teams send on WebPing"}</h2>
              <p>
                {"Six workflows that industry teams run from the same number."}
              </p>
            </div>
            <div className={"grid cols-3"}>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Appointment reminders"}</h3>
                <p>
                  {
                    "Scheduled templates with confirm / reschedule replies; no-show slots are re-offered within the same day."
                  }
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Reports-ready alerts"}</h3>
                <p>
                  {
                    "When results upload, a template reaches the patient with a download link — the call queue empties."
                  }
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Health camp broadcasts"}</h3>
                <p>
                  {
                    "Segmented by area and patient group, paced across your tier for compliant reach."
                  }
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Refill & follow-up flows"}</h3>
                <p>
                  {
                    "Automations nudge chronic patients on their medicine cycle, then log the reply to history."
                  }
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Doctor schedule updates"}</h3>
                <p>
                  {
                    "Rotation changes broadcast instantly to the affected appointment list."
                  }
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Post-consult follow-ups"}</h3>
                <p>
                  {
                    "Recovery instructions and review reminders open a 24-hour window patients actually use."
                  }
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={"section"}>
          <div className={"wrap"}>
            <div className={"section-head"}>
              <p className={"kicker"}>{"The workflow"}</p>
              <h2>{"From list to replies, four steps"}</h2>
            </div>
            <div className={"grid cols-2"}>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <p className={"num"}>{"Step 1"}</p>
                <h3>{"Import opt-in patients"}</h3>
                <p>
                  {"Consent lists grouped by department, doctor or camp zone."}
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <p className={"num"}>{"Step 2"}</p>
                <h3>{"Use approved templates"}</h3>
                <p>
                  {"Reminders and alerts pre-cleared for medical messaging."}
                </p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <p className={"num"}>{"Step 3"}</p>
                <h3>{"Schedule per slot cycle"}</h3>
                <p>{"Reminders at optimum gaps before each appointment."}</p>
              </div>
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <p className={"num"}>{"Step 4"}</p>
                <h3>{"Front desk answers together"}</h3>
                <p>{"One inbox, roles and audit log for every reply."}</p>
              </div>
            </div>
          </div>
        </section>
        <section className={"section sec-lav"}>
          <div className={"wrap"}>
            <div className={"section-head"}>
              <p className={"kicker"}>{"Template ideas"}</p>
              <h2>{"Sample WhatsApp templates"}</h2>
              <p>
                {
                  "Swap your copy into these approved template shapes and reuse them all season."
                }
              </p>
            </div>
            <div className={"codebox"} style={{ marginBottom: "14px" }}>
              <pre>
                <span className={"cm"}>{"Appointment reminder"}</span>
                {
                  "\nReminder: {name} has an appointment with {doctor} on {date} at {time}. Reply 1 to confirm, 2 to reschedule."
                }
              </pre>
            </div>
            <div className={"codebox"} style={{ marginBottom: "14px" }}>
              <pre>
                <span className={"cm"}>{"Reports ready"}</span>
                {
                  "\nHello {name}, your {test} report from {lab} is ready. Download: {link}. Consultation on report: {slot}."
                }
              </pre>
            </div>
            <div className={"codebox"} style={{ marginBottom: "14px" }}>
              <pre>
                <span className={"cm"}>{"Camp invite"}</span>
                {
                  "\nFree check-up camp at {place} on {date}, {hours}. Bring your ID. Register early: {link}."
                }
              </pre>
            </div>
          </div>
        </section>
        <section className={"section sec-mint"}>
          <div className={"wrap"} style={{ textAlign: "center" }}>
            <h2>{"Keep appointments and patients on track"}</h2>
            <p className={"lead"} style={{ margin: "6px auto 0" }}>
              {
                "Set up reminder flows on the free plan — first camp broadcast today."
              }
            </p>
            <div className={"btn-row"} style={{ justifyContent: "center" }}>
              <a className={"btn btn-green"} href={"/app"}>
                {"Open WebPing →"}
              </a>
              <a className={"btn-ghost"} href={"/contact"}>
                {"Talk to us"}
              </a>
            </div>
          </div>
        </section>
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
