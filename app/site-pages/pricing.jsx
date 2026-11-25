import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export default function SitePage() {
  return (
    <>
      <meta charset={"utf-8"} />
      <meta
        name={"description"}
        content={
          "WebPing pricing: Starter $10/mo, Growth $25/mo and Pro $45/mo. Every feature included — no add-ons, no per-message markup on Meta rates. Compare all three plans in detail."
        }
      />
      <meta name={"robots"} content={"index, follow"} />
      <meta name={"theme-color"} content={"#25d366"} />
      <link rel={"canonical"} href={"https://webping.webpeaker.com/pricing"} />
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <link
        rel={"icon"}
        type={"image/png"}
        sizes={"32x32"}
        href={"/favicon-32x32.png"}
      />
      <link rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />
      <title>
        {"Pricing | WebPing — Starter $10/mo, Growth $25/mo, Pro $45/mo"}
      </title>
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
      <main>
        {"\n"}
        <section className={"page-head price-head"}>
          {"\n  "}
          <p className={"kicker"}>{"Pricing"}</p>
          {"\n  "}
          <h1>
            {"Simple pricing. Everything included, nothing sold separately."}
          </h1>
          {"\n  "}
          <p className={"lead"}>
            {
              "Most WhatsApp CRM platforms charge ₹2,799+ to start, sell AI as a ₹1,350–₹3,000 add-on, and mark up every message. WebPing does none of that: three plans, every feature included, and your messages billed at Meta's own rates with zero markup."
            }
          </p>
          {"\n  "}
          <ul className={"chip-pills"}>
            {"\n    "}
            <li>{"Starter $10/mo"}</li>
            {"\n    "}
            <li>{"Growth $25/mo — most popular"}</li>
            {"\n    "}
            <li>{"Pro $45/mo"}</li>
            {"\n    "}
            <li>{"No add-ons, ever"}</li>
            {"\n    "}
            <li>{"Meta rates, no markup"}</li>
            {"\n    "}
            <li>{"Free trial on every plan"}</li>
            {"\n  "}
          </ul>
          {"\n"}
        </section>
        {"\n"}
        <section className={"section no-b"}>
          <div className={"wrap"}>
            {"\n  "}
            <div
              className={"price-grid"}
              style={{
                gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
                maxWidth: "1120px",
              }}
            >
              {"\n    "}
              <div
                className={
                  "price-card webping-card-enter motion-reduce:animate-none"
                }
              >
                {"\n      "}
                <span className={"pc-tag"}>{"Starter"}</span>
                {"\n      "}
                <h3>{"Starter"}</h3>
                {"\n      "}
                <p className={"pc-price"}>
                  {"$10"}
                  <small>{"/mo"}</small>
                </p>
                {"\n      "}
                <p className={"pc-billed"}>
                  {"14-day free trial · Billed monthly per workspace"}
                </p>
                {"\n      "}
                <p className={"pc-sub"}>
                  {
                    "For solo founders getting started on WhatsApp. Campaigns and automations are included from day one — most platforms gate these behind ₹2,799+ plans."
                  }
                </p>
                {"\n      "}
                <p className={"pc-group"}>{"What you get"}</p>
                {"\n      "}
                <ul className={"pc-list"}>
                  {"\n        "}
                  <li>{"3 team users"}</li>
                  {"\n        "}
                  <li>{"1 WhatsApp number"}</li>
                  {"\n        "}
                  <li>{"5,000 contacts"}</li>
                  {"\n        "}
                  <li>{"Shared team inbox & assignment"}</li>
                  {"\n        "}
                  <li>{"Contacts, pipelines & custom fields"}</li>
                  {"\n        "}
                  <li>{"Templates & quick replies"}</li>
                  {"\n        "}
                  <li>{"Broadcasts — 50 campaigns/mo"}</li>
                  {"\n        "}
                  <li>{"Automations — 15 rules"}</li>
                  {"\n        "}
                  <li>{"CSV import & export"}</li>
                  {"\n        "}
                  <li>{"Analytics dashboard"}</li>
                  {"\n        "}
                  <li>{"5,000 messages/mo · 2 GB storage"}</li>
                  {"\n      "}
                </ul>
                {"\n      "}
                <a className={"btn btn-green pc-cta"} href={"/app"}>
                  {"Start with Starter"}
                </a>
                {"\n      "}
                <p className={"pc-fine"}>
                  {"Upgrade or cancel anytime — no lock-in."}
                </p>
                {"\n    "}
              </div>
              {"\n    "}
              <div
                className={
                  "price-card pop webping-card-enter motion-reduce:animate-none"
                }
              >
                {"\n      "}
                <span className={"pc-tag"}>{"Most popular"}</span>
                {"\n      "}
                <h3>{"Growth"}</h3>
                {"\n      "}
                <p className={"pc-price"}>
                  {"$25"}
                  <small>{"/mo"}</small>
                </p>
                {"\n      "}
                <p className={"pc-billed"}>
                  {"14-day free trial · Billed monthly per workspace"}
                </p>
                {"\n      "}
                <p className={"pc-sub"}>
                  {
                    "For growing teams that sell and support on WhatsApp. AI agents and the visual flow builder are included here — the same features competitors sell as ₹1,350–₹3,000/month add-ons."
                  }
                </p>
                {"\n      "}
                <p className={"pc-group"}>{"Everything in Starter, plus"}</p>
                {"\n      "}
                <ul className={"pc-list"}>
                  {"\n        "}
                  <li>{"8 team users"}</li>
                  {"\n        "}
                  <li>{"2 WhatsApp numbers"}</li>
                  {"\n        "}
                  <li>{"25,000 contacts"}</li>
                  {"\n        "}
                  <li>{"Advanced analytics & exports"}</li>
                  {"\n        "}
                  <li>{"Visual flow builder — 10 flows"}</li>
                  {"\n        "}
                  <li>{"AI agents — 500 requests/mo"}</li>
                  {"\n        "}
                  <li>{"Broadcasts — 150 campaigns/mo"}</li>
                  {"\n        "}
                  <li>{"Automations — 50 rules"}</li>
                  {"\n        "}
                  <li>{"25,000 messages/mo · 10 GB storage"}</li>
                  {"\n      "}
                </ul>
                {"\n      "}
                <a className={"btn pc-cta"} href={"/app"}>
                  {"Start with Growth"}
                </a>
                {"\n      "}
                <p className={"pc-fine"}>
                  {"AI + flows included — a $45+ add-on elsewhere."}
                </p>
                {"\n    "}
              </div>
              {"\n    "}
              <div
                className={
                  "price-card webping-card-enter motion-reduce:animate-none"
                }
              >
                {"\n      "}
                <span className={"pc-tag-dark pc-tag"}>{"Pro"}</span>
                {"\n      "}
                <h3>{"Pro"}</h3>
                {"\n      "}
                <p className={"pc-price"}>
                  {"$45"}
                  <small>{"/mo"}</small>
                </p>
                {"\n      "}
                <p className={"pc-billed"}>
                  {"7-day free trial · Billed monthly per workspace"}
                </p>
                {"\n      "}
                <p className={"pc-sub"}>
                  {
                    "The full WebPing CRM for scale — developer tooling unlocked, the highest limits, and priority support. Still costs less than Wati Pro (₹6,499) or Gallabox ($112)."
                  }
                </p>
                {"\n      "}
                <p className={"pc-group"}>{"Everything unlocked"}</p>
                {"\n      "}
                <ul className={"pc-list"}>
                  {"\n        "}
                  <li>{"25 team users"}</li>
                  {"\n        "}
                  <li>{"5 WhatsApp numbers"}</li>
                  {"\n        "}
                  <li>{"100,000 contacts"}</li>
                  {"\n        "}
                  <li>{"Public API — 500,000 requests/mo"}</li>
                  {"\n        "}
                  <li>{"Webhooks for CRM events"}</li>
                  {"\n        "}
                  <li>{"AI agents — 2,500 requests/mo"}</li>
                  {"\n        "}
                  <li>{"Flows — 100 workflows"}</li>
                  {"\n        "}
                  <li>{"Broadcasts — 1,000 campaigns/mo"}</li>
                  {"\n        "}
                  <li>{"Automations — 200 rules"}</li>
                  {"\n        "}
                  <li>{"100,000 messages/mo · 50 GB storage"}</li>
                  {"\n        "}
                  <li>{"Priority support"}</li>
                  {"\n      "}
                </ul>
                {"\n      "}
                <a className={"btn pc-cta"} href={"/app"}>
                  {"Start with Pro"}
                </a>
                {"\n      "}
                <p className={"pc-fine"}>
                  {"Full power, lowest price in its class."}
                </p>
                {"\n    "}
              </div>
              {"\n  "}
            </div>
            {"\n  "}
            <p className={"plan-note pc-note"}>
              <strong>
                {
                  "WhatsApp message charges — billed at Meta's own rates, no markup."
                }
              </strong>
              {
                " Your subscription covers the CRM software. Every WhatsApp message is billed through your workspace wallet at Meta's public rate card (India: ₹0.8631 marketing, ₹0.115 utility/authentication, free service replies within the 24-hour window). Competing platforms add ₹0.09–₹0.23 per marketing message on top — with 10,000 marketing messages a month that's ₹900–₹2,300 extra every month you don't pay here."
              }
            </p>
            {"\n"}
          </div>
        </section>
        {"\n"}
        <section className={"section sec-cream"} id={"how"}>
          <div className={"wrap"}>
            {"\n  "}
            <div className={"section-head"}>
              <p className={"kicker"}>{"Deep dive"}</p>
              <h2>{"How WebPing pricing works"}</h2>
              <p className={"lead"}>
                {"Four things to know before you compare us with anyone else."}
              </p>
            </div>
            {"\n  "}
            <div className={"grid cols-2"}>
              {"\n    "}
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"1 · One price, every feature in your tier"}</h3>
                <p>
                  {
                    'No add-on marketplace. If a feature belongs to your tier it is switched on the moment you subscribe — AI agents, flow builder, broadcasts, CSV import, whatever your plan includes. There is no "chatbot ₹2,500 extra" or "AI ₹1,350 extra" like other platforms.'
                  }
                </p>
              </div>
              {"\n    "}
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"2 · Messages cost what Meta charges"}</h3>
                <p>
                  {
                    "WhatsApp bills per delivered template message: by category and recipient country. WebPing passes Meta's rate card straight through to your workspace wallet — recharge once on Meta Billing and we reconcile what Meta actually charges. Zero markup, zero handling fee."
                  }
                </p>
              </div>
              {"\n    "}
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"3 · Fair limits that fit the tier"}</h3>
                <p>
                  {
                    "Live counts (users, contacts, numbers) and monthly meters (messages, broadcasts, AI, API) are visible right inside your workspace — see usage and remaining quota any time. When you outgrow a cap, upgrading is instant and your data moves with you."
                  }
                </p>
              </div>
              {"\n    "}
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"4 · Start free, switch anytime"}</h3>
                <p>
                  {
                    "Starter and Growth carry a 14-day free trial, Pro a 7-day trial. Upgrade or downgrade any time from your billing page — no lock-in contracts, no migration fees, your number stays yours."
                  }
                </p>
              </div>
              {"\n  "}
            </div>
            {"\n"}
          </div>
        </section>
        {"\n"}
        <section className={"section sec-cream"} id={"compare"}>
          <div className={"wrap"}>
            {"\n  "}
            <div className={"section-head"}>
              <p className={"kicker"}>{"Compare plans"}</p>
              <h2>{"Detailed feature comparison: Starter vs Growth vs Pro"}</h2>
              <p className={"lead"}>
                {"Every feature and every limit, side by side."}
              </p>
            </div>
            {"\n  "}
            <div className={"cmp-wrap"}>
              <table className={"cmp-table"}>
                {"\n    "}
                <thead>
                  <tr>
                    <th>{"Feature / limit"}</th>
                    <th>
                      {"Starter"}
                      <br />
                      <small>{"$10/mo"}</small>
                    </th>
                    <th>
                      {"Growth"}
                      <br />
                      <small>{"$25/mo"}</small>
                    </th>
                    <th>
                      {"Pro"}
                      <br />
                      <small>{"$45/mo"}</small>
                    </th>
                  </tr>
                </thead>
                {"\n    "}
                <tbody>
                  {"\n      "}
                  <tr className={"cmp-cat"}>
                    <td colSpan={"4"}>{"Core CRM"}</td>
                  </tr>
                  {"\n      "}
                  <tr>
                    <td>{"Shared team inbox"}</td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                  </tr>
                  {"\n      "}
                  <tr>
                    <td>{"Contacts & tags"}</td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                  </tr>
                  {"\n      "}
                  <tr>
                    <td>{"Sales pipelines & deal tracking"}</td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                  </tr>
                  {"\n      "}
                  <tr>
                    <td>{"Custom contact & deal fields"}</td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                  </tr>
                  {"\n      "}
                  <tr>
                    <td>{"CSV import & export"}</td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                  </tr>
                  {"\n      "}
                  <tr className={"cmp-cat"}>
                    <td colSpan={"4"}>{"Messaging"}</td>
                  </tr>
                  {"\n      "}
                  <tr>
                    <td>{"WhatsApp templates"}</td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                  </tr>
                  {"\n      "}
                  <tr>
                    <td>{"Quick replies / saved snippets"}</td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                  </tr>
                  {"\n      "}
                  <tr>
                    <td>{"Broadcast campaigns"}</td>
                    <td>
                      <span className={"cmp-yes"}>{"50 / month"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"150 / month"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"1,000 / month"}</span>
                    </td>
                  </tr>
                  {"\n      "}
                  <tr>
                    <td>{"WhatsApp numbers"}</td>
                    <td>{"1"}</td>
                    <td>{"2"}</td>
                    <td>{"5"}</td>
                  </tr>
                  {"\n      "}
                  <tr className={"cmp-cat"}>
                    <td colSpan={"4"}>{"Automation & AI"}</td>
                  </tr>
                  {"\n      "}
                  <tr>
                    <td>{"Rule-based automations"}</td>
                    <td>
                      <span className={"cmp-yes"}>{"15 rules"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"50 rules"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"200 rules"}</span>
                    </td>
                  </tr>
                  {"\n      "}
                  <tr>
                    <td>{"Visual flow builder"}</td>
                    <td>
                      <span className={"cmp-no"}>{"—"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"10 flows"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"100 flows"}</span>
                    </td>
                  </tr>
                  {"\n      "}
                  <tr>
                    <td>{"AI agents (drafts, auto-replies)"}</td>
                    <td>
                      <span className={"cmp-no"}>{"—"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"500 requests/mo"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"2,500 requests/mo"}</span>
                    </td>
                  </tr>
                  {"\n      "}
                  <tr className={"cmp-cat"}>
                    <td colSpan={"4"}>{"Insights"}</td>
                  </tr>
                  {"\n      "}
                  <tr>
                    <td>{"Analytics dashboard"}</td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                  </tr>
                  {"\n      "}
                  <tr>
                    <td>{"Advanced analytics & exports"}</td>
                    <td>
                      <span className={"cmp-no"}>{"—"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                  </tr>
                  {"\n      "}
                  <tr className={"cmp-cat"}>
                    <td colSpan={"4"}>{"Developer"}</td>
                  </tr>
                  {"\n      "}
                  <tr>
                    <td>{"Public REST API"}</td>
                    <td>
                      <span className={"cmp-no"}>{"—"}</span>
                    </td>
                    <td>
                      <span className={"cmp-no"}>{"—"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"500,000 requests/mo"}</span>
                    </td>
                  </tr>
                  {"\n      "}
                  <tr>
                    <td>{"Webhooks (CRM events)"}</td>
                    <td>
                      <span className={"cmp-no"}>{"—"}</span>
                    </td>
                    <td>
                      <span className={"cmp-no"}>{"—"}</span>
                    </td>
                    <td>
                      <span className={"cmp-yes"}>{"Included"}</span>
                    </td>
                  </tr>
                  {"\n      "}
                  <tr className={"cmp-cat"}>
                    <td colSpan={"4"}>{"Limits"}</td>
                  </tr>
                  {"\n      "}
                  <tr>
                    <td>{"Team users"}</td>
                    <td>{"3"}</td>
                    <td>{"8"}</td>
                    <td>{"25"}</td>
                  </tr>
                  {"\n      "}
                  <tr>
                    <td>{"Contacts"}</td>
                    <td>{"5,000"}</td>
                    <td>{"25,000"}</td>
                    <td>{"100,000"}</td>
                  </tr>
                  {"\n      "}
                  <tr>
                    <td>{"Messages / month"}</td>
                    <td>{"5,000"}</td>
                    <td>{"25,000"}</td>
                    <td>{"100,000"}</td>
                  </tr>
                  {"\n      "}
                  <tr>
                    <td>{"Storage"}</td>
                    <td>{"2 GB"}</td>
                    <td>{"10 GB"}</td>
                    <td>{"50 GB"}</td>
                  </tr>
                  {"\n      "}
                  <tr>
                    <td>{"Free trial"}</td>
                    <td>{"14 days"}</td>
                    <td>{"14 days"}</td>
                    <td>{"7 days"}</td>
                  </tr>
                  {"\n      "}
                  <tr>
                    <td>{"Support"}</td>
                    <td>{"Email support"}</td>
                    <td>{"Email support"}</td>
                    <td>
                      <span className={"cmp-yes"}>{"Priority support"}</span>
                    </td>
                  </tr>
                  {"\n    "}
                </tbody>
                {"\n  "}
              </table>
            </div>
            {"\n  "}
            <p className={"plan-note"} style={{ marginTop: "18px" }}>
              {
                "Feature availability may evolve as we improve WebPing. For the latest plan details or custom needs, "
              }
              <a href={"/contact"}>{"contact our team"}</a>
              {"."}
            </p>
            {"\n"}
          </div>
        </section>
        {"\n"}
        <section className={"section"}>
          <div className={"wrap"}>
            <div className={"grid cols-3"}>
              {"\n  "}
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Starter — $10/mo"}</h3>
                <p>
                  {
                    "Best for solo founders and small teams who need the inbox, contacts, pipelines, broadcasts and automations without paying ₹2,799+ for them."
                  }
                </p>
              </div>
              {"\n  "}
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Growth — $25/mo"}</h3>
                <p>
                  {
                    "Best for teams that want AI agents and the visual flow builder included, not as an add-on — plus advanced analytics and double the limits."
                  }
                </p>
              </div>
              {"\n  "}
              <div
                className={"card webping-card-enter motion-reduce:animate-none"}
              >
                <h3>{"Pro — $45/mo"}</h3>
                <p>
                  {
                    'Best for scale: developer API and webhooks, the highest limits on every resource, and priority support — under half the price of comparable "Pro" tiers.'
                  }
                </p>
              </div>
              {"\n"}
            </div>
          </div>
        </section>
        {"\n"}
        <section className={"section sec-cream"}>
          <div className={"wrap"}>
            <div className={"section-head"}>
              <p className={"kicker"}>{"FAQ"}</p>
              <h2>{"Pricing questions"}</h2>
            </div>
            {"\n  "}
            <div className={"fd-faqs"}>
              {"\n    "}
              <details className={"fd-faq"}>
                <summary>
                  {"What is the difference between the three plans?"}
                </summary>
                <p>
                  {
                    "Starter includes the core CRM — inbox, contacts, pipelines, templates, broadcasts (50/mo), automations (15) and CSV import. Growth adds advanced analytics, the visual flow builder, AI agents, a second WhatsApp number and roughly 5× the limits. Pro unlocks everything: public API, webhooks, the highest limits and priority support."
                  }
                </p>
              </details>
              {"\n    "}
              <details className={"fd-faq"}>
                <summary>
                  {"Are AI agents and the flow builder really included?"}
                </summary>
                <p>
                  {
                    "Yes. AI agents come with Growth (500 requests/mo) and Pro (2,500 requests/mo) at no extra cost. Most platforms charge ₹1,350–₹3,000 per month for this as an add-on. The visual flow builder is included from Growth (10 flows) and Pro (100 flows)."
                  }
                </p>
              </details>
              {"\n    "}
              <details className={"fd-faq"}>
                <summary>
                  {"Are WhatsApp message charges included in the plan price?"}
                </summary>
                <p>
                  {
                    "No — and nobody can include them. Meta bills every WhatsApp Business API message per category and country. WebPing passes Meta's rate card through with zero markup: you recharge through Meta's own Billing Hub and your wallet reflects exactly what Meta charges. India rates: ₹0.8631 per marketing message, ₹0.115 per utility or authentication message, and free-form service replies inside the 24-hour window are free."
                  }
                </p>
              </details>
              {"\n    "}
              <details className={"fd-faq"}>
                <summary>{"What happens when I hit a limit?"}</summary>
                <p>
                  {
                    "Live limits (users, contacts, numbers) block creation with a clear message and an upgrade prompt; monthly meters (messages, broadcasts, AI, API) reset on the first of each month. Upgrading is instant from your billing page — nothing is deleted and your data moves with you."
                  }
                </p>
              </details>
              {"\n    "}
              <details className={"fd-faq"}>
                <summary>{"Is there a refund?"}</summary>
                <p>
                  {
                    "Every plan carries a free trial (14 days on Starter and Growth, 7 days on Pro) so you can evaluate before you pay. New paid subscriptions carry a 1-day full refund, no questions asked."
                  }
                </p>
              </details>
              {"\n    "}
              <details className={"fd-faq"}>
                <summary>{"Can I upgrade or downgrade later?"}</summary>
                <p>
                  {
                    "Yes. Start on Starter and move to Growth or Pro as your team and volume grow — or step down when things slow. Changes apply from your billing page in one click."
                  }
                </p>
              </details>
              {"\n    "}
              <details className={"fd-faq"}>
                <summary>
                  {"Do I need my own WhatsApp Business account?"}
                </summary>
                <p>
                  {
                    "Yes. WebPing works with the official WhatsApp Business Platform (Cloud API). You connect your own number and Meta business, so you always keep ownership of your number and your Meta-billed charges."
                  }
                </p>
              </details>
              {"\n  "}
            </div>
            {"\n"}
          </div>
        </section>
        {"\n"}
        <section className={"section page-final"}>
          <div className={"wrap"}>
            <p className={"kicker"}>{"Ready when you are"}</p>
            <h2>{"Start on Starter, grow into Pro."}</h2>
            <p className={"lead"}>
              {
                "Every feature included in your tier, Meta rates passed through with no markup, and a free trial on every plan."
              }
            </p>
            <div className={"btn-row"}>
              <a className={"btn btn-green"} href={"/app"}>
                {"Start free trial"}
              </a>
              <a className={"btn-ghost"} href={"https://wa.me/918696778246"}>
                {"Chat with us"}
              </a>
            </div>
          </div>
        </section>
        {"\n"}
      </main>
      <section className={"wl-sec"} id={"contact-form"}>
        <div className={"wl-wrap"}>
          <div className={"wl-copy"}>
            <h2>{"Talk to our team about WebPing"}</h2>
            <p>
              {
                "Share your details and we'll help you with setup, features, pricing, or the right WhatsApp workflow for your team."
              }
            </p>
          </div>
          <div
            className={"wl-card webping-card-enter motion-reduce:animate-none"}
          >
            <div className={"wl-card-head"}>
              <div>
                <b>{"Send us a message"}</b>
                <span>{"We usually reply by email or WhatsApp."}</span>
              </div>
            </div>
            <form className={"wl-form"} novalidate={""}>
              <div className={"wl-grid"}>
                <div className={"wl-field"}>
                  <label>
                    {"Full name "}
                    <span className={"req"}>{"*"}</span>
                  </label>
                  <div className={"wl-inp"}>
                    <input
                      name={"full_name"}
                      type={"text"}
                      required={true}
                      placeholder={"Your full name"}
                    />
                  </div>
                </div>
                <div className={"wl-field"}>
                  <label>
                    {"Business name "}
                    <span className={"req"}>{"*"}</span>
                  </label>
                  <div className={"wl-inp"}>
                    <input
                      name={"business_name"}
                      type={"text"}
                      required={true}
                      placeholder={"Your business name"}
                    />
                  </div>
                </div>
              </div>
              <div className={"wl-grid"}>
                <div className={"wl-field"}>
                  <label>
                    {"Email "}
                    <span className={"req"}>{"*"}</span>
                  </label>
                  <div className={"wl-inp"}>
                    <input
                      name={"email"}
                      type={"email"}
                      required={true}
                      placeholder={"you@company.com"}
                    />
                  </div>
                </div>
                <div className={"wl-field"}>
                  <label>{"Phone"}</label>
                  <div className={"wl-inp"}>
                    <input
                      name={"phone"}
                      type={"tel"}
                      placeholder={"+91 98765 43210"}
                    />
                  </div>
                </div>
              </div>
              <div className={"wl-field"}>
                <label>
                  {"Message "}
                  <span className={"req"}>{"*"}</span>
                </label>
                <div className={"wl-inp ta"}>
                  <textarea
                    name={"message"}
                    required={true}
                    placeholder={"Tell us what you need."}
                  />
                </div>
              </div>
              <div className={"wl-actions"}>
                <button className={"btn"} type={"submit"}>
                  {"Send message"}
                </button>
                <span className={"wl-msg"} aria-live={"polite"} />
              </div>
            </form>
          </div>
        </div>
      </section>
      <SiteFooter />
      <a
        className={"wa-float"}
        href={"https://wa.me/918696778246"}
        target={"_blank"}
        rel={"noopener"}
      >
        <svg viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"}>
          <path
            d={
              "M12.04 2a9.9 9.9 0 0 0-8.24 15.36L2.2 21.8l4.56-1.17A9.9 9.9 0 1 0 12.04 2zm5.44 13.66c-.24.68-1.4 1.3-1.93 1.35-.5.05-1.13.07-1.76-.12a13.5 13.5 0 0 1-5.1-3.3 12.4 12.4 0 0 1-2.35-3.3c-.26-.5-.4-1.1-.4-1.7 0-.6.24-1.15.52-1.5.28-.36.62-.85.9-1.1.3-.3.6-.36.8-.36.2 0 .5.02.5.02h.02c.24 0 .4.16.5.4l.86 2.1c.08.18.05.42-.1.6l-.5.63c-.16.2-.18.4-.06.6a9.8 9.8 0 0 0 4.5 4.06c.24.1.44.08.6-.1l.74-.86c.18-.2.42-.24.62-.14l2.1 1c.24.1.4.28.4.5 0 .12-.02.9-.12 1.1z"
            }
          />
        </svg>
        {"Chat with us"}
      </a>
      <script defer={true} src={"/assets/site.js?v=80"} />
      <script defer={true} src={"/assets/webping-leads.js?v=3"} />
    </>
  );
}
