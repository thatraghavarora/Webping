import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export default function SitePage() {
  return (
    <>
      <meta charset={"utf-8"} />
      <meta
        name={"description"}
        content={
          "WebPing Broadcasts: send approved WhatsApp template campaigns to targeted audiences, schedule sends, personalize variables, and manage every reply in the shared inbox."
        }
      />
      <meta name={"robots"} content={"index, follow"} />
      <meta name={"theme-color"} content={"#25d366"} />
      <link
        rel={"canonical"}
        href={"https://webping.webpeaker.com/features/broadcasts"}
      />
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <link
        rel={"icon"}
        type={"image/png"}
        sizes={"32x32"}
        href={"/favicon-32x32.png"}
      />
      <link rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />
      <title>{"Broadcasts | WebPing Features"}</title>
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
      <section className={"fp-hero fp-bc-hero"} id={"hero"}>
        {"\n  "}
        <div className={"wrap fp-hero-grid"}>
          {"\n    "}
          <div className={"fp-hero-copy fp-anim"}>
            {"\n      "}
            <p className={"fp-kicker"}>{"Outbound"}</p>
            {"\n      "}
            <h1>{"Broadcasts that start real WhatsApp conversations"}</h1>
            {"\n      "}
            <p className={"fp-lead"}>
              {
                "Send approved WhatsApp template campaigns to the right audience—announcements, reminders, offers, and follow-ups—then handle every reply in one team inbox with full context."
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
              <li>{"Approved template messaging"}</li>
              <li>{"Targeted audiences & scheduling"}</li>
              <li>{"Replies flow to your team inbox"}</li>
            </ul>
            {"\n    "}
          </div>
          {"\n    "}
          <div
            className={"fp-bc-visual fp-anim d1"}
            aria-label={"Broadcast campaign preview"}
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
                <b>{"Campaign: Payment reminders"}</b>
                <span className={"fp-badge"}>{"Scheduled"}</span>
              </div>
              {"\n        "}
              <div className={"fp-bc-compose"}>
                {"\n          "}
                <div className={"fp-bc-template"}>
                  {"\n            "}
                  <small>{"Approved template · Utility"}</small>
                  {"\n            "}
                  <p>
                    {
                      "Hi {{1}}, your payment of {{2}} is due on {{3}}. Reply if you need help completing it."
                    }
                  </p>
                  {"\n          "}
                </div>
                {"\n          "}
                <div className={"fp-bc-meta"}>
                  {"\n            "}
                  <div className={"fp-bc-chip"}>
                    <b>{"Audience"}</b>
                    <span>{"Pending-payment · 248 contacts"}</span>
                  </div>
                  {"\n            "}
                  <div className={"fp-bc-chip"}>
                    <b>{"Schedule"}</b>
                    <span>{"Tomorrow, 10:00 AM"}</span>
                  </div>
                  {"\n          "}
                </div>
                {"\n        "}
              </div>
              {"\n      "}
            </div>
            {"\n      "}
            <div className={"fp-bc-float fp-float slow"}>
              <b>{"Replies ready"}</b>
              <span>{"Route to sales/support inbox"}</span>
            </div>
            {"\n      "}
            <div className={"fp-bc-float alt fp-float delay"}>
              <b>{"Variables checked"}</b>
              <span>{"Name · Amount · Date"}</span>
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
              {"Planned, compliant WhatsApp campaigns your team can manage"}
            </h2>
            {"\n      "}
            <p>
              {
                "WebPing Broadcasts let you send approved WhatsApp template messages to a selected audience for the moments that need to start outside a normal customer-initiated chat—announcements, offers, reminders, updates, reactivation, and follow-ups."
              }
            </p>
            {"\n      "}
            <p>
              {
                "The workflow is built around relevance and compliance: choose the right template, target the right contacts, preview personalization carefully, and send now or on a schedule. When people respond, their replies become conversations your team can handle with ownership and context in the shared inbox."
              }
            </p>
            {"\n      "}
            <p className={"fp-muted"}>
              {
                "Instead of one-way blasts, Broadcasts help you run structured outreach that leads to real outcomes."
              }
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"fp-panel fp-anim d1"}>
            {"\n      "}
            <h3>{"Where broadcasts fit best"}</h3>
            {"\n      "}
            <ul className={"fp-checklist"}>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {
                    "Promotions or announcements to relevant, opted-in/interested segments"
                  }
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {"Appointment, payment, delivery, or event reminders"}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {"Re-engaging older leads with a useful, approved message"}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {"Post-event or post-purchase follow-ups that invite a reply"}
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
                  "Reaching many customers on WhatsApp manually is slow, inconsistent, and easy to get wrong. Without structure, teams risk sending irrelevant messages, making personalization mistakes, and losing track of replies when a campaign gets responses."
                }
              </p>
              {"\n        "}
              <p className={"fp-muted"}>
                {
                  "At the same time, business-initiated WhatsApp outreach must follow platform rules and use approved templates—making ad-hoc messaging impractical at scale."
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
                  "Broadcasts provide a clear campaign workflow: select an approved template, target the right segment, preview variables, schedule responsibly, and send with confidence. Replies return to your team workflow so interested or support-related responses are handled quickly."
                }
              </p>
              {"\n        "}
              <p className={"fp-muted"}>
                {
                  "You get compliant, relevant outreach—and a reliable way to turn campaign replies into conversations and results."
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
          <h2>{"Everything you need to run WhatsApp campaigns well"}</h2>
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
                  <path
                    d={
                      "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    }
                  />
                  <path d={"M14 2v6h6"} />
                  <path d={"M9 15h6"} />
                </svg>
              </div>
              <h3>{"Approved template selection"}</h3>
              <p>
                {
                  "Choose WhatsApp-approved templates that match your purpose—reminders, updates, offers, or follow-ups—so outbound messages stay compliant and clear."
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
                  <circle cx={"11"} cy={"11"} r={"8"} />
                  <path d={"m21 21-4.3-4.3"} />
                </svg>
              </div>
              <h3>{"Audience targeting & segmentation"}</h3>
              <p>
                {
                  "Reach the right people using tags, fields, filters, or lists. Better targeting improves relevance, response quality, and customer trust."
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
                  <path d={"M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"} />
                  <circle cx={"12"} cy={"12"} r={"3"} />
                </svg>
              </div>
              <h3>{"Variable preview & personalization"}</h3>
              <p>
                {
                  "Review dynamic fields like names, dates, amounts, or order details before sending to prevent mistakes and keep messages accurate."
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
              <h3>{"Scheduling & timing"}</h3>
              <p>
                {
                  "Send immediately or schedule campaigns for the right moment, giving your team time to prepare for incoming replies."
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
              <h3>{"Reply handling in context"}</h3>
              <p>
                {
                  "Campaign responses flow back into your conversation workflow so the right teammates can follow up quickly and convert interest into action."
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
                  <path d={"M3 3v18h18"} />
                  <path d={"m7 14 4-4 3 3 5-6"} />
                </svg>
              </div>
              <h3>{"Campaign visibility"}</h3>
              <p>
                {
                  "Review send outcomes and response patterns to understand what worked and improve future broadcasts."
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
            <h2>{"A simple, responsible broadcast workflow"}</h2>
            {"\n      "}
            <p className={"fp-muted"}>
              {
                "From goal to replies, each step is designed to keep campaigns relevant, compliant, and ready for follow-up."
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
                    {
                      "Define a clear goal and pick a matching approved template"
                    }
                  </span>
                </li>
                {"\n          "}
                <li>
                  <span className={"fp-tick"}>{"✓"}</span>
                  <span>
                    {"Target a relevant segment, not your entire list"}
                  </span>
                </li>
                {"\n          "}
                <li>
                  <span className={"fp-tick"}>{"✓"}</span>
                  <span>
                    {"Preview variables and assign owners for replies"}
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
                <h3>{"Define the campaign goal"}</h3>
                <p>
                  {
                    "Decide what you want to achieve—a reminder, update, announcement, offer, reactivation, or follow-up."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Your goal guides the template, audience, and timing."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d1"}>
              <span className={"fp-step-n"}>{"2"}</span>
              <div>
                <h3>{"Select an approved template"}</h3>
                <p>
                  {
                    "Choose a WhatsApp-approved template with the right wording and variables for the message purpose."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Clear, useful messages set the right expectation."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d2"}>
              <span className={"fp-step-n"}>{"3"}</span>
              <div>
                <h3>{"Target the right audience"}</h3>
                <p>
                  {
                    "Filter contacts by tags, fields, or segments so the message reaches people who will find it relevant."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Good targeting protects trust and improves results."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim"}>
              <span className={"fp-step-n"}>{"4"}</span>
              <div>
                <h3>{"Preview and personalize"}</h3>
                <p>
                  {
                    "Check names, dates, amounts, links, buttons, and media mapping before you send."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"A quick review prevents avoidable mistakes."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d1"}>
              <span className={"fp-step-n"}>{"5"}</span>
              <div>
                <h3>{"Send now or schedule"}</h3>
                <p>
                  {
                    "Launch immediately or schedule for a better time—while ensuring your team is ready to respond."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Timing and pacing shape the customer experience."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d2"}>
              <span className={"fp-step-n"}>{"6"}</span>
              <div>
                <h3>{"Manage replies and outcomes"}</h3>
                <p>
                  {
                    "Monitor responses and route interested or support-related replies to the right teammates in the inbox."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Fast, contextual follow-up is where campaigns pay off."}
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
                  <b>{"Broadcast setup"}</b>
                  <span className={"fp-badge"}>{"Ready to send"}</span>
                </div>
                {"\n          "}
                <div className={"fp-bc-compose"}>
                  {"\n            "}
                  <div className={"fp-bc-template"}>
                    {"\n              "}
                    <small>{"Template preview"}</small>
                    {"\n              "}
                    <p>
                      {
                        "Hi {{1}}, we’re hosting {{2}} on {{3}}. Tap below to confirm your spot."
                      }
                    </p>
                    {"\n            "}
                  </div>
                  {"\n            "}
                  <div className={"fp-bc-meta"}>
                    {"\n              "}
                    <div className={"fp-bc-chip"}>
                      <b>{"Segment"}</b>
                      <span>{"Event-interest · Jaipur"}</span>
                    </div>
                    {"\n              "}
                    <div className={"fp-bc-chip"}>
                      <b>{"Delivery"}</b>
                      <span>{"Send now / Schedule"}</span>
                    </div>
                    {"\n              "}
                    <div className={"fp-bc-chip"}>
                      <b>{"After send"}</b>
                      <span>{"Replies → Shared inbox"}</span>
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
              <h2>{"Campaigns that are easy to prepare—and easy to handle"}</h2>
              {"\n        "}
              <p>
                {
                  "Broadcasts bring the key steps of outreach into one flow: pick a template, choose who should receive it, verify details, and make sure your team is ready when replies arrive."
                }
              </p>
              {"\n        "}
              <div className={"fp-shot-list"}>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Purpose-driven templates"}</b>
                  <span>
                    {
                      "Match each campaign to an approved template suited for the message."
                    }
                  </span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Precise targeting"}</b>
                  <span>
                    {
                      "Send to segments defined by tags, fields, or lists—not everyone by default."
                    }
                  </span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Confident previews"}</b>
                  <span>
                    {
                      "Confirm personalization and content before a message reaches customers."
                    }
                  </span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Conversation-ready follow-up"}</b>
                  <span>
                    {
                      "Turn responses into owned, contextual conversations in the inbox."
                    }
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
            <h2>{"Why teams use WebPing Broadcasts"}</h2>
            {"\n      "}
            <p>
              {
                "Outreach that respects customers’ attention and gives your team a clear path from send to response."
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
                <strong>{"Compliant outreach:"}</strong>
                {
                  " run business-initiated messaging using approved WhatsApp templates."
                }
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Better relevance:"}</strong>
                {" target specific segments so messages are timely and useful."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Fewer mistakes:"}</strong>
                {" preview variables and content before sending at scale."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Time savings:"}</strong>
                {" reach many contacts without manual, one-by-one messaging."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Stronger follow-up:"}</strong>
                {
                  " replies return to the inbox where owners can respond with context."
                }
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Learn and improve:"}</strong>
                {" understand responses and refine future campaigns."}
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
          <h2>{"Broadcasts for marketing and operations"}</h2>
          {"\n    "}
          <div className={"fp-cases"}>
            {"\n      "}
            <article className={"fp-case fp-anim"}>
              <h3>{"Promotions & announcements"}</h3>
              <p>
                {
                  "Share offers, launches, or updates with segments that have shown interest. Use clear templates and relevant targeting to invite meaningful replies."
                }
              </p>
              <p className={"fp-muted"}>
                {
                  "Outcome: engaged audiences and conversations your team can act on."
                }
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim d1"}>
              <h3>{"Reminders & notifications"}</h3>
              <p>
                {
                  "Send appointment, payment, delivery, or event reminders so customers get timely, helpful information on WhatsApp."
                }
              </p>
              <p className={"fp-muted"}>
                {
                  "Outcome: fewer no-shows, faster completions, and reduced manual follow-up."
                }
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim"}>
              <h3>{"Lead reactivation"}</h3>
              <p>
                {
                  "Reconnect with older or inactive leads using a useful, approved message that gives them a reason to respond."
                }
              </p>
              <p className={"fp-muted"}>
                {"Outcome: revived opportunities handled quickly in the inbox."}
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim d1"}>
              <h3>{"Post-purchase & post-event follow-ups"}</h3>
              <p>
                {
                  "Check in after a purchase, service, or event to gather feedback, offer support, or guide the next step."
                }
              </p>
              <p className={"fp-muted"}>
                {
                  "Outcome: stronger relationships and a clear path to continued engagement."
                }
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
                  <path d={"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"} />
                  <circle cx={"9"} cy={"7"} r={"4"} />
                  <path d={"M22 21v-2a4 4 0 0 0-3-3.87"} />
                  <path d={"M16 3.13a4 4 0 0 1 0 7.75"} />
                </svg>
              </div>
              <div>
                <h3>{"Contacts & segments"}</h3>
                <p>
                  {
                    "Target audiences using contact tags, fields, and lists so every campaign reaches the right people."
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
                  <path
                    d={
                      "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    }
                  />
                  <path d={"M14 2v6h6"} />
                </svg>
              </div>
              <div>
                <h3>{"WhatsApp templates"}</h3>
                <p>
                  {
                    "Use approved templates for compliant, structured business-initiated messaging."
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
                    "Handle every campaign reply in one workspace with ownership, notes, and full context."
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
                    "Keep an eye on campaign activity and responses alongside your broader operations."
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
            <h2>{"Responsible, policy-aware campaign messaging"}</h2>
            {"\n      "}
            <p>
              {
                "Broadcasts are designed for thoughtful outreach on the official WhatsApp Business Platform. By centering campaigns on approved templates, relevant audiences, and team-owned replies, WebPing helps you communicate in a way that respects customers and platform expectations."
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
                  <strong>{"Template-based outreach:"}</strong>
                  {
                    " business-initiated messages use approved WhatsApp templates."
                  }
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Relevance first:"}</strong>
                  {
                    " segment audiences to send useful messages to the right contacts."
                  }
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Accountable follow-up:"}</strong>
                  {" replies are handled in a visible, team-owned workflow."}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Controlled access:"}</strong>
                  {
                    " align campaign actions with your team roles and workspace practices."
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
            <h2>{"Broadcasts FAQs"}</h2>
            {"\n      "}
            <p className={"fp-muted"}>
              {
                "Common questions about sending WhatsApp campaigns with WebPing."
              }
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"fp-faqs fp-anim d1"}>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"What is a WhatsApp broadcast in WebPing?"}</summary>
              <p>
                {
                  "A broadcast is a campaign that sends an approved WhatsApp template message to a selected audience. It’s used for planned outreach like reminders, updates, announcements, or follow-ups that start outside an active customer chat."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>
                {"Do I need approved templates to send broadcasts?"}
              </summary>
              <p>
                {
                  "Yes. Business-initiated WhatsApp messages typically require approved templates. Broadcasts are built around this model to support compliant, structured messaging."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Where do replies to a broadcast go?"}</summary>
              <p>
                {
                  "Replies come back into your conversation workflow and can be handled in the shared inbox, where teammates can respond with context and clear ownership."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>
                {"Can I target a specific segment instead of all contacts?"}
              </summary>
              <p>
                {
                  "Yes. You can select audiences using tags, fields, filters, or lists so your message reaches the people most likely to find it relevant."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Can I schedule a broadcast for later?"}</summary>
              <p>
                {
                  "Yes. You can send immediately or schedule a campaign for a planned time, which also helps your team prepare to handle replies."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Are broadcasts only for marketing?"}</summary>
              <p>
                {
                  "No. Broadcasts work for both marketing and operational messages—such as appointment reminders, payment or delivery updates, confirmations, and service follow-ups."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"How do I make broadcasts effective?"}</summary>
              <p>
                {
                  "Start with a clear goal, use a relevant approved template, target the right segment, preview variables carefully, and make sure your team is ready to respond quickly to replies."
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
            <h2>{"Ready to send broadcasts your customers welcome?"}</h2>
            {"\n      "}
            <p>
              {
                "Run targeted, compliant WhatsApp campaigns and turn replies into real conversations—right inside WebPing."
              }
            </p>
            {"\n      "}
            <ul className={"fp-final-points"}>
              {"\n        "}
              <li>{"Approved templates with clear previews"}</li>
              {"\n        "}
              <li>{"Targeted segments and flexible scheduling"}</li>
              {"\n        "}
              <li>{"Every reply handled in your team inbox"}</li>
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
                {"Manage every campaign reply with ownership and full context."}
              </span>
            </a>
            <a className={"fp-rel"} href={"/features/contacts"}>
              <b>{"Contacts"}</b>
              <span>
                {
                  "Segment audiences with tags and fields for relevant outreach."
                }
              </span>
            </a>
            <a className={"fp-rel"} href={"/features/automations"}>
              <b>{"Automations"}</b>
              <span>
                {"Route, tag, and follow up on responses automatically."}
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
