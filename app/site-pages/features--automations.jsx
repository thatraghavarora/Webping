import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export default function SitePage() {
  return (
    <>
      <meta charset={"utf-8"} />
      <meta
        name={"description"}
        content={
          "WebPing Automations: build rule-based WhatsApp workflows for routine replies, routing, tagging, notifications, and follow-ups."
        }
      />
      <meta name={"robots"} content={"index, follow"} />
      <meta name={"theme-color"} content={"#25d366"} />
      <link
        rel={"canonical"}
        href={"https://webping.webpeaker.com/features/automations"}
      />
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <link
        rel={"icon"}
        type={"image/png"}
        sizes={"32x32"}
        href={"/favicon-32x32.png"}
      />
      <link rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />
      <title>{"Automations | WebPing Features"}</title>
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
      <section className={"fp-hero au-hero"} id={"hero"}>
        {"\n  "}
        <div className={"wrap fp-hero-grid"}>
          {"\n    "}
          <div className={"fp-hero-copy fp-anim"}>
            {"\n      "}
            <p className={"fp-kicker"}>{"Workflows"}</p>
            {"\n      "}
            <h1>{"Automations that handle the routine, instantly"}</h1>
            {"\n      "}
            <p className={"fp-lead"}>
              {
                "Build rule-based WhatsApp workflows for routine replies, routing, tagging, notifications, and follow-ups—so your team focuses on conversations that need a human."
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
              <li>{"Trigger → condition → action rules"}</li>
              <li>{"Routing, tagging & auto-replies"}</li>
              <li>{"Safe escalation built in"}</li>
            </ul>
            {"\n    "}
          </div>
          {"\n    "}
          <div
            className={"au-builder fp-anim d1"}
            aria-label={"Automation rule builder preview"}
          >
            {"\n      "}
            <div className={"au-rule"}>
              {"\n        "}
              <div className={"au-node trigger"}>
                <span className={"au-tag"}>{"Trigger"}</span>
                <b>{"Customer sends “price”"}</b>
                <small>{"Incoming WhatsApp message matches keyword"}</small>
              </div>
              {"\n        "}
              <div className={"au-arrow"}>{"↓"}</div>
              {"\n        "}
              <div className={"au-node condition"}>
                <span className={"au-tag"}>{"Condition"}</span>
                <b>{"Business hours?"}</b>
                <small>{"Only run during 9 AM – 6 PM"}</small>
              </div>
              {"\n        "}
              <div className={"au-arrow"}>{"↓"}</div>
              {"\n        "}
              <div className={"au-node action"}>
                <span className={"au-tag"}>{"Action"}</span>
                <b>{"Send pricing template + tag “pricing”"}</b>
                <small>{"Reply + label conversation"}</small>
              </div>
              {"\n      "}
            </div>
            {"\n      "}
            <div className={"au-side"}>
              {"\n        "}
              <div className={"fp-stat"}>
                <b>{"Rule active"}</b>
                <span>{"Runs in < 1s"}</span>
              </div>
              {"\n        "}
              <div className={"fp-meter"}>
                <small>{"Manual work saved"}</small>
                <div className={"bar"}>
                  <i style={{ width: "78%" }} />
                </div>
              </div>
              {"\n        "}
              <div className={"fp-meter"}>
                <small>{"Accuracy"}</small>
                <div className={"bar"}>
                  <i style={{ width: "95%" }} />
                </div>
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
            <h2>{"Automate the repeatable parts of WhatsApp work"}</h2>
            {"\n      "}
            <p>
              {
                "WebPing Automations let you create rules that respond to triggers—such as incoming messages, keywords, tags, statuses, or time-based events. When conditions match, WebPing performs actions like replying, routing, tagging, notifying, or scheduling follow-ups."
              }
            </p>
            {"\n      "}
            <p>
              {
                "This reduces repetitive manual work and helps your team deliver fast, consistent responses even outside business hours. Automations don’t replace human judgment; they handle predictable tasks so people can focus on complex conversations."
              }
            </p>
            {"\n      "}
            <p className={"fp-muted"}>
              {
                "The result: faster first responses, cleaner inbox organization, and fewer missed routine actions."
              }
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"fp-panel fp-anim d1"}>
            {"\n      "}
            <h3>{"Common automation use cases"}</h3>
            {"\n      "}
            <ul className={"fp-checklist"}>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {"Welcome or first-response messages for new chats"}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>{"Routing leads to the right teammate or queue"}</span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>{"Auto-tagging by intent, keyword, or source"}</span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>{"After-hours replies and follow-up reminders"}</span>
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
                  "Teams waste time repeating the same replies, manually tagging chats, and forgetting routine follow-ups. During busy periods or after hours, messages sit unanswered and opportunities cool off."
                }
              </p>
              {"\n        "}
              <p className={"fp-muted"}>
                {
                  "Without automation, consistency depends on individual effort—and that doesn’t scale."
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
                  "Automations turn routine actions into reliable rules. You define the trigger and conditions; WebPing handles the response, routing, or follow-up. Human escalation stays built in, so complex cases still reach a person."
                }
              </p>
              {"\n        "}
              <p className={"fp-muted"}>
                {
                  "You get speed and consistency for the predictable, while keeping judgment for the important."
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
          <h2>{"Building blocks for reliable WhatsApp workflows"}</h2>
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
                  <path d={"M13 2 3 14h9l-1 8 10-12h-9l1-8z"} />
                </svg>
              </div>
              <h3>{"Triggers & conditions"}</h3>
              <p>
                {
                  "Start rules from incoming messages, keywords, tags, statuses, or time-based events—then refine with conditions like business hours or customer attributes."
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
                  <path
                    d={
                      "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    }
                  />
                </svg>
              </div>
              <h3>{"Auto-replies"}</h3>
              <p>
                {
                  "Send instant, helpful responses to common questions or new chats—improving first-response time without manual effort."
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
                  <path d={"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"} />
                  <circle cx={"9"} cy={"7"} r={"4"} />
                </svg>
              </div>
              <h3>{"Routing & assignment"}</h3>
              <p>
                {
                  "Route conversations to the right teammate or queue based on keywords, tags, or customer context—keeping ownership clear."
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
                  <path
                    d={
                      "M20.59 13.41 11 3H4v7l9.59 9.59a2 2 0 0 0 2.82 0l4.18-4.18a2 2 0 0 0 0-2.82z"
                    }
                  />
                  <circle cx={"7.5"} cy={"7.5"} r={"1.5"} />
                </svg>
              </div>
              <h3>{"Auto-tagging"}</h3>
              <p>
                {
                  "Label conversations by intent, source, or campaign automatically—keeping the inbox organized and searchable."
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
                  <path d={"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"} />
                  <path d={"M13.73 21a2 2 0 0 1-3.46 0"} />
                </svg>
              </div>
              <h3>{"Notifications & alerts"}</h3>
              <p>
                {
                  "Notify the right people when important events happen—so follow-ups and escalations don’t slip through."
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
                  <path d={"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"} />
                  <path d={"m9 12 2 2 4-4"} />
                </svg>
              </div>
              <h3>{"Safe escalation"}</h3>
              <p>
                {
                  "Keep humans in the loop—automations can hand off complex or sensitive cases to a teammate when needed."
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
            <h2>{"From trigger to action in one clear flow"}</h2>
            {"\n      "}
            <p className={"fp-muted"}>
              {
                "Design rules that are easy to understand, test, and maintain as your team grows."
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
                    {"Start with one clear trigger and a measurable outcome"}
                  </span>
                </li>
                {"\n          "}
                <li>
                  <span className={"fp-tick"}>{"✓"}</span>
                  <span>
                    {"Keep conditions simple; avoid overlapping rules"}
                  </span>
                </li>
                {"\n          "}
                <li>
                  <span className={"fp-tick"}>{"✓"}</span>
                  <span>{"Always define an escalation path to a human"}</span>
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
                <h3>{"Choose a trigger"}</h3>
                <p>
                  {
                    "Pick the event that starts the rule—incoming message, keyword, tag change, status, or a time-based schedule."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"A good trigger is specific and unambiguous."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d1"}>
              <span className={"fp-step-n"}>{"2"}</span>
              <div>
                <h3>{"Add conditions"}</h3>
                <p>
                  {
                    "Refine when the rule runs—business hours, customer attributes, or conversation state."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Conditions keep automations relevant and safe."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d2"}>
              <span className={"fp-step-n"}>{"3"}</span>
              <div>
                <h3>{"Define actions"}</h3>
                <p>
                  {
                    "Reply, route, tag, notify, or schedule a follow-up—individually or in sequence."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Actions should be predictable and easy to audit."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim"}>
              <span className={"fp-step-n"}>{"4"}</span>
              <div>
                <h3>{"Set escalation rules"}</h3>
                <p>
                  {
                    "Decide when a case should hand off to a teammate instead of staying automated."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Escalation protects customer experience."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d1"}>
              <span className={"fp-step-n"}>{"5"}</span>
              <div>
                <h3>{"Test before going live"}</h3>
                <p>
                  {
                    "Validate with sample conversations to catch edge cases and overlapping rules."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Testing prevents surprises at scale."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d2"}>
              <span className={"fp-step-n"}>{"6"}</span>
              <div>
                <h3>{"Monitor & refine"}</h3>
                <p>
                  {
                    "Review automation activity and adjust triggers, conditions, or actions as patterns emerge."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Continuous improvement keeps workflows effective."}
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
                  <b>{"Rule: After-hours reply"}</b>
                  <span className={"fp-badge"}>{"Active"}</span>
                </div>
                {"\n          "}
                <div className={"fp-bc-compose"}>
                  {"\n            "}
                  <div className={"au-rule mini"}>
                    {"\n              "}
                    <div className={"au-node trigger"}>
                      <span className={"au-tag"}>{"Trigger"}</span>
                      <b>{"Message received after 6 PM"}</b>
                    </div>
                    {"\n              "}
                    <div className={"au-arrow"}>{"↓"}</div>
                    {"\n              "}
                    <div className={"au-node action"}>
                      <span className={"au-tag"}>{"Action"}</span>
                      <b>{"Send “we’ll reply tomorrow” + tag “after-hours”"}</b>
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
              <h2>{"Rules your team can read and trust"}</h2>
              {"\n        "}
              <p>
                {
                  "Automations are designed to be transparent: clear triggers, readable conditions, and explicit actions—so everyone understands what happens and when."
                }
              </p>
              {"\n        "}
              <div className={"fp-shot-list"}>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Human-first design"}</b>
                  <span>
                    {"Automations handle routine work, not judgment calls."}
                  </span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Clear ownership"}</b>
                  <span>
                    {"Routing and assignment keep responsibility visible."}
                  </span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Safe by default"}</b>
                  <span>
                    {"Escalation paths ensure complex cases reach a person."}
                  </span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Auditable activity"}</b>
                  <span>{"Teams can review what ran and why."}</span>
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
            <h2>{"Why teams automate WhatsApp workflows"}</h2>
            {"\n      "}
            <p>
              {
                "Consistent, fast handling of the predictable—without losing the human touch."
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
                <strong>{"Faster first responses:"}</strong>
                {" instant replies to common questions, even after hours."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Less manual effort:"}</strong>
                {" routing, tagging, and notifications happen automatically."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Better organization:"}</strong>
                {" conversations are labeled and routed consistently."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Fewer missed actions:"}</strong>
                {" follow-ups and alerts fire reliably."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Scalable consistency:"}</strong>
                {" the same workflow applies across the team."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Human escalation:"}</strong>
                {" complex cases still reach a person."}
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
          <h2>{"Automations for support, sales, and operations"}</h2>
          {"\n    "}
          <div className={"fp-cases"}>
            {"\n      "}
            <article className={"fp-case fp-anim"}>
              <h3>{"Welcome & first response"}</h3>
              <p>
                {
                  "Greet new contacts, set expectations, and route the conversation—so no one waits in silence."
                }
              </p>
              <p className={"fp-muted"}>
                {"Outcome: better first impressions and faster engagement."}
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim d1"}>
              <h3>{"Routing & assignment"}</h3>
              <p>
                {
                  "Send pricing questions to sales, support issues to agents, and high-priority chats to the right queue."
                }
              </p>
              <p className={"fp-muted"}>
                {"Outcome: clearer ownership and faster resolution."}
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim"}>
              <h3>{"Auto-tagging & triage"}</h3>
              <p>
                {
                  "Label conversations by intent, source, or campaign automatically to keep the inbox searchable and organized."
                }
              </p>
              <p className={"fp-muted"}>
                {"Outcome: easier reporting and follow-up."}
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim d1"}>
              <h3>{"After-hours & follow-ups"}</h3>
              <p>
                {
                  "Reply outside business hours and schedule reminders or follow-ups so customers never feel ignored."
                }
              </p>
              <p className={"fp-muted"}>
                {"Outcome: consistent experience across time zones."}
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
                    "Rules run on real conversations, keeping context and ownership visible."
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
                    "Use tags and fields as conditions and actions for smarter routing."
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
                  <path d={"m3 11 18-5v12L3 14v-3z"} />
                  <path d={"M11.6 16.8a3 3 0 1 1-5.8-1.6"} />
                </svg>
              </div>
              <div>
                <h3>{"Broadcasts"}</h3>
                <p>{"Automate follow-ups and routing for campaign replies."}</p>
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
                <p>
                  {
                    "Connect automation triggers and actions with your own systems."
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
            <h2>{"Automation with control and accountability"}</h2>
            {"\n      "}
            <p>
              {
                "Automations are designed to be transparent, reviewable, and safe—so teams can rely on them without losing oversight or customer trust."
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
                  <strong>{"Human escalation:"}</strong>
                  {" complex or sensitive cases hand off to a teammate."}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Clear, readable rules:"}</strong>
                  {" triggers, conditions, and actions stay easy to audit."}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Policy-aware messaging:"}</strong>
                  {
                    " replies follow WhatsApp’s conversation rules and templates."
                  }
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Controlled access:"}</strong>
                  {" align automation changes with team roles and permissions."}
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
            <h2>{"Automations FAQs"}</h2>
            {"\n      "}
            <p className={"fp-muted"}>
              {"Common questions about rule-based WhatsApp workflows."}
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"fp-faqs fp-anim d1"}>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"What can I automate in WebPing?"}</summary>
              <p>
                {
                  "You can automate routine replies, routing, tagging, notifications, and follow-ups based on incoming messages, keywords, tags, statuses, or time-based events."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Will automations replace my team?"}</summary>
              <p>
                {
                  "No. Automations handle predictable tasks so your team can focus on conversations that need human judgment and empathy."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Can I set conditions like business hours?"}</summary>
              <p>
                {
                  "Yes. Conditions let you refine when a rule runs—such as only during business hours or for specific customer attributes."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"How do I prevent wrong replies?"}</summary>
              <p>
                {
                  "Keep triggers specific, test rules with sample conversations, and define escalation paths for edge cases."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>
                {"Can automations route chats to specific people?"}
              </summary>
              <p>
                {
                  "Yes. Routing and assignment actions can direct conversations to the right teammate or queue based on context."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>
                {"Are automations suitable for after-hours support?"}
              </summary>
              <p>
                {
                  "Yes. After-hours replies and follow-up reminders are common and effective automation use cases."
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
              {"Ready to automate the routine and focus on real conversations?"}
            </h2>
            {"\n      "}
            <p>
              {
                "Build reliable WhatsApp workflows that reply, route, tag, and follow up—while keeping humans in control."
              }
            </p>
            {"\n      "}
            <ul className={"fp-final-points"}>
              {"\n        "}
              <li>{"Trigger → condition → action rules"}</li>
              {"\n        "}
              <li>{"Routing, tagging & auto-replies"}</li>
              {"\n        "}
              <li>{"Safe escalation built in"}</li>
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
                {"Where automated replies and routed chats land for your team."}
              </span>
            </a>
            <a className={"fp-rel"} href={"/features/broadcasts"}>
              <b>{"Broadcasts"}</b>
              <span>
                {"Automate follow-ups and routing for campaign replies."}
              </span>
            </a>
            <a className={"fp-rel"} href={"/features/contacts"}>
              <b>{"Contacts"}</b>
              <span>{"Use tags and fields to power smarter rules."}</span>
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
      <script defer={true} src={"/assets/site.js?v=91"} />
    </>
  );
}
