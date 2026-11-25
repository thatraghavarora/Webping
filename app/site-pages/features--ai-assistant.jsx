import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export default function SitePage() {
  return (
    <>
      <meta charset={"utf-8"} />
      <meta
        name={"description"}
        content={
          "WebPing AI Reply Drafts: generate WhatsApp reply suggestions grounded in your knowledge, with human review before sending."
        }
      />
      <meta name={"robots"} content={"index, follow"} />
      <meta name={"theme-color"} content={"#25d366"} />
      <link
        rel={"canonical"}
        href={"https://webping.webpeaker.com/features/ai-assistant"}
      />
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <link
        rel={"icon"}
        type={"image/png"}
        sizes={"32x32"}
        href={"/favicon-32x32.png"}
      />
      <link rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />
      <title>{"Reply Drafts | WebPing Features"}</title>
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
      <section className={"fp-hero ai-hero"} id={"hero"}>
        {"\n  "}
        <div className={"wrap fp-hero-grid"}>
          {"\n    "}
          <div className={"fp-hero-copy fp-anim"}>
            {"\n      "}
            <p className={"fp-kicker"}>{"AI assistance"}</p>
            {"\n      "}
            <h1>
              {"Reply drafts that speed up responses—without losing control"}
            </h1>
            {"\n      "}
            <p className={"fp-lead"}>
              {
                "Generate WhatsApp reply suggestions grounded in your approved knowledge and instructions. Every draft is reviewed by a human before it’s sent."
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
              <li>{"Knowledge-grounded suggestions"}</li>
              <li>{"Human review before sending"}</li>
              <li>{"Consistent tone & accuracy"}</li>
            </ul>
            {"\n    "}
          </div>
          {"\n    "}
          <div
            className={"ai-chat fp-anim d1"}
            aria-label={"AI reply draft preview"}
          >
            {"\n      "}
            <div className={"ai-chat-top"}>
              <b>{"Conversation with Priya"}</b>
              <span className={"fp-badge"}>{"Draft ready"}</span>
            </div>
            {"\n      "}
            <div className={"ai-bubble in"}>
              {
                "Hi! What’s included in the Professional plan and how fast can we onboard?"
              }
            </div>
            {"\n      "}
            <div className={"ai-draft"}>
              {"\n        "}
              <div className={"ai-draft-head"}>
                <span className={"ai-tag"}>{"AI draft"}</span>
                <span className={"ai-conf"}>{"92% match to docs"}</span>
              </div>
              {"\n        "}
              <p>
                {
                  "Hi Priya! Professional includes shared inbox, broadcasts, automations, and pipelines. Onboarding is usually same-day once your number is connected. Want me to share the full feature list?"
                }
              </p>
              {"\n        "}
              <div className={"ai-actions"}>
                <button className={"ai-btn"}>{"Edit"}</button>
                <button className={"ai-btn primary"}>
                  {"Send after review"}
                </button>
                <button className={"ai-btn ghost"}>{"Regenerate"}</button>
              </div>
              {"\n      "}
            </div>
            {"\n      "}
            <div className={"ai-note"}>
              <b>{"Knowledge sources:"}</b>
              {" Pricing page · Feature docs · Onboarding guide"}
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
            <h2>{"Assistance, not uncontrolled automation"}</h2>
            {"\n      "}
            <p>
              {
                "AI Reply Drafts help your team respond faster by generating suggested replies from approved knowledge and instructions. The goal is assistance, not automation without control—an agent reviews every draft, edits it if needed, and decides when to send."
              }
            </p>
            {"\n      "}
            <p>
              {
                "This keeps responses accurate, on-brand, and grounded in your own information. Drafts can be regenerated, edited, or discarded, so your team stays in charge of what goes out."
              }
            </p>
            {"\n      "}
            <p className={"fp-muted"}>
              {
                "The result: quicker, more consistent replies while preserving human judgment."
              }
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"fp-panel fp-anim d1"}>
            {"\n      "}
            <h3>{"Where reply drafts fit best"}</h3>
            {"\n      "}
            <ul className={"fp-checklist"}>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {"Support teams answering frequent, similar questions"}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {"Sales teams responding to pricing and feature inquiries"}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>{"Teams that want consistent tone across agents"}</span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {
                    "Businesses with documented FAQs, policies, or product details"
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
                  "Agents spend time rewriting similar answers, searching for the right information, and maintaining a consistent tone. Under pressure, replies can become inconsistent or inaccurate."
                }
              </p>
              {"\n        "}
              <p className={"fp-muted"}>
                {
                  "Speed and quality often compete—especially for teams handling high WhatsApp volume."
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
                  "AI Reply Drafts generate suggestions grounded in your knowledge base, so agents start from a strong, accurate draft instead of a blank screen. Human review ensures nothing is sent without approval."
                }
              </p>
              {"\n        "}
              <p className={"fp-muted"}>
                {
                  "You get faster responses and consistent messaging—without giving up control."
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
          <h2>{"Everything you need to assist replies responsibly"}</h2>
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
                      "m12 3 1.9 5.2L19 10l-5.1 1.8L12 17l-1.9-5.2L5 10l5.1-1.8L12 3z"
                    }
                  />
                </svg>
              </div>
              <h3>{"Draft suggestions"}</h3>
              <p>
                {
                  "Generate suggested replies from the conversation context, so agents can respond quickly with a solid starting point."
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
                  <path d={"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"} />
                  <path
                    d={
                      "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                    }
                  />
                </svg>
              </div>
              <h3>{"Knowledge grounding"}</h3>
              <p>
                {
                  "Ground suggestions in your approved documents, FAQs, and product information to improve accuracy."
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
              <h3>{"Human review & editing"}</h3>
              <p>
                {
                  "Agents review, edit, regenerate, or discard drafts before sending—keeping humans in control."
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
                    d={"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"}
                  />
                  <path d={"M19 10v2a7 7 0 0 1-14 0v-2"} />
                </svg>
              </div>
              <h3>{"Tone guidance"}</h3>
              <p>
                {
                  "Keep responses aligned with your brand voice and communication style across the team."
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
                  <path d={"M9 11l3 3L22 4"} />
                  <path
                    d={
                      "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                    }
                  />
                </svg>
              </div>
              <h3>{"Testing & playground"}</h3>
              <p>
                {
                  "Test prompts and knowledge inputs to understand how drafts are generated before relying on them."
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
              <h3>{"Fallback to manual reply"}</h3>
              <p>
                {
                  "When a draft isn’t right, agents can reply manually—so quality is never compromised."
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
            <h2>{"From question to reviewed reply"}</h2>
            {"\n      "}
            <p className={"fp-muted"}>
              {
                "A simple flow that keeps AI assistance fast, accurate, and human-controlled."
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
                    {"Keep knowledge sources current and well-organized"}
                  </span>
                </li>
                {"\n          "}
                <li>
                  <span className={"fp-tick"}>{"✓"}</span>
                  <span>{"Always review drafts before sending"}</span>
                </li>
                {"\n          "}
                <li>
                  <span className={"fp-tick"}>{"✓"}</span>
                  <span>
                    {"Use regeneration when tone or accuracy needs adjustment"}
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
                <h3>{"A customer asks a question"}</h3>
                <p>
                  {
                    "The conversation context is captured, including the latest message and history."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Context helps generate relevant drafts."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d1"}>
              <span className={"fp-step-n"}>{"2"}</span>
              <div>
                <h3>{"AI generates a draft"}</h3>
                <p>
                  {
                    "A suggested reply is created using your approved knowledge and instructions."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Grounding improves accuracy and consistency."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d2"}>
              <span className={"fp-step-n"}>{"3"}</span>
              <div>
                <h3>{"Agent reviews the draft"}</h3>
                <p>
                  {
                    "The agent checks accuracy, tone, and fit before deciding to send."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Human review is always required."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim"}>
              <span className={"fp-step-n"}>{"4"}</span>
              <div>
                <h3>{"Edit, regenerate, or discard"}</h3>
                <p>
                  {
                    "Adjust the draft as needed, request a new version, or reply manually."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Flexibility keeps quality high."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d1"}>
              <span className={"fp-step-n"}>{"5"}</span>
              <div>
                <h3>{"Send the approved reply"}</h3>
                <p>
                  {
                    "Once satisfied, the agent sends the response to the customer."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Nothing goes out without approval."}
                </p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d2"}>
              <span className={"fp-step-n"}>{"6"}</span>
              <div>
                <h3>{"Learn and improve"}</h3>
                <p>
                  {
                    "Refine knowledge sources and prompts based on real usage and feedback."
                  }
                </p>
                <p className={"fp-muted"}>
                  {"Continuous improvement sharpens drafts over time."}
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
              <div className={"ai-chat fp-float"}>
                {"\n          "}
                <div className={"ai-chat-top"}>
                  <b>{"Reply draft workspace"}</b>
                  <span className={"fp-badge"}>{"Review mode"}</span>
                </div>
                {"\n          "}
                <div className={"ai-bubble in"}>
                  {
                    "Can you explain the difference between Basic and Professional?"
                  }
                </div>
                {"\n          "}
                <div className={"ai-draft"}>
                  {"\n            "}
                  <div className={"ai-draft-head"}>
                    <span className={"ai-tag"}>{"AI draft"}</span>
                    <span className={"ai-conf"}>{"88% match"}</span>
                  </div>
                  {"\n            "}
                  <p>
                    {
                      "Basic is great for getting started with core WhatsApp messaging. Professional adds broadcasts, automations, pipelines, and team roles for full CRM workflows. Which features matter most to you?"
                    }
                  </p>
                  {"\n            "}
                  <div className={"ai-actions"}>
                    <button className={"ai-btn"}>{"Edit"}</button>
                    <button className={"ai-btn primary"}>
                      {"Approve & send"}
                    </button>
                    <button className={"ai-btn ghost"}>{"Regenerate"}</button>
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
              <h2>{"Drafts your team can trust and refine"}</h2>
              {"\n        "}
              <p>
                {
                  "AI Reply Drafts balance speed with accuracy—giving agents a strong starting point while keeping them in control of tone and content."
                }
              </p>
              {"\n        "}
              <div className={"fp-shot-list"}>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Grounded in your docs"}</b>
                  <span>
                    {"Suggestions draw from approved knowledge, not guesswork."}
                  </span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Review before send"}</b>
                  <span>
                    {
                      "Agents always approve or edit before anything is delivered."
                    }
                  </span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Regenerate on demand"}</b>
                  <span>
                    {"Get a new version if tone or accuracy needs work."}
                  </span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Manual fallback"}</b>
                  <span>{"Reply from scratch when a draft doesn’t fit."}</span>
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
            <h2>{"Why teams use AI reply drafts"}</h2>
            {"\n      "}
            <p>
              {
                "Faster, more consistent responses—without sacrificing accuracy or control."
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
                <strong>{"Quicker responses:"}</strong>
                {" agents start from a ready draft instead of a blank screen."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Better consistency:"}</strong>
                {" tone and information stay aligned across the team."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Higher accuracy:"}</strong>
                {" drafts are grounded in your approved knowledge."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Human oversight:"}</strong>
                {" nothing is sent without review."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Flexible control:"}</strong>
                {" edit, regenerate, or reply manually as needed."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Continuous improvement:"}</strong>
                {" refine knowledge sources over time."}
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
          <h2>{"AI assistance for support and sales"}</h2>
          {"\n    "}
          <div className={"fp-cases"}>
            {"\n      "}
            <article className={"fp-case fp-anim"}>
              <h3>{"Frequent support questions"}</h3>
              <p>
                {
                  "Speed up replies to common queries like pricing, features, or status—while keeping answers accurate."
                }
              </p>
              <p className={"fp-muted"}>
                {"Outcome: faster resolution and consistent information."}
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim d1"}>
              <h3>{"Sales inquiries"}</h3>
              <p>
                {
                  "Respond to feature and pricing questions with drafts grounded in product docs, then personalize before sending."
                }
              </p>
              <p className={"fp-muted"}>
                {"Outcome: quicker, more informed sales conversations."}
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim"}>
              <h3>{"Onboarding & guidance"}</h3>
              <p>
                {
                  "Help customers understand setup steps and best practices using approved documentation."
                }
              </p>
              <p className={"fp-muted"}>
                {
                  "Outcome: smoother onboarding and fewer repeated explanations."
                }
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim d1"}>
              <h3>{"Policy & compliance replies"}</h3>
              <p>
                {
                  "Draft responses that reference approved policies, ensuring consistency and reducing risk."
                }
              </p>
              <p className={"fp-muted"}>
                {"Outcome: reliable, policy-aligned communication."}
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
                    "Drafts are created inside real conversations where agents review and send."
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
                <h3>{"Knowledge & docs"}</h3>
                <p>
                  {
                    "Ground suggestions in your approved information and product documentation."
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
                    "Combine AI assistance with routing and workflow rules where appropriate."
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
                  <path d={"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"} />
                </svg>
              </div>
              <div>
                <h3>{"Team roles"}</h3>
                <p>
                  {
                    "Keep review and sending aligned with the right access levels."
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
            <h2>{"AI assistance with clear guardrails"}</h2>
            {"\n      "}
            <p>
              {
                "Reply drafts are designed to support agents, not to send messages without oversight. Human review and knowledge grounding help keep communication accurate and responsible."
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
                  <strong>{"Human-in-the-loop:"}</strong>
                  {" every draft requires approval before sending."}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Knowledge-grounded:"}</strong>
                  {" suggestions rely on your approved information."}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Editable & regenerable:"}</strong>
                  {" agents can refine or replace drafts freely."}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Manual fallback:"}</strong>
                  {" agents can always reply from scratch."}
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
            <h2>{"Reply drafts FAQs"}</h2>
            {"\n      "}
            <p className={"fp-muted"}>
              {"Common questions about AI-assisted WhatsApp replies."}
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"fp-faqs fp-anim d1"}>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Does AI send messages automatically?"}</summary>
              <p>
                {
                  "No. Every draft requires human review and approval before it’s sent."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Where does the AI get its information?"}</summary>
              <p>
                {
                  "From your approved knowledge sources—such as documentation, FAQs, and product details you provide."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Can I edit a draft before sending?"}</summary>
              <p>
                {
                  "Yes. Agents can edit, regenerate, or discard any draft, or reply manually."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"How accurate are the drafts?"}</summary>
              <p>
                {
                  "Accuracy improves with well-organized, up-to-date knowledge sources. Agents should always review for correctness."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Can drafts match our brand tone?"}</summary>
              <p>
                {
                  "Yes. Tone guidance helps keep responses aligned with your communication style."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Is AI suitable for sensitive conversations?"}</summary>
              <p>
                {
                  "For sensitive cases, agents can choose to reply manually or escalate—keeping human judgment in control."
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
              {"Ready to reply faster—with AI that stays under your control?"}
            </h2>
            {"\n      "}
            <p>
              {
                "Generate accurate, knowledge-grounded drafts and let your team review, refine, and send with confidence."
              }
            </p>
            {"\n      "}
            <ul className={"fp-final-points"}>
              {"\n        "}
              <li>{"Knowledge-grounded suggestions"}</li>
              {"\n        "}
              <li>{"Human review before sending"}</li>
              {"\n        "}
              <li>{"Edit, regenerate, or reply manually"}</li>
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
                {"Where drafts are reviewed and sent in real conversations."}
              </span>
            </a>
            <a className={"fp-rel"} href={"/features/automations"}>
              <b>{"Automations"}</b>
              <span>{"Combine AI assistance with workflow rules."}</span>
            </a>
            <a className={"fp-rel"} href={"/features/broadcasts"}>
              <b>{"Broadcasts"}</b>
              <span>{"Manage replies to campaigns with AI support."}</span>
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
      <script defer={true} src={"/assets/site.js?v=91"} />
    </>
  );
}
