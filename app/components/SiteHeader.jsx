export default function SiteHeader() {
  return (
    <header className={"site-head"}>
      {"\n  "}
      <div className={"announce"}>
        <div className={"wrap"}>
          {"\n    "}
          <span className={"dot"} />
          {"\n    "}
          <p>
            {
              "Free plan available — and every new subscription carries a 1-day full refund, no questions asked."
            }
          </p>
          {"\n    \n  "}
        </div>
      </div>
      {"\n  "}
      <div className={"wrap bar"}>
        {"\n    "}
        <a className={"brand"} href={"/"}>
          <img src={"/favicon.svg"} alt={""} />
          {"WebPing"}
        </a>
        {"\n    "}
        <nav className={"nav"}>
          <a href={"/"}>{"Home"}</a>
          <div className={"nav-item"}>
            <a href={"/features"}>{"Features"}</a>
            <button
              className={"nav-caret"}
              aria-haspopup={"true"}
              aria-expanded={"false"}
              aria-label={"Open features menu"}
            >
              <svg
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"2.4"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                aria-hidden={"true"}
              >
                <path d={"M6 9l6 6 6-6"} />
              </svg>
            </button>
            <div className={"nav-menu"}>
              <a href={"/features/shared-inbox"}>
                <span className={"nm-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.9"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <path d={"M22 12h-6l-2 3h-4l-2-3H2"} />
                    <path
                      d={
                        "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                      }
                    />
                  </svg>
                </span>
                <span className={"nm-text"}>
                  <b>{"Shared inbox"}</b>
                  <span>{"The whole team on one number"}</span>
                </span>
              </a>
              <a href={"/features/broadcasts"}>
                <span className={"nm-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.9"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <path d={"m3 11 18-5v12L3 14v-3z"} />
                    <path d={"M11.6 16.8a3 3 0 1 1-5.8-1.6"} />
                  </svg>
                </span>
                <span className={"nm-text"}>
                  <b>{"Broadcasts"}</b>
                  <span>{"Approved templates, paced sending"}</span>
                </span>
              </a>
              <a href={"/features/automations"}>
                <span className={"nm-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.9"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <path d={"M13 2 3 14h9l-1 8 10-12h-9l1-8z"} />
                  </svg>
                </span>
                <span className={"nm-text"}>
                  <b>{"Automations"}</b>
                  <span>{"Rules for the routine replies"}</span>
                </span>
              </a>
              <a href={"/features/ai-assistant"}>
                <span className={"nm-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.9"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <path
                      d={
                        "m12 3 1.9 5.2L19 10l-5.1 1.8L12 17l-1.9-5.2L5 10l5.1-1.8L12 3z"
                      }
                    />
                    <path
                      d={
                        "M19 15l.7 1.8L21.5 17.5 19.7 18.2 19 20l-.7-1.8L16.5 17.5l1.8-.7L19 15z"
                      }
                    />
                  </svg>
                </span>
                <span className={"nm-text"}>
                  <b>{"Reply drafts"}</b>
                  <span>{"Drafts grounded in your docs"}</span>
                </span>
              </a>
              <a href={"/features/sales-pipelines"}>
                <span className={"nm-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.9"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <path d={"m3 17 6-6 4 4 8-8"} />
                    <path d={"M14 7h7v7"} />
                  </svg>
                </span>
                <span className={"nm-text"}>
                  <b>{"Sales pipelines"}</b>
                  <span>{"Deals where the chats happen"}</span>
                </span>
              </a>
              <a href={"/features/contacts"}>
                <span className={"nm-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.9"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <path d={"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"} />
                    <circle cx={"9"} cy={"7"} r={"4"} />
                    <path d={"M22 21v-2a4 4 0 0 0-3-3.87"} />
                    <path d={"M16 3.13a4 4 0 0 1 0 7.75"} />
                  </svg>
                </span>
                <span className={"nm-text"}>
                  <b>{"Contacts"}</b>
                  <span>{"Fields that fill from the chat"}</span>
                </span>
              </a>
              <a href={"/features/dashboard"}>
                <span className={"nm-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.9"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <rect x={"3"} y={"3"} width={"7"} height={"9"} rx={"1"} />
                    <rect x={"14"} y={"3"} width={"7"} height={"5"} rx={"1"} />
                    <rect x={"14"} y={"12"} width={"7"} height={"9"} rx={"1"} />
                    <rect x={"3"} y={"16"} width={"7"} height={"5"} rx={"1"} />
                  </svg>
                </span>
                <span className={"nm-text"}>
                  <b>{"Dashboard"}</b>
                  <span>{"Live numbers, response times"}</span>
                </span>
              </a>
              <a href={"/features/team-roles"}>
                <span className={"nm-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.9"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <path d={"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"} />
                  </svg>
                </span>
                <span className={"nm-text"}>
                  <b>{"Team roles"}</b>
                  <span>{"Admins, agents, audit log"}</span>
                </span>
              </a>
              <a href={"/features/api"}>
                <span className={"nm-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.9"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <path d={"m16 18 6-6-6-6"} />
                    <path d={"m8 6-6 6 6 6"} />
                  </svg>
                </span>
                <span className={"nm-text"}>
                  <b>{"API & webhooks"}</b>
                  <span>{"Scoped keys over REST"}</span>
                </span>
              </a>
              <a href={"/features/security"}>
                <span className={"nm-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.9"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <rect
                      x={"3"}
                      y={"11"}
                      width={"18"}
                      height={"11"}
                      rx={"2"}
                    />
                    <path d={"M7 11V7a5 5 0 0 1 10 0v4"} />
                  </svg>
                </span>
                <span className={"nm-text"}>
                  <b>{"Security"}</b>
                  <span>{"Encryption on every channel"}</span>
                </span>
              </a>
            </div>
          </div>
          {"\n      "}
          <div className={"nav-item"}>
            <a href={"/features/api"}>{"Integrations"}</a>
            <button
              className={"nav-caret"}
              aria-haspopup={"true"}
              aria-expanded={"false"}
              aria-label={"Open integrations menu"}
            >
              <svg
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"2.4"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                aria-hidden={"true"}
              >
                <path d={"M6 9l6 6 6-6"} />
              </svg>
            </button>
            <div className={"nav-menu ni"}>
              <a href={"/features/api"}>
                <span
                  className={"nm-ico"}
                  style={{
                    background: "#00a1e01f",
                    color: "#00a1e0",
                    border: "1px solid #00a1e033",
                    fontWeight: "800",
                    fontSize: ".74rem",
                  }}
                >
                  {"Sf"}
                </span>
                <span className={"nm-text"}>
                  <b>{"Salesforce"}</b>
                  <span>{"CRM & lead sync"}</span>
                </span>
              </a>
              <a href={"/features/api"}>
                <span
                  className={"nm-ico"}
                  style={{
                    background: "#ff7a591f",
                    color: "#ff7a59",
                    border: "1px solid #ff7a5933",
                    fontWeight: "800",
                    fontSize: ".74rem",
                  }}
                >
                  {"Hu"}
                </span>
                <span className={"nm-text"}>
                  <b>{"HubSpot"}</b>
                  <span>{"Contacts & pipelines"}</span>
                </span>
              </a>
              <a href={"/features/api"}>
                <span
                  className={"nm-ico"}
                  style={{
                    background: "#ff4f001f",
                    color: "#ff4f00",
                    border: "1px solid #ff4f0033",
                    fontWeight: "800",
                    fontSize: ".74rem",
                  }}
                >
                  {"Za"}
                </span>
                <span className={"nm-text"}>
                  <b>{"Zapier"}</b>
                  <span>{"5,000+ app automations"}</span>
                </span>
              </a>
              <a href={"/features/api"}>
                <span
                  className={"nm-ico"}
                  style={{
                    background: "#e425271f",
                    color: "#e42527",
                    border: "1px solid #e4252733",
                    fontWeight: "800",
                    fontSize: ".74rem",
                  }}
                >
                  {"Zo"}
                </span>
                <span className={"nm-text"}>
                  <b>{"Zoho CRM"}</b>
                  <span>{"Deals & leads sync"}</span>
                </span>
              </a>
              <a href={"/features/api"}>
                <span
                  className={"nm-ico"}
                  style={{
                    background: "#7a9c3e1f",
                    color: "#7a9c3e",
                    border: "1px solid #7a9c3e33",
                    fontWeight: "800",
                    fontSize: ".74rem",
                  }}
                >
                  {"Sh"}
                </span>
                <span className={"nm-text"}>
                  <b>{"Shopify"}</b>
                  <span>{"Order & COD updates"}</span>
                </span>
              </a>
              <a href={"/features/api"}>
                <span
                  className={"nm-ico"}
                  style={{
                    background: "#7f54b31f",
                    color: "#7f54b3",
                    border: "1px solid #7f54b333",
                    fontWeight: "800",
                    fontSize: ".74rem",
                  }}
                >
                  {"W"}
                </span>
                <span className={"nm-text"}>
                  <b>{"WooCommerce"}</b>
                  <span>{"Store notifications"}</span>
                </span>
              </a>
              <a href={"/features/api"}>
                <span
                  className={"nm-ico"}
                  style={{
                    background: "#2f9bff1f",
                    color: "#2f9bff",
                    border: "1px solid #2f9bff33",
                    fontWeight: "800",
                    fontSize: ".74rem",
                  }}
                >
                  {"Pa"}
                </span>
                <span className={"nm-text"}>
                  <b>{"Pabbly Connect"}</b>
                  <span>{"Workflow automations"}</span>
                </span>
              </a>
              <a href={"/features/api"}>
                <span
                  className={"nm-ico"}
                  style={{
                    background: "#8a2be21f",
                    color: "#8a2be2",
                    border: "1px solid #8a2be233",
                    fontWeight: "800",
                    fontSize: ".74rem",
                  }}
                >
                  {"Mk"}
                </span>
                <span className={"nm-text"}>
                  <b>{"Make (Integromat)"}</b>
                  <span>{"Visual scenarios"}</span>
                </span>
              </a>
              <a href={"/features/api"}>
                <span
                  className={"nm-ico"}
                  style={{
                    background: "#0e9f571f",
                    color: "#0e9f57",
                    border: "1px solid #0e9f5733",
                    fontWeight: "800",
                    fontSize: ".74rem",
                  }}
                >
                  {"CB"}
                </span>
                <span className={"nm-text"}>
                  <b>{"Chat Backup"}</b>
                  <span>{"Conversation export"}</span>
                </span>
              </a>
              <a href={"/features/api"}>
                <span
                  className={"nm-ico"}
                  style={{
                    background: "#0f9d581f",
                    color: "#0f9d58",
                    border: "1px solid #0f9d5833",
                    fontWeight: "800",
                    fontSize: ".74rem",
                  }}
                >
                  {"GS"}
                </span>
                <span className={"nm-text"}>
                  <b>{"Google Sheet sender"}</b>
                  <span>{"Broadcast from sheets"}</span>
                </span>
              </a>
              <a href={"/features/api"}>
                <span
                  className={"nm-ico"}
                  style={{
                    background: "#3d3d3d1f",
                    color: "#3d3d3d",
                    border: "1px solid #3d3d3d33",
                    fontWeight: "800",
                    fontSize: ".74rem",
                  }}
                >
                  {"Kl"}
                </span>
                <span className={"nm-text"}>
                  <b>{"Klaviyo"}</b>
                  <span>{"E-commerce campaigns"}</span>
                </span>
              </a>
              <a href={"/features/api"}>
                <span
                  className={"nm-ico"}
                  style={{
                    background: "#1a73e81f",
                    color: "#1a73e8",
                    border: "1px solid #1a73e833",
                    fontWeight: "800",
                    fontSize: ".74rem",
                  }}
                >
                  {"ZF"}
                </span>
                <span className={"nm-text"}>
                  <b>{"Zoho Flow"}</b>
                  <span>{"Advanced flows"}</span>
                </span>
              </a>
            </div>
          </div>
          {"\n      "}
          <div className={"nav-item"}>
            <a href={"/industries"}>{"Industries"}</a>
            <button
              className={"nav-caret"}
              aria-haspopup={"true"}
              aria-expanded={"false"}
              aria-label={"Open industries menu"}
            >
              <svg
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"2.4"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                aria-hidden={"true"}
              >
                <path d={"M6 9l6 6 6-6"} />
              </svg>
            </button>
            <div className={"nav-menu"}>
              <a href={"/industries/education/"}>
                <span className={"nm-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.9"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <path
                      d={
                        "M21.4 7.2 12 3 2.6 7.2 12 11.4zM6 10.2v4.6c0 1.4 2.9 2.9 6 2.9s6-1.5 6-2.9v-4.6"
                      }
                    />
                    <path d={"M22 7.2v5.2"} />
                  </svg>
                </span>
                <span className={"nm-text"}>
                  <b>{"Education"}</b>
                  <span>{"Admissions, fees & parent updates"}</span>
                </span>
              </a>
              <a href={"/industries/it-saas/"}>
                <span className={"nm-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.9"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <path d={"m16 18 6-6-6-6"} />
                    <path d={"m8 6-6 6 6 6"} />
                  </svg>
                </span>
                <span className={"nm-text"}>
                  <b>{"IT & SaaS"}</b>
                  <span>{"Onboarding, trials & product updates"}</span>
                </span>
              </a>
              <a href={"/industries/healthcare/"}>
                <span className={"nm-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.9"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <path
                      d={
                        "M19.5 13.6c1.2-1.2 2.6-2.9 2.6-4.9a4.1 4.1 0 0 0-9.7-2.1H12a4.1 4.1 0 0 0-9.7 2.1c0 2 1.4 3.7 2.6 4.9L12 20.6z"
                      }
                    />
                    <path d={"M5.5 12h3l1.5-2.6 2.6 5.2 1.5-2.6h4.4"} />
                  </svg>
                </span>
                <span className={"nm-text"}>
                  <b>{"Healthcare"}</b>
                  <span>{"Appointments, reports & camps"}</span>
                </span>
              </a>
              <a href={"/industries/real-estate/"}>
                <span className={"nm-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.9"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <path d={"m3 10.5 9-7 9 7"} />
                    <path d={"M5 9.5V21h14V9.5"} />
                    <path d={"M10 21v-6h4v6"} />
                  </svg>
                </span>
                <span className={"nm-text"}>
                  <b>{"Real estate"}</b>
                  <span>{"Site visits, launches & brokers"}</span>
                </span>
              </a>
              <a href={"/industries/retail-ecommerce/"}>
                <span className={"nm-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.9"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <path
                      d={"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}
                    />
                    <path d={"M3 6h18"} />
                    <path d={"M16 10a4 4 0 0 1-8 0"} />
                  </svg>
                </span>
                <span className={"nm-text"}>
                  <b>{"Retail & e-commerce"}</b>
                  <span>{"COD, orders & festive sales"}</span>
                </span>
              </a>
              <a href={"/industries/travel-hospitality/"}>
                <span className={"nm-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.9"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <path d={"M22 2 11 13"} />
                    <path d={"M22 2 15 22l-4-9-9-4z"} />
                  </svg>
                </span>
                <span className={"nm-text"}>
                  <b>{"Travel & hospitality"}</b>
                  <span>{"Bookings, check-ins & offers"}</span>
                </span>
              </a>
            </div>
          </div>
          {"\n      "}
          <a href={"/pricing"}>{"Pricing"}</a>
          <div className={"nav-item"}>
            <a href={"#"}>{"Resources"}</a>
            <button
              className={"nav-caret"}
              aria-haspopup={"true"}
              aria-expanded={"false"}
              aria-label={"Open resources menu"}
            >
              <svg
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"2.4"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                aria-hidden={"true"}
              >
                <path d={"M6 9l6 6 6-6"} />
              </svg>
            </button>
            <div className={"nav-menu"}>
              <a href={"/solutions"}>
                <span className={"nm-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.9"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <rect x={"2"} y={"7"} width={"20"} height={"14"} rx={"2"} />
                    <path d={"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"} />
                  </svg>
                </span>
                <span className={"nm-text"}>
                  <b>{"Solutions"}</b>
                  <span>{"Playbooks by business goal"}</span>
                </span>
              </a>
              <a href={"/free-tools"}>
                <span className={"nm-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.9"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <path
                      d={
                        "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                      }
                    />
                  </svg>
                </span>
                <span className={"nm-text"}>
                  <b>{"Free tools"}</b>
                  <span>{"WhatsApp utilities, no cost"}</span>
                </span>
              </a>
              <a href={"/docs"}>
                <span className={"nm-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.9"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <path d={"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"} />
                    <path
                      d={
                        "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                      }
                    />
                  </svg>
                </span>
                <span className={"nm-text"}>
                  <b>{"Docs"}</b>
                  <span>{"Developer & setup guides"}</span>
                </span>
              </a>
              <a href={"/blog"}>
                <span className={"nm-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.9"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <path d={"M12 20h9"} />
                    <path d={"M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"} />
                  </svg>
                </span>
                <span className={"nm-text"}>
                  <b>{"Blog"}</b>
                  <span>{"Guides, updates & WhatsApp tips"}</span>
                </span>
              </a>
              <a href={"/about"}>
                <span className={"nm-ico"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"1.9"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    aria-hidden={"true"}
                  >
                    <circle cx={"12"} cy={"12"} r={"10"} />
                    <path d={"M12 16v-4"} />
                    <path d={"M12 8h.01"} />
                  </svg>
                </span>
                <span className={"nm-text"}>
                  <b>{"About"}</b>
                  <span>{"Company, contact & story"}</span>
                </span>
              </a>
            </div>
          </div>
        </nav>
        {"\n    "}
        <div className={"head-cta"}>
          {"\n      "}
          <a className={"btn btn-sm"} href={"/app"}>
            {"Log in / Sign up"}
          </a>
          {"\n    "}
        </div>
        {"\n    "}
        <button
          className={"menu-btn"}
          aria-label={"Menu"}
          aria-haspopup={"true"}
          aria-expanded={"false"}
        >
          <svg
            className={"icon-bars"}
            viewBox={"0 0 24 24"}
            fill={"none"}
            stroke={"currentColor"}
            strokeWidth={"2.2"}
            strokeLinecap={"round"}
            aria-hidden={"true"}
          >
            <path d={"M4 7h16M4 12h16M4 17h16"} />
          </svg>
          <svg
            className={"icon-x"}
            viewBox={"0 0 24 24"}
            fill={"none"}
            stroke={"currentColor"}
            strokeWidth={"2.2"}
            strokeLinecap={"round"}
            aria-hidden={"true"}
          >
            <path d={"M6 6l12 12M18 6L6 18"} />
          </svg>
        </button>
        {"\n  "}
      </div>
      {"\n  "}
      <div className={"mnav"}>
        <a className={"mnav-link"} href={"/"}>
          {"Home"}
        </a>
        <div className={"mnav-group"}>
          <button
            className={"mnav-toggle"}
            type={"button"}
            aria-expanded={"false"}
          >
            <span>{"Features"}</span>
            <svg
              className={"chev"}
              viewBox={"0 0 24 24"}
              fill={"none"}
              stroke={"currentColor"}
              strokeWidth={"2.4"}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              width={"15"}
              height={"15"}
              aria-hidden={"true"}
            >
              <path d={"M6 9l6 6 6-6"} />
            </svg>
          </button>
          <div className={"mnav-sub"}>
            <a href={"/features/shared-inbox"}>
              <b>{"Shared inbox"}</b>
              <span>{"The whole team on one number"}</span>
            </a>
            <a href={"/features/broadcasts"}>
              <b>{"Broadcasts"}</b>
              <span>{"Approved templates, paced sending"}</span>
            </a>
            <a href={"/features/automations"}>
              <b>{"Automations"}</b>
              <span>{"Rules for the routine replies"}</span>
            </a>
            <a href={"/features/ai-assistant"}>
              <b>{"Reply drafts"}</b>
              <span>{"Drafts grounded in your docs"}</span>
            </a>
            <a href={"/features/sales-pipelines"}>
              <b>{"Sales pipelines"}</b>
              <span>{"Deals where the chats happen"}</span>
            </a>
            <a href={"/features/contacts"}>
              <b>{"Contacts"}</b>
              <span>{"Fields that fill from the chat"}</span>
            </a>
            <a href={"/features/dashboard"}>
              <b>{"Dashboard"}</b>
              <span>{"Live numbers, response times"}</span>
            </a>
            <a href={"/features/team-roles"}>
              <b>{"Team roles"}</b>
              <span>{"Admins, agents, audit log"}</span>
            </a>
            <a href={"/features/api"}>
              <b>{"API & webhooks"}</b>
              <span>{"Scoped keys over REST"}</span>
            </a>
            <a href={"/features/security"}>
              <b>{"Security"}</b>
              <span>{"Encryption on every channel"}</span>
            </a>
          </div>
        </div>
        <div className={"mnav-group"}>
          <button
            className={"mnav-toggle"}
            type={"button"}
            aria-expanded={"false"}
          >
            <span>{"Integrations"}</span>
            <svg
              className={"chev"}
              viewBox={"0 0 24 24"}
              fill={"none"}
              stroke={"currentColor"}
              strokeWidth={"2.4"}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              width={"15"}
              height={"15"}
              aria-hidden={"true"}
            >
              <path d={"M6 9l6 6 6-6"} />
            </svg>
          </button>
          <div className={"mnav-sub"}>
            <a href={"/features/api"}>
              <b>{"Salesforce"}</b>
              <span>{"CRM & lead sync"}</span>
            </a>
            <a href={"/features/api"}>
              <b>{"HubSpot"}</b>
              <span>{"Contacts & pipelines"}</span>
            </a>
            <a href={"/features/api"}>
              <b>{"Zapier"}</b>
              <span>{"5,000+ app automations"}</span>
            </a>
            <a href={"/features/api"}>
              <b>{"Zoho CRM"}</b>
              <span>{"Deals & leads sync"}</span>
            </a>
            <a href={"/features/api"}>
              <b>{"Shopify"}</b>
              <span>{"Order & COD updates"}</span>
            </a>
            <a href={"/features/api"}>
              <b>{"WooCommerce"}</b>
              <span>{"Store notifications"}</span>
            </a>
            <a href={"/features/api"}>
              <b>{"Pabbly Connect"}</b>
              <span>{"Workflow automations"}</span>
            </a>
            <a href={"/features/api"}>
              <b>{"Make (Integromat)"}</b>
              <span>{"Visual scenarios"}</span>
            </a>
            <a href={"/features/api"}>
              <b>{"Chat Backup"}</b>
              <span>{"Conversation export"}</span>
            </a>
            <a href={"/features/api"}>
              <b>{"Google Sheet sender"}</b>
              <span>{"Broadcast from sheets"}</span>
            </a>
            <a href={"/features/api"}>
              <b>{"Klaviyo"}</b>
              <span>{"E-commerce campaigns"}</span>
            </a>
            <a href={"/features/api"}>
              <b>{"Zoho Flow"}</b>
              <span>{"Advanced flows"}</span>
            </a>
          </div>
        </div>
        <div className={"mnav-group"}>
          <button
            className={"mnav-toggle"}
            type={"button"}
            aria-expanded={"false"}
          >
            <span>{"Industries"}</span>
            <svg
              className={"chev"}
              viewBox={"0 0 24 24"}
              fill={"none"}
              stroke={"currentColor"}
              strokeWidth={"2.4"}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              width={"15"}
              height={"15"}
              aria-hidden={"true"}
            >
              <path d={"M6 9l6 6 6-6"} />
            </svg>
          </button>
          <div className={"mnav-sub"}>
            <a href={"/industries/education/"}>
              <b>{"Education"}</b>
              <span>{"Admissions, fees & parent updates"}</span>
            </a>
            <a href={"/industries/it-saas/"}>
              <b>{"IT & SaaS"}</b>
              <span>{"Onboarding, trials & product updates"}</span>
            </a>
            <a href={"/industries/healthcare/"}>
              <b>{"Healthcare"}</b>
              <span>{"Appointments, reports & camps"}</span>
            </a>
            <a href={"/industries/real-estate/"}>
              <b>{"Real estate"}</b>
              <span>{"Site visits, launches & brokers"}</span>
            </a>
            <a href={"/industries/retail-ecommerce/"}>
              <b>{"Retail & e-commerce"}</b>
              <span>{"COD, orders & festive sales"}</span>
            </a>
            <a href={"/industries/travel-hospitality/"}>
              <b>{"Travel & hospitality"}</b>
              <span>{"Bookings, check-ins & offers"}</span>
            </a>
          </div>
        </div>
        <a className={"mnav-link"} href={"/pricing"}>
          {"Pricing"}
        </a>
        <a className={"mnav-link"} href={"/blog"}>
          {"Blog"}
        </a>
        <div className={"mnav-group"}>
          <button
            className={"mnav-toggle"}
            type={"button"}
            aria-expanded={"false"}
          >
            <span>{"Resources"}</span>
            <svg
              className={"chev"}
              viewBox={"0 0 24 24"}
              fill={"none"}
              stroke={"currentColor"}
              strokeWidth={"2.4"}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              width={"15"}
              height={"15"}
              aria-hidden={"true"}
            >
              <path d={"M6 9l6 6 6-6"} />
            </svg>
          </button>
          <div className={"mnav-sub"}>
            <a href={"/solutions"}>
              <b>{"Solutions"}</b>
              <span>{"Playbooks by business goal"}</span>
            </a>
            <a href={"/free-tools"}>
              <b>{"Free tools"}</b>
              <span>{"WhatsApp utilities, no cost"}</span>
            </a>
            <a href={"/docs"}>
              <b>{"Docs"}</b>
              <span>{"Developer & setup guides"}</span>
            </a>
            <a href={"/blog"}>
              <b>{"Blog"}</b>
              <span>{"Guides, updates & WhatsApp tips"}</span>
            </a>
            <a href={"/about"}>
              <b>{"About"}</b>
              <span>{"Company, contact & story"}</span>
            </a>
          </div>
        </div>
        <div className={"mnav-cta"}>
          <a className={"btn"} href={"/app"}>
            {"Log in / Sign up"}
          </a>
        </div>
      </div>
      {"\n"}
    </header>
  );
}
