import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export default function SitePage() {
  return (
    <>
      <meta charset={"utf-8"} />
      <meta
        name={"description"}
        content={
          "WebPing API & Webhooks: programmatic access and event notifications for connecting WebPing to your systems and workflows."
        }
      />
      <meta name={"robots"} content={"index, follow"} />
      <meta name={"theme-color"} content={"#25d366"} />
      <link
        rel={"canonical"}
        href={"https://webping.webpeaker.com/features/api"}
      />
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <link
        rel={"icon"}
        type={"image/png"}
        sizes={"32x32"}
        href={"/favicon-32x32.png"}
      />
      <link rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />
      <title>{"API & Webhooks | WebPing Features"}</title>
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
      <section className={"fp-hero api-hero"} id={"hero"}>
        {"\n  "}
        <div className={"wrap fp-hero-grid"}>
          {"\n    "}
          <div className={"fp-hero-copy fp-anim"}>
            {"\n      "}
            <p className={"fp-kicker"}>{"Developer"}</p>
            {"\n      "}
            <h1>{"API & webhooks for connected workflows"}</h1>
            {"\n      "}
            <p className={"fp-lead"}>
              {
                "Programmatic access and event notifications for connecting WebPing to your systems and workflows—scoped keys, REST endpoints, and reliable webhooks."
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
              <li>{"Scoped API keys"}</li>
              <li>{"REST endpoints"}</li>
              <li>{"Webhook events"}</li>
            </ul>
            {"\n    "}
          </div>
          {"\n    "}
          <div
            className={"api-code fp-anim d1"}
            aria-label={"API request preview"}
          >
            {"\n      "}
            <div className={"api-code-top"}>
              <span className={"api-dot"} />
              <span className={"api-dot"} />
              <span className={"api-dot"} />
              <b>{"POST /v1/messages"}</b>
            </div>
            {"\n      "}
            <pre className={"api-pre"}>
              <span className={"api-kw"}>{"curl"}</span>
              {
                ' -X POST https://api.webping/.../messages \\\\\n  -H "Authorization: Bearer wp_live_••••" \\\\\n  -H "Content-Type: application/json" \\\\\n  -d \'{\n    "to": "+9198xxxxxxx",\n    "template": "order_update",\n    "variables": {"name":"Priya","order":"#1042"}\n  }\''
              }
            </pre>
            {"\n      "}
            <div className={"api-resp"}>
              <span className={"api-ok"}>{"200 OK"}</span>
              <span>{'{"status":"queued","id":"msg_8f2a"}'}</span>
            </div>
            {"\n      "}
            <div className={"api-events"}>
              {"\n        "}
              <small>{"Webhook events"}</small>
              {"\n        "}
              <div className={"api-ev"}>
                <b>{"message.received"}</b>
                <span>{"→ your CRM"}</span>
              </div>
              {"\n        "}
              <div className={"api-ev"}>
                <b>{"message.delivered"}</b>
                <span>{"→ your analytics"}</span>
              </div>
              {"\n        "}
              <div className={"api-ev"}>
                <b>{"contact.updated"}</b>
                <span>{"→ your database"}</span>
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
            <h2>{"Connect WebPing to your systems and workflows"}</h2>
            {"\n      "}
            <p>
              {
                "API & Webhooks are for teams that want to connect WebPing with their existing software stack. APIs let your systems send requests or exchange data in supported ways; webhooks notify your systems when events happen."
              }
            </p>
            {"\n      "}
            <p>
              {
                "This is useful for custom integrations, syncing data, triggering workflows, and building processes around WhatsApp events. The API is designed for developers and technical teams who need reliable, controlled access."
              }
            </p>
            {"\n      "}
            <p className={"fp-muted"}>
              {
                "The result: WebPing becomes part of your broader business workflow, not an isolated tool."
              }
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"fp-panel fp-anim d1"}>
            {"\n      "}
            <h3>{"Where API & webhooks fit best"}</h3>
            {"\n      "}
            <ul className={"fp-checklist"}>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {"Teams syncing WebPing data with CRMs or databases"}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {
                    "Businesses triggering WhatsApp messages from external events"
                  }
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  {"Developers building custom workflows around WhatsApp"}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>{"Operations needing reliable event notifications"}</span>
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
                  "Without integration, WhatsApp activity stays siloed. Teams manually copy data between systems, miss events, and can’t trigger messaging from their own workflows."
                }
              </p>
              {"\n        "}
              <p className={"fp-muted"}>
                {"Manual bridging is slow, error-prone, and hard to scale."}
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
                  "APIs and webhooks let your systems exchange data and react to events programmatically. You can send messages, sync contacts, and receive notifications—using scoped credentials and controlled access."
                }
              </p>
              {"\n        "}
              <p className={"fp-muted"}>
                {
                  "You get reliable, secure integration with your existing stack."
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
          <h2>{"Everything you need to integrate confidently"}</h2>
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
                  <path d={"m16 18 6-6-6-6"} />
                  <path d={"m8 6-6 6 6 6"} />
                </svg>
              </div>
              <h3>{"Programmatic integration"}</h3>
              <p>
                {
                  "Send requests and exchange data with WebPing through supported API endpoints."
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
              <h3>{"Webhooks & events"}</h3>
              <p>
                {
                  "Receive notifications when key events happen—messages, contacts, delivery statuses."
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
                </svg>
              </div>
              <h3>{"Scoped credentials"}</h3>
              <p>
                {
                  "Use scoped API keys to control what each integration can access."
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
                  <path d={"M13 2 3 14h9l-1 8 10-12h-9l1-8z"} />
                </svg>
              </div>
              <h3>{"Custom workflows"}</h3>
              <p>
                {
                  "Build processes around WhatsApp events triggered by your systems."
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
                  <path d={"M21 12a9 9 0 1 1-6.219-8.56"} />
                </svg>
              </div>
              <h3>{"Operational sync"}</h3>
              <p>
                {
                  "Keep customer data and conversation state aligned across tools."
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
              <h3>{"Developer control"}</h3>
              <p>
                {
                  "Manage endpoints, payloads, and credentials with clear documentation."
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
            <h2>{"From event to action, reliably"}</h2>
            {"\n      "}
            <p className={"fp-muted"}>
              {"A simple flow for integrating WebPing into your stack."}
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
                  <span>{"Use scoped keys with least privilege"}</span>
                </li>
                {"\n          "}
                <li>
                  <span className={"fp-tick"}>{"✓"}</span>
                  <span>{"Verify webhook signatures"}</span>
                </li>
                {"\n          "}
                <li>
                  <span className={"fp-tick"}>{"✓"}</span>
                  <span>{"Handle retries and idempotency"}</span>
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
                <h3>{"Get credentials"}</h3>
                <p>{"Create scoped API keys for your integration’s needs."}</p>
                <p className={"fp-muted"}>{"Control access from the start."}</p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d1"}>
              <span className={"fp-step-n"}>{"2"}</span>
              <div>
                <h3>{"Choose endpoints"}</h3>
                <p>
                  {"Select the API resources you need—messages, contacts, etc."}
                </p>
                <p className={"fp-muted"}>{"Use only what’s necessary."}</p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d2"}>
              <span className={"fp-step-n"}>{"3"}</span>
              <div>
                <h3>{"Configure webhooks"}</h3>
                <p>{"Subscribe to events and set your receiving URL."}</p>
                <p className={"fp-muted"}>{"Reliable event delivery."}</p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim"}>
              <span className={"fp-step-n"}>{"4"}</span>
              <div>
                <h3>{"Send & receive"}</h3>
                <p>
                  {
                    "Trigger messages and process incoming events in your systems."
                  }
                </p>
                <p className={"fp-muted"}>{"Two-way integration."}</p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d1"}>
              <span className={"fp-step-n"}>{"5"}</span>
              <div>
                <h3>{"Handle errors"}</h3>
                <p>{"Implement retries and idempotency for reliability."}</p>
                <p className={"fp-muted"}>{"Robust production behavior."}</p>
              </div>
            </li>
            {"\n      "}
            <li className={"fp-step fp-anim d2"}>
              <span className={"fp-step-n"}>{"6"}</span>
              <div>
                <h3>{"Monitor & maintain"}</h3>
                <p>{"Track usage and update as your workflows evolve."}</p>
                <p className={"fp-muted"}>{"Continuous improvement."}</p>
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
              <div className={"api-code fp-float"}>
                {"\n          "}
                <div className={"api-code-top"}>
                  <span className={"api-dot"} />
                  <span className={"api-dot"} />
                  <span className={"api-dot"} />
                  <b>{"Webhook payload"}</b>
                </div>
                {"\n          "}
                <pre className={"api-pre"}>
                  {
                    '{\n  "event": "message.received",\n  "timestamp": "2026-11-10T14:30:00Z",\n  "data": {\n    "from": "+9198xxxxxxx",\n    "text": "I need help with my order",\n    "contact_id": "ct_abc123"\n  }\n}'
                  }
                </pre>
                {"\n          "}
                <div className={"api-resp"}>
                  <span className={"api-ok"}>{"Delivered"}</span>
                  <span>{"Retry on 5xx · signed payload"}</span>
                </div>
                {"\n        "}
              </div>
              {"\n      "}
            </div>
            {"\n      "}
            <div className={"fp-shot-copy fp-anim d1"}>
              {"\n        "}
              <h2>{"Built for developers, trusted by teams"}</h2>
              {"\n        "}
              <p>
                {
                  "Clear endpoints, structured payloads, and scoped credentials make integration predictable and secure."
                }
              </p>
              {"\n        "}
              <div className={"fp-shot-list"}>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Scoped keys"}</b>
                  <span>{"Least-privilege access for each integration."}</span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Signed webhooks"}</b>
                  <span>{"Verify events came from WebPing."}</span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Reliable delivery"}</b>
                  <span>{"Retries on failure for robustness."}</span>
                </div>
                {"\n          "}
                <div className={"fp-shot-item"}>
                  <b>{"Clear docs"}</b>
                  <span>{"Predictable payloads and endpoints."}</span>
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
            <h2>{"Why teams integrate WebPing"}</h2>
            {"\n      "}
            <p>
              {
                "Connect WhatsApp activity to the rest of your business systems."
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
                <strong>{"Unified data:"}</strong>
                {" sync contacts and conversations with your CRM."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Automated triggers:"}</strong>
                {" start WhatsApp flows from external events."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Real-time awareness:"}</strong>
                {" webhooks notify your systems instantly."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Custom workflows:"}</strong>
                {" build processes tailored to your business."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Secure by design:"}</strong>
                {" scoped keys and controlled access."}
              </span>
            </li>
            {"\n      "}
            <li>
              <span className={"fp-tick"}>{"✓"}</span>
              <span>
                <strong>{"Scalable integration:"}</strong>
                {" grow without manual bridging."}
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
          <h2>{"Integrations for real workflows"}</h2>
          {"\n    "}
          <div className={"fp-cases"}>
            {"\n      "}
            <article className={"fp-case fp-anim"}>
              <h3>{"CRM sync"}</h3>
              <p>
                {
                  "Keep customer records and conversation state aligned between WebPing and your CRM."
                }
              </p>
              <p className={"fp-muted"}>{"Outcome: one source of truth."}</p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim d1"}>
              <h3>{"Event-driven messaging"}</h3>
              <p>
                {
                  "Trigger WhatsApp messages from orders, signups, or support tickets in your systems."
                }
              </p>
              <p className={"fp-muted"}>
                {"Outcome: timely, relevant outreach."}
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim"}>
              <h3>{"Analytics & reporting"}</h3>
              <p>
                {"Stream events to your analytics stack for deeper insights."}
              </p>
              <p className={"fp-muted"}>
                {"Outcome: better measurement and optimization."}
              </p>
            </article>
            {"\n      "}
            <article className={"fp-case fp-anim d1"}>
              <h3>{"Custom automation"}</h3>
              <p>
                {
                  "Build bespoke workflows combining WebPing with your internal tools."
                }
              </p>
              <p className={"fp-muted"}>
                {"Outcome: tailored processes that fit your business."}
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
                  <path d={"M13 2 3 14h9l-1 8 10-12h-9l1-8z"} />
                </svg>
              </div>
              <div>
                <h3>{"Automations"}</h3>
                <p>{"Trigger workflows from external or internal events."}</p>
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
                <p>{"Sync customer data and fields programmatically."}</p>
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
                <p>{"Receive and act on conversation events."}</p>
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
                <p>{"Use scoped credentials and controlled access."}</p>
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
            <h2>{"Secure, controlled integration"}</h2>
            {"\n      "}
            <p>
              {
                "API access is designed with security and control in mind—scoped credentials, signed webhooks, and clear access boundaries."
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
                  <strong>{"Scoped keys:"}</strong>
                  {" least-privilege access per integration."}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Signed payloads:"}</strong>
                  {" verify webhook authenticity."}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Controlled access:"}</strong>
                  {" align API usage with team roles."}
                </span>
              </li>
              {"\n        "}
              <li>
                <span className={"fp-tick"}>{"✓"}</span>
                <span>
                  <strong>{"Reliable delivery:"}</strong>
                  {" retries on failure."}
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
            <h2>{"API & webhooks FAQs"}</h2>
            {"\n      "}
            <p className={"fp-muted"}>
              {"Common questions about integrating WebPing."}
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <div className={"fp-faqs fp-anim d1"}>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"What can I do with the API?"}</summary>
              <p>
                {
                  "You can send messages, manage contacts, and interact with WebPing data programmatically through supported endpoints."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"What events do webhooks support?"}</summary>
              <p>
                {
                  "Webhooks notify your systems of key events like message received, delivered, and contact updates."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"How is API access secured?"}</summary>
              <p>
                {
                  "Using scoped API keys with least-privilege access and signed webhook payloads."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Do webhooks retry on failure?"}</summary>
              <p>
                {"Yes. Failed deliveries are retried to improve reliability."}
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Is the API suitable for production use?"}</summary>
              <p>
                {
                  "Yes. It’s designed for reliable, controlled integration with your systems."
                }
              </p>
            </details>
            {"\n      "}
            <details className={"fp-faq"}>
              <summary>{"Where can I find documentation?"}</summary>
              <p>
                {
                  "Developer documentation and setup guides are available in the docs section."
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
            <h2>{"Ready to connect WebPing to your systems?"}</h2>
            {"\n      "}
            <p>
              {
                "Use scoped APIs and webhooks to integrate WhatsApp workflows into your broader business stack."
              }
            </p>
            {"\n      "}
            <ul className={"fp-final-points"}>
              {"\n        "}
              <li>{"Scoped API keys"}</li>
              {"\n        "}
              <li>{"REST endpoints & webhooks"}</li>
              {"\n        "}
              <li>{"Secure, reliable delivery"}</li>
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
              <span>{"Protect credentials and integrations."}</span>
            </a>
            <a className={"fp-rel"} href={"/features/automations"}>
              <b>{"Automations"}</b>
              <span>{"Trigger workflows from events."}</span>
            </a>
            <a className={"fp-rel"} href={"/features/team-roles"}>
              <b>{"Team roles"}</b>
              <span>{"Control access to keys and settings."}</span>
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
      <script defer={true} src={"/assets/site.js?v=91"} />
    </>
  );
}
