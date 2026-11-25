import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import AnimatedContent from "../components/AnimatedContent";
import TrustBadges from "../components/TrustBadges";
export default function SitePage() {
  return (
    <>
      <meta charset={"utf-8"} />
      <meta
        name={"description"}
        content={
          "WebPing is the WhatsApp CRM for teams that sell and support in chat: a shared inbox, paced broadcasts, automatic replies and a sales pipeline, on the official WhatsApp Business API. Free plan, 1-day full refund."
        }
      />
      <meta name={"robots"} content={"index, follow"} />
      <meta name={"theme-color"} content={"#25d366"} />
      <link rel={"canonical"} href={"https://webping.webpeaker.com/"} />
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <link
        rel={"icon"}
        type={"image/png"}
        sizes={"32x32"}
        href={"/favicon-32x32.png"}
      />
      <link
        rel={"icon"}
        type={"image/png"}
        sizes={"64x64"}
        href={"/favicon.png"}
      />
      <link rel={"apple-touch-icon"} href={"/apple-touch-icon.png"} />
      <title>{"WebPing — WhatsApp CRM for sales, marketing and support"}</title>
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
        precedence="webping-font"
      />
      <script type={"application/ld+json"}>
        {
          '\n{"@context":"https://schema.org","@type":"SoftwareApplication","name":"WebPing","url":"https://webping.webpeaker.com","applicationCategory":"BusinessApplication","operatingSystem":"Web","description":"WhatsApp CRM on the official WhatsApp Business API: shared team inbox, paced broadcasts, automatic replies, sales pipeline and developer API.","offers":{"@type":"Offer","priceCurrency":"USD","price":"0","description":"Free plan available"}}\n'
        }
      </script>
      <script type={"application/ld+json"}>
        {
          '\n{"@context":"https://schema.org","@type":"Organization","name":"WebPing","url":"https://webping.webpeaker.com","email":"webping@webpeaker.com","telephone":"+91 8696778246","address":{"@type":"PostalAddress","addressLocality":"Jaipur","addressRegion":"Rajasthan","addressCountry":"IN"}}\n'
        }
      </script>
      <style>
        {
          ".jt-pane{display:none!important}.jt-pane.active{display:grid!important}@media(max-width:900px){.jt-pane.active{display:block!important}}"
        }
      </style>
      <div className={"utility"}>
        <div className={"wrap utilwrap"}>
          {"\n  "}
          <div className={"u-left"}>
            <a href={"/help"}>{"Help Center"}</a>
            <a href={"/contact"}>{"Contact us"}</a>
          </div>
          {"\n  "}
          <div className={"u-right"}>
            <span>{"English"}</span>
            <a href={"/app"}>{"Log in"}</a>
          </div>
          {"\n"}
        </div>
      </div>
      <SiteHeader />
      <main>
        {"\n\n"}
        <section className={"hero"}>
          {"\n  "}
          <div className={"wrap"}>
            {"\n    "}
            <div className={"hero-grid"}>
              {"\n      "}
              <div className={"hero-copy"}>
                {"\n        "}
                <p className={"hero-eyebrow"}>
                  <span className={"dot"} />
                  {" Official WhatsApp Business API CRM"}
                </p>
                {"\n        "}
                <h1>
                  {"Automate the busywork."}
                  <br />
                  {"Keep "}
                  <span className={"hl hl-blush"}>{"every conversation"}</span>
                  {" human."}
                </h1>
                {"\n        "}
                <p className={"lead hero-lead"}>
                  {
                    "WebPing is the WhatsApp CRM for teams that sell and support in chat.\n        A shared inbox for the whole team, scheduled broadcasts, automatic replies and a deal board —\n        one login, one number, zero phone-switching."
                  }
                </p>
                {"\n        "}
                <div className={"btn-row"}>
                  {"\n          "}
                  <a className={"btn"} href={"/app"}>
                    {"Start for free"}
                  </a>
                  {"\n          "}
                  <a className={"btn-ghost"} href={"/pricing"}>
                    {"See pricing"}
                  </a>
                  {"\n        "}
                </div>
                {"\n        "}
                <p className={"fine"}>
                  {"Free plan · No credit card · 1-day full refund"}
                </p>
                {"\n      "}
              </div>
              {"\n      "}
              <AnimatedContent className="hero-mock" stablePreview>
                {"\n        "}
                <p className={"tag-chip hot"}>
                  <span
                    className={"dot"}
                    style={{
                      width: "8px",
                      height: "8px",
                      background: "#e11d48",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "8px",
                    }}
                  />
                  {" New message · WhatsApp"}
                </p>
                {"\n        "}
                <div className={"bmsg"}>
                  {
                    "Hi! Do you deliver to Nagpur? And what does shipping cost for two units?"
                  }
                </div>
                {"\n        "}
                <div className={"mock-row-dim"}>
                  <span className={"avatar"}>{"A"}</span>
                  <span className={"meta-row"} style={{ marginTop: "0" }}>
                    {"Adarsh · 09:38"}
                  </span>
                </div>
                {"\n        "}
                <div className={"cmsg"}>
                  {
                    "We do — same-day dispatch to Nagpur. Here's the catalogue, and you'll get\n        tracking updates right here in this chat."
                  }
                </div>
                {"\n        "}
                <div
                  className={"mock-row"}
                  style={{ justifyContent: "flex-end" }}
                >
                  <span
                    className={"meta-row meta-row-right"}
                    style={{ marginTop: "0" }}
                  >
                    {"Auto-reply · sent in 2s"}
                  </span>
                </div>
                {"\n        "}
                <div className={"mock-glass"} />
                {"\n      "}
              </AnimatedContent>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
          {"\n  "}
          <div className={"drift d1"} aria-hidden={"true"}>
            <svg
              viewBox={"0 0 24 24"}
              fill={"none"}
              stroke={"#25d366"}
              strokeWidth={"1.8"}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
            >
              <path
                d={
                  "M21 11.5a8.4 8.4 0 0 1-8.5 8.4 8.7 8.7 0 0 1-3.8-.9L3 20l1-5.1a8.2 8.2 0 0 1-1-4A8.4 8.4 0 0 1 11.5 3a8.4 8.4 0 0 1 9.5 8.5z"
                }
                fill={"rgba(37,211,102,.12)"}
              />
              <path d={"M8.2 10.7c.5 1.8 2 3.6 4 4.6"} />
            </svg>
          </div>
          {"\n  "}
          <div className={"drift d2"} aria-hidden={"true"}>
            <svg
              viewBox={"0 0 24 24"}
              fill={"none"}
              stroke={"#0e9f57"}
              strokeWidth={"1.8"}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
            >
              <circle cx={"12"} cy={"12"} r={"9"} />
              <path d={"M12 7v5l3.2 2"} />
            </svg>
          </div>
          {"\n  "}
          <div className={"trust-strip"}>
            <div className={"wrap trust-wrap"}>
              {"\n    "}
              <p className={"trust-copy"}>
                {"Trusted to handle "}
                <strong>{"every customer conversation"}</strong>
                {" on the official\n    "}
                <strong>{"WhatsApp Business Platform"}</strong>
                {" — on "}
                <strong>{"your own server"}</strong>
                {"."}
              </p>
              {"\n    "}
              <div className={"client-logos"}>
                <TrustBadges />
                {"\n      "}
                <p className={"logos-label"}>{"Trusted by teams at"}</p>
                {"\n      "}
                <div className={"logos-marquee"} tabIndex={0}>
                  {"\n        "}
                  <div className={"logos-track"}>
                    {"\n          "}
                    <ul
                      className={"logos-row"}
                      role={"list"}
                      aria-label={"Past clients"}
                    >
                      {"\n            "}
                      <li className={"logo-item"}>
                        <span className={"logo-name ln-sharpley"}>
                          {"Sharpley"}
                        </span>
                      </li>
                      {"\n            "}
                      <li className={"logo-item"}>
                        <span className={"logo-name ln-greyzlabs"}>
                          {"Greyzlabs"}
                        </span>
                      </li>
                      {"\n            "}
                      <li className={"logo-item"}>
                        <span className={"logo-name ln-webpeaker"}>
                          {"Webpeaker"}
                        </span>
                      </li>
                      {"\n            "}
                      <li className={"logo-item"}>
                        <span className={"logo-name ln-cyberhelper"}>
                          {"CyberHelper"}
                        </span>
                      </li>
                      {"\n            "}
                      <li className={"logo-item"}>
                        <span className={"logo-name ln-ayurvedpower"}>
                          {"AyurvedPower"}
                        </span>
                      </li>
                      {"\n          "}
                    </ul>
                    {"\n          "}
                    <ul className={"logos-row logos-copy"} aria-hidden={"true"}>
                      {"\n            "}
                      <li className={"logo-item"}>
                        <span className={"logo-name ln-sharpley"}>
                          {"Sharpley"}
                        </span>
                      </li>
                      {"\n            "}
                      <li className={"logo-item"}>
                        <span className={"logo-name ln-greyzlabs"}>
                          {"Greyzlabs"}
                        </span>
                      </li>
                      {"\n            "}
                      <li className={"logo-item"}>
                        <span className={"logo-name ln-webpeaker"}>
                          {"Webpeaker"}
                        </span>
                      </li>
                      {"\n            "}
                      <li className={"logo-item"}>
                        <span className={"logo-name ln-cyberhelper"}>
                          {"CyberHelper"}
                        </span>
                      </li>
                      {"\n            "}
                      <li className={"logo-item"}>
                        <span className={"logo-name ln-ayurvedpower"}>
                          {"AyurvedPower"}
                        </span>
                      </li>
                      {"\n          "}
                    </ul>
                    {"\n        "}
                  </div>
                  {"\n      "}
                </div>
                {"\n    "}
              </div>
              {"\n  "}
            </div>
          </div>
          {"\n"}
        </section>
        {"\n\n"}
        <section className={"section sec-white"}>
          {"\n  "}
          <div className={"wrap orbit-wrap"}>
            {"\n    "}
            <div>
              {"\n      "}
              <p className={"kicker"}>{"One place"}</p>
              {"\n      "}
              <h2>{"Every conversation, one shared inbox."}</h2>
              {"\n      "}
              <p className={"lead"}>
                {
                  "Take the WhatsApp number your customers already message and put your entire\n      sales and support team behind it. When a visitor lands on your site instead, the\n      chat button waits for them there too."
                }
              </p>
              {"\n      "}
              <ul className={"pi-list"}>
                {"\n        "}
                <li>
                  <span className={"tick"} />
                  <span>
                    <b>{"Shared team inbox"}</b>
                    {
                      " with assignment, tags, statuses and internal notes that can never send."
                    }
                  </span>
                </li>
                {"\n        "}
                <li>
                  <span className={"tick"} />
                  <span>
                    <b>{"Live 24-hour window timer"}</b>
                    {
                      " that flips the composer to approved templates the moment Meta's window closes."
                    }
                  </span>
                </li>
                {"\n        "}
                <li>
                  <span className={"tick"} />
                  <span>
                    <b>{"Contacts with history"}</b>
                    {
                      " — tags, custom fields and the full thread beside every chat."
                    }
                  </span>
                </li>
                {"\n      "}
              </ul>
              {"\n      "}
              <div className={"btn-row"}>
                <a className={"btn"} href={"/app"}>
                  {"Connect your first number"}
                </a>
                <a className={"btn-ghost"} href={"/features/shared-inbox"}>
                  {"Explore the inbox →"}
                </a>
              </div>
              {"\n    "}
            </div>
            {"\n    "}
            <div>
              {"\n      "}
              <div className={"deck-visual"}>
                {"\n        "}
                <img
                  src={"/images/one-place-visual.webp"}
                  alt={
                    "WebPing dashboard preview — every WhatsApp conversation in one shared inbox"
                  }
                  width={"1448"}
                  height={"1086"}
                  loading={"lazy"}
                />
                {"\n      "}
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
          {"\n"}
        </section>
        {"\n\n"}
        <section className={"section sec-lav jx-sec"}>
          {"\n  "}
          <div className={"wrap"}>
            {"\n    "}
            <div className={"section-head jx-head"}>
              {"\n      "}
              <div>
                {"\n        "}
                <p className={"kicker"}>{"One CRM, many jobs"}</p>
                {"\n        "}
                <h2>{"Fuel every stage of the customer journey."}</h2>
                {"\n      "}
              </div>
              {"\n      "}
              <p className={"jx-lead"}>
                {
                  "From first hello to repeat purchase, WebPing turns WhatsApp conversations into organized workflows — for marketing, sales, and support — in one place."
                }
              </p>
              {"\n    "}
            </div>
            {"\n    "}
            <div
              className={"jt-bar"}
              role={"tablist"}
              aria-label={"Customer journey"}
            >
              {"\n      "}
              <button
                className={"jt-tab active"}
                data-pane={"mkt"}
                type={"button"}
              >
                {"Marketing"}
              </button>
              {"\n      "}
              <button className={"jt-tab"} data-pane={"sales"} type={"button"}>
                {"Sales"}
              </button>
              {"\n      "}
              <button
                className={"jt-tab"}
                data-pane={"support"}
                type={"button"}
              >
                {"Support"}
              </button>
              {"\n    "}
            </div>
            {"\n    "}
            <div className={"jt-panes"}>
              {"\n\n      "}
              <div className={"jt-pane active"} id={"pane-mkt"}>
                {"\n        "}
                <div className={"jx-copy"}>
                  {"\n          "}
                  <span className={"jx-chip"}>{"Campaigns"}</span>
                  {"\n          "}
                  <h3>{"Launch broadcasts that feel timely, not spammy."}</h3>
                  {"\n          "}
                  <p>
                    {
                      "Reach opted-in audiences with approved templates, segment smartly, schedule at the right moment, and turn replies into real conversations."
                    }
                  </p>
                  {"\n          "}
                  <ul className={"jx-points"}>
                    {"\n            "}
                    <li>
                      <b>{"Segmented audiences"}</b>
                      <span>
                        {"Send relevant messages to the right people"}
                      </span>
                    </li>
                    {"\n            "}
                    <li>
                      <b>{"Approved templates"}</b>
                      <span>
                        {"Stay compliant for business-initiated chats"}
                      </span>
                    </li>
                    {"\n            "}
                    <li>
                      <b>{"Reply-ready"}</b>
                      <span>{"Every response lands in your team inbox"}</span>
                    </li>
                    {"\n          "}
                  </ul>
                  {"\n          "}
                  <div className={"btn-row"}>
                    <a className={"btn"} href={"/features/broadcasts"}>
                      {"Explore broadcasts →"}
                    </a>
                  </div>
                  {"\n        "}
                </div>
                {"\n        "}
                <div className={"jc-canvas jc-mkt"} aria-hidden={"true"}>
                  {"\n          "}
                  <div className={"jc-glow"} />
                  {"\n          "}
                  <div className={"jc-float jc-f1"}>
                    <b>{"1,248"}</b>
                    <span>{"opted-in reached"}</span>
                  </div>
                  {"\n          "}
                  <div className={"jc-float jc-f2"}>
                    <b>{"Replies"}</b>
                    <span>{"flowing into inbox"}</span>
                  </div>
                  {"\n          "}
                  <div
                    className={
                      "jc-card jc-broadcast webping-card-enter motion-reduce:animate-none"
                    }
                  >
                    {"\n            "}
                    <div className={"jc-bc-head"}>
                      <span className={"jc-pill on"}>
                        {"Approved template"}
                      </span>
                      <span className={"jc-time"}>{"Today 6:30 PM"}</span>
                    </div>
                    {"\n            "}
                    <div className={"jc-msg"}>
                      {"Hi {{1}}, our new collection is live ✨"}
                      <br />
                      {"Tap to explore styles picked for you."}
                    </div>
                    {"\n            "}
                    <div className={"jc-bc-foot"}>
                      {"\n              "}
                      <span className={"jc-avatars"}>
                        <i>{"A"}</i>
                        <i>{"M"}</i>
                        <i>{"S"}</i>
                        <i>{"+12"}</i>
                      </span>
                      {"\n              "}
                      <span className={"jc-send"}>
                        {"Scheduled "}
                        <em />
                      </span>
                      {"\n            "}
                    </div>
                    {"\n          "}
                  </div>
                  {"\n          "}
                  <div className={"jc-wave"}>
                    <span />
                    <span />
                    <span />
                  </div>
                  {"\n        "}
                </div>
                {"\n      "}
              </div>
              {"\n\n      "}
              <div className={"jt-pane"} id={"pane-sales"}>
                {"\n        "}
                <div className={"jx-copy"}>
                  {"\n          "}
                  <span className={"jx-chip"}>{"Pipeline"}</span>
                  {"\n          "}
                  <h3>{"Move every lead from chat to closed deal."}</h3>
                  {"\n          "}
                  <p>
                    {
                      "Capture enquiries, qualify quickly, track stages, and follow up on time — with full conversation history beside every deal."
                    }
                  </p>
                  {"\n          "}
                  <ul className={"jx-points"}>
                    {"\n            "}
                    <li>
                      <b>{"Lead capture"}</b>
                      <span>
                        {"Ads, links, and site chats land in one place"}
                      </span>
                    </li>
                    {"\n            "}
                    <li>
                      <b>{"Clear stages"}</b>
                      <span>{"Know what’s new, hot, and ready to close"}</span>
                    </li>
                    {"\n            "}
                    <li>
                      <b>{"Timely follow-ups"}</b>
                      <span>{"Never lose a deal to a missed reply"}</span>
                    </li>
                    {"\n          "}
                  </ul>
                  {"\n          "}
                  <div className={"btn-row"}>
                    <a className={"btn"} href={"/features/sales-pipelines"}>
                      {"Explore pipelines →"}
                    </a>
                  </div>
                  {"\n        "}
                </div>
                {"\n        "}
                <div className={"jc-canvas jc-sales"} aria-hidden={"true"}>
                  {"\n          "}
                  <div className={"jc-path"}>
                    {"\n            "}
                    <div className={"jc-node done"}>
                      <span className={"jc-dot"} />
                      <div>
                        <b>{"New enquiry"}</b>
                        <small>{"“Hi, I’m interested in your plan”"}</small>
                      </div>
                    </div>
                    {"\n            "}
                    <div className={"jc-node done"}>
                      <span className={"jc-dot"} />
                      <div>
                        <b>{"Qualified"}</b>
                        <small>{"Needs demo · owner assigned"}</small>
                      </div>
                    </div>
                    {"\n            "}
                    <div className={"jc-node active"}>
                      <span className={"jc-dot"} />
                      <div>
                        <b>{"Proposal sent"}</b>
                        <small>{"Approved template shared in chat"}</small>
                      </div>
                    </div>
                    {"\n            "}
                    <div className={"jc-node win"}>
                      <span className={"jc-dot"} />
                      <div>
                        <b>{"Deal won"}</b>
                        <small>{"Follow-up scheduled automatically"}</small>
                      </div>
                    </div>
                    {"\n          "}
                  </div>
                  {"\n          "}
                  <div className={"jc-float jc-f3"}>
                    <b>{"Hot lead"}</b>
                    <span>{"full chat context attached"}</span>
                  </div>
                  {"\n        "}
                </div>
                {"\n      "}
              </div>
              {"\n\n      "}
              <div className={"jt-pane"} id={"pane-support"}>
                {"\n        "}
                <div className={"jx-copy"}>
                  {"\n          "}
                  <span className={"jx-chip"}>{"Support"}</span>
                  {"\n          "}
                  <h3>{"Resolve faster with one shared inbox."}</h3>
                  {"\n          "}
                  <p>
                    {
                      "Assign conversations, keep context, reply within the 24-hour window, and use approved templates when needed — so customers always get a clear answer."
                    }
                  </p>
                  {"\n          "}
                  <ul className={"jx-points"}>
                    {"\n            "}
                    <li>
                      <b>{"Team ownership"}</b>
                      <span>{"Every chat assigned, nothing missed"}</span>
                    </li>
                    {"\n            "}
                    <li>
                      <b>{"24h window aware"}</b>
                      <span>{"Reply freely or use templates when closed"}</span>
                    </li>
                    {"\n            "}
                    <li>
                      <b>{"Consistent replies"}</b>
                      <span>{"Quick replies and reviewed drafts"}</span>
                    </li>
                    {"\n          "}
                  </ul>
                  {"\n          "}
                  <div className={"btn-row"}>
                    <a className={"btn"} href={"/features/shared-inbox"}>
                      {"Explore the inbox →"}
                    </a>
                  </div>
                  {"\n        "}
                </div>
                {"\n        "}
                <div className={"jc-canvas jc-support"} aria-hidden={"true"}>
                  {"\n          "}
                  <div className={"jc-ticket"}>
                    {"\n            "}
                    <div className={"jc-ticket-head"}>
                      <span className={"jc-avatar"}>{"R"}</span>
                      <div>
                        <b>{"Riya · Order #1042"}</b>
                        <small>{"Assigned to Support"}</small>
                      </div>
                      <span className={"jc-pill on"}>{"24h open"}</span>
                    </div>
                    {"\n            "}
                    <div className={"jc-thread"}>
                      {"\n              "}
                      <div className={"jc-msg-in"}>
                        {"Where is my order? It hasn’t arrived yet."}
                      </div>
                      {"\n              "}
                      <div className={"jc-msg-out"}>
                        {
                          "Hi Riya! It’s out for delivery today — you’ll get it by 7 PM."
                        }
                      </div>
                      {"\n            "}
                    </div>
                    {"\n            "}
                    <div className={"jc-ticket-foot"}>
                      <span className={"jc-tag ok"}>{"Resolved"}</span>
                      <span className={"jc-tag"}>{"Context saved"}</span>
                    </div>
                    {"\n          "}
                  </div>
                  {"\n          "}
                  <div className={"jc-ring"}>
                    <svg viewBox={"0 0 120 120"}>
                      <circle cx={"60"} cy={"60"} r={"46"} />
                      <circle
                        cx={"60"}
                        cy={"60"}
                        r={"46"}
                        className={"jc-ring-on"}
                      />
                    </svg>
                    <div>
                      <b>{"19:42"}</b>
                      <span>{"window left"}</span>
                    </div>
                  </div>
                  {"\n          "}
                  <div className={"jc-float jc-f4"}>
                    <b>{"Template ready"}</b>
                    <span>{"auto-fallback when closed"}</span>
                  </div>
                  {"\n        "}
                </div>
                {"\n      "}
              </div>
              {"\n\n    "}
            </div>
            {"\n  "}
          </div>
          {"\n"}
        </section>
        {"\n\n"}
        <section className={"section sec-white"}>
          {"\n  "}
          <div className={"wrap orbit-wrap"}>
            {"\n    "}
            <div
              className={"ai-draft-ui"}
              style={{ order: "0" }}
              aria-label={"AI"}
              draft={""}
              assistant={""}
              component={""}
            >
              {"\n      "}
              <div
                className={
                  "ai-draft-card webping-card-enter motion-reduce:animate-none"
                }
              >
                {"\n        "}
                <div className={"ai-draft-top"}>
                  <span className={"ai-draft-dot"} />
                  <b>{"AI draft"}</b>
                  <span className={"ai-draft-status"}>
                    {"Waiting for review"}
                  </span>
                </div>
                {"\n        "}
                <div className={"ai-draft-sources"}>
                  <span className={"ai-src"}>{"pricing.pdf"}</span>
                  <span className={"ai-src"}>{"refund-policy.md"}</span>
                  <span className={"ai-src"}>{"faq.docx"}</span>
                </div>
                {"\n        "}
                <div className={"ai-draft-thread"}>
                  {"\n          "}
                  <div className={"ai-bubble"} customer={""}>
                    <small>{"Customer"}</small>
                    {
                      "Hi, what’s included in Professional and can I get a refund?"
                    }
                  </div>
                  {"\n          "}
                  <div className={"ai-bubble"} draft={""}>
                    <small>{"Suggested draft · grounded in docs"}</small>
                    {
                      "Professional includes shared inbox, broadcasts, automations, AI reply drafts, and sales pipelines. New subscriptions come with a 1-day full refund. If you’d like, I can share plan details."
                    }
                  </div>
                  {"\n        "}
                </div>
                {"\n        "}
                <div className={"ai-draft-bar"}>
                  {"\n          "}
                  <span className={"ai-act"}>{"Edit"}</span>
                  <span className={"ai-act"}>{"Mute chat"}</span>
                  <span className={"ai-act"} warn={""}>
                    {"Agent takeover"}
                  </span>
                  <span className={"ai-act"} send={""}>
                    {"Approve & send"}
                  </span>
                  {"\n        "}
                </div>
                {"\n      "}
              </div>
              {"\n      "}
              <div className={"ai-draft-mini"}>
                <span>
                  <b>{"Grounded"}</b>
                  {" in uploaded docs"}
                </span>
                <span>
                  <b>{"Human-guided"}</b>
                  {" approval"}
                </span>
                <span>
                  <b>{"Interruptible"}</b>
                  {" any time"}
                </span>
              </div>
              {"\n    "}
            </div>
            {"\n    "}
            <div>
              {"\n      "}
              <p className={"kicker"}>{"Assisted, not autonomous"}</p>
              {"\n      "}
              <h2>{"AI drafts, grounded in your own documents."}</h2>
              {"\n      "}
              <p className={"lead"}>
                {
                  "Upload your product docs and WebPing drafts replies from them — pricing,\n      policies, the things your team actually types. A human always reviews and hits\n      send; automation can be muted per chat by keyword or sentiment."
                }
              </p>
              {"\n      "}
              <ul className={"pi-list"}>
                {"\n        "}
                <li>
                  <span className={"tick"} />
                  <span>
                    <b>{"Grounded"}</b>
                    {" in uploaded docs, not hallucinated features."}
                  </span>
                </li>
                {"\n        "}
                <li>
                  <span className={"tick"} />
                  <span>
                    <b>{"Human-guided"}</b>
                    {
                      " — nothing sends from drafts without a person approving it."
                    }
                  </span>
                </li>
                {"\n        "}
                <li>
                  <span className={"tick"} />
                  <span>
                    <b>{"Interruptible"}</b>
                    {" — agents take over any chat in one step."}
                  </span>
                </li>
                {"\n      "}
              </ul>
              {"\n      "}
              <div className={"btn-row"}>
                <a className={"btn-ghost"} href={"/features/ai-assistant"}>
                  {"About AI drafts →"}
                </a>
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
          {"\n"}
        </section>
        {"\n\n"}
        <section className={"section sec-mint"}>
          {"\n  "}
          <div className={"wrap"}>
            {"\n    "}
            <div className={"section-head"}>
              {"\n      "}
              <p className={"kicker"}>{"For developers"}</p>
              {"\n      "}
              <h2>{"Plugs into what you already run."}</h2>
              {"\n      "}
              <p className={"lead"} style={{ marginTop: "12px" }}>
                {
                  "A small, honest API surface: create contacts, trigger\n      broadcasts, read conversations. Replace nothing — extend what you have."
                }
              </p>
              {"\n    "}
            </div>
            {"\n    "}
            <div className={"int-grid"}>
              {"\n      "}
              <div
                className={
                  "int-card webping-card-enter motion-reduce:animate-none"
                }
              >
                <span className={"itag"}>{"REST API"}</span>
                <h3>{"Every object, scoped keys"}</h3>
                <p>
                  {
                    "Contacts, conversations, broadcasts and templates through versioned endpoints with scoped API keys."
                  }
                </p>
              </div>
              {"\n      "}
              <div
                className={
                  "int-card webping-card-enter motion-reduce:animate-none"
                }
              >
                <span className={"itag"}>{"Webhooks"}</span>
                <h3>{"Signed events"}</h3>
                <p>
                  {
                    "Message received, chat assigned, broadcast done — outgoing events signed with HMAC-SHA256."
                  }
                </p>
              </div>
              {"\n      "}
              <div
                className={
                  "int-card webping-card-enter motion-reduce:animate-none"
                }
              >
                <span className={"itag"}>{"Templates"}</span>
                <h3>{"Approved message templates"}</h3>
                <p>
                  {
                    "Sync with Meta's library, submit for approval, then use them in broadcasts and automations."
                  }
                </p>
              </div>
              {"\n      "}
              <div
                className={
                  "int-card webping-card-enter motion-reduce:animate-none"
                }
              >
                <span className={"itag"}>{"Contacts"}</span>
                <h3>{"CSV import & fields"}</h3>
                <p>
                  {
                    "Column mapping, dedupe on phone number, tags and custom fields created in chat."
                  }
                </p>
              </div>
              {"\n      "}
              <div
                className={
                  "int-card webping-card-enter motion-reduce:animate-none"
                }
              >
                <span className={"itag"}>{"Quick replies"}</span>
                <h3>{"Speed in the composer"}</h3>
                <p>
                  {
                    "Team-wide saved replies with variables, one keystroke away while a customer waits."
                  }
                </p>
              </div>
              {"\n      "}
              <div
                className={
                  "int-card webping-card-enter motion-reduce:animate-none"
                }
              >
                <span className={"itag"}>{"No account"}</span>
                <h3>{"Free tools"}</h3>
                <p>
                  {
                    "wa.me link generator and a chat button for any website — use them before you sign up."
                  }
                </p>
              </div>
              {"\n    "}
            </div>
            {"\n    "}
            <div className={"codebox"} style={{ marginTop: "34px" }}>
              <pre>
                <span className={"cm"}>
                  {"# Send a message through WebPing"}
                </span>
                {
                  '\ncurl -X POST "https://webping.webpeaker.com/api/v1/messages" \\\n  -H "Authorization: Bearer $WEBPING_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"phone":"919867543210","template":"order_shipped","lang":"en","variables":["#1042","Aug 7"]}\''
                }
              </pre>
            </div>
            {"\n  "}
          </div>
          {"\n"}
        </section>
        {"\n\n"}
        <section className={"section sec-deep"}>
          {"\n  "}
          <div className={"wrap"}>
            {"\n    "}
            <div
              className={"section-head"}
              style={{
                display: "grid",
                gridTemplateColumns: "1.05fr .95fr",
                gap: "44px",
                alignItems: "end",
              }}
            >
              {"\n      "}
              <div>
                {"\n        "}
                <p className={"kicker"}>{"Yours, end to end"}</p>
                {"\n        "}
                <h2>{"Built to hold every conversation."}</h2>
                {"\n      "}
              </div>
              {"\n      "}
              <p
                style={{
                  color: "var(--sub)",
                  fontSize: "1.05rem",
                  margin: "0",
                }}
              >
                {
                  "Shared inbox and an honest API aren't\n      add-ons — they're the point. Prices don't hide Meta's charges, data doesn't leave your\n      server, and the refund isn't ornamental."
                }
              </p>
              {"\n    "}
            </div>
            {"\n    "}
            <div className={"stat-row"}>
              {"\n      "}
              <div className={"stat"}>
                <b>{"1"}</b>
                <span>{"number for the whole team"}</span>
              </div>
              {"\n      "}
              <div className={"stat"}>
                <b>{"24 h"}</b>
                <span>{"window, with a live timer"}</span>
              </div>
              {"\n      "}
              <div className={"stat"}>
                <b>{"2"}</b>
                <span>{"plans — no maze"}</span>
              </div>
              {"\n      "}
              <div className={"stat"}>
                <b>{"0"}</b>
                <span>{"middlemen between you and your data"}</span>
              </div>
              {"\n    "}
            </div>
            {"\n    "}
            <div
              className={
                "trust-card webping-card-enter motion-reduce:animate-none"
              }
            >
              {"\n      "}
              <div className={"seals"}>
                {"\n        "}
                <span className={"seal"} style={{ background: "var(--green)" }}>
                  {"WAPI"}
                </span>
                {"\n        "}
                <span className={"seal"} style={{ background: "#38bdf8" }}>
                  {"TLS"}
                </span>
                {"\n        "}
                <span className={"seal"} style={{ background: "#8b5cf6" }}>
                  {"RSA"}
                </span>
                {"\n      "}
              </div>
              {"\n      "}
              <div>
                {"\n        "}
                <h3>{"Security and privacy, on your own stack."}</h3>
                {"\n        "}
                <p>
                  {
                    "TLS 1.3 in transit, encrypted at rest, scoped API keys, signed webhooks, audit trail on permissions."
                  }
                </p>
                {"\n      "}
              </div>
              {"\n      "}
              <a className={"go"} href={"/security"}>
                {"Read the security notes →"}
              </a>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
          {"\n"}
        </section>
        {"\n\n"}
        <section className={"section sec-white"} id={"examples"}>
          {"\n  "}
          <div className={"wrap"}>
            {"\n    "}
            <div className={"section-head"}>
              {"\n      "}
              <p className={"kicker"}>{"Examples"}</p>
              {"\n      "}
              <h2>{"What teams run on WebPing every week."}</h2>
              {"\n    "}
            </div>
            {"\n    "}
            <div className={"case-grid"}>
              {"\n      "}
              <div
                className={
                  "case-card webping-card-enter motion-reduce:animate-none"
                }
              >
                {"\n        "}
                <q>
                  {
                    "Schedule the abandoned-cart nudge at the 8-hour mark, while the buyer is still in purchase mode."
                  }
                </q>
                {"\n        "}
                <div className={"crow"}>
                  <span className={"cavatar"} style={{ background: "#25d366" }}>
                    {"M"}
                  </span>
                  <div className={"cwh"}>
                    <b>{"Recovery flow"}</b>
                    <span>{"E-commerce"}</span>
                  </div>
                </div>
                {"\n        "}
                <p>{"Broadcasts · Templates · Inbox"}</p>
                <span className={"cread"} aria-hidden={"true"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2.4"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  >
                    <path d={"m1.5 12.5 4.5 4.5L15 8.5"} />
                    <path d={"m9.5 14.5 2.5 2.5L21.5 8"} opacity={".55"} />
                  </svg>
                </span>
                {"\n      "}
              </div>
              {"\n      "}
              <div
                className={
                  "case-card webping-card-enter motion-reduce:animate-none"
                }
              >
                {"\n        "}
                <q>
                  {
                    "Every click-to-WhatsApp enquiry lands on the pipeline with its history beside it, routed by language."
                  }
                </q>
                {"\n        "}
                <div className={"crow"}>
                  <span className={"cavatar"} style={{ background: "#f59e0b" }}>
                    {"S"}
                  </span>
                  <div className={"cwh"}>
                    <b>{"Inbound routing"}</b>
                    <span>{"Sales team"}</span>
                  </div>
                </div>
                {"\n        "}
                <p>{"Pipelines · Contacts · Tags"}</p>
                <span className={"cread"} aria-hidden={"true"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2.4"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  >
                    <path d={"m1.5 12.5 4.5 4.5L15 8.5"} />
                    <path d={"m9.5 14.5 2.5 2.5L21.5 8"} opacity={".55"} />
                  </svg>
                </span>
                {"\n      "}
              </div>
              {"\n      "}
              <div
                className={
                  "case-card webping-card-enter motion-reduce:animate-none"
                }
              >
                {"\n        "}
                <q>
                  {
                    "Night-time enquiries get an instant acknowledgement; the thread waits assigned for the morning shift."
                  }
                </q>
                {"\n        "}
                <div className={"crow"}>
                  <span className={"cavatar"} style={{ background: "#8b5cf6" }}>
                    {"A"}
                  </span>
                  <div className={"cwh"}>
                    <b>{"Out-of-hours"}</b>
                    <span>{"Support lead"}</span>
                  </div>
                </div>
                {"\n        "}
                <p>{"Automations · Quick replies"}</p>
                <span className={"cread"} aria-hidden={"true"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2.4"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  >
                    <path d={"m1.5 12.5 4.5 4.5L15 8.5"} />
                    <path d={"m9.5 14.5 2.5 2.5L21.5 8"} opacity={".55"} />
                  </svg>
                </span>
                {"\n      "}
              </div>
              {"\n      "}
              <div
                className={
                  "case-card webping-card-enter motion-reduce:animate-none"
                }
              >
                {"\n        "}
                <q>
                  {
                    "Festive catalogue goes to the whole list in one afternoon — approved templates, paced sending."
                  }
                </q>
                {"\n        "}
                <div className={"crow"}>
                  <span className={"cavatar"} style={{ background: "#0ea5e9" }}>
                    {"B"}
                  </span>
                  <div className={"cwh"}>
                    <b>{"Campaign day"}</b>
                    <span>{"Marketing"}</span>
                  </div>
                </div>
                {"\n        "}
                <p>{"Broadcasts · Lists · Scheduling"}</p>
                <span className={"cread"} aria-hidden={"true"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2.4"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  >
                    <path d={"m1.5 12.5 4.5 4.5L15 8.5"} />
                    <path d={"m9.5 14.5 2.5 2.5L21.5 8"} opacity={".55"} />
                  </svg>
                </span>
                {"\n      "}
              </div>
              {"\n      "}
              <div
                className={
                  "case-card webping-card-enter motion-reduce:animate-none"
                }
              >
                {"\n        "}
                <q>
                  {
                    "Draft the renewal message from the product doc, edit one line, send — thirty seconds total."
                  }
                </q>
                {"\n        "}
                <div className={"crow"}>
                  <span className={"cavatar"} style={{ background: "#ec4899" }}>
                    {"D"}
                  </span>
                  <div className={"cwh"}>
                    <b>{"AI in the loop"}</b>
                    <span>{"Account manager"}</span>
                  </div>
                </div>
                {"\n        "}
                <p>{"AI drafts · Templates"}</p>
                <span className={"cread"} aria-hidden={"true"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2.4"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  >
                    <path d={"m1.5 12.5 4.5 4.5L15 8.5"} />
                    <path d={"m9.5 14.5 2.5 2.5L21.5 8"} opacity={".55"} />
                  </svg>
                </span>
                {"\n      "}
              </div>
              {"\n      "}
              <div
                className={
                  "case-card webping-card-enter motion-reduce:animate-none"
                }
              >
                {"\n        "}
                <q>
                  {
                    "Webhook fires when a deal moves; Google Sheet and the CRM both stay current without anyone copy-pasting."
                  }
                </q>
                {"\n        "}
                <div className={"crow"}>
                  <span className={"cavatar"} style={{ background: "#f43f5e" }}>
                    {"W"}
                  </span>
                  <div className={"cwh"}>
                    <b>{"Syncs"}</b>
                    <span>{"Ops & tooling"}</span>
                  </div>
                </div>
                {"\n        "}
                <p>{"API · Webhooks"}</p>
                <span className={"cread"} aria-hidden={"true"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2.4"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  >
                    <path d={"m1.5 12.5 4.5 4.5L15 8.5"} />
                    <path d={"m9.5 14.5 2.5 2.5L21.5 8"} opacity={".55"} />
                  </svg>
                </span>
                {"\n      "}
              </div>
              {"\n      "}
              <div
                className={
                  "case-card webping-card-enter motion-reduce:animate-none"
                }
              >
                {"\n        "}
                <q>
                  {
                    "Every admission enquiry gets an instant prospectus reply; parents' follow-ups sit assigned per counsellor."
                  }
                </q>
                {"\n        "}
                <div className={"crow"}>
                  <span className={"cavatar"} style={{ background: "#14b8a6" }}>
                    {"E"}
                  </span>
                  <div className={"cwh"}>
                    <b>{"Admissions desk"}</b>
                    <span>{"Education"}</span>
                  </div>
                </div>
                {"\n        "}
                <p>{"Automations · Team roles · Tags"}</p>
                <span className={"cread"} aria-hidden={"true"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2.4"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  >
                    <path d={"m1.5 12.5 4.5 4.5L15 8.5"} />
                    <path d={"m9.5 14.5 2.5 2.5L21.5 8"} opacity={".55"} />
                  </svg>
                </span>
                {"\n      "}
              </div>
              {"\n      "}
              <div
                className={
                  "case-card webping-card-enter motion-reduce:animate-none"
                }
              >
                {"\n        "}
                <q>
                  {
                    "Appointment reminders go out as approved templates; reschedules land back in the same thread in one tap."
                  }
                </q>
                {"\n        "}
                <div className={"crow"}>
                  <span className={"cavatar"} style={{ background: "#84cc16" }}>
                    {"H"}
                  </span>
                  <div className={"cwh"}>
                    <b>{"Appointment reminders"}</b>
                    <span>{"Healthcare"}</span>
                  </div>
                </div>
                {"\n        "}
                <p>{"Templates · Broadcasts · Inbox"}</p>
                <span className={"cread"} aria-hidden={"true"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2.4"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  >
                    <path d={"m1.5 12.5 4.5 4.5L15 8.5"} />
                    <path d={"m9.5 14.5 2.5 2.5L21.5 8"} opacity={".55"} />
                  </svg>
                </span>
                {"\n      "}
              </div>
              {"\n      "}
              <div
                className={
                  "case-card webping-card-enter motion-reduce:animate-none"
                }
              >
                {"\n        "}
                <q>
                  {
                    "Site-visit leads from click-to-WhatsApp ads flow straight onto the pipeline with source tags attached."
                  }
                </q>
                {"\n        "}
                <div className={"crow"}>
                  <span className={"cavatar"} style={{ background: "#f97316" }}>
                    {"R"}
                  </span>
                  <div className={"cwh"}>
                    <b>{"Site-visit leads"}</b>
                    <span>{"Real estate"}</span>
                  </div>
                </div>
                {"\n        "}
                <p>{"Pipelines · Ads · Contacts"}</p>
                <span className={"cread"} aria-hidden={"true"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2.4"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  >
                    <path d={"m1.5 12.5 4.5 4.5L15 8.5"} />
                    <path d={"m9.5 14.5 2.5 2.5L21.5 8"} opacity={".55"} />
                  </svg>
                </span>
                {"\n      "}
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
          {"\n"}
        </section>
        {"\n\n"}
        <section className={"section sec-cream"} id={"pricing"}>
          {"\n  "}
          <div className={"wrap"}>
            {"\n    "}
            <div className={"section-head"}>
              {"\n      "}
              <p className={"kicker"}>{"Pricing"}</p>
              {"\n      "}
              <h2>{"Simple plans. Clear value."}</h2>
              {"\n      "}
              <p className={"lead"}>
                {
                  "Start with Basic or unlock the full workflow with Professional. Compare every feature in detail on the pricing page."
                }
              </p>
              {"\n    "}
            </div>
            {"\n    "}
            <div className={"plan-grid"}>
              {"\n      "}
              <div className={"plan-mini"}>
                {"\n        "}
                <h3>{"Basic"}</h3>
                {"\n        "}
                <p className={"p-price"}>
                  {"$6"}
                  <small>{"/mo"}</small>
                </p>
                {"\n        "}
                <p className={"p-sub"}>
                  {
                    "For individuals and small teams getting started on WhatsApp."
                  }
                </p>
                {"\n        "}
                <ul>
                  {"\n          "}
                  <li>{"1 WhatsApp number, up to 3 members"}</li>
                  {"\n          "}
                  <li>{"Shared inbox & assignments"}</li>
                  {"\n          "}
                  <li>{"Contacts & basic fields"}</li>
                  {"\n          "}
                  <li>{"Broadcasts with templates"}</li>
                  {"\n          "}
                  <li>{"Basic automations & quick replies"}</li>
                  {"\n          "}
                  <li>{"Basic dashboard & email support"}</li>
                  {"\n        "}
                </ul>
                {"\n        "}
                <a className={"btn-ghost"} href={"/pricing"}>
                  {"View details"}
                </a>
                {"\n      "}
              </div>
              {"\n      "}
              <div className={"plan-mini pop"}>
                {"\n        "}
                <span className={"pop-tag"}>{"Most popular"}</span>
                {"\n        "}
                <h3>{"Professional"}</h3>
                {"\n        "}
                <p className={"p-price"}>
                  {"$10"}
                  <small>{"/mo"}</small>
                </p>
                {"\n        "}
                <p className={"p-sub"}>
                  {
                    "For growing teams that need automation, CRM, and integrations."
                  }
                </p>
                {"\n        "}
                <ul>
                  {"\n          "}
                  <li>{"Everything in Basic"}</li>
                  {"\n          "}
                  <li>{"Up to 10 members & advanced roles"}</li>
                  {"\n          "}
                  <li>{"Advanced broadcasts & scheduling"}</li>
                  {"\n          "}
                  <li>{"Advanced automations & AI reply drafts"}</li>
                  {"\n          "}
                  <li>{"Sales pipelines & advanced analytics"}</li>
                  {"\n          "}
                  <li>{"API, webhooks & priority support"}</li>
                  {"\n        "}
                </ul>
                {"\n        "}
                <a className={"btn"} href={"/pricing"}>
                  {"Compare all features"}
                </a>
                {"\n      "}
              </div>
              {"\n    "}
            </div>
            {"\n    "}
            <p className={"plan-note"} style={{ marginTop: "22px" }}>
              {
                "1-day full refund on new subscriptions. WhatsApp Cloud API conversation/template charges are billed separately by Meta to your own account."
              }
            </p>
            {"\n  "}
          </div>
          {"\n"}
        </section>
        {"\n\n"}
        <section className={"final-cta sec-deep"}>
          {"\n  "}
          <div className={"wrap"}>
            {"\n    "}
            <h2>
              {"Put your team on "}
              <span className={"hl hl-mint"}>{"one number"}</span>
              {"."}
            </h2>
            {"\n    "}
            <p className={"lead"} style={{ margin: "18px auto 0" }}>
              {
                "Connect the number, import your contacts, send the first\n    broadcast tonight. The free plan covers the inbox while you decide."
              }
            </p>
            {"\n    "}
            <div className={"btn-row"}>
              {"\n      "}
              <a className={"btn"} href={"/app"}>
                {"Start for free"}
              </a>
              {"\n      "}
              <a className={"btn-ghost"} href={"/pricing"}>
                {"See pricing"}
              </a>
              {"\n    "}
            </div>
            {"\n    "}
            <p className={"fine"}>
              {"Free plan · No credit card · 1-day full refund · "}
              <a href={"/pricing"} style={{ textDecoration: "underline" }}>
                {"Transparent pricing"}
              </a>
            </p>
            {"\n  "}
          </div>
          {"\n"}
        </section>
        {"\n\n"}
      </main>
      <section className={"wl-sec"} id={"contact-form"}>
        <div className={"wl-wrap"}>
          {"\n  "}
          <div className={"wl-copy"}>
            {"\n    "}
            <h2>{"Talk to our team about WebPing"}</h2>
            {"\n    "}
            <p>
              {
                "Share your details and we'll help you with setup, features, pricing, or the right WhatsApp workflow for your team. We'll get back to you by email or WhatsApp."
              }
            </p>
            {"\n    "}
            <div className={"wl-points"}>
              {"\n      "}
              <div className={"wl-point"}>
                <div className={"wl-point-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.8"}
                  >
                    <path d={"M22 12h-6l-2 3h-4l-2-3H2"} />
                    <path
                      d={
                        "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                      }
                    />
                  </svg>
                </div>
                <div>
                  <b>{"Shared inbox & support"}</b>
                  <span>
                    {
                      "Handle WhatsApp conversations with your team from one place."
                    }
                  </span>
                </div>
              </div>
              {"\n      "}
              <div className={"wl-point"}>
                <div className={"wl-point-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.8"}
                  >
                    <path
                      d={
                        "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
                      }
                    />
                    <path
                      d={
                        "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
                      }
                    />
                    <path d={"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"} />
                    <path d={"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"} />
                  </svg>
                </div>
                <div>
                  <b>{"Broadcasts & follow-ups"}</b>
                  <span>
                    {
                      "Send approved templates, manage replies, and keep context."
                    }
                  </span>
                </div>
              </div>
              {"\n      "}
              <div className={"wl-point"}>
                <div className={"wl-point-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.8"}
                  >
                    <path d={"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"} />
                  </svg>
                </div>
                <div>
                  <b>{"Official WhatsApp platform"}</b>
                  <span>
                    {
                      "Built for compliant, practical business messaging workflows."
                    }
                  </span>
                </div>
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
          {"\n  "}
          <div
            className={"wl-card webping-card-enter motion-reduce:animate-none"}
          >
            {"\n    "}
            <div className={"wl-card-head"}>
              <div className={"wl-head-ico"}>
                <svg
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"1.8"}
                >
                  <path d={"M4 4h16v16H4z"} />
                  <path d={"m22 6-10 7L2 6"} />
                </svg>
              </div>
              <div>
                <b>{"Send us a message"}</b>
                <span>{"We usually reply by email or WhatsApp."}</span>
              </div>
            </div>
            {"\n    "}
            <form className={"wl-form"} novalidate={""}>
              {"\n      "}
              <div className={"wl-grid"}>
                {"\n        "}
                <div className={"wl-field"}>
                  <label>
                    {"Full name "}
                    <span className={"req"}>{"*"}</span>
                  </label>
                  <div className={"wl-inp"}>
                    <span className={"fi"}>
                      <svg
                        viewBox={"0 0 24 24"}
                        fill={"none"}
                        stroke={"currentColor"}
                        strokeWidth={"1.8"}
                      >
                        <path d={"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"} />
                        <circle cx={"12"} cy={"7"} r={"4"} />
                      </svg>
                    </span>
                    <input
                      name={"full_name"}
                      type={"text"}
                      autoComplete={"name"}
                      required={true}
                      placeholder={"Your full name"}
                    />
                  </div>
                </div>
                {"\n        "}
                <div className={"wl-field"}>
                  <label>
                    {"Business name "}
                    <span className={"req"}>{"*"}</span>
                  </label>
                  <div className={"wl-inp"}>
                    <span className={"fi"}>
                      <svg
                        viewBox={"0 0 24 24"}
                        fill={"none"}
                        stroke={"currentColor"}
                        strokeWidth={"1.8"}
                      >
                        <path d={"M3 21h18"} />
                        <path d={"M5 21V7l8-4v18"} />
                        <path d={"M19 21V11l-6-4"} />
                        <path d={"M9 9v.01M9 12v.01M9 15v.01M9 18v.01"} />
                      </svg>
                    </span>
                    <input
                      name={"business_name"}
                      type={"text"}
                      autoComplete={"organization"}
                      required={true}
                      placeholder={"Your business name"}
                    />
                  </div>
                </div>
                {"\n      "}
              </div>
              {"\n      "}
              <div className={"wl-grid"}>
                {"\n        "}
                <div className={"wl-field"}>
                  <label>
                    {"Email "}
                    <span className={"req"}>{"*"}</span>
                  </label>
                  <div className={"wl-inp"}>
                    <span className={"fi"}>
                      <svg
                        viewBox={"0 0 24 24"}
                        fill={"none"}
                        stroke={"currentColor"}
                        strokeWidth={"1.8"}
                      >
                        <rect
                          x={"2"}
                          y={"4"}
                          width={"20"}
                          height={"16"}
                          rx={"2"}
                        />
                        <path d={"m22 7-10 6L2 7"} />
                      </svg>
                    </span>
                    <input
                      name={"email"}
                      type={"email"}
                      autoComplete={"email"}
                      required={true}
                      placeholder={"you@company.com"}
                    />
                  </div>
                </div>
                {"\n        "}
                <div className={"wl-field"}>
                  <label>
                    {"Phone "}
                    <span style={{ color: "#78716c", fontWeight: "500" }}>
                      {"(optional)"}
                    </span>
                  </label>
                  <div className={"wl-inp"}>
                    <span className={"fi"}>
                      <svg
                        viewBox={"0 0 24 24"}
                        fill={"none"}
                        stroke={"currentColor"}
                        strokeWidth={"1.8"}
                      >
                        <path
                          d={
                            "M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.6 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.17a2 2 0 0 1 2.11-.45c.85.28 1.73.48 2.63.6A2 2 0 0 1 22 16.92z"
                          }
                        />
                      </svg>
                    </span>
                    <input
                      name={"phone"}
                      type={"tel"}
                      autoComplete={"tel"}
                      placeholder={"+91 98765 43210"}
                    />
                  </div>
                </div>
                {"\n      "}
              </div>
              {"\n      "}
              <div className={"wl-field"}>
                <label>
                  {"Company website "}
                  <span style={{ color: "#78716c", fontWeight: "500" }}>
                    {"(optional)"}
                  </span>
                </label>
                <div className={"wl-inp"}>
                  <span className={"fi"}>
                    <svg
                      viewBox={"0 0 24 24"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"1.8"}
                    >
                      <circle cx={"12"} cy={"12"} r={"10"} />
                      <path d={"M2 12h20"} />
                      <path d={"M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"} />
                    </svg>
                  </span>
                  <input
                    name={"company_website"}
                    type={"url"}
                    autoComplete={"url"}
                    placeholder={"https://yourcompany.com"}
                  />
                </div>
              </div>
              {"\n      "}
              <div className={"wl-field"}>
                <label>
                  {"Message "}
                  <span className={"req"}>{"*"}</span>
                </label>
                <div className={"wl-inp ta"}>
                  <span className={"fi"}>
                    <svg
                      viewBox={"0 0 24 24"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"1.8"}
                    >
                      <path
                        d={
                          "M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"
                        }
                      />
                    </svg>
                  </span>
                  <textarea
                    name={"message"}
                    required={true}
                    placeholder={
                      "Tell us what you need: setup, features, pricing, number of agents, or your use case."
                    }
                  />
                </div>
                <div className={"wl-hint"}>
                  {
                    "We'll use this to contact you about WebPing. You can also reach "
                  }
                  <a href={"mailto:webping@webpeaker.com"}>
                    {"webping@webpeaker.com"}
                  </a>
                  {"."}
                </div>
              </div>
              {"\n      "}
              <div className={"wl-actions"}>
                <button className={"btn"} type={"submit"}>
                  {"Send message "}
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2"}
                    width={"16"}
                    height={"16"}
                    aria-hidden={"true"}
                  >
                    <path d={"M5 12h14m-7-7 7 7-7 7"} />
                  </svg>
                </button>
                <span className={"wl-msg"} aria-live={"polite"} />
              </div>
              {"\n    "}
            </form>
            {"\n  "}
          </div>
          {"\n"}
        </div>
      </section>
      <SiteFooter />
      <a
        className={"wa-float"}
        href={"https://wa.me/918696778246"}
        target={"_blank"}
        rel={"noopener"}
      >
        {"\n  "}
        <svg viewBox={"0 0 24 24"} fill={"currentColor"} aria-hidden={"true"}>
          <path
            d={
              "M12.04 2a9.9 9.9 0 0 0-8.24 15.36L2.2 21.8l4.56-1.17A9.9 9.9 0 1 0 12.04 2zm5.44 13.66c-.24.68-1.4 1.3-1.93 1.35-.5.05-1.13.07-1.76-.12a13.5 13.5 0 0 1-5.1-3.3 12.4 12.4 0 0 1-2.35-3.3c-.26-.5-.4-1.1-.4-1.7 0-.6.24-1.15.52-1.5.28-.36.62-.85.9-1.1.3-.3.6-.36.8-.36.2 0 .5.02.5.02h.02c.24 0 .4.16.5.4l.86 2.1c.08.18.05.42-.1.6l-.5.63c-.16.2-.18.4-.06.6a9.8 9.8 0 0 0 4.5 4.06c.24.1.44.08.6-.1l.74-.86c.18-.2.42-.24.62-.14l2.1 1c.24.1.4.28.4.5 0 .12-.02.9-.12 1.1z"
            }
          />
        </svg>
        {"\n  Chat with us\n"}
      </a>
      <script>
        {
          "\nvar tabs = document.querySelectorAll('.jt-tab');\ntabs.forEach(function (t) {\n  t.addEventListener('click', function () {\n    tabs.forEach(function (x) { x.classList.remove('active'); });\n    document.querySelectorAll('.jt-pane').forEach(function (p) { p.classList.remove('active'); });\n    t.classList.add('active');\n    var pane = document.getElementById('pane-' + t.getAttribute('data-pane'));\n    if (pane) { pane.classList.add('active'); }\n  });\n});\n"
        }
      </script>
      <script>
        {
          "\n(function(){\n  function initTabs(){\n    var bar = document.querySelector('.jt-bar');\n    if(!bar) return;\n    var tabs = bar.querySelectorAll('.jt-tab[data-pane]');\n    tabs.forEach(function(tab){\n      if(tab.__jt) return; tab.__jt=1;\n      tab.addEventListener('click', function(e){\n        e.preventDefault();\n        var paneId = 'pane-' + tab.getAttribute('data-pane');\n        tabs.forEach(function(t){ t.classList.remove('active'); });\n        tab.classList.add('active');\n        document.querySelectorAll('.jt-pane').forEach(function(p){ p.classList.remove('active'); });\n        var pane = document.getElementById(paneId);\n        if(pane) pane.classList.add('active');\n      });\n    });\n  }\n  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', initTabs); else initTabs();\n  window.addEventListener('load', initTabs);\n})();\n"
        }
      </script>
      <script defer={true} src={"/assets/site.js?v=80"} />
      <script defer={true} src={"/assets/webping-leads.js?v=3"} />
    </>
  );
}
