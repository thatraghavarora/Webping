import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export default function SitePage() {
  return (
    <>
      <meta charset={"utf-8"} />
      <meta
        name={"description"}
        content={
          "WebPing Shared Inbox: manage all WhatsApp conversations in one team workspace with assignment, internal notes, tags, contact context, and compliant replies."
        }
      />
      <meta name={"robots"} content={"index, follow"} />
      <meta name={"theme-color"} content={"#25d366"} />
      <link
        rel={"canonical"}
        href={"https://webping.webpeaker.com/features/shared-inbox"}
      />
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <link
        rel={"icon"}
        type={"image/png"}
        sizes={"32x32"}
        href={"/favicon-32x32.png"}
      />
      <link rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />
      <title>{"Shared Inbox | WebPing Features"}</title>
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
      <section className={"fp-hero"} id={"hero"}>
        {"\n  "}
        <div className={"wrap fp-hero-grid"}>
          {"\n    "}
          <div className={"fp-hero-copy"}>
            {"\n      "}
            <p className={"fp-kicker"}>{"Conversations"}</p>
            {"\n      "}
            <h1>{"Shared Inbox for WhatsApp teams"}</h1>
            {"\n      "}
            <p className={"fp-lead"}>
              {
                "Bring every WhatsApp conversation into one shared workspace. Assign owners, reply with full context, leave internal notes, and keep your team aligned—without passing around a single phone."
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
              <li>{"Official WhatsApp Business API"}</li>
              <li>{"Clear ownership & collaboration"}</li>
              <li>{"Built for support and sales teams"}</li>
            </ul>
            {"\n    "}
          </div>
          {"\n    "}
          <div
            className={"fp-preview"}
            aria-label={"Shared inbox product preview"}
          >
            {"\n      "}
            <div className={"fp-prev-top"}>
              <div className={"fp-dots"}>
                <i />
                <i />
                <i />
              </div>
              <b>{"Shared inbox"}</b>
              <span className={"fp-badge"}>{"Team workspace"}</span>
            </div>
            {"\n      "}
            <div className={"fp-prev-body"}>
              {"\n        "}
              <ul className={"fp-prev-list"}>
                {"\n          "}
                <li>
                  <span />
                  <div>
                    <b>{"Priya · New lead"}</b>
                    <small>
                      {"“Can you share pricing?” · Assigned to Ankit"}
                    </small>
                  </div>
                </li>
                {"\n          "}
                <li>
                  <span />
                  <div>
                    <b>{"Rahul · Support"}</b>
                    <small>{"Order update requested · Open"}</small>
                  </div>
                </li>
                {"\n          "}
                <li>
                  <span />
                  <div>
                    <b>{"Acme Co. · Follow-up"}</b>
                    <small>{"Demo scheduled · Tagged: sales"}</small>
                  </div>
                </li>
                {"\n          "}
                <li>
                  <span />
                  <div>
                    <b>{"Neha · Pending"}</b>
                    <small>{"Waiting on customer reply · Note added"}</small>
                  </div>
                </li>
                {"\n        "}
              </ul>
              {"\n        "}
              <div className={"fp-prev-side"}>
                {"\n          "}
                <div className={"fp-meter"}>
                  <small>{"Reply clarity"}</small>
                  <div className={"bar"}>
                    <i style={{ width: "92%" }} />
                  </div>
                </div>
                {"\n          "}
                <div className={"fp-meter"}>
                  <small>{"Team visibility"}</small>
                  <div className={"bar"}>
                    <i style={{ width: "95%" }} />
                  </div>
                </div>
                {"\n          "}
                <div className={"fp-stat"}>
                  <b>{"1 number"}</b>
                  <span>{"Many teammates, one inbox"}</span>
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
      <section className={"fp-sec"} id={"overview"}>
        {"\n  "}
        <div className={"wrap fp-two"}>
          {"\n    "}
          <div>
            {"\n      "}
            <p className={"fp-label"}>{"02 · Feature overview"}</p>
            {"\n      "}
            <h2>{"One WhatsApp number, one workspace for the whole team"}</h2>
            {"\n      "}
            <p>
              {
                "WebPing Shared Inbox is the central place where your team reads, manages, and replies to WhatsApp conversations from a single business number. Instead of chats being trapped on one person’s device, every conversation is visible in a shared, organized workspace with the context needed to respond well."
              }
            </p>
            {"\n      "}
            <p>
              {
                "Each thread can carry customer details, message history, assignment, tags, status, and private internal notes. That means agents know who they’re talking to, what was said before, and who is responsible next—so replies are faster, handoffs are smoother, and customers get a consistent experience."
              }
            </p>
            {"\n      "}
            <p className={"fp-muted"}>
              {
                "It turns WhatsApp from a personal messaging app into a clear, accountable business workflow for support, sales, and operations."
              }
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"fp-panel"}>
            {"\n      "}
            <h3>{"Where it fits best"}</h3>
            {"\n      "}
            <ul className={"fp-checklist"}>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {
                    "Support teams handling daily customer questions on WhatsApp"
                  }
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {
                    "Sales teams responding to inbound leads from ads, websites, and referrals"
                  }
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {
                    "Businesses where multiple people must share one WhatsApp number"
                  }
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {
                    "Owners and managers who need visibility without taking over every chat"
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
          <p className={"fp-label"}>{"03 · Problem & solution"}</p>
          {"\n    "}
          <div className={"fp-two"}>
            {"\n      "}
            <article className={"fp-panel"}>
              {"\n        "}
              <h2>{"The challenge"}</h2>
              {"\n        "}
              <p>
                {
                  "When WhatsApp lives on a single phone or in disconnected chats, teams struggle to keep up. Messages get missed, two people reply to the same customer, context is lost during handoffs, and there’s no clear view of what’s open, pending, or resolved."
                }
              </p>
              {"\n        "}
              <p className={"fp-muted"}>
                {
                  "As volume grows, personal-phone workflows make it hard to deliver fast, consistent, and accountable customer communication."
                }
              </p>
              {"\n      "}
            </article>
            {"\n      "}
            <article className={"fp-panel highlight"}>
              {"\n        "}
              <h2>{"How WebPing solves it"}</h2>
              {"\n        "}
              <p>
                {
                  "Shared Inbox centralizes every conversation in one team workspace with ownership, history, and collaboration built in. Teammates can see the same queue, assign responsibility, add private notes, organize chats with tags and statuses, and reply with full customer context."
                }
              </p>
              {"\n        "}
              <p className={"fp-muted"}>
                {
                  "The result: fewer missed messages, no duplicate replies, cleaner handoffs, and a WhatsApp operation the whole team can run together."
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
          <p className={"fp-label"}>{"04 · Key capabilities"}</p>
          {"\n    "}
          <h2>
            {"Everything you need to manage WhatsApp conversations as a team"}
          </h2>
          {"\n    "}
          <div className={"fp-grid"}>
            {"\n      "}
            <article
              className={
                "fp-card webping-card-enter motion-reduce:animate-none"
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
              <h3>{"Unified conversation queue"}</h3>
              <p>
                {
                  "View incoming, open, unread, pending, and assigned conversations in one place so the team always knows what needs attention."
                }
              </p>
            </article>
            {"\n      "}
            <article
              className={
                "fp-card webping-card-enter motion-reduce:animate-none"
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
              <h3>{"Assignment & ownership"}</h3>
              <p>
                {
                  "Assign each chat to the right person or team. Clear ownership reduces confusion, avoids duplicate replies, and makes accountability visible."
                }
              </p>
            </article>
            {"\n      "}
            <article
              className={
                "fp-card webping-card-enter motion-reduce:animate-none"
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
              <h3>{"Internal notes"}</h3>
              <p>
                {
                  "Leave private notes inside a conversation to share context, next steps, or handoff details. Notes stay internal and are never sent to the customer."
                }
              </p>
            </article>
            {"\n      "}
            <article
              className={
                "fp-card webping-card-enter motion-reduce:animate-none"
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
              <h3>{"Tags & conversation status"}</h3>
              <p>
                {
                  "Label chats by intent, source, priority, or campaign and track states like open, pending, or resolved to keep work organized and actionable."
                }
              </p>
            </article>
            {"\n      "}
            <article
              className={
                "fp-card webping-card-enter motion-reduce:animate-none"
              }
            >
              <div className={"fp-ico"}>
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
              <h3>{"Customer & message context"}</h3>
              <p>
                {
                  "See contact details and conversation history alongside the thread so agents can reply with continuity instead of asking customers to repeat themselves."
                }
              </p>
            </article>
            {"\n      "}
            <article
              className={
                "fp-card webping-card-enter motion-reduce:animate-none"
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
              <h3>{"Compliant replies"}</h3>
              <p>
                {
                  "Respond within the active WhatsApp conversation window and use approved templates when a compliant outbound or follow-up message is required."
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
          <div>
            {"\n      "}
            <p className={"fp-label"}>{"05 · How it works"}</p>
            {"\n      "}
            <h2>{"A simple workflow from first message to resolution"}</h2>
            {"\n      "}
            <p className={"fp-muted"}>
              {
                "Shared Inbox gives your team a repeatable process so every conversation is seen, owned, and handled with context."
              }
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <ol className={"fp-steps"}>
            {"\n      "}
            <li className={"fp-step"}>
              <span className={"fp-step-n"}>{"1"}</span>
              <div>
                <h3>{"A customer messages your WhatsApp number"}</h3>
                <p>
                  {
                    "New and existing contacts reach your business number and their conversation appears in the shared inbox."
                  }
                </p>
                <p className={"fp-muted"}>
                  {
                    "Available history and contact context stay attached to the thread."
                  }
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step"}>
              <span className={"fp-step-n"}>{"2"}</span>
              <div>
                <h3>{"The team reviews the conversation"}</h3>
                <p>
                  {
                    "An agent opens the chat to understand who the customer is, what they need, and whether someone is already handling it."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Tags, source, and previous messages prevent confusion."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step"}>
              <span className={"fp-step-n"}>{"3"}</span>
              <div>
                <h3>{"Ownership is assigned"}</h3>
                <p>
                  {
                    "The conversation is assigned to the right teammate or handled through your queue process."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Clear responsibility reduces missed and duplicate replies."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step"}>
              <span className={"fp-step-n"}>{"4"}</span>
              <div>
                <h3>{"Reply and collaborate internally"}</h3>
                <p>
                  {
                    "The owner responds to the customer and, if needed, adds private notes or coordinates with teammates inside the thread."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Customers see only the replies meant for them."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step"}>
              <span className={"fp-step-n"}>{"5"}</span>
              <div>
                <h3>{"Organize the outcome"}</h3>
                <p>
                  {
                    "The team updates tags and status, and decides the next action—resolve, keep pending, follow up, enrich the contact, or move to a pipeline."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"This keeps the inbox clean and work clearly tracked."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step"}>
              <span className={"fp-step-n"}>{"6"}</span>
              <div>
                <h3>{"Close or continue the journey"}</h3>
                <p>
                  {
                    "Resolved conversations can be closed, while qualified leads or ongoing issues continue through follow-ups, templates, or connected workflows."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Every chat becomes part of a visible customer journey."}
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
          <p className={"fp-label"}>{"06 · Product showcase"}</p>
          {"\n    "}
          <div className={"fp-showcase"}>
            {"\n      "}
            <div className={"fp-shot"}>
              {"\n        "}
              <div
                className={"fp-preview"}
                aria-label={"Inbox workflow preview"}
              >
                {"\n          "}
                <div className={"fp-prev-top"}>
                  <div className={"fp-dots"}>
                    <i />
                    <i />
                    <i />
                  </div>
                  <b>{"Conversation workspace"}</b>
                  <span className={"fp-badge"}>{"Live view"}</span>
                </div>
                {"\n          "}
                <div className={"fp-prev-body"}>
                  {"\n            "}
                  <ul className={"fp-prev-list"}>
                    {"\n              "}
                    <li>
                      <span />
                      <div>
                        <b>{"Owner: Riya"}</b>
                        <small>{"Assigned · Replying with full history"}</small>
                      </div>
                    </li>
                    {"\n              "}
                    <li>
                      <span />
                      <div>
                        <b>{"Status: Pending"}</b>
                        <small>{"Awaiting customer confirmation"}</small>
                      </div>
                    </li>
                    {"\n              "}
                    <li>
                      <span />
                      <div>
                        <b>{"Tag: Pricing"}</b>
                        <small>{"Lead qualified from website"}</small>
                      </div>
                    </li>
                    {"\n              "}
                    <li>
                      <span />
                      <div>
                        <b>{"Internal note"}</b>
                        <small>
                          {"“Share plan comparison and follow up tomorrow.”"}
                        </small>
                      </div>
                    </li>
                    {"\n            "}
                  </ul>
                  {"\n            "}
                  <div className={"fp-prev-side"}>
                    {"\n              "}
                    <div className={"fp-stat"}>
                      <b>{"Context"}</b>
                      <span>{"Contact, history & notes in one view"}</span>
                    </div>
                    {"\n              "}
                    <div className={"fp-meter"}>
                      <small>{"Handoff quality"}</small>
                      <div className={"bar"}>
                        <i style={{ width: "90%" }} />
                      </div>
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
            <div className={"fp-shot-copy"}>
              {"\n        "}
              <h2>{"Designed for real, day-to-day WhatsApp operations"}</h2>
              {"\n        "}
              <p>
                {
                  "Shared Inbox focuses on the moments that matter: seeing new messages quickly, knowing who owns a chat, understanding the customer before replying, and keeping the next step clear."
                }
              </p>
              {"\n        "}
              <div className={"fp-shot-list"}>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Clear queue & priorities"}</b>
                  <span>
                    {
                      "Spot open, unread, and pending conversations so nothing important is buried."
                    }
                  </span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Context beside every reply"}</b>
                  <span>
                    {
                      "Contact details, past messages, tags, and notes stay next to the conversation."
                    }
                  </span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Collaboration without confusion"}</b>
                  <span>
                    {
                      "Assignments and internal notes make handoffs and teamwork straightforward."
                    }
                  </span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Actionable outcomes"}</b>
                  <span>
                    {
                      "Move chats forward by updating status, organizing with tags, or connecting to other workflows."
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
          <div>
            {"\n      "}
            <p className={"fp-label"}>{"07 · Benefits"}</p>
            {"\n      "}
            <h2>{"Why teams rely on Shared Inbox"}</h2>
            {"\n      "}
            <p>
              {
                "Practical improvements you feel in response speed, team coordination, and customer experience."
              }
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <ul className={"fp-checklist big"}>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Faster responses:"}</strong>
                {
                  " agents reply with context instead of searching through phones or asking customers to repeat details."
                }
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Clear accountability:"}</strong>
                {
                  " every conversation has a visible owner or queue, so chats don’t fall through the cracks."
                }
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Smoother handoffs:"}</strong>
                {
                  " internal notes and shared history make shift changes and escalations easy."
                }
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Consistent experience:"}</strong>
                {
                  " one workspace and shared process help the team communicate in a unified way."
                }
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Better visibility:"}</strong>
                {
                  " managers can understand workload and conversation status without interrupting agents."
                }
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Room to scale:"}</strong>
                {
                  " grow from one person to a full team on the same WhatsApp number without chaos."
                }
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
          <p className={"fp-label"}>{"08 · Use cases"}</p>
          {"\n    "}
          <h2>{"How businesses use Shared Inbox every day"}</h2>
          {"\n    "}
          <div className={"fp-cases"}>
            {"\n      "}
            <article className={"fp-case"}>
              <h3>{"Customer support"}</h3>
              <p>
                {
                  "Handle order questions, service issues, and daily inquiries from one queue. Agents see prior messages and notes, assign tricky cases, and resolve conversations with clear status tracking."
                }
              </p>
              <p className={"fp-muted"}>
                {
                  "Outcome: quicker resolutions and fewer repeated explanations for customers."
                }
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case"}>
              <h3>{"Inbound sales & lead response"}</h3>
              <p>
                {
                  "Respond to leads from ads, websites, and referrals before they go cold. Qualify conversations, tag intent, assign owners, and keep follow-ups organized."
                }
              </p>
              <p className={"fp-muted"}>
                {
                  "Outcome: faster first response and a clearer path from chat to opportunity."
                }
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case"}>
              <h3>{"Multi-person teams on one number"}</h3>
              <p>
                {
                  "Let sales, support, and operations collaborate on a single business WhatsApp number without sharing devices or forwarding screenshots."
                }
              </p>
              <p className={"fp-muted"}>
                {"Outcome: one reliable channel with coordinated teamwork."}
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case"}>
              <h3>{"Founder & manager oversight"}</h3>
              <p>
                {
                  "Stay informed about conversation volume, ownership, and progress while the team handles replies day to day."
                }
              </p>
              <p className={"fp-muted"}>
                {
                  "Outcome: visibility and control without becoming the bottleneck."
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
          <p className={"fp-label"}>{"09 · Integrations"}</p>
          {"\n    "}
          <h2>{"Connected to the rest of your WebPing workflow"}</h2>
          {"\n    "}
          <div className={"fp-grid sm"}>
            {"\n      "}
            <article className={"fp-mini"}>
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
                    "Keep customer profiles, fields, and history connected to every conversation for richer context."
                  }
                </p>
              </div>
            </article>
            {"\n      "}
            <article className={"fp-mini"}>
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
                    "Route, tag, or triage incoming chats with rule-based workflows that support your team process."
                  }
                </p>
              </div>
            </article>
            {"\n      "}
            <article className={"fp-mini"}>
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
                <p>
                  {
                    "Manage replies to campaigns in the same inbox so outreach and conversations stay connected."
                  }
                </p>
              </div>
            </article>
            {"\n      "}
            <article className={"fp-mini"}>
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
                <h3>{"Sales pipelines"}</h3>
                <p>
                  {
                    "Move qualified conversations into deal stages with owners and next steps when a chat becomes an opportunity."
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
          <div>
            {"\n      "}
            <p className={"fp-label"}>{"10 · Trust & security"}</p>
            {"\n      "}
            <h2>{"Operate WhatsApp conversations responsibly"}</h2>
            {"\n      "}
            <p>
              {
                "Shared Inbox is designed to support accountable teamwork and compliant messaging on the official WhatsApp Business Platform. Clear access, visible ownership, and structured workflows help protect both your team and your customers."
              }
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"fp-panel"}>
            {"\n      "}
            <ul className={"fp-checklist"}>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Role-aware collaboration:"}</strong>
                  {
                    " pair inbox access with team roles and permissions appropriate to each person."
                  }
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Accountable workflows:"}</strong>
                  {
                    " assignments, statuses, and notes create a clear record of who handled what."
                  }
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Policy-aware messaging:"}</strong>
                  {
                    " reply within the active conversation window and use approved templates when required."
                  }
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Workspace visibility:"}</strong>
                  {
                    " operational clarity helps teams follow consistent, safe communication practices."
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
          <div>
            {"\n      "}
            <p className={"fp-label"}>{"11 · FAQs"}</p>
            {"\n      "}
            <h2>{"Shared Inbox FAQs"}</h2>
            {"\n      "}
            <p className={"fp-muted"}>
              {
                "Answers to common questions about using a team inbox for WhatsApp in WebPing."
              }
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"fp-faqs"}>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"What is a WhatsApp shared inbox?"}</summary>
              <p>
                {
                  "A shared inbox lets multiple teammates view and manage conversations from one business WhatsApp number in a single workspace, with context, assignment, and collaboration tools."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>
                {"Can multiple agents reply from the same number?"}
              </summary>
              <p>
                {
                  "Yes. Shared Inbox is built so your team can work together on one business number while keeping ownership and conversation history clear."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Will customers see our internal notes?"}</summary>
              <p>
                {
                  "No. Internal notes are private to your team inside WebPing and are never sent to the customer."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>
                {"How do we avoid two people replying to the same chat?"}
              </summary>
              <p>
                {
                  "Use assignments/ownership and visible conversation status so everyone knows who is responsible. This keeps replies coordinated and prevents duplicates."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Can we organize chats by priority or topic?"}</summary>
              <p>
                {
                  "Yes. Tags and statuses help you label conversations (for example by intent, campaign, or urgency) and track what’s open, pending, or resolved."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>
                {"Does Shared Inbox work for both support and sales?"}
              </summary>
              <p>
                {
                  "Absolutely. Support teams use it to resolve issues efficiently, while sales teams use it to respond to leads quickly and move qualified chats into follow-ups or pipelines."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>
                {"What about WhatsApp messaging rules and templates?"}
              </summary>
              <p>
                {
                  "You can reply within the active conversation window as usual. When a message must be sent outside the allowed window or as outreach, approved WhatsApp templates should be used in line with platform policies."
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
          <div className={"fp-final-copy"}>
            {"\n      "}
            <p className={"fp-label on-dark"}>{"12 · Get started"}</p>
            {"\n      "}
            <h2>{"Ready to run WhatsApp from one shared inbox?"}</h2>
            {"\n      "}
            <p>
              {
                "Give your team a clear workspace to reply faster, stay organized, and deliver a consistent customer experience—on the official WhatsApp Business API."
              }
            </p>
            {"\n      "}
            <ul className={"fp-final-points"}>
              {"\n        "}
              <li>{"One number for your whole team"}</li>
              {"\n        "}
              <li>{"Ownership, notes, tags & context"}</li>
              {"\n        "}
              <li>{"Built for support and sales workflows"}</li>
              {"\n      "}
            </ul>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"fp-final-actions"}>
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
            <a className={"fp-rel"} href={"/features/broadcasts"}>
              <b>{"Broadcasts"}</b>
              <span>
                {
                  "Send approved template campaigns and manage replies in one place."
                }
              </span>
            </a>
            <a className={"fp-rel"} href={"/features/automations"}>
              <b>{"Automations"}</b>
              <span>
                {
                  "Route, tag, and handle routine WhatsApp workflows automatically."
                }
              </span>
            </a>
            <a className={"fp-rel"} href={"/features/contacts"}>
              <b>{"Contacts"}</b>
              <span>
                {
                  "Keep customer profiles, tags, and history connected to every chat."
                }
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
