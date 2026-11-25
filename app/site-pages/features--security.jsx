import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export default function SitePage() {
  return (
    <>
      <meta charset={"utf-8"} />
      <meta
        name={"description"}
        content={
          "WebPing Security: practical security controls for WhatsApp operations—access, configuration, integrations, and team habits."
        }
      />
      <meta name={"robots"} content={"index, follow"} />
      <meta name={"theme-color"} content={"#25d366"} />
      <link
        rel={"canonical"}
        href={"https://webping.webpeaker.com/features/security"}
      />
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <link
        rel={"icon"}
        type={"image/png"}
        sizes={"32x32"}
        href={"/favicon-32x32.png"}
      />
      <link rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />
      <title>{"Security | WebPing Features"}</title>
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
      <link rel={"stylesheet"} href={"/assets/site.css?v=100"} />
      <link rel={"stylesheet"} href={"/assets/webping-leads.css?v=3"} />
      <SiteHeader />
      <section className={"fp-hero sec-hero"} id={"hero"}>
        {"\n  "}
        <div className={"wrap fp-hero-grid"}>
          {"\n    "}
          <div className={"fp-hero-copy fp-anim"}>
            {"\n      "}
            <p className={"fp-kicker"}>{"Trust"}</p>
            {"\n      "}
            <h1>{"Security controls for responsible WhatsApp operations"}</h1>
            {"\n      "}
            <p className={"fp-lead"}>
              {
                "Protect your workspace, customer conversations, team access, and connected systems—combining product controls with good operational habits."
              }
            </p>
            {"\n      "}
            <div className={"fp-cta-row"}>
              {"\n        "}
              <a className={"btn"} href={"/app"}>
                {"Start with WebPing"}
              </a>
              {"\n        "}
              <a className={"btn-ghost"} href={"/pricing"}>
                {"See pricing"}
              </a>
              {"\n      "}
            </div>
            {"\n      "}
            <ul className={"fp-trustline"}>
              <li>{"Role-based access"}</li>
              <li>{"Credential protection"}</li>
              <li>{"Safe configuration"}</li>
            </ul>
            {"\n    "}
          </div>
          {"\n    "}
          <div
            className={"sec-shield fp-anim d1"}
            aria-label={"Security overview preview"}
          >
            {"\n      "}
            <div className={"sec-shield-ring"}>
              {"\n        "}
              <svg viewBox={"0 0 120 120"} width={"140"} height={"140"}>
                {"\n          "}
                <circle
                  cx={"60"}
                  cy={"60"}
                  r={"52"}
                  fill={"none"}
                  stroke={"#e5e7eb"}
                  strokeWidth={"8"}
                />
                {"\n          "}
                <circle
                  cx={"60"}
                  cy={"60"}
                  r={"52"}
                  fill={"none"}
                  stroke={"#25d366"}
                  strokeWidth={"8"}
                  strokeDasharray={"327"}
                  strokeDashoffset={"40"}
                  strokeLinecap={"round"}
                  transform={"rotate(-90 60 60)"}
                />
                {"\n        "}
              </svg>
              {"\n        "}
              <div className={"sec-shield-core"}>
                {"\n          "}
                <svg
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"1.9"}
                  width={"34"}
                  height={"34"}
                >
                  <path d={"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"} />
                  <path d={"m9 12 2 2 4-4"} />
                </svg>
                {"\n          "}
                <b>{"Protected"}</b>
                {"\n        "}
              </div>
              {"\n      "}
            </div>
            {"\n      "}
            <div className={"sec-checks"}>
              {"\n        "}
              <div className={"sec-check"}>
                <i />
                <span>{"Role-based access enabled"}</span>
              </div>
              {"\n        "}
              <div className={"sec-check"}>
                <i />
                <span>{"Credentials scoped & stored safely"}</span>
              </div>
              {"\n        "}
              <div className={"sec-check"}>
                <i />
                <span>{"Config changes controlled"}</span>
              </div>
              {"\n        "}
              <div className={"sec-check"}>
                <i />
                <span>{"Integrations safeguarded"}</span>
              </div>
              {"\n        "}
              <div className={"sec-check"}>
                <i />
                <span>{"Regular access reviews"}</span>
              </div>
              {"\n      "}
            </div>
            {"\n    "}
          </div>
          {"\n  "}
        </div>
        {"\n"}
      </section>
      <section className={"fp-sec"} id={"overview"}>
        {"\n  "}
        <div className={"wrap fp-two"}>
          {"\n    "}
          <div className={"fp-anim"}>
            {"\n      "}
            <p className={"fp-label"}>{"02 · Feature overview"}</p>
            {"\n      "}
            <h2>{"Security as part of everyday operations"}</h2>
            {"\n      "}
            <p>
              {
                "Security in WebPing is about protecting your workspace, customer conversations, team access, and connected systems while operating WhatsApp workflows responsibly. It combines product controls with operational habits: role-based access, careful credential handling, safe configuration changes, and regular review."
              }
            </p>
            {"\n      "}
            <p>
              {
                "Rather than a single setting, security is a practice—supported by controls that help your team operate consistently and reduce risk."
              }
            </p>
            {"\n      "}
            <p className={"fp-muted"}>
              {
                "The result: safer handling of conversations, data, and integrations."
              }
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"fp-panel fp-anim d1"}>
            {"\n      "}
            <h3>{"Where security fits best"}</h3>
            {"\n      "}
            <ul className={"fp-checklist"}>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>{"Teams managing customer conversations and data"}</span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {"Businesses with multiple users and access levels"}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>{"Organizations using integrations and APIs"}</span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {"Teams needing accountable, reviewable operations"}
                </span>
              </li>
              {"\n      "}
            </ul>
            {"\n    "}
          </div>
          {"\n  "}
        </div>
        {"\n"}
      </section>
      <section className={"fp-sec alt"} id={"problem-solution"}>
        {"\n  "}
        <div className={"wrap"}>
          {"\n    "}
          <p className={"fp-label fp-anim"}>{"03 · Problem & solution"}</p>
          {"\n    "}
          <div className={"fp-two"}>
            {"\n      "}
            <article className={"fp-panel fp-anim"}>
              {"\n        "}
              <h2>{"The challenge"}</h2>
              {"\n        "}
              <p>
                {
                  "WhatsApp operations involve sensitive customer data, credentials, and configuration. Without clear controls, teams risk unauthorized access, accidental changes, and inconsistent handling."
                }
              </p>
              {"\n        "}
              <p className={"fp-muted"}>
                {"Security gaps often come from process, not just technology."}
              </p>
              {"\n      "}
            </article>
            {"\n      "}
            <article className={"fp-panel highlight fp-anim d1"}>
              {"\n        "}
              <h2>{"How WebPing solves it"}</h2>
              {"\n        "}
              <p>
                {
                  "Security controls combine role-based access, credential protection, safe configuration practices, and integration safeguards—supported by team habits like regular reviews and least-privilege access."
                }
              </p>
              {"\n        "}
              <p className={"fp-muted"}>
                {
                  "You get a practical, layered approach to protecting operations."
                }
              </p>
              {"\n      "}
            </article>
            {"\n    "}
          </div>
          {"\n  "}
        </div>
        {"\n"}
      </section>
      <section className={"fp-sec"} id={"capabilities"}>
        {"\n  "}
        <div className={"wrap"}>
          {"\n    "}
          <p className={"fp-label fp-anim"}>{"04 · Key capabilities"}</p>
          {"\n    "}
          <h2>{"Everything you need for safer operations"}</h2>
          {"\n    "}
          <div className={"fp-grid"}>
            {"\n      "}
            <article
              className={
                "fp-card fp-anim webping-card-enter motion-reduce:animate-none"
              }
            >
              <div className={"fp-ico"}>
                <svg
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"1.9"}
                >
                  <path d={"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"} />
                </svg>
              </div>
              <h3>{"Role-based access"}</h3>
              <p>
                {
                  "Limit who can view, reply, configure, and administer—based on responsibility."
                }
              </p>
            </article>
            {"\n      "}
            <article
              className={
                "fp-card fp-anim d1 webping-card-enter motion-reduce:animate-none"
              }
            >
              <div className={"fp-ico"}>
                <svg
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"1.9"}
                >
                  <rect x={"3"} y={"11"} width={"18"} height={"11"} rx={"2"} />
                  <path d={"M7 11V7a5 5 0 0 1 10 0v4"} />
                </svg>
              </div>
              <h3>{"Credential protection"}</h3>
              <p>
                {
                  "Handle API keys and integration secrets carefully and with appropriate access."
                }
              </p>
            </article>
            {"\n      "}
            <article
              className={
                "fp-card fp-anim d2 webping-card-enter motion-reduce:animate-none"
              }
            >
              <div className={"fp-ico"}>
                <svg
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"1.9"}
                >
                  <path d={"M12 20h9"} />
                  <path d={"M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"} />
                </svg>
              </div>
              <h3>{"Safe configuration changes"}</h3>
              <p>
                {"Control who can change settings, automations, and templates."}
              </p>
            </article>
            {"\n      "}
            <article
              className={
                "fp-card fp-anim webping-card-enter motion-reduce:animate-none"
              }
            >
              <div className={"fp-ico"}>
                <svg
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"1.9"}
                >
                  <path d={"m16 18 6-6-6-6"} />
                  <path d={"m8 6-6 6 6 6"} />
                </svg>
              </div>
              <h3>{"Integration safeguards"}</h3>
              <p>
                {"Protect boundaries between WebPing and connected systems."}
              </p>
            </article>
            {"\n      "}
            <article
              className={
                "fp-card fp-anim d1 webping-card-enter motion-reduce:animate-none"
              }
            >
              <div className={"fp-ico"}>
                <svg
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"1.9"}
                >
                  <path d={"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"} />
                  <circle cx={"9"} cy={"7"} r={"4"} />
                  <path d={"M23 21v-2a4 4 0 0 0-3-3.87"} />
                </svg>
              </div>
              <h3>{"Team process controls"}</h3>
              <p>
                {"Establish habits like reviews, ownership, and escalation."}
              </p>
            </article>
            {"\n      "}
            <article
              className={
                "fp-card fp-anim d2 webping-card-enter motion-reduce:animate-none"
              }
            >
              <div className={"fp-ico"}>
                <svg
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"1.9"}
                >
                  <path d={"M21 12a9 9 0 1 1-6.219-8.56"} />
                </svg>
              </div>
              <h3>{"Regular review"}</h3>
              <p>
                {"Audit access and configuration to keep security current."}
              </p>
            </article>
            {"\n    "}
          </div>
          {"\n  "}
        </div>
        {"\n"}
      </section>
      <section className={"fp-sec alt"} id={"how-it-works"}>
        {"\n  "}
        <div className={"wrap fp-two"}>
          {"\n    "}
          <div className={"fp-anim"}>
            {"\n      "}
            <p className={"fp-label"}>{"05 · How it works"}</p>
            {"\n      "}
            <h2>{"From risk awareness to protected operations"}</h2>
            {"\n      "}
            <p className={"fp-muted"}>
              {"A practical approach to securing WhatsApp workflows."}
            </p>
            {"\n      "}
            <div className={"fp-panel"} style={{ marginTop: "14px" }}>
              {"\n        "}
              <h3>{"Best-practice checklist"}</h3>
              {"\n        "}
              <ul className={"fp-checklist"}>
                {"\n          "}
                <li>
                  <span className={"fp-tick"}>{"✓"}</span>
                  <span>{"Apply least-privilege access across the team"}</span>
                </li>
                {"\n          "}
                <li>
                  <span className={"fp-tick"}>{"✓"}</span>
                  <span>{"Protect and scope credentials carefully"}</span>
                </li>
                {"\n          "}
                <li>
                  <span className={"fp-tick"}>{"✓"}</span>
                  <span>{"Review access and configuration regularly"}</span>
                </li>
                {"\n        "}
              </ul>
              {"\n      "}
            </div>
            {"\n    "}
          </div>
          {"\n    "}
          <ol className={"fp-steps"}>
            {"\n      "}
            <li className={"fp-step fp-anim"}>
              <span className={"fp-step-n"}>{"1"}</span>
              <div>
                <h3>{"Identify sensitive areas"}</h3>
                <p>
                  {
                    "Pinpoint conversations, data, credentials, and settings that need protection."
                  }
                </p>
                <p className={"fp-muted"}>{"Know what matters most."}</p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d1"}>
              <span className={"fp-step-n"}>{"2"}</span>
              <div>
                <h3>{"Apply role-based access"}</h3>
                <p>
                  {"Give each teammate only the access their role requires."}
                </p>
                <p className={"fp-muted"}>{"Least privilege reduces risk."}</p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d2"}>
              <span className={"fp-step-n"}>{"3"}</span>
              <div>
                <h3>{"Protect credentials"}</h3>
                <p>{"Scope and safeguard API keys and integration secrets."}</p>
                <p className={"fp-muted"}>
                  {"Controlled access prevents misuse."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim"}>
              <span className={"fp-step-n"}>{"4"}</span>
              <div>
                <h3>{"Control configuration"}</h3>
                <p>
                  {"Limit who can change settings, automations, and templates."}
                </p>
                <p className={"fp-muted"}>
                  {"Prevents accidental disruption."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d1"}>
              <span className={"fp-step-n"}>{"5"}</span>
              <div>
                <h3>{"Safeguard integrations"}</h3>
                <p>
                  {"Protect boundaries between WebPing and connected systems."}
                </p>
                <p className={"fp-muted"}>{"Reduces external risk."}</p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d2"}>
              <span className={"fp-step-n"}>{"6"}</span>
              <div>
                <h3>{"Review & improve"}</h3>
                <p>
                  {
                    "Audit access and configuration regularly to keep security current."
                  }
                </p>
                <p className={"fp-muted"}>{"Continuous protection."}</p>
              </div>
            </li>
            {"\n    "}
          </ol>
          {"\n  "}
        </div>
        {"\n"}
      </section>
      <section className={"fp-sec"} id={"showcase"}>
        {"\n  "}
        <div className={"wrap"}>
          {"\n    "}
          <p className={"fp-label fp-anim"}>{"06 · Product showcase"}</p>
          {"\n    "}
          <div className={"fp-showcase"}>
            {"\n      "}
            <div className={"fp-shot fp-anim"}>
              {"\n        "}
              <div className={"sec-shield fp-float"}>
                {"\n          "}
                <div className={"sec-shield-ring"}>
                  {"\n            "}
                  <svg viewBox={"0 0 120 120"} width={"120"} height={"120"}>
                    {"\n              "}
                    <circle
                      cx={"60"}
                      cy={"60"}
                      r={"52"}
                      fill={"none"}
                      stroke={"#e5e7eb"}
                      strokeWidth={"8"}
                    />
                    {"\n              "}
                    <circle
                      cx={"60"}
                      cy={"60"}
                      r={"52"}
                      fill={"none"}
                      stroke={"#25d366"}
                      strokeWidth={"8"}
                      strokeDasharray={"327"}
                      strokeDashoffset={"65"}
                      strokeLinecap={"round"}
                      transform={"rotate(-90 60 60)"}
                    />
                    {"\n            "}
                  </svg>
                  {"\n            "}
                  <div className={"sec-shield-core small"}>
                    {"\n              "}
                    <svg
                      viewBox={"0 0 24 24"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"1.9"}
                      width={"26"}
                      height={"26"}
                    >
                      <path d={"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"} />
                    </svg>
                    {"\n              "}
                    <b>{"Secured"}</b>
                    {"\n            "}
                  </div>
                  {"\n          "}
                </div>
                {"\n          "}
                <div className={"sec-checks compact"}>
                  {"\n            "}
                  <div className={"sec-check"}>
                    <i />
                    <span>{"Access scoped"}</span>
                  </div>
                  {"\n            "}
                  <div className={"sec-check"}>
                    <i />
                    <span>{"Credentials protected"}</span>
                  </div>
                  {"\n            "}
                  <div className={"sec-check"}>
                    <i />
                    <span>{"Config controlled"}</span>
                  </div>
                  {"\n          "}
                </div>
                {"\n        "}
              </div>
              {"\n      "}
            </div>
            {"\n      "}
            <div className={"fp-shot-copy fp-anim d1"}>
              {"\n        "}
              <h2>{"Layered protection for your WhatsApp operations"}</h2>
              {"\n        "}
              <p>
                {
                  "Security combines product controls with team habits—so protection is built into how you work, not bolted on."
                }
              </p>
              {"\n        "}
              <div className={"fp-shot-list"}>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Access control"}</b>
                  <span>{"Role-based permissions limit exposure."}</span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Credential safety"}</b>
                  <span>{"Scoped, protected integration secrets."}</span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Configuration guardrails"}</b>
                  <span>{"Controlled changes reduce risk."}</span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Ongoing review"}</b>
                  <span>{"Regular audits keep security current."}</span>
                </div>
                {"\n        "}
              </div>
              {"\n      "}
            </div>
            {"\n    "}
          </div>
          {"\n  "}
        </div>
        {"\n"}
      </section>
      <section className={"fp-sec alt"} id={"benefits"}>
        {"\n  "}
        <div className={"wrap fp-two"}>
          {"\n    "}
          <div className={"fp-anim"}>
            {"\n      "}
            <p className={"fp-label"}>{"07 · Benefits"}</p>
            {"\n      "}
            <h2>{"Why teams prioritize security"}</h2>
            {"\n      "}
            <p>{"Protect customer trust and operational integrity."}</p>
            {"\n    "}
          </div>
          {"\n    "}
          <ul className={"fp-checklist big fp-anim d1"}>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Protect customer data:"}</strong>
                {" conversations and contact info stay safeguarded."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Reduce risk:"}</strong>
                {" least-privilege access and controlled changes."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Build trust:"}</strong>
                {" responsible handling strengthens customer confidence."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Accountable operations:"}</strong>
                {" clear access boundaries and reviews."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Safer integrations:"}</strong>
                {" protected credentials and boundaries."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Continuous protection:"}</strong>
                {" regular reviews keep security current."}
              </span>
            </li>
            {"\n    "}
          </ul>
          {"\n  "}
        </div>
        {"\n"}
      </section>
      <section className={"fp-sec"} id={"use-cases"}>
        {"\n  "}
        <div className={"wrap"}>
          {"\n    "}
          <p className={"fp-label fp-anim"}>{"08 · Use cases"}</p>
          {"\n    "}
          <h2>{"Security for real teams"}</h2>
          {"\n    "}
          <div className={"fp-cases"}>
            {"\n      "}
            <article className={"fp-case fp-anim"}>
              <h3>{"Multi-user workspaces"}</h3>
              <p>
                {
                  "Control access across agents, marketers, and admins to reduce risk."
                }
              </p>
              <p className={"fp-muted"}>{"Outcome: safer collaboration."}</p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim d1"}>
              <h3>{"Integration-heavy setups"}</h3>
              <p>
                {
                  "Protect credentials and boundaries when connecting external systems."
                }
              </p>
              <p className={"fp-muted"}>
                {"Outcome: secure, reliable integrations."}
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim"}>
              <h3>{"Regulated or sensitive data"}</h3>
              <p>
                {
                  "Apply least-privilege access and regular reviews for sensitive conversations."
                }
              </p>
              <p className={"fp-muted"}>
                {"Outcome: responsible data handling."}
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim d1"}>
              <h3>{"Growing teams"}</h3>
              <p>
                {"Onboard new members with appropriate access from day one."}
              </p>
              <p className={"fp-muted"}>
                {"Outcome: scale without security gaps."}
              </p>
            </article>
            {"\n    "}
          </div>
          {"\n  "}
        </div>
        {"\n"}
      </section>
      <section className={"fp-sec alt"} id={"integrations"}>
        {"\n  "}
        <div className={"wrap"}>
          {"\n    "}
          <p className={"fp-label fp-anim"}>{"09 · Integrations"}</p>
          {"\n    "}
          <h2>{"Connected to the rest of WebPing"}</h2>
          {"\n    "}
          <div className={"fp-grid sm"}>
            {"\n      "}
            <article className={"fp-mini fp-anim"}>
              <div className={"fp-ico sm"}>
                <svg
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"1.9"}
                >
                  <path d={"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"} />
                </svg>
              </div>
              <div>
                <h3>{"Team roles"}</h3>
                <p>{"Enforce least-privilege access across the workspace."}</p>
              </div>
            </article>
            {"\n      "}
            <article className={"fp-mini fp-anim d1"}>
              <div className={"fp-ico sm"}>
                <svg
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"1.9"}
                >
                  <path d={"m16 18 6-6-6-6"} />
                  <path d={"m8 6-6 6 6 6"} />
                </svg>
              </div>
              <div>
                <h3>{"API & webhooks"}</h3>
                <p>{"Protect credentials and integration boundaries."}</p>
              </div>
            </article>
            {"\n      "}
            <article className={"fp-mini fp-anim"}>
              <div className={"fp-ico sm"}>
                <svg
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"1.9"}
                >
                  <path
                    d={
                      "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    }
                  />
                </svg>
              </div>
              <div>
                <h3>{"Shared inbox"}</h3>
                <p>{"Safeguard conversations with accountable workflows."}</p>
              </div>
            </article>
            {"\n      "}
            <article className={"fp-mini fp-anim d1"}>
              <div className={"fp-ico sm"}>
                <svg
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"1.9"}
                >
                  <path d={"M3 3v18h18"} />
                  <path d={"m7 14 4-4 3 3 5-6"} />
                </svg>
              </div>
              <div>
                <h3>{"Dashboard"}</h3>
                <p>{"Review operational signals and configuration health."}</p>
              </div>
            </article>
            {"\n    "}
          </div>
          {"\n  "}
        </div>
        {"\n"}
      </section>
      <section className={"fp-sec"} id={"trust"}>
        {"\n  "}
        <div className={"wrap fp-two"}>
          {"\n    "}
          <div className={"fp-anim"}>
            {"\n      "}
            <p className={"fp-label"}>{"10 · Trust & security"}</p>
            {"\n      "}
            <h2>{"Built for responsible WhatsApp operations"}</h2>
            {"\n      "}
            <p>
              {
                "WebPing supports structured access, accountable workflows, and compliant messaging practices so teams can operate with confidence."
              }
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"fp-panel fp-anim d1"}>
            {"\n      "}
            <ul className={"fp-checklist"}>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Role-aware access:"}</strong>
                  {" controlled workspace actions by responsibility."}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Official platform alignment:"}</strong>
                  {" workflows follow WhatsApp policies."}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Operational visibility:"}</strong>
                  {" teams, owners, and outcomes are trackable."}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Secure credentials:"}</strong>
                  {" integration secrets handled by design."}
                </span>
              </li>
              {"\n      "}
            </ul>
            {"\n    "}
          </div>
          {"\n  "}
        </div>
        {"\n"}
      </section>
      <section className={"fp-sec alt"} id={"faq"}>
        {"\n  "}
        <div className={"wrap fp-two"}>
          {"\n    "}
          <div className={"fp-anim"}>
            {"\n      "}
            <p className={"fp-label"}>{"11 · FAQs"}</p>
            {"\n      "}
            <h2>{"Security FAQs"}</h2>
            {"\n      "}
            <p className={"fp-muted"}>
              {"Common questions about protecting WhatsApp operations."}
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"fp-faqs fp-anim d1"}>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"What security controls does WebPing offer?"}</summary>
              <p>
                {
                  "Role-based access, credential protection, safe configuration practices, integration safeguards, and regular review support."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"How do I protect API keys?"}</summary>
              <p>
                {
                  "Use scoped credentials, limit access to trusted people, and avoid sharing secrets broadly."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Can I control who changes automations?"}</summary>
              <p>
                {
                  "Yes. Configuration changes can be limited by role to reduce accidental or unauthorized edits."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"How often should I review access?"}</summary>
              <p>
                {"Regularly—especially after team changes or new integrations."}
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Does WebPing follow WhatsApp policies?"}</summary>
              <p>
                {
                  "Yes. Workflows are designed to align with WhatsApp’s messaging and platform policies."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Is security only a technical concern?"}</summary>
              <p>
                {
                  "No. It combines product controls with team habits like reviews and least-privilege access."
                }
              </p>
            </details>
            {"\n    "}
          </div>
          {"\n  "}
        </div>
        {"\n"}
      </section>
      <section className={"fp-final"} id={"cta"}>
        {"\n  "}
        <div className={"wrap fp-final-inner"}>
          {"\n    "}
          <div className={"fp-final-copy fp-anim"}>
            {"\n      "}
            <p className={"fp-label on-dark"}>{"12 · Get started"}</p>
            {"\n      "}
            <h2>{"Ready to operate WhatsApp with confidence?"}</h2>
            {"\n      "}
            <p>
              {
                "Protect your workspace, conversations, and integrations with practical security controls and team habits."
              }
            </p>
            {"\n      "}
            <ul className={"fp-final-points"}>
              {"\n        "}
              <li>{"Role-based access"}</li>
              {"\n        "}
              <li>{"Credential protection"}</li>
              {"\n        "}
              <li>{"Safe configuration & reviews"}</li>
              {"\n      "}
            </ul>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"fp-final-actions fp-anim d1"}>
            {"\n      "}
            <a className={"btn"} href={"/app"}>
              {"Try WebPing"}
            </a>
            {"\n      "}
            <a className={"btn-ghost light"} href={"/pricing"}>
              {"View pricing"}
            </a>
            {"\n      "}
            <a className={"fp-link-light"} href={"/contact"}>
              {"Talk to our team →"}
            </a>
            {"\n    "}
          </div>
          {"\n  "}
        </div>
        {"\n"}
      </section>
      <section className={"fp-sec"}>
        <div className={"wrap"}>
          <p className={"fp-label"}>{"Explore more"}</p>
          <div className={"fp-related"}>
            <a className={"fp-rel"} href={"/features/team-roles"}>
              <b>{"Team roles"}</b>
              <span>{"Access control for collaboration."}</span>
            </a>
            <a className={"fp-rel"} href={"/features/api"}>
              <b>{"API & webhooks"}</b>
              <span>{"Secure integration practices."}</span>
            </a>
            <a className={"fp-rel"} href={"/features/dashboard"}>
              <b>{"Dashboard"}</b>
              <span>{"Operational visibility."}</span>
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
      <script defer={true} src={"/assets/site.js?v=91"} />
    </>
  );
}
