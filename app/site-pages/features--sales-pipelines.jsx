import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export default function SitePage() {
  return (
    <>
      <meta charset={"utf-8"} />
      <meta
        name={"description"}
        content={
          "WebPing Sales Pipelines: turn WhatsApp conversations into a visual deal workflow with stages, owners, next steps, follow-ups, and outcome tracking."
        }
      />
      <meta name={"robots"} content={"index, follow"} />
      <meta name={"theme-color"} content={"#25d366"} />
      <link
        rel={"canonical"}
        href={"https://webping.webpeaker.com/features/sales-pipelines"}
      />
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <link
        rel={"icon"}
        type={"image/png"}
        sizes={"32x32"}
        href={"/favicon-32x32.png"}
      />
      <link rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />
      <title>{"Sales Pipelines | WebPing Features"}</title>
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
      <section className={"fp-hero"} id={"hero"}>
        {"\n  "}
        <div className={"wrap fp-hero-grid"}>
          {"\n    "}
          <div className={"fp-hero-copy fp-anim"}>
            {"\n      "}
            <p className={"fp-kicker"}>{"Growth"}</p>
            {"\n      "}
            <h1>{"Sales pipelines for WhatsApp-led deals"}</h1>
            {"\n      "}
            <p className={"fp-lead"}>
              {
                "Turn qualified WhatsApp conversations into a clear, visual deal workflow. Track stages, owners, next steps, and outcomes so no opportunity gets buried in chat history."
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
              <li>{"Visual stages & ownership"}</li>
              <li>{"Follow-ups tied to real chats"}</li>
              <li>{"Built for WhatsApp sales teams"}</li>
            </ul>
            {"\n    "}
          </div>
          {"\n    "}
          <div
            className={"fp-bc-visual fp-anim d1"}
            aria-label={"Sales pipeline preview"}
          >
            {"\n      "}
            <div className={"fp-preview fp-float"}>
              {"\n        "}
              <div className={"fp-prev-top"}>
                <div className={"fp-dots"}>
                  <i />
                  <i />
                  <i />
                </div>
                <b>{"Pipeline board"}</b>
                <span className={"fp-badge"}>{"Live deals"}</span>
              </div>
              {"\n        "}
              <div
                className={"fp-prev-body"}
                style={{ gridTemplateColumns: "1fr 1fr", gap: "10px" }}
              >
                {"\n          "}
                <ul className={"fp-prev-list"}>
                  {"\n            "}
                  <li>
                    <span />
                    <div>
                      <b>{"New lead · Priya"}</b>
                      <small>{"Demo requested · Owner: Ankit"}</small>
                    </div>
                  </li>
                  {"\n            "}
                  <li>
                    <span />
                    <div>
                      <b>{"Qualified · Acme Co."}</b>
                      <small>{"Budget confirmed · Next: proposal"}</small>
                    </div>
                  </li>
                  {"\n            "}
                  <li>
                    <span />
                    <div>
                      <b>{"Proposal · Rahul"}</b>
                      <small>{"Sent today · Follow-up Fri"}</small>
                    </div>
                  </li>
                  {"\n          "}
                </ul>
                {"\n          "}
                <div className={"fp-prev-side"}>
                  {"\n            "}
                  <div className={"fp-stat"}>
                    <b>{"3 stages"}</b>
                    <span>{"Clear next steps per deal"}</span>
                  </div>
                  {"\n            "}
                  <div className={"fp-meter"}>
                    <small>{"Follow-up coverage"}</small>
                    <div className={"bar"}>
                      <i style={{ width: "88%" }} />
                    </div>
                  </div>
                  {"\n            "}
                  <div className={"fp-meter"}>
                    <small>{"Owner assigned"}</small>
                    <div className={"bar"}>
                      <i style={{ width: "100%" }} />
                    </div>
                  </div>
                  {"\n          "}
                </div>
                {"\n        "}
              </div>
              {"\n      "}
            </div>
            {"\n      "}
            <div className={"fp-bc-float fp-float slow"}>
              <b>{"Next step set"}</b>
              <span>{"Call scheduled · Tomorrow 11:00"}</span>
            </div>
            {"\n      "}
            <div className={"fp-bc-float alt fp-float delay"}>
              <b>{"From WhatsApp"}</b>
              <span>{"Context stays with the deal"}</span>
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
            <h2>
              {"A structured sales process inside your WhatsApp workflow"}
            </h2>
            {"\n      "}
            <p>
              {
                "WebPing Sales Pipelines help teams manage opportunities that begin in WhatsApp conversations. Not every chat is a deal—but when a conversation shows real intent, you can move it into a structured process with clear stages, an owner, deal details, notes, and a defined next step."
              }
            </p>
            {"\n      "}
            <p>
              {
                "This gives your team visibility into where leads are progressing, which deals are stuck, and who needs to follow up. Because deals stay connected to the conversation context, reps can respond based on what the customer actually asked and keep momentum toward a decision."
              }
            </p>
            {"\n      "}
            <p className={"fp-muted"}>
              {
                "Instead of relying on memory or scattered chat history, your pipeline becomes a shared, actionable view of every qualified opportunity."
              }
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"fp-panel fp-anim d1"}>
            {"\n      "}
            <h3>{"Where sales pipelines fit best"}</h3>
            {"\n      "}
            <ul className={"fp-checklist"}>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {"Businesses that close sales through WhatsApp conversations"}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {
                    "Teams capturing leads from ads, websites, or referrals who need follow-up structure"
                  }
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {
                    "Founders and managers tracking which deals need attention now"
                  }
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {"Sales reps coordinating handoffs, next steps, and outcomes"}
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
                  "When sales happen in chat, strong leads can easily get buried in conversation history. Without structure, it’s unclear who owns a follow-up, what the next step is, or which opportunities have gone quiet—leading to slow responses and missed revenue."
                }
              </p>
              {"\n        "}
              <p className={"fp-muted"}>
                {
                  "Turning every chat into a deal is noisy, but treating qualified opportunities like casual messages means good prospects slip through the cracks."
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
                  "Sales Pipelines give qualified WhatsApp opportunities a clear home: define simple stages, assign an owner, capture deal details, and set a next action. The team can see progress at a glance, prioritize follow-ups, and keep conversations connected to outcomes."
                }
              </p>
              {"\n        "}
              <p className={"fp-muted"}>
                {
                  "You get a lightweight, consistent sales process that keeps momentum—without losing the context of the original WhatsApp conversation."
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
          <h2>{"Everything you need to manage deals from WhatsApp"}</h2>
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
              <h3>{"Deal stages"}</h3>
              <p>
                {
                  "Define and move deals through clear stages—such as New Lead, Contacted, Qualified, Proposal, Won, or Lost—so progress is visible at a glance."
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
                  <path d={"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"} />
                  <circle cx={"9"} cy={"7"} r={"4"} />
                </svg>
              </div>
              <h3>{"Owner assignment"}</h3>
              <p>
                {
                  "Assign responsibility for each deal so follow-ups have a clear owner and nothing is left unhandled."
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
                      "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    }
                  />
                  <path d={"M14 2v6h6"} />
                  <path d={"M9 13h6"} />
                  <path d={"M9 17h4"} />
                </svg>
              </div>
              <h3>{"Deal details & notes"}</h3>
              <p>
                {
                  "Capture value, contact context, notes, and the next step so every follow-up is informed and timely."
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
                  <circle cx={"12"} cy={"12"} r={"10"} />
                  <path d={"M12 6v6l4 2"} />
                </svg>
              </div>
              <h3>{"Follow-up visibility"}</h3>
              <p>
                {
                  "See which deals need action and keep next steps clear, helping the team maintain momentum and avoid stale opportunities."
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
                  <path d={"m9 11 3 3L22 4"} />
                  <path
                    d={
                      "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                    }
                  />
                </svg>
              </div>
              <h3>{"Qualification workflow"}</h3>
              <p>
                {
                  "Separate casual chats from real opportunities by creating deals only when there is clear intent, need, or a defined next step."
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
                  <path d={"M22 11.08V12a10 10 0 1 1-5.93-9.14"} />
                  <path d={"m9 11 3 3L22 4"} />
                </svg>
              </div>
              <h3>{"Outcome tracking"}</h3>
              <p>
                {
                  "Mark deals as won or lost and capture context, helping you learn from patterns and improve your sales process over time."
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
            <h2>{"From WhatsApp conversation to closed outcome"}</h2>
            {"\n      "}
            <p className={"fp-muted"}>
              {
                "A simple, repeatable flow that keeps qualified opportunities moving with clear ownership and next steps."
              }
            </p>
            {"\n      "}
            <div className={"fp-panel"} style={{ marginTop: "14px" }}>
              {"\n        "}
              <h3>{"Good pipeline habits"}</h3>
              {"\n        "}
              <ul className={"fp-checklist"}>
                {"\n          "}
                <li>
                  <span className={"fp-tick"}>{"✓"}</span>
                  <span>
                    {"Keep stages simple and update them as progress happens"}
                  </span>
                </li>
                {"\n          "}
                <li>
                  <span className={"fp-tick"}>{"✓"}</span>
                  <span>
                    {"Require an owner and a clear next step for active deals"}
                  </span>
                </li>
                {"\n          "}
                <li>
                  <span className={"fp-tick"}>{"✓"}</span>
                  <span>
                    {
                      "Review stuck or idle deals regularly to maintain momentum"
                    }
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
                <h3>{"Spot a qualified conversation"}</h3>
                <p>
                  {
                    "Identify real intent—such as a pricing request, demo interest, purchase timeline, or specific need."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Qualification keeps the pipeline focused and useful."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d1"}>
              <span className={"fp-step-n"}>{"2"}</span>
              <div>
                <h3>{"Create the deal"}</h3>
                <p>
                  {
                    "Add the opportunity, choose a stage, assign an owner, and set a clear, time-aware next step."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Start with one concrete action to move it forward."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d2"}>
              <span className={"fp-step-n"}>{"3"}</span>
              <div>
                <h3>{"Work the conversation"}</h3>
                <p>
                  {
                    "Use WhatsApp context to answer questions, share details, and guide the customer toward a decision."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Relevant, timely follow-up builds trust and momentum."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim"}>
              <span className={"fp-step-n"}>{"4"}</span>
              <div>
                <h3>{"Update the stage"}</h3>
                <p>
                  {
                    "Move the deal as progress happens so the pipeline reflects reality for the whole team."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Accurate stages make bottlenecks easy to spot."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d1"}>
              <span className={"fp-step-n"}>{"5"}</span>
              <div>
                <h3>{"Follow up consistently"}</h3>
                <p>
                  {
                    "If a customer goes quiet, rely on ownership and planned next steps to keep the opportunity on track."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Consistent follow-up prevents dropped leads."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d2"}>
              <span className={"fp-step-n"}>{"6"}</span>
              <div>
                <h3>{"Close and review"}</h3>
                <p>
                  {
                    "Mark the deal won or lost, record context or reasons, and use outcomes to refine your process."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Even lost deals provide insight for improvement."}
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
              <div className={"fp-preview fp-float"}>
                {"\n          "}
                <div className={"fp-prev-top"}>
                  <div className={"fp-dots"}>
                    <i />
                    <i />
                    <i />
                  </div>
                  <b>{"Deal detail"}</b>
                  <span className={"fp-badge"}>{"In progress"}</span>
                </div>
                {"\n          "}
                <div className={"fp-bc-compose"}>
                  {"\n            "}
                  <div className={"fp-bc-template"}>
                    {"\n              "}
                    <small>{"Opportunity · WhatsApp lead"}</small>
                    {"\n              "}
                    <p>
                      <strong>{"Acme Co."}</strong>
                      {
                        " — Interested in Professional plan. Asked about onboarding and team seats."
                      }
                    </p>
                    {"\n            "}
                  </div>
                  {"\n            "}
                  <div className={"fp-bc-meta"}>
                    {"\n              "}
                    <div className={"fp-bc-chip"}>
                      <b>{"Stage"}</b>
                      <span>{"Proposal / Discussion"}</span>
                    </div>
                    {"\n              "}
                    <div className={"fp-bc-chip"}>
                      <b>{"Owner"}</b>
                      <span>{"Riya (Sales)"}</span>
                    </div>
                    {"\n              "}
                    <div className={"fp-bc-chip"}>
                      <b>{"Next step"}</b>
                      <span>{"Share pricing & follow up Thu"}</span>
                    </div>
                    {"\n            "}
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
              <h2>{"Visibility into every active opportunity"}</h2>
              {"\n        "}
              <p>
                {
                  "Sales Pipelines bring the essentials of deal management next to the conversations that create them—so your team always knows what’s moving, what’s waiting, and what needs action."
                }
              </p>
              {"\n        "}
              <div className={"fp-shot-list"}>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Stage-based clarity"}</b>
                  <span>
                    {
                      "See where each deal sits in your process with simple, consistent stages."
                    }
                  </span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Ownership & accountability"}</b>
                  <span>
                    {"Know exactly who is responsible for the next follow-up."}
                  </span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Context-rich details"}</b>
                  <span>
                    {
                      "Keep notes, value, and contact context tied to the WhatsApp conversation."
                    }
                  </span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Actionable next steps"}</b>
                  <span>
                    {"Focus the team on what to do now to move deals forward."}
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
            <h2>{"Why teams manage sales with pipelines"}</h2>
            {"\n      "}
            <p>
              {
                "Turn fast-moving WhatsApp chats into a reliable, trackable sales motion."
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
                <strong>{"No buried leads:"}</strong>
                {
                  " qualified opportunities stay visible instead of getting lost in chat history."
                }
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Clear accountability:"}</strong>
                {" every active deal has an owner and a defined next step."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Better follow-through:"}</strong>
                {
                  " teams can quickly see which deals need attention and act on time."
                }
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Shared visibility:"}</strong>
                {
                  " managers and reps get a common view of progress, bottlenecks, and outcomes."
                }
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Context-aware selling:"}</strong>
                {" follow-ups are informed by the real WhatsApp conversation."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Continuous improvement:"}</strong>
                {" track outcomes to learn what moves deals forward."}
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
          <h2>{"How businesses use sales pipelines"}</h2>
          {"\n    "}
          <div className={"fp-cases"}>
            {"\n      "}
            <article className={"fp-case fp-anim"}>
              <h3>{"Closing sales in WhatsApp"}</h3>
              <p>
                {
                  "Manage inquiries, quotes, and negotiations that happen over chat. Move serious prospects through stages until a clear win or loss."
                }
              </p>
              <p className={"fp-muted"}>
                {
                  "Outcome: organized deals and fewer missed closing opportunities."
                }
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim d1"}>
              <h3>{"Inbound lead follow-up"}</h3>
              <p>
                {
                  "Capture leads from ads, websites, or referrals, qualify intent, assign owners, and track timely follow-ups from first reply to decision."
                }
              </p>
              <p className={"fp-muted"}>
                {
                  "Outcome: faster response and a structured path from lead to customer."
                }
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim"}>
              <h3>{"Team & manager visibility"}</h3>
              <p>
                {
                  "Give founders and managers a clear view of active deals, stalled stages, and who needs to act—without digging through individual chats."
                }
              </p>
              <p className={"fp-muted"}>
                {
                  "Outcome: better prioritization and coaching based on real pipeline status."
                }
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim d1"}>
              <h3>{"Handoffs and coordinated selling"}</h3>
              <p>
                {
                  "Pass opportunities between teammates with owners, notes, and next steps intact so context isn’t lost during transitions."
                }
              </p>
              <p className={"fp-muted"}>
                {"Outcome: smooth handoffs and consistent customer experience."}
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
                <p>
                  {
                    "Create and manage deals from real WhatsApp conversations while keeping full chat context."
                  }
                </p>
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
                  <circle cx={"12"} cy={"7"} r={"4"} />
                  <path d={"M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"} />
                </svg>
              </div>
              <div>
                <h3>{"Contacts"}</h3>
                <p>
                  {
                    "Keep lead details, tags, and history connected to every opportunity."
                  }
                </p>
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
                  <path d={"M13 2 3 14h9l-1 8 10-12h-9l1-8z"} />
                </svg>
              </div>
              <div>
                <h3>{"Automations"}</h3>
                <p>
                  {
                    "Support follow-ups and workflow actions around conversations and deal progress."
                  }
                </p>
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
                <p>
                  {
                    "View pipeline activity and outcomes alongside broader team operations."
                  }
                </p>
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
            <h2>{"Accountable, well-structured sales workflows"}</h2>
            {"\n      "}
            <p>
              {
                "Sales Pipelines support clear ownership, visible progress, and responsible communication on the official WhatsApp Business Platform—helping teams manage opportunities with confidence and consistency."
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
                  <strong>{"Clear ownership:"}</strong>
                  {
                    " assigned owners and next steps create accountability for every deal."
                  }
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Operational visibility:"}</strong>
                  {
                    " stages and outcomes keep team progress transparent and reviewable."
                  }
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Policy-aware messaging:"}</strong>
                  {
                    " follow-ups happen within WhatsApp’s conversation rules and approved templates when required."
                  }
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Controlled access:"}</strong>
                  {
                    " align pipeline activity with team roles and workspace permissions."
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
      <section className={"fp-sec alt"} id={"faq"}>
        {"\n  "}
        <div className={"wrap fp-two"}>
          {"\n    "}
          <div className={"fp-anim"}>
            {"\n      "}
            <p className={"fp-label"}>{"11 · FAQs"}</p>
            {"\n      "}
            <h2>{"Sales pipelines FAQs"}</h2>
            {"\n      "}
            <p className={"fp-muted"}>
              {
                "Common questions about tracking WhatsApp opportunities in WebPing."
              }
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"fp-faqs fp-anim d1"}>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Should every WhatsApp chat become a deal?"}</summary>
              <p>
                {
                  "No. Create deals for qualified opportunities—where there is clear intent, need, or a defined next step—so your pipeline stays focused and useful."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"What information should a deal include?"}</summary>
              <p>
                {
                  "At minimum, keep an owner, stage, next step, and relevant contact or conversation context. Notes and value details help make follow-ups more informed."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"What stages should I start with?"}</summary>
              <p>
                {
                  "A simple flow works best to begin with, such as New Lead, Contacted, Qualified, Proposal/Discussion, Won, and Lost. You can refine stages as your process matures."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"How often should deals be updated?"}</summary>
              <p>
                {
                  "Update a deal whenever progress happens or a follow-up is completed or scheduled. Regular updates keep the pipeline accurate and actionable."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"How do pipelines improve conversions?"}</summary>
              <p>
                {
                  "They make follow-ups visible, assign clear responsibility, and reduce the chance that interested leads go quiet or are forgotten."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Can I track won and lost deals?"}</summary>
              <p>
                {
                  "Yes. Marking outcomes—and noting context or reasons—helps you understand patterns and improve how your team qualifies and follows up."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Are pipelines only for sales teams?"}</summary>
              <p>
                {
                  "They’re best for revenue or opportunity tracking, but any team that needs to move qualified WhatsApp conversations through defined steps can benefit."
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
            <h2>
              {"Ready to turn WhatsApp chats into a clear sales pipeline?"}
            </h2>
            {"\n      "}
            <p>
              {
                "Give your team visibility into every qualified opportunity—stages, owners, next steps, and outcomes—all connected to the conversations that matter."
              }
            </p>
            {"\n      "}
            <ul className={"fp-final-points"}>
              {"\n        "}
              <li>{"Visual stages with clear ownership"}</li>
              {"\n        "}
              <li>{"Next steps and follow-ups that don’t slip"}</li>
              {"\n        "}
              <li>{"Deals tied to real WhatsApp context"}</li>
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
              <span>
                {"Manage the WhatsApp conversations where deals begin."}
              </span>
            </a>
            <a className={"fp-rel"} href={"/features/contacts"}>
              <b>{"Contacts"}</b>
              <span>
                {
                  "Keep lead details, tags, and history connected to opportunities."
                }
              </span>
            </a>
            <a className={"fp-rel"} href={"/features/automations"}>
              <b>{"Automations"}</b>
              <span>
                {"Support consistent follow-ups and workflow actions."}
              </span>
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
      <script defer={true} src={"/assets/site.js?v=91"} />
    </>
  );
}
