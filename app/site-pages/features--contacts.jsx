import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export default function SitePage() {
  return (
    <>
      <meta charset={"utf-8"} />
      <meta
        name={"description"}
        content={
          "WebPing Contacts: unified customer records with tags, custom fields, conversation history, and segmentation for WhatsApp workflows."
        }
      />
      <meta name={"robots"} content={"index, follow"} />
      <meta name={"theme-color"} content={"#25d366"} />
      <link
        rel={"canonical"}
        href={"https://webping.webpeaker.com/features/contacts"}
      />
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <link
        rel={"icon"}
        type={"image/png"}
        sizes={"32x32"}
        href={"/favicon-32x32.png"}
      />
      <link rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />
      <title>{"Contacts | WebPing Features"}</title>
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
      <section className={"fp-hero ct-hero"} id={"hero"}>
        {"\n  "}
        <div className={"wrap fp-hero-grid"}>
          {"\n    "}
          <div className={"fp-hero-copy fp-anim"}>
            {"\n      "}
            <p className={"fp-kicker"}>{"Growth"}</p>
            {"\n      "}
            <h1>{"Contacts that remember every conversation"}</h1>
            {"\n      "}
            <p className={"fp-lead"}>
              {
                "Keep a unified customer record with tags, custom fields, and conversation history—so every WhatsApp interaction starts with full context."
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
              <li>{"Unified customer profiles"}</li>
              <li>{"Tags & custom fields"}</li>
              <li>{"Segmentation for campaigns"}</li>
            </ul>
            {"\n    "}
          </div>
          {"\n    "}
          <div
            className={
              "ct-card fp-anim d1 webping-card-enter motion-reduce:animate-none"
            }
            aria-label={"Contact profile preview"}
          >
            {"\n      "}
            <div className={"ct-head"}>
              {"\n        "}
              <div className={"ct-avatar"}>{"P"}</div>
              {"\n        "}
              <div>
                <b>{"Priya Sharma"}</b>
                <small>{"Jaipur · +91 98xxx xxxxx"}</small>
              </div>
              {"\n        "}
              <span className={"fp-badge"}>{"Verified"}</span>
              {"\n      "}
            </div>
            {"\n      "}
            <div className={"ct-fields"}>
              {"\n        "}
              <div className={"ct-field"}>
                <small>{"Source"}</small>
                <b>{"Website form"}</b>
              </div>
              {"\n        "}
              <div className={"ct-field"}>
                <small>{"Plan interest"}</small>
                <b>{"Professional"}</b>
              </div>
              {"\n        "}
              <div className={"ct-field"}>
                <small>{"Last contact"}</small>
                <b>{"2 hours ago"}</b>
              </div>
              {"\n        "}
              <div className={"ct-field"}>
                <small>{"Status"}</small>
                <b>{"Qualified lead"}</b>
              </div>
              {"\n      "}
            </div>
            {"\n      "}
            <div className={"ct-tags"}>
              <span className={"ct-tag"}>{"pricing"}</span>
              <span className={"ct-tag"}>{"demo-requested"}</span>
              <span className={"ct-tag"}>{"jaipur"}</span>
              <span className={"ct-tag"}>{"high-intent"}</span>
            </div>
            {"\n      "}
            <div className={"ct-history"}>
              {"\n        "}
              <div className={"ct-h"}>
                <small>{"Recent activity"}</small>
              </div>
              {"\n        "}
              <div className={"ct-hrow"}>
                <i />
                <span>{"Asked about onboarding time"}</span>
                <small>{"today"}</small>
              </div>
              {"\n        "}
              <div className={"ct-hrow"}>
                <i />
                <span>{"Received pricing broadcast"}</span>
                <small>{"yesterday"}</small>
              </div>
              {"\n        "}
              <div className={"ct-hrow"}>
                <i />
                <span>{"Tagged “demo-requested”"}</span>
                <small>{"2d ago"}</small>
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
            <h2>{"One record for every customer, across every interaction"}</h2>
            {"\n      "}
            <p>
              {
                "WebPing Contacts store the people and businesses you communicate with on WhatsApp. A good contact record includes identity details, conversation history, tags, custom fields, and source/context—so your team understands who they’re talking to before replying."
              }
            </p>
            {"\n      "}
            <p>
              {
                "Contacts power smarter broadcasts, automations, and pipelines by giving you reliable data to segment and personalize. Instead of scattered notes, you get a single, organized record that stays connected to every chat."
              }
            </p>
            {"\n      "}
            <p className={"fp-muted"}>
              {
                "The result: better context, cleaner segmentation, and more relevant outreach."
              }
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"fp-panel fp-anim d1"}>
            {"\n      "}
            <h3>{"Where contacts fit best"}</h3>
            {"\n      "}
            <ul className={"fp-checklist"}>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {"Teams that need customer context before replying"}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {"Businesses running targeted broadcasts or campaigns"}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>{"Sales teams tracking leads and deal context"}</span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>{"Support teams needing history and preferences"}</span>
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
                  "When customer details live in scattered notes or personal phones, agents lack context and outreach becomes generic. Segmentation is hard, and important preferences or history get lost."
                }
              </p>
              {"\n        "}
              <p className={"fp-muted"}>
                {
                  "Poor contact data leads to irrelevant messages and weaker follow-ups."
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
                  "Contacts centralize customer information—identity, history, tags, and custom fields—so every conversation starts with context. Segmentation and personalization become straightforward, powering better broadcasts, automations, and sales workflows."
                }
              </p>
              {"\n        "}
              <p className={"fp-muted"}>
                {
                  "You get a reliable foundation for relevant, personalized WhatsApp communication."
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
          <h2>{"Everything you need to manage customer data"}</h2>
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
                  <circle cx={"12"} cy={"7"} r={"4"} />
                  <path d={"M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"} />
                </svg>
              </div>
              <h3>{"Contact profiles"}</h3>
              <p>
                {
                  "Store identity details, phone, email, and business info in one organized record per customer."
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
                      "M20.59 13.41 11 3H4v7l9.59 9.59a2 2 0 0 0 2.82 0l4.18-4.18a2 2 0 0 0 0-2.82z"
                    }
                  />
                  <circle cx={"7.5"} cy={"7.5"} r={"1.5"} />
                </svg>
              </div>
              <h3>{"Tags"}</h3>
              <p>
                {
                  "Label contacts by intent, source, campaign, or status for easy filtering and segmentation."
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
              <h3>{"Custom fields"}</h3>
              <p>
                {
                  "Capture business-specific data points to personalize messages and qualify leads."
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
                  <path d={"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"} />
                  <path d={"M7 10l5 5 5-5"} />
                  <path d={"M12 15V3"} />
                </svg>
              </div>
              <h3>{"Imports"}</h3>
              <p>
                {
                  "Bring in contacts from existing lists or systems to get started quickly."
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
              <h3>{"Conversation history"}</h3>
              <p>
                {
                  "See previous messages and interactions alongside the contact record for full context."
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
                  <path d={"M7 16v-5"} />
                  <path d={"M12 16V8"} />
                  <path d={"M17 16v-3"} />
                </svg>
              </div>
              <h3>{"Cross-feature use"}</h3>
              <p>
                {
                  "Power broadcasts, automations, and pipelines with reliable contact data and segments."
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
            <h2>{"From contact creation to personalized outreach"}</h2>
            {"\n      "}
            <p className={"fp-muted"}>
              {
                "A simple flow that keeps customer data organized and actionable."
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
                  <span>{"Define a consistent tagging convention"}</span>
                </li>
                {"\n          "}
                <li>
                  <span className={"fp-tick"}>{"✓"}</span>
                  <span>{"Capture only the fields you’ll actually use"}</span>
                </li>
                {"\n          "}
                <li>
                  <span className={"fp-tick"}>{"✓"}</span>
                  <span>
                    {"Keep contact data updated as conversations progress"}
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
                <h3>{"Create or import contacts"}</h3>
                <p>
                  {
                    "Add contacts manually, from conversations, or via import to build your database."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Start with the data you already have."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d1"}>
              <span className={"fp-step-n"}>{"2"}</span>
              <div>
                <h3>{"Enrich with tags & fields"}</h3>
                <p>
                  {
                    "Label contacts by source, intent, or segment and capture custom fields for personalization."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Good structure enables smart segmentation."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d2"}>
              <span className={"fp-step-n"}>{"3"}</span>
              <div>
                <h3>{"Connect conversations"}</h3>
                <p>
                  {
                    "Link chat history and activity to the contact record for full context."
                  }
                </p>
                <p className={"fp-muted"}>{"Context improves every reply."}</p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim"}>
              <span className={"fp-step-n"}>{"4"}</span>
              <div>
                <h3>{"Segment for outreach"}</h3>
                <p>
                  {
                    "Filter contacts by tags or fields to target broadcasts and automations precisely."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Relevance drives better results."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d1"}>
              <span className={"fp-step-n"}>{"5"}</span>
              <div>
                <h3>{"Personalize messages"}</h3>
                <p>
                  {
                    "Use contact fields in templates to make outreach feel individual."
                  }
                </p>
                <p className={"fp-muted"}>{"Personalization builds trust."}</p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d2"}>
              <span className={"fp-step-n"}>{"6"}</span>
              <div>
                <h3>{"Keep records updated"}</h3>
                <p>
                  {
                    "Refresh tags and fields as customers progress through their journey."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Accurate data powers better decisions."}
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
              <div
                className={
                  "ct-card fp-float webping-card-enter motion-reduce:animate-none"
                }
              >
                {"\n          "}
                <div className={"ct-head"}>
                  {"\n            "}
                  <div
                    className={"ct-avatar"}
                    style={{
                      background: "linear-gradient(135deg,#25d366,#0e9f57)",
                    }}
                  >
                    {"R"}
                  </div>
                  {"\n            "}
                  <div>
                    <b>{"Rahul Verma"}</b>
                    <small>{"Delhi · +91 97xxx xxxxx"}</small>
                  </div>
                  {"\n            "}
                  <span className={"fp-badge"}>{"Active"}</span>
                  {"\n          "}
                </div>
                {"\n          "}
                <div className={"ct-fields"}>
                  {"\n            "}
                  <div className={"ct-field"}>
                    <small>{"Source"}</small>
                    <b>{"Ad campaign"}</b>
                  </div>
                  {"\n            "}
                  <div className={"ct-field"}>
                    <small>{"Interest"}</small>
                    <b>{"Broadcasts"}</b>
                  </div>
                  {"\n            "}
                  <div className={"ct-field"}>
                    <small>{"Stage"}</small>
                    <b>{"Qualified"}</b>
                  </div>
                  {"\n            "}
                  <div className={"ct-field"}>
                    <small>{"Owner"}</small>
                    <b>{"Riya"}</b>
                  </div>
                  {"\n          "}
                </div>
                {"\n          "}
                <div className={"ct-tags"}>
                  <span className={"ct-tag"}>{"lead"}</span>
                  <span className={"ct-tag"}>{"broadcasts"}</span>
                  <span className={"ct-tag"}>{"delhi"}</span>
                  <span className={"ct-tag"}>{"qualified"}</span>
                </div>
                {"\n        "}
              </div>
              {"\n      "}
            </div>
            {"\n      "}
            <div className={"fp-shot-copy fp-anim d1"}>
              {"\n        "}
              <h2>{"Customer context at your fingertips"}</h2>
              {"\n        "}
              <p>
                {
                  "Contacts bring identity, history, and segmentation together—so agents and campaigns always work with accurate, organized information."
                }
              </p>
              {"\n        "}
              <div className={"fp-shot-list"}>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Unified profiles"}</b>
                  <span>
                    {"One record per customer with all relevant details."}
                  </span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Flexible tags"}</b>
                  <span>{"Label and filter contacts your way."}</span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Custom fields"}</b>
                  <span>
                    {"Capture the data that matters to your business."}
                  </span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Segmentation-ready"}</b>
                  <span>{"Power targeted outreach and automations."}</span>
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
            <h2>{"Why teams invest in contact management"}</h2>
            {"\n      "}
            <p>
              {
                "Better data leads to better conversations and more relevant outreach."
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
                <strong>{"Full context:"}</strong>
                {" agents see history, tags, and fields before replying."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Smarter segmentation:"}</strong>
                {" target the right people with relevant messages."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Personalized outreach:"}</strong>
                {" use fields to tailor broadcasts and automations."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Cleaner operations:"}</strong>
                {" one organized record instead of scattered notes."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Better handoffs:"}</strong>
                {" context travels with the contact across the team."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Scalable foundation:"}</strong>
                {" reliable data for growing teams and campaigns."}
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
          <h2>{"How businesses use contacts"}</h2>
          {"\n    "}
          <div className={"fp-cases"}>
            {"\n      "}
            <article className={"fp-case fp-anim"}>
              <h3>{"Personalized broadcasts"}</h3>
              <p>
                {
                  "Segment audiences by tags and fields to send relevant, timely WhatsApp campaigns."
                }
              </p>
              <p className={"fp-muted"}>
                {"Outcome: higher engagement and better response rates."}
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim d1"}>
              <h3>{"Smarter automations"}</h3>
              <p>
                {
                  "Use contact attributes to route chats, trigger rules, and tailor automated replies."
                }
              </p>
              <p className={"fp-muted"}>
                {"Outcome: more relevant automation outcomes."}
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim"}>
              <h3>{"Sales context"}</h3>
              <p>
                {
                  "Keep lead details and history connected to deals for informed follow-ups."
                }
              </p>
              <p className={"fp-muted"}>
                {"Outcome: better qualification and conversion."}
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim d1"}>
              <h3>{"Support continuity"}</h3>
              <p>
                {
                  "Give agents instant context about the customer before every reply."
                }
              </p>
              <p className={"fp-muted"}>
                {"Outcome: faster, more consistent support."}
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
                  {"Open conversations with full customer context and history."}
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
                  <path d={"m3 11 18-5v12L3 14v-3z"} />
                  <path d={"M11.6 16.8a3 3 0 1 1-5.8-1.6"} />
                </svg>
              </div>
              <div>
                <h3>{"Broadcasts"}</h3>
                <p>{"Segment audiences for targeted, relevant campaigns."}</p>
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
                <p>{"Drive rules using tags and custom fields."}</p>
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
                  <path d={"m3 17 6-6 4 4 8-8"} />
                  <path d={"M14 7h7v7"} />
                </svg>
              </div>
              <div>
                <h3>{"Sales pipelines"}</h3>
                <p>{"Attach opportunities to the right people and context."}</p>
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
            <h2>{"Reliable customer data, responsibly handled"}</h2>
            {"\n      "}
            <p>
              {
                "Contacts are designed to keep customer information organized and accessible to the right people—supporting consistent, compliant communication."
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
                  <strong>{"Organized records:"}</strong>
                  {" one profile per customer with full context."}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Access-aware:"}</strong>
                  {" align contact visibility with team roles."}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Accurate segmentation:"}</strong>
                  {" tags and fields power relevant outreach."}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Policy-aware:"}</strong>
                  {" support compliant messaging practices."}
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
            <h2>{"Contacts FAQs"}</h2>
            {"\n      "}
            <p className={"fp-muted"}>
              {"Common questions about managing customer records in WebPing."}
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"fp-faqs fp-anim d1"}>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"What is a contact in WebPing?"}</summary>
              <p>
                {
                  "A contact is a unified record for a person or business you communicate with on WhatsApp, including identity, tags, custom fields, and conversation history."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Can I import existing contacts?"}</summary>
              <p>
                {
                  "Yes. You can bring in contacts from existing lists or systems to get started quickly."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"How do tags help?"}</summary>
              <p>
                {
                  "Tags label contacts by intent, source, or segment, making filtering and targeted outreach simple."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"What are custom fields used for?"}</summary>
              <p>
                {
                  "Custom fields capture business-specific data to personalize messages and improve segmentation."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Do contacts connect to conversations?"}</summary>
              <p>
                {
                  "Yes. Conversation history and activity stay linked to the contact record for full context."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"How do contacts improve broadcasts?"}</summary>
              <p>
                {
                  "They provide reliable segmentation and personalization data for targeted, relevant campaigns."
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
            <h2>{"Ready to keep every customer’s context in one place?"}</h2>
            {"\n      "}
            <p>
              {
                "Build organized, segmented contact records that power better conversations, campaigns, and follow-ups."
              }
            </p>
            {"\n      "}
            <ul className={"fp-final-points"}>
              {"\n        "}
              <li>{"Unified profiles with history"}</li>
              {"\n        "}
              <li>{"Tags & custom fields"}</li>
              {"\n        "}
              <li>{"Segmentation for outreach"}</li>
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
              <span>{"Conversations with full customer context."}</span>
            </a>
            <a className={"fp-rel"} href={"/features/broadcasts"}>
              <b>{"Broadcasts"}</b>
              <span>{"Targeted outreach using contact segments."}</span>
            </a>
            <a className={"fp-rel"} href={"/features/sales-pipelines"}>
              <b>{"Sales pipelines"}</b>
              <span>{"Deals connected to the right people."}</span>
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
      <script defer={true} src={"/assets/site.js?v=91"} />
    </>
  );
}
