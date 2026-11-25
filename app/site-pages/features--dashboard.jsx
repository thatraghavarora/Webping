import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export default function SitePage() {
  return (
    <>
      <meta charset={"utf-8"} />
      <meta
        name={"description"}
        content={
          "WebPing Dashboard: an operational overview of WhatsApp activity, workload, response patterns, and business actions."
        }
      />
      <meta name={"robots"} content={"index, follow"} />
      <meta name={"theme-color"} content={"#25d366"} />
      <link
        rel={"canonical"}
        href={"https://webping.webpeaker.com/features/dashboard"}
      />
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <link
        rel={"icon"}
        type={"image/png"}
        sizes={"32x32"}
        href={"/favicon-32x32.png"}
      />
      <link rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />
      <title>{"Dashboard | WebPing Features"}</title>
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
      <section className={"fp-hero db-hero"} id={"hero"}>
        {"\n  "}
        <div className={"wrap fp-hero-grid"}>
          {"\n    "}
          <div className={"fp-hero-copy fp-anim"}>
            {"\n      "}
            <p className={"fp-kicker"}>{"Control"}</p>
            {"\n      "}
            <h1>{"A dashboard that shows what needs attention"}</h1>
            {"\n      "}
            <p className={"fp-lead"}>
              {
                "Get an operational overview of WhatsApp activity, workload, response patterns, and business actions—so you can spot issues early and act quickly."
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
              <li>{"Live workload signals"}</li>
              <li>{"Response & campaign insights"}</li>
              <li>{"Action-oriented navigation"}</li>
            </ul>
            {"\n    "}
          </div>
          {"\n    "}
          <div
            className={"db-panel fp-anim d1"}
            aria-label={"Dashboard preview"}
          >
            {"\n      "}
            <div className={"db-top"}>
              <b>{"Operations overview"}</b>
              <span className={"fp-badge"}>{"Live"}</span>
            </div>
            {"\n      "}
            <div className={"db-tiles"}>
              {"\n        "}
              <div className={"db-tile"}>
                <small>{"Open conversations"}</small>
                <b>{"42"}</b>
                <span className={"db-up"}>{"+6 today"}</span>
              </div>
              {"\n        "}
              <div className={"db-tile"}>
                <small>{"Avg. first reply"}</small>
                <b>{"2m 14s"}</b>
                <span className={"db-up"}>{"↓ 18%"}</span>
              </div>
              {"\n        "}
              <div className={"db-tile"}>
                <small>{"Pending follow-ups"}</small>
                <b>{"9"}</b>
                <span className={"db-warn"}>{"Needs action"}</span>
              </div>
              {"\n        "}
              <div className={"db-tile"}>
                <small>{"Broadcast replies"}</small>
                <b>{"37"}</b>
                <span className={"db-up"}>{"+12"}</span>
              </div>
              {"\n      "}
            </div>
            {"\n      "}
            <div className={"db-chart"}>
              {"\n        "}
              <small>{"Conversation volume · 7 days"}</small>
              {"\n        "}
              <div className={"db-bars"}>
                <i style={{ height: "40%" }} />
                <i style={{ height: "62%" }} />
                <i style={{ height: "55%" }} />
                <i style={{ height: "78%" }} />
                <i style={{ height: "68%" }} />
                <i style={{ height: "85%" }} />
                <i style={{ height: "72%" }} />
              </div>
              {"\n      "}
            </div>
            {"\n      "}
            <div className={"db-queue"}>
              {"\n        "}
              <small>{"Action queue"}</small>
              {"\n        "}
              <div className={"db-qrow"}>
                <span className={"db-dot warn"} />
                <b>{"3 unassigned chats"}</b>
                <small>{"Route now"}</small>
              </div>
              {"\n        "}
              <div className={"db-qrow"}>
                <span className={"db-dot"} />
                <b>{"Pipeline: 5 stalled deals"}</b>
                <small>{"Review follow-ups"}</small>
              </div>
              {"\n        "}
              <div className={"db-qrow"}>
                <span className={"db-dot ok"} />
                <b>{"Campaign sent · 248 delivered"}</b>
                <small>{"View replies"}</small>
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
            <h2>{"See what’s happening across WhatsApp at a glance"}</h2>
            {"\n      "}
            <p>
              {
                "The Dashboard gives your team a quick view of what is happening across WhatsApp operations. Instead of checking every feature separately, you can look for signals: conversation volume, pending work, response patterns, campaign activity, and pipeline movement."
              }
            </p>
            {"\n      "}
            <p>
              {
                "It’s designed to help teams notice what needs attention and navigate to the right place quickly. The dashboard complements—not replaces—your inbox, pipelines, and campaign tools."
              }
            </p>
            {"\n      "}
            <p className={"fp-muted"}>
              {
                "The result: clearer operational awareness and faster, more confident decisions."
              }
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"fp-panel fp-anim d1"}>
            {"\n      "}
            <h3>{"Where the dashboard fits best"}</h3>
            {"\n      "}
            <ul className={"fp-checklist"}>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {"Managers monitoring team workload and performance"}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>{"Teams spotting delays, bottlenecks, or trends"}</span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>{"Founders wanting a high-level operational view"}</span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>{"Anyone needing quick access to action areas"}</span>
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
                  "When WhatsApp activity is spread across inbox, campaigns, and pipelines, it’s hard to see the full picture. Delays, unassigned chats, and stalled deals can go unnoticed until they become bigger problems."
                }
              </p>
              {"\n        "}
              <p className={"fp-muted"}>
                {
                  "Without a central view, teams react late instead of acting early."
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
                  "The Dashboard surfaces key operational signals—workload, response times, campaign activity, and pipeline movement—in one place. Teams can spot issues early and jump directly to the area that needs attention."
                }
              </p>
              {"\n        "}
              <p className={"fp-muted"}>
                {
                  "You get timely awareness without replacing your working tools."
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
          <h2>{"Everything you need for operational visibility"}</h2>
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
                  <path d={"M3 3v18h18"} />
                  <path d={"M7 16v-5"} />
                  <path d={"M12 16V8"} />
                  <path d={"M17 16v-3"} />
                </svg>
              </div>
              <h3>{"High-level overview"}</h3>
              <p>
                {
                  "See conversation volume, pending work, and key activity at a glance."
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
                  <path d={"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"} />
                  <circle cx={"9"} cy={"7"} r={"4"} />
                  <path d={"M23 21v-2a4 4 0 0 0-3-3.87"} />
                </svg>
              </div>
              <h3>{"Workload signals"}</h3>
              <p>
                {
                  "Spot unassigned chats, pending follow-ups, and team capacity issues early."
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
                  <circle cx={"12"} cy={"12"} r={"10"} />
                  <path d={"M12 6v6l4 2"} />
                </svg>
              </div>
              <h3>{"Response awareness"}</h3>
              <p>
                {
                  "Track first-response and resolution patterns to improve speed."
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
              <h3>{"Campaign & pipeline visibility"}</h3>
              <p>
                {
                  "Keep an eye on broadcast activity and deal movement alongside inbox work."
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
                  <path d={"M3 3v18h18"} />
                  <path d={"M7 14l4-4 3 3 5-6"} />
                </svg>
              </div>
              <h3>{"Trend spotting"}</h3>
              <p>
                {
                  "Identify volume spikes, response delays, or recurring issues over time."
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
                    d={
                      "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    }
                  />
                  <path d={"M15 3h6v6"} />
                  <path d={"M10 14 21 3"} />
                </svg>
              </div>
              <h3>{"Action-oriented navigation"}</h3>
              <p>
                {
                  "Jump directly from signals to the inbox, pipelines, or campaigns that need attention."
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
            <h2>{"From signal to action in seconds"}</h2>
            {"\n      "}
            <p className={"fp-muted"}>
              {
                "A simple flow that turns operational awareness into timely action."
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
                    {"Review the dashboard at the start of each shift"}
                  </span>
                </li>
                {"\n          "}
                <li>
                  <span className={"fp-tick"}>{"✓"}</span>
                  <span>{"Act on unassigned and pending items first"}</span>
                </li>
                {"\n          "}
                <li>
                  <span className={"fp-tick"}>{"✓"}</span>
                  <span>
                    {"Use trends to improve process, not just track numbers"}
                  </span>
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
                <h3>{"Check the overview"}</h3>
                <p>
                  {
                    "Start with volume, workload, and response signals to understand the day’s state."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"A quick scan reveals what needs attention."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d1"}>
              <span className={"fp-step-n"}>{"2"}</span>
              <div>
                <h3>{"Spot anomalies"}</h3>
                <p>
                  {
                    "Look for spikes, delays, or unassigned work that could impact customers."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Early detection prevents bigger issues."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d2"}>
              <span className={"fp-step-n"}>{"3"}</span>
              <div>
                <h3>{"Navigate to action"}</h3>
                <p>
                  {
                    "Jump from a signal to the inbox, pipeline, or campaign that needs work."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Less context-switching, faster action."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim"}>
              <span className={"fp-step-n"}>{"4"}</span>
              <div>
                <h3>{"Assign & resolve"}</h3>
                <p>
                  {"Route work to the right people and resolve pending items."}
                </p>
                <p className={"fp-muted"}>
                  {"Clear ownership drives completion."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d1"}>
              <span className={"fp-step-n"}>{"5"}</span>
              <div>
                <h3>{"Track outcomes"}</h3>
                <p>
                  {"Monitor how changes affect response times and workload."}
                </p>
                <p className={"fp-muted"}>
                  {"Feedback loops improve operations."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d2"}>
              <span className={"fp-step-n"}>{"6"}</span>
              <div>
                <h3>{"Refine over time"}</h3>
                <p>
                  {
                    "Use trends to adjust staffing, processes, and automation rules."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Continuous improvement compounds."}
                </p>
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
              <div className={"db-panel fp-float"}>
                {"\n          "}
                <div className={"db-top"}>
                  <b>{"Weekly performance"}</b>
                  <span className={"fp-badge"}>{"Updated"}</span>
                </div>
                {"\n          "}
                <div className={"db-tiles"}>
                  {"\n            "}
                  <div className={"db-tile"}>
                    <small>{"Resolved chats"}</small>
                    <b>{"186"}</b>
                    <span className={"db-up"}>{"+24%"}</span>
                  </div>
                  {"\n            "}
                  <div className={"db-tile"}>
                    <small>{"SLA hit rate"}</small>
                    <b>{"94%"}</b>
                    <span className={"db-up"}>{"+3%"}</span>
                  </div>
                  {"\n            "}
                  <div className={"db-tile"}>
                    <small>{"Open deals"}</small>
                    <b>{"17"}</b>
                    <span className={"db-warn"}>{"5 stalled"}</span>
                  </div>
                  {"\n            "}
                  <div className={"db-tile"}>
                    <small>{"Campaigns"}</small>
                    <b>{"4"}</b>
                    <span className={"db-up"}>{"running"}</span>
                  </div>
                  {"\n          "}
                </div>
                {"\n          "}
                <div className={"db-chart"}>
                  {"\n            "}
                  <small>{"Response time trend"}</small>
                  {"\n            "}
                  <div className={"db-bars alt"}>
                    <i style={{ height: "70%" }} />
                    <i style={{ height: "60%" }} />
                    <i style={{ height: "52%" }} />
                    <i style={{ height: "45%" }} />
                    <i style={{ height: "40%" }} />
                    <i style={{ height: "35%" }} />
                    <i style={{ height: "32%" }} />
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
              <h2>{"Operational clarity, not vanity metrics"}</h2>
              {"\n        "}
              <p>
                {
                  "The dashboard focuses on signals that help teams act: workload, speed, and movement across inbox, campaigns, and pipelines."
                }
              </p>
              {"\n        "}
              <div className={"fp-shot-list"}>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Workload first"}</b>
                  <span>
                    {"See open and pending work before diving into details."}
                  </span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Speed matters"}</b>
                  <span>{"Track response patterns to improve service."}</span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Movement visible"}</b>
                  <span>
                    {"Pipelines and campaigns alongside inbox activity."}
                  </span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Action links"}</b>
                  <span>{"Jump straight to what needs fixing."}</span>
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
            <h2>{"Why teams use the dashboard"}</h2>
            {"\n      "}
            <p>
              {
                "Early awareness and faster, more confident operational decisions."
              }
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <ul className={"fp-checklist big fp-anim d1"}>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Early problem detection:"}</strong>
                {" spot delays and bottlenecks before they escalate."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Better prioritization:"}</strong>
                {" focus on what matters most right now."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Improved response times:"}</strong>
                {" track and reduce first-reply delays."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Team visibility:"}</strong>
                {" managers see workload and performance at a glance."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Connected operations:"}</strong>
                {" inbox, campaigns, and pipelines in one view."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Continuous improvement:"}</strong>
                {" use trends to refine processes."}
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
          <h2>{"Dashboard for managers and teams"}</h2>
          {"\n    "}
          <div className={"fp-cases"}>
            {"\n      "}
            <article className={"fp-case fp-anim"}>
              <h3>{"Shift & workload planning"}</h3>
              <p>
                {
                  "Start each shift by reviewing open work and assigning capacity where it’s needed most."
                }
              </p>
              <p className={"fp-muted"}>
                {"Outcome: balanced workload and fewer delays."}
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim d1"}>
              <h3>{"Performance monitoring"}</h3>
              <p>
                {
                  "Track response times and resolution rates to improve service quality."
                }
              </p>
              <p className={"fp-muted"}>
                {"Outcome: measurable improvements over time."}
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim"}>
              <h3>{"Campaign oversight"}</h3>
              <p>
                {"Monitor broadcast activity and replies alongside inbox work."}
              </p>
              <p className={"fp-muted"}>
                {"Outcome: coordinated follow-up on outreach."}
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim d1"}>
              <h3>{"Pipeline health"}</h3>
              <p>
                {
                  "Spot stalled deals and follow-up gaps before they impact revenue."
                }
              </p>
              <p className={"fp-muted"}>
                {"Outcome: healthier pipeline and better conversion."}
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
                  <path
                    d={
                      "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    }
                  />
                </svg>
              </div>
              <div>
                <h3>{"Shared inbox"}</h3>
                <p>{"Jump from metrics to conversations needing action."}</p>
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
                <p>{"Review campaign activity and responses."}</p>
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
                  <path d={"m3 17 6-6 4 4 8-8"} />
                  <path d={"M14 7h7v7"} />
                </svg>
              </div>
              <div>
                <h3>{"Sales pipelines"}</h3>
                <p>{"Spot deal movement and workload signals."}</p>
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
                <h3>{"Team roles"}</h3>
                <p>{"Understand operations across the workspace."}</p>
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
            <h2>{"Operational visibility, responsibly delivered"}</h2>
            {"\n      "}
            <p>
              {
                "The dashboard surfaces useful operational signals while keeping sensitive details appropriately scoped to your team’s access levels."
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
                  <strong>{"Role-aware visibility:"}</strong>
                  {" align dashboard data with team permissions."}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Signal-focused:"}</strong>
                  {" metrics that help teams act, not vanity numbers."}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Connected to tools:"}</strong>
                  {" navigate from insight to action quickly."}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Continuous improvement:"}</strong>
                  {" use trends to refine operations."}
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
            <h2>{"Dashboard FAQs"}</h2>
            {"\n      "}
            <p className={"fp-muted"}>
              {"Common questions about operational visibility in WebPing."}
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"fp-faqs fp-anim d1"}>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"What does the dashboard show?"}</summary>
              <p>
                {
                  "Conversation volume, pending work, response patterns, campaign activity, and pipeline movement—along with quick links to action areas."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Is the dashboard real-time?"}</summary>
              <p>
                {
                  "It reflects current operational signals so teams can act promptly on workload and issues."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Can managers and agents see different data?"}</summary>
              <p>
                {
                  "Visibility can align with team roles and permissions for appropriate access."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Does the dashboard replace the inbox?"}</summary>
              <p>
                {
                  "No. It complements your inbox, pipelines, and campaigns by surfacing signals and quick navigation."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"How often should I check it?"}</summary>
              <p>
                {
                  "Many teams review it at the start of each shift and after major campaigns or launches."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>
                {"Can I use dashboard insights to improve processes?"}
              </summary>
              <p>
                {
                  "Yes. Trends and signals help teams refine staffing, routing, and automation over time."
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
            <h2>{"Ready to see your WhatsApp operations clearly?"}</h2>
            {"\n      "}
            <p>
              {
                "Get the signals you need to prioritize work, improve response times, and keep campaigns and pipelines on track."
              }
            </p>
            {"\n      "}
            <ul className={"fp-final-points"}>
              {"\n        "}
              <li>{"Live workload & response signals"}</li>
              {"\n        "}
              <li>{"Campaign & pipeline visibility"}</li>
              {"\n        "}
              <li>{"Action-oriented navigation"}</li>
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
            <a className={"fp-rel"} href={"/features/shared-inbox"}>
              <b>{"Shared inbox"}</b>
              <span>{"Where the work happens."}</span>
            </a>
            <a className={"fp-rel"} href={"/features/sales-pipelines"}>
              <b>{"Sales pipelines"}</b>
              <span>{"Deal movement at a glance."}</span>
            </a>
            <a className={"fp-rel"} href={"/features/broadcasts"}>
              <b>{"Broadcasts"}</b>
              <span>{"Campaign activity overview."}</span>
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
      <script defer={true} src={"/assets/site.js?v=91"} />
    </>
  );
}
