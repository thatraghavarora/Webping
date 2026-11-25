import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export default function SitePage() {
  return (
    <>
      <meta charset={"utf-8"} />
      <meta
        name={"description"}
        content={
          "WebPing Team Roles & Permissions: role-based access control for safe collaboration across inbox, campaigns, settings, and integrations."
        }
      />
      <meta name={"robots"} content={"index, follow"} />
      <meta name={"theme-color"} content={"#25d366"} />
      <link
        rel={"canonical"}
        href={"https://webping.webpeaker.com/features/team-roles"}
      />
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <link
        rel={"icon"}
        type={"image/png"}
        sizes={"32x32"}
        href={"/favicon-32x32.png"}
      />
      <link rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />
      <title>{"Team Roles & Permissions | WebPing Features"}</title>
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
      <section className={"fp-hero tr-hero"} id={"hero"}>
        {"\n  "}
        <div className={"wrap fp-hero-grid"}>
          {"\n    "}
          <div className={"fp-hero-copy fp-anim"}>
            {"\n      "}
            <p className={"fp-kicker"}>{"Control"}</p>
            {"\n      "}
            <h1>{"Team roles that keep collaboration safe"}</h1>
            {"\n      "}
            <p className={"fp-lead"}>
              {
                "Manage who can access and change parts of WebPing. As teams grow, not everyone needs the same level of access—agents, marketers, and admins each get what they need."
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
              <li>{"Role-based access control"}</li>
              <li>{"Operational separation"}</li>
              <li>{"Scalable collaboration"}</li>
            </ul>
            {"\n    "}
          </div>
          {"\n    "}
          <div
            className={"tr-matrix fp-anim d1"}
            aria-label={"Permissions matrix preview"}
          >
            {"\n      "}
            <div className={"tr-top"}>
              <b>{"Access matrix"}</b>
              <span className={"fp-badge"}>{"Roles"}</span>
            </div>
            {"\n      "}
            <table className={"tr-table"}>
              {"\n        "}
              <thead>
                <tr>
                  <th>{"Capability"}</th>
                  <th>{"Agent"}</th>
                  <th>{"Marketer"}</th>
                  <th>{"Admin"}</th>
                </tr>
              </thead>
              {"\n        "}
              <tbody>
                {"\n          "}
                <tr>
                  <td>{"View inbox"}</td>
                  <td className={"tr-yes"}>{"✓"}</td>
                  <td className={"tr-no"}>{"—"}</td>
                  <td className={"tr-yes"}>{"✓"}</td>
                </tr>
                {"\n          "}
                <tr>
                  <td>{"Reply to chats"}</td>
                  <td className={"tr-yes"}>{"✓"}</td>
                  <td className={"tr-no"}>{"—"}</td>
                  <td className={"tr-yes"}>{"✓"}</td>
                </tr>
                {"\n          "}
                <tr>
                  <td>{"Send broadcasts"}</td>
                  <td className={"tr-no"}>{"—"}</td>
                  <td className={"tr-yes"}>{"✓"}</td>
                  <td className={"tr-yes"}>{"✓"}</td>
                </tr>
                {"\n          "}
                <tr>
                  <td>{"Manage automations"}</td>
                  <td className={"tr-no"}>{"—"}</td>
                  <td className={"tr-yes"}>{"✓"}</td>
                  <td className={"tr-yes"}>{"✓"}</td>
                </tr>
                {"\n          "}
                <tr>
                  <td>{"Change settings"}</td>
                  <td className={"tr-no"}>{"—"}</td>
                  <td className={"tr-no"}>{"—"}</td>
                  <td className={"tr-yes"}>{"✓"}</td>
                </tr>
                {"\n          "}
                <tr>
                  <td>{"Manage users"}</td>
                  <td className={"tr-no"}>{"—"}</td>
                  <td className={"tr-no"}>{"—"}</td>
                  <td className={"tr-yes"}>{"✓"}</td>
                </tr>
                {"\n        "}
              </tbody>
              {"\n      "}
            </table>
            {"\n      "}
            <div className={"tr-legend"}>
              <span>
                <i className={"tr-yes"} />
                {"Allowed"}
              </span>
              <span>
                <i className={"tr-no"} />
                {"Not allowed"}
              </span>
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
            <h2>{"Right access for every teammate"}</h2>
            {"\n      "}
            <p>
              {
                "Team Roles & Permissions help you manage who can access and change parts of WebPing. As teams grow, not everyone should have the same level of access. Agents may need inbox access, marketers may manage broadcasts, and admins need broader control."
              }
            </p>
            {"\n      "}
            <p>
              {
                "This feature supports safe collaboration by separating responsibilities and reducing the risk of accidental or unauthorized changes. It’s especially useful when multiple people manage campaigns, settings, integrations, or customer conversations."
              }
            </p>
            {"\n      "}
            <p className={"fp-muted"}>
              {
                "The result: clearer accountability and safer day-to-day operations."
              }
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"fp-panel fp-anim d1"}>
            {"\n      "}
            <h3>{"Where roles fit best"}</h3>
            {"\n      "}
            <ul className={"fp-checklist"}>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {"Teams with multiple agents handling conversations"}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {"Marketing teams managing broadcasts and templates"}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {"Organizations separating duties across departments"}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {
                    "Admins needing controlled access to settings and integrations"
                  }
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
                  "When everyone has full access, the risk of mistakes and unauthorized changes grows. At the same time, restricting access too much can slow people down and create bottlenecks."
                }
              </p>
              {"\n        "}
              <p className={"fp-muted"}>
                {
                  "Finding the right balance is hard without a structured permission model."
                }
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
                  "Role-based access lets you give each teammate the right level of control. Agents focus on conversations, marketers on campaigns, and admins on settings and integrations—reducing risk while keeping work moving."
                }
              </p>
              {"\n        "}
              <p className={"fp-muted"}>
                {"You get safer collaboration with less friction."}
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
          <h2>{"Everything you need for controlled collaboration"}</h2>
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
                  <path d={"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"} />
                  <circle cx={"9"} cy={"7"} r={"4"} />
                </svg>
              </div>
              <h3>{"Workspace access"}</h3>
              <p>
                {
                  "Control who can enter the workspace and what they can see or do."
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
                  <path d={"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"} />
                </svg>
              </div>
              <h3>{"Role assignment"}</h3>
              <p>
                {
                  "Assign roles that match each person’s responsibilities and needs."
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
                  <path
                    d={"M12 2a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"}
                  />
                  <path d={"M19 10v2a7 7 0 0 1-14 0v-2"} />
                </svg>
              </div>
              <h3>{"Operational separation"}</h3>
              <p>
                {
                  "Keep inbox, campaign, and settings access appropriately separated."
                }
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
                  <path d={"m3 11 18-5v12L3 14v-3z"} />
                  <path d={"M11.6 16.8a3 3 0 1 1-5.8-1.6"} />
                </svg>
              </div>
              <h3>{"Campaign & control boundaries"}</h3>
              <p>{"Limit who can send broadcasts or change automations."}</p>
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
                  <path d={"M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"} />
                  <circle cx={"12"} cy={"12"} r={"3"} />
                </svg>
              </div>
              <h3>{"Access review"}</h3>
              <p>
                {
                  "Review and update permissions as teams and responsibilities change."
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
                  <path d={"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"} />
                  <circle cx={"9"} cy={"7"} r={"4"} />
                  <path d={"M23 21v-2a4 4 0 0 0-3-3.87"} />
                </svg>
              </div>
              <h3>{"Scalable collaboration"}</h3>
              <p>
                {
                  "Grow your team without losing control or creating bottlenecks."
                }
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
            <h2>{"From role definition to safe daily work"}</h2>
            {"\n      "}
            <p className={"fp-muted"}>
              {
                "A simple approach to assigning and maintaining the right access."
              }
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
                  <span>
                    {"Start with least privilege and add access as needed"}
                  </span>
                </li>
                {"\n          "}
                <li>
                  <span className={"fp-tick"}>{"✓"}</span>
                  <span>{"Review roles when responsibilities change"}</span>
                </li>
                {"\n          "}
                <li>
                  <span className={"fp-tick"}>{"✓"}</span>
                  <span>{"Keep admin access limited to trusted people"}</span>
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
                <h3>{"Define roles"}</h3>
                <p>
                  {
                    "Identify the access levels your team needs—agent, marketer, admin, etc."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Keep roles simple and purpose-driven."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d1"}>
              <span className={"fp-step-n"}>{"2"}</span>
              <div>
                <h3>{"Assign users"}</h3>
                <p>
                  {
                    "Give each teammate the role that matches their responsibilities."
                  }
                </p>
                <p className={"fp-muted"}>{"Right access from day one."}</p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d2"}>
              <span className={"fp-step-n"}>{"3"}</span>
              <div>
                <h3>{"Separate duties"}</h3>
                <p>
                  {"Ensure sensitive actions require appropriate permissions."}
                </p>
                <p className={"fp-muted"}>
                  {"Reduces risk of accidental changes."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim"}>
              <span className={"fp-step-n"}>{"4"}</span>
              <div>
                <h3>{"Review regularly"}</h3>
                <p>{"Audit access as teams grow or responsibilities shift."}</p>
                <p className={"fp-muted"}>{"Keeps permissions current."}</p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d1"}>
              <span className={"fp-step-n"}>{"5"}</span>
              <div>
                <h3>{"Adjust as needed"}</h3>
                <p>{"Update roles to reflect real working patterns."}</p>
                <p className={"fp-muted"}>
                  {"Flexibility without losing control."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d2"}>
              <span className={"fp-step-n"}>{"6"}</span>
              <div>
                <h3>{"Scale safely"}</h3>
                <p>
                  {
                    "Onboard new teammates with appropriate access from the start."
                  }
                </p>
                <p className={"fp-muted"}>{"Growth without chaos."}</p>
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
              <div className={"tr-matrix fp-float"}>
                {"\n          "}
                <div className={"tr-top"}>
                  <b>{"Role overview"}</b>
                  <span className={"fp-badge"}>{"3 roles"}</span>
                </div>
                {"\n          "}
                <div className={"tr-roles"}>
                  {"\n            "}
                  <div className={"tr-role"}>
                    <div className={"tr-role-ico"}>{"A"}</div>
                    <div>
                      <b>{"Agent"}</b>
                      <small>{"Inbox & replies"}</small>
                    </div>
                  </div>
                  {"\n            "}
                  <div className={"tr-role"}>
                    <div className={"tr-role-ico m"}>{"M"}</div>
                    <div>
                      <b>{"Marketer"}</b>
                      <small>{"Campaigns & automations"}</small>
                    </div>
                  </div>
                  {"\n            "}
                  <div className={"tr-role"}>
                    <div className={"tr-role-ico a"}>{"A"}</div>
                    <div>
                      <b>{"Admin"}</b>
                      <small>{"Full control"}</small>
                    </div>
                  </div>
                  {"\n          "}
                </div>
                {"\n          "}
                <div className={"tr-note"}>
                  {
                    "Permissions scale with responsibility—keeping collaboration safe and efficient."
                  }
                </div>
                {"\n        "}
              </div>
              {"\n      "}
            </div>
            {"\n      "}
            <div className={"fp-shot-copy fp-anim d1"}>
              {"\n        "}
              <h2>{"Clear boundaries, smooth collaboration"}</h2>
              {"\n        "}
              <p>
                {
                  "Role-based access makes it easy to give people what they need—without overexposing sensitive settings or data."
                }
              </p>
              {"\n        "}
              <div className={"fp-shot-list"}>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Least privilege"}</b>
                  <span>{"Start with minimal access and add as needed."}</span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Clear ownership"}</b>
                  <span>{"Roles align with real responsibilities."}</span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Safer changes"}</b>
                  <span>
                    {"Sensitive actions require appropriate permissions."}
                  </span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Easy scaling"}</b>
                  <span>
                    {"Onboard teammates with the right access from day one."}
                  </span>
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
            <h2>{"Why teams use role-based access"}</h2>
            {"\n      "}
            <p>
              {"Safer collaboration with less friction as your team grows."}
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <ul className={"fp-checklist big fp-anim d1"}>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Reduced risk:"}</strong>
                {" fewer accidental or unauthorized changes."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Clear accountability:"}</strong>
                {" roles align with responsibilities."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Smoother onboarding:"}</strong>
                {" new teammates get appropriate access immediately."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Operational separation:"}</strong>
                {" inbox, campaigns, and settings stay distinct."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Scalable teams:"}</strong>
                {" grow without losing control."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Audit-friendly:"}</strong>
                {" clear access boundaries support reviews."}
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
          <h2>{"Roles for real teams"}</h2>
          {"\n    "}
          <div className={"fp-cases"}>
            {"\n      "}
            <article className={"fp-case fp-anim"}>
              <h3>{"Support teams"}</h3>
              <p>
                {
                  "Agents handle conversations while admins manage settings and integrations."
                }
              </p>
              <p className={"fp-muted"}>
                {"Outcome: focused agents, controlled configuration."}
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim d1"}>
              <h3>{"Marketing teams"}</h3>
              <p>
                {
                  "Marketers manage broadcasts and automations without touching inbox or settings."
                }
              </p>
              <p className={"fp-muted"}>
                {"Outcome: faster campaigns with safer boundaries."}
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim"}>
              <h3>{"Cross-functional teams"}</h3>
              <p>
                {
                  "Sales, support, and ops collaborate with clearly separated responsibilities."
                }
              </p>
              <p className={"fp-muted"}>
                {"Outcome: smooth collaboration without confusion."}
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim d1"}>
              <h3>{"Growing organizations"}</h3>
              <p>{"Onboard new hires with the right access from day one."}</p>
              <p className={"fp-muted"}>{"Outcome: scale without chaos."}</p>
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
                  <path
                    d={
                      "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    }
                  />
                </svg>
              </div>
              <div>
                <h3>{"Shared inbox"}</h3>
                <p>{"Control who can view, reply, and manage chats."}</p>
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
                  <path d={"m3 11 18-5v12L3 14v-3z"} />
                  <path d={"M11.6 16.8a3 3 0 1 1-5.8-1.6"} />
                </svg>
              </div>
              <div>
                <h3>{"Broadcasts"}</h3>
                <p>{"Limit who can send campaigns and templates."}</p>
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
                  <path d={"m16 18 6-6-6-6"} />
                  <path d={"m8 6-6 6 6 6"} />
                </svg>
              </div>
              <div>
                <h3>{"API & webhooks"}</h3>
                <p>{"Restrict access to keys and integrations."}</p>
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
                  <path d={"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"} />
                </svg>
              </div>
              <div>
                <h3>{"Security"}</h3>
                <p>{"Align permissions with safe operating practices."}</p>
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
            <h2>{"Access control as a security practice"}</h2>
            {"\n      "}
            <p>
              {
                "Role-based access is part of operating WhatsApp responsibly—ensuring the right people have the right control over conversations, campaigns, and configuration."
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
                  <strong>{"Least privilege:"}</strong>
                  {" give minimal access needed for each role."}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Accountability:"}</strong>
                  {" clear ownership of actions and changes."}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Operational separation:"}</strong>
                  {" reduce blast radius of mistakes."}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Regular review:"}</strong>
                  {" keep permissions aligned with reality."}
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
            <h2>{"Team roles FAQs"}</h2>
            {"\n      "}
            <p className={"fp-muted"}>
              {"Common questions about access and permissions in WebPing."}
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"fp-faqs fp-anim d1"}>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Why do I need role-based access?"}</summary>
              <p>
                {
                  "It reduces risk by giving each teammate only the access they need, while keeping collaboration smooth."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Can I change a user’s role later?"}</summary>
              <p>{"Yes. Roles can be updated as responsibilities change."}</p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>
                {"What’s the difference between agent and admin?"}
              </summary>
              <p>
                {
                  "Agents focus on conversations; admins have broader control over settings, users, and integrations."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Can marketers send broadcasts only?"}</summary>
              <p>
                {
                  "Yes. You can limit marketers to campaign and automation management without inbox or settings access."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"How often should I review permissions?"}</summary>
              <p>
                {
                  "Regularly—especially after team changes, new hires, or role shifts."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>
                {"Does role-based access help with compliance?"}
              </summary>
              <p>
                {
                  "Yes. Clear access boundaries support accountable, reviewable operations."
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
            <h2>{"Ready to give your team the right access—safely?"}</h2>
            {"\n      "}
            <p>
              {
                "Set up role-based permissions that keep collaboration smooth and sensitive actions protected."
              }
            </p>
            {"\n      "}
            <ul className={"fp-final-points"}>
              {"\n        "}
              <li>{"Role-based access control"}</li>
              {"\n        "}
              <li>{"Operational separation"}</li>
              {"\n        "}
              <li>{"Scalable collaboration"}</li>
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
            <a className={"fp-rel"} href={"/features/security"}>
              <b>{"Security"}</b>
              <span>{"Safe operating practices for WhatsApp."}</span>
            </a>
            <a className={"fp-rel"} href={"/features/api"}>
              <b>{"API & webhooks"}</b>
              <span>{"Controlled access to integrations."}</span>
            </a>
            <a className={"fp-rel"} href={"/features/dashboard"}>
              <b>{"Dashboard"}</b>
              <span>{"Operations across the workspace."}</span>
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
      <script defer={true} src={"/assets/site.js?v=91"} />
    </>
  );
}
