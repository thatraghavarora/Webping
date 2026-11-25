import SiteHeader from "../components/SiteHeader";
export default function SitePage() {
  return (
    <>
      <meta charset={"utf-8"} />
      <meta
        name={"description"}
        content={
          "Delete your WebPing account and data: self-service or email request to privacy@webpeaker.com. What is deleted and how long it takes."
        }
      />
      <meta name={"robots"} content={"index, follow"} />
      <meta name={"theme-color"} content={"#25d366"} />
      <link
        rel={"canonical"}
        href={"https://webping.webpeaker.com/data-deletion/"}
      />
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <link
        rel={"icon"}
        type={"image/png"}
        sizes={"32x32"}
        href={"/favicon-32x32.png"}
      />
      <link rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />
      <title>{"User Data Deletion Instructions | WebPing"}</title>
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
      <style>
        {
          "\n.hof-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}\n.hof-card{background:#fff;border:1px solid var(--line,#e8e4dc);border-radius:22px;padding:24px;box-shadow:0 1px 2px rgba(23,23,23,.03)}\n.hof-card h2,.hof-card h3{margin:0 0 10px;font-size:1.08rem;letter-spacing:-.01em}\n.hof-card p{margin:0 0 .8em;color:var(--sub,#57534e);line-height:1.65;font-size:.96rem}\n.hof-card ul{margin:0 0 .8em 1.2em;color:var(--sub,#57534e);line-height:1.7;font-size:.95rem}\n.hof-ico{width:42px;height:42px;min-width:42px;border-radius:13px;display:inline-flex;align-items:center;justify-content:center;background:#f7fbf8;border:1px solid rgba(14,159,87,.14);color:var(--green-ink);margin-bottom:12px}\n@media(max-width:760px){.hof-grid{grid-template-columns:1fr}}\n"
        }
      </style>
      <SiteHeader />
      <main>
        {"\n"}
        <section className={"page-head"}>
          <p className={"kicker"}>{"Privacy"}</p>
          <h1>{"User Data Deletion"}</h1>
          <p style={{ maxWidth: "660px" }}>
            {
              "You can delete your WebPing account and all associated data at any time. Here is exactly how deletion works."
            }
          </p>
        </section>
        {"\n\n"}
        <section className={"section no-b"}>
          <div className={"wrap"}>
            <div style={{ maxWidth: "860px" }}>
              {"\n  "}
              <h2>{"How to delete your account"}</h2>
              {"\n  "}
              <div className={"hof-grid"}>
                {"\n    "}
                <div
                  className={
                    "hof-card webping-card-enter motion-reduce:animate-none"
                  }
                >
                  {"\n      "}
                  <div className={"hof-ico"}>
                    <svg
                      viewBox={"0 0 24 24"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"1.9"}
                      strokeLinecap={"round"}
                      strokeLinejoin={"round"}
                      width={"20"}
                      height={"20"}
                      aria-hidden={"true"}
                    >
                      <rect
                        x={"3"}
                        y={"4"}
                        width={"18"}
                        height={"16"}
                        rx={"2"}
                      />
                      <path d={"M16 4v16"} />
                      <path d={"M12 8l-3 3 3 3"} />
                    </svg>
                  </div>
                  {"\n      "}
                  <h3>{"Option 1 — Self-service (recommended)"}</h3>
                  {"\n      "}
                  <ul className={"plain"}>
                    {"\n        "}
                    <li>
                      {"Sign in at "}
                      <a href={"/app/login"}>{"app"}</a>
                    </li>
                    {"\n        "}
                    <li>
                      {"Go to "}
                      <b>{"Settings → Workspace → Delete account"}</b>
                    </li>
                    {"\n        "}
                    <li>{"Confirm deletion in the dialog"}</li>
                    {"\n      "}
                  </ul>
                  {"\n    "}
                </div>
                {"\n    "}
                <div
                  className={
                    "hof-card webping-card-enter motion-reduce:animate-none"
                  }
                >
                  {"\n      "}
                  <div className={"hof-ico"}>
                    <svg
                      viewBox={"0 0 24 24"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"1.9"}
                      strokeLinecap={"round"}
                      strokeLinejoin={"round"}
                      width={"20"}
                      height={"20"}
                      aria-hidden={"true"}
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
                  </div>
                  {"\n      "}
                  <h3>{"Option 2 — By email request"}</h3>
                  {"\n      "}
                  <ul className={"plain"}>
                    {"\n        "}
                    <li>
                      {"Email "}
                      <b>
                        <a href={"mailto:privacy@webpeaker.com"}>
                          {"privacy@webpeaker.com"}
                        </a>
                      </b>
                      {" with subject "}
                      <code>{"Data Deletion Request"}</code>
                    </li>
                    {"\n        "}
                    <li>
                      {
                        "Send from the email address registered to your workspace"
                      }
                    </li>
                    {"\n        "}
                    <li>
                      {"We verify ownership and delete your workspace and data"}
                    </li>
                    {"\n      "}
                  </ul>
                  {"\n    "}
                </div>
                {"\n  "}
              </div>
              {"\n\n  "}
              <h2 style={{ marginTop: "38px" }}>{"What is deleted"}</h2>
              {"\n  "}
              <ul className={"plain"} style={{ lineHeight: "1.8" }}>
                {"\n    "}
                <li>{"Your user account, profile and login credentials"}</li>
                {"\n    "}
                <li>
                  {
                    "Your workspace: contacts, conversations, message broadcasts, campaigns, templates and files you created"
                  }
                </li>
                {"\n    "}
                <li>{"Stored media, API keys, and AI configuration"}</li>
                {"\n    "}
                <li>
                  {
                    "WhatsApp connection data including access tokens and webhook verify tokens (revoked and wiped) via "
                  }
                  <code>{"whatsapp_config"}</code>
                </li>
                {"\n    "}
                <li>
                  {
                    "Your WhatsApp Business Platform data on Meta’s systems is not stored by us; reach out to Meta for content managed by Meta/WABA"
                  }
                </li>
                {"\n  "}
              </ul>
              {"\n\n  "}
              <h2 style={{ marginTop: "38px" }}>
                {"Turnaround & recovery window"}
              </h2>
              {"\n  "}
              <p style={{ color: "var(--sub,#57534e)", lineHeight: "1.7" }}>
                {"Deletion is processed within "}
                <b>{"72 hours"}</b>
                {
                  " of your request (self-service deletions are immediate). A temporary recovery window of up to "
                }
                <b>{"30 days"}</b>
                {
                  " applies to backups and compliance copies, after which all data is permanently purged."
                }
              </p>
              {"\n\n  "}
              <h2 style={{ marginTop: "38px" }}>{"Contact"}</h2>
              {"\n  "}
              <p style={{ color: "var(--sub,#57534e)" }}>
                {"Questions or data subject requests (GDPR/DPDP): "}
                <b>
                  <a href={"mailto:privacy@webpeaker.com"}>
                    {"privacy@webpeaker.com"}
                  </a>
                </b>
              </p>
              {"\n"}
            </div>
          </div>
        </section>
        {"\n"}
        <footer className={"site-foot"}>
          <div className={"wrap"}>
            {"\n  "}
            <div className={"foot-cta"}>
              {"\n    "}
              <div>
                {"\n      "}
                <p className={"foot-kicker"}>{"Start with WebPing"}</p>
                {"\n      "}
                <h2>
                  {
                    "Run WhatsApp conversations, campaigns, and follow-ups in one place."
                  }
                </h2>
                {"\n      "}
                <p>
                  {
                    "Official WhatsApp Business Platform. Shared inbox, broadcasts, automations, AI reply drafts, and sales workflow for your team."
                  }
                </p>
                {"\n    "}
              </div>
              {"\n    "}
              <div className={"foot-cta-actions"}>
                {"\n      "}
                <a className={"btn"} href={"/app"}>
                  {"Open the app"}
                </a>
                {"\n      "}
                <a className={"btn btn-dark"} href={"/contact"}>
                  {"Talk to sales"}
                </a>
                {"\n    "}
              </div>
              {"\n  "}
            </div>
            {"\n  "}
            <div className={"foot-top"}>
              {"\n    "}
              <div className={"foot-brandcol"}>
                {"\n      "}
                <a className={"foot-brand"} href={"/"}>
                  <img
                    src={"/favicon.svg"}
                    alt={""}
                    width={"30"}
                    height={"30"}
                  />
                  {"WebPing"}
                  <span className={"foot-live"}>
                    <i />
                    {"online"}
                  </span>
                </a>
                {"\n      "}
                <p>
                  {
                    "The WhatsApp CRM for teams that need one number, clear ownership, compliant messaging, and faster replies without switching between phones and tools."
                  }
                </p>
                {"\n      "}
                <div className={"foot-contact"}>
                  {"\n        "}
                  <a
                    href={"https://wa.me/918696778246"}
                    target={"_blank"}
                    rel={"noopener"}
                  >
                    <span className={"fc-ico wa"}>
                      <svg
                        viewBox={"0 0 24 24"}
                        fill={"none"}
                        stroke={"currentColor"}
                        strokeWidth={"1.9"}
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        aria-hidden={"true"}
                      >
                        <path
                          d={
                            "M21 11.5a8.4 8.4 0 0 1-8.5 8.4 8.7 8.7 0 0 1-3.8-.9L3 20l1-5.1a8.2 8.2 0 0 1-1-4A8.4 8.4 0 0 1 11.5 3a8.4 8.4 0 0 1 9.5 8.5z"
                          }
                        />
                        <path d={"M8.3 10.7c.5 1.7 2 3.4 3.9 4.3"} />
                      </svg>
                    </span>
                    <span>
                      <b>{"+91 86967 78246"}</b>
                      <span className={"fc-sub"}>{"WhatsApp chat"}</span>
                    </span>
                  </a>
                  {"\n        "}
                  <a href={"mailto:webping@webpeaker.com"}>
                    <span className={"fc-ico mail"}>
                      <svg
                        viewBox={"0 0 24 24"}
                        fill={"none"}
                        stroke={"currentColor"}
                        strokeWidth={"1.9"}
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        aria-hidden={"true"}
                      >
                        <rect
                          x={"3"}
                          y={"5"}
                          width={"18"}
                          height={"14"}
                          rx={"2"}
                        />
                        <path d={"m3 7 9 6 9-6"} />
                      </svg>
                    </span>
                    <span>
                      <b>{"webping@webpeaker.com"}</b>
                      <span className={"fc-sub"}>{"Sales & support"}</span>
                    </span>
                  </a>
                  {"\n        "}
                  <span className={"fc-static"}>
                    <span className={"fc-ico pin"}>
                      <svg
                        viewBox={"0 0 24 24"}
                        fill={"none"}
                        stroke={"currentColor"}
                        strokeWidth={"1.9"}
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        aria-hidden={"true"}
                      >
                        <path
                          d={
                            "M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11z"
                          }
                        />
                        <circle cx={"12"} cy={"10"} r={"2.6"} />
                      </svg>
                    </span>
                    <span>
                      <b>{"Jaipur, Rajasthan"}</b>
                      <span className={"fc-sub"}>{"India"}</span>
                    </span>
                  </span>
                  {"\n      "}
                </div>
                {"\n      "}
                <div className={"foot-badges"}>
                  <span>{"Official WhatsApp Business API"}</span>
                  <span>{"Cloud API ready"}</span>
                  <span>{"Self-hostable"}</span>
                </div>
                {"\n    "}
              </div>
              {"\n    "}
              <div className={"foot-cols"}>
                {"\n      "}
                <div>
                  <h4>{"Product"}</h4>
                  <ul>
                    <li>
                      <a href={"/features"}>{"Features"}</a>
                    </li>
                    <li>
                      <a href={"/pricing"}>{"Pricing"}</a>
                    </li>
                    <li>
                      <a href={"/solutions"}>{"Solutions"}</a>
                    </li>
                    <li>
                      <a href={"/industries"}>{"Industries"}</a>
                    </li>
                    <li>
                      <a href={"/free-tools"}>{"Free tools"}</a>
                    </li>
                    <li>
                      <a href={"/app"}>{"Open the app"}</a>
                    </li>
                  </ul>
                </div>
                {"\n      "}
                <div>
                  <h4>{"Features"}</h4>
                  <ul>
                    <li>
                      <a href={"/features/shared-inbox"}>{"Shared inbox"}</a>
                    </li>
                    <li>
                      <a href={"/features/broadcasts"}>{"Broadcasts"}</a>
                    </li>
                    <li>
                      <a href={"/features/automations"}>{"Automations"}</a>
                    </li>
                    <li>
                      <a href={"/features/ai-assistant"}>{"Reply drafts"}</a>
                    </li>
                    <li>
                      <a href={"/features/sales-pipelines"}>
                        {"Sales pipelines"}
                      </a>
                    </li>
                  </ul>
                </div>
                {"\n      "}
                <div>
                  <h4>{"Resources"}</h4>
                  <ul>
                    <li>
                      <a href={"/docs"}>{"Documentation"}</a>
                    </li>
                    <li>
                      <a href={"/help"}>{"Help centre"}</a>
                    </li>
                    <li>
                      <a href={"/blog"}>{"Blog"}</a>
                    </li>
                    <li>
                      <a href={"/about"}>{"About"}</a>
                    </li>
                    <li>
                      <a href={"/contact"}>{"Contact"}</a>
                    </li>
                  </ul>
                </div>
                {"\n      "}
                <div>
                  <h4>{"Legal"}</h4>
                  <ul>
                    <li>
                      <a href={"/privacy"}>{"Privacy policy"}</a>
                    </li>
                    <li>
                      <a href={"/terms"}>{"Terms"}</a>
                    </li>
                    <li>
                      <a href={"/refund"}>{"Refund policy"}</a>
                    </li>
                    <li>
                      <a href={"/security"}>{"Security"}</a>
                    </li>
                    <li>
                      <a href={"/vulnerability-disclosure-program"}>
                        {"Vulnerability disclosure"}
                      </a>
                    </li>
                    <li>
                      <a href={"/data-deletion"}>{"Data deletion"}</a>
                    </li>
                    <li>
                      <a href={"/sitemap.xml"}>{"Sitemap"}</a>
                    </li>
                    <li>
                      <a href={"/affiliate"}>{"Affiliate program"}</a>
                    </li>
                  </ul>
                </div>
                {"\n    "}
              </div>
              {"\n  "}
            </div>
            {"\n  "}
            <div className={"foot-base"}>
              {"\n    "}
              <span>{"© 2026 Webpeaker. All rights reserved."}</span>
              {"\n    "}
              <span>
                {
                  "Built on the WhatsApp Business Platform. WhatsApp is a trademark of Meta."
                }
              </span>
              {"\n    "}
              <a className={"foot-toplink"} href={"#"}>
                {"Back to top "}
                <span aria-hidden={"true"}>{"↑"}</span>
              </a>
              {"\n  "}
            </div>
            {"\n"}
          </div>
        </footer>
        {"\n\n"}
        <script defer={true} src={"/assets/site.js?v=80"} />
        {"\n"}
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
        {"\n"}
        <script defer={true} src={"/assets/webping-leads.js?v=3"} />
        {"\n\n\n"}
      </main>
    </>
  );
}
