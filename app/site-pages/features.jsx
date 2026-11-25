import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export default function SitePage() {
  return (
    <>
      <meta charset={"utf-8"} />
      <title>{"Features | WebPing"}</title>
      <meta
        name={"description"}
        content={
          "Explore WebPing features for WhatsApp teams: shared inbox, broadcasts, automations, reply drafts, pipelines, contacts, and more."
        }
      />
      <link rel={"canonical"} href={"https://webping.webpeaker.com/features"} />
      <link rel={"icon"} type={"image/svg+xml"} href={"/favicon.svg"} />
      <SiteHeader />
      <section className={"fp-hero"}>
        <div className={"wrap fp-hero-grid"}>
          <div className={"fp-hero-copy"}>
            <p className={"fp-kicker"}>{"Product"}</p>
            <h1>{"WebPing features for modern WhatsApp teams"}</h1>
            <p className={"fp-lead"}>
              {
                "Everything you need to manage conversations, campaigns, automation, and customer context in one place."
              }
            </p>
            <div className={"fp-cta-row"}>
              <a className={"btn"} href={"/app"}>
                {"Start with WebPing"}
              </a>
              <a className={"btn-ghost"} href={"/pricing"}>
                {"See pricing"}
              </a>
            </div>
          </div>
          <div className={"fp-preview"}>
            <div className={"fp-prev-top"}>
              <div className={"fp-dots"}>
                <i />
                <i />
                <i />
              </div>
              <b>{"All features"}</b>
              <span className={"fp-badge"}>{"WebPing"}</span>
            </div>
            <div className={"fp-prev-body"}>
              <ul className={"fp-prev-list"}>
                <li>
                  <span />
                  <div>
                    <b>{"Conversations"}</b>
                    <small>{"Inbox, context, ownership"}</small>
                  </div>
                </li>
                <li>
                  <span />
                  <div>
                    <b>{"Growth"}</b>
                    <small>{"Broadcasts & pipelines"}</small>
                  </div>
                </li>
                <li>
                  <span />
                  <div>
                    <b>{"Automation"}</b>
                    <small>{"Rules & reply drafts"}</small>
                  </div>
                </li>
                <li>
                  <span />
                  <div>
                    <b>{"Control"}</b>
                    <small>{"Roles, API, security"}</small>
                  </div>
                </li>
              </ul>
              <div className={"fp-prev-side"}>
                <div className={"fp-stat"}>
                  <b>{"10"}</b>
                  <span>{"Deep-dive feature pages"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"fp-sec"}>
        <div className={"wrap"}>
          <p className={"fp-label"}>{"Explore"}</p>
          <h2>{"Feature deep dives"}</h2>
          <div className={"fp-grid"}>
            <a
              className={
                "fp-card link webping-card-enter motion-reduce:animate-none"
              }
              href={"/features/shared-inbox"}
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
              <h3>{"Shared inbox"}</h3>
              <p>
                {
                  "A complete team inbox for WhatsApp conversations, with ownership, context, notes, and compliant replies."
                }
              </p>
              <span className={"fp-more"}>{"Explore →"}</span>
            </a>
            <a
              className={
                "fp-card link webping-card-enter motion-reduce:animate-none"
              }
              href={"/features/broadcasts"}
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
              <h3>{"Broadcasts"}</h3>
              <p>
                {
                  "A compliant WhatsApp campaign workflow for sending approved template messages to selected audiences."
                }
              </p>
              <span className={"fp-more"}>{"Explore →"}</span>
            </a>
            <a
              className={
                "fp-card link webping-card-enter motion-reduce:animate-none"
              }
              href={"/features/automations"}
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
                  <path d={"M22 21v-2a4 4 0 0 0-3-3.87"} />
                  <path d={"M16 3.13a4 4 0 0 1 0 7.75"} />
                </svg>
              </div>
              <h3>{"Automations"}</h3>
              <p>
                {
                  "Rule-based WhatsApp workflows for routine replies, routing, tagging, notifications, and follow-ups."
                }
              </p>
              <span className={"fp-more"}>{"Explore →"}</span>
            </a>
            <a
              className={
                "fp-card link webping-card-enter motion-reduce:animate-none"
              }
              href={"/features/ai-assistant"}
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
              <h3>{"Reply drafts"}</h3>
              <p>
                {
                  "AI-assisted draft replies grounded in your knowledge, with human review before sending."
                }
              </p>
              <span className={"fp-more"}>{"Explore →"}</span>
            </a>
            <a
              className={
                "fp-card link webping-card-enter motion-reduce:animate-none"
              }
              href={"/features/sales-pipelines"}
            >
              <div className={"fp-ico"}>
                <svg
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"1.9"}
                >
                  <path d={"M22 12h-4l-3 9L9 3l-3 9H2"} />
                </svg>
              </div>
              <h3>{"Sales pipelines"}</h3>
              <p>
                {
                  "A visual deal workflow for WhatsApp leads, follow-ups, owners, stages, and outcomes."
                }
              </p>
              <span className={"fp-more"}>{"Explore →"}</span>
            </a>
            <a
              className={
                "fp-card link webping-card-enter motion-reduce:animate-none"
              }
              href={"/features/contacts"}
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
              <h3>{"Contacts"}</h3>
              <p>
                {
                  "A unified customer/contact record with tags, fields, history, and segmentation for WhatsApp workflows."
                }
              </p>
              <span className={"fp-more"}>{"Explore →"}</span>
            </a>
            <a
              className={
                "fp-card link webping-card-enter motion-reduce:animate-none"
              }
              href={"/features/dashboard"}
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
              <h3>{"Dashboard"}</h3>
              <p>
                {
                  "An operational overview of WhatsApp activity, workload, response patterns, and business actions."
                }
              </p>
              <span className={"fp-more"}>{"Explore →"}</span>
            </a>
            <a
              className={
                "fp-card link webping-card-enter motion-reduce:animate-none"
              }
              href={"/features/team-roles"}
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
              <h3>{"Team roles & permissions"}</h3>
              <p>
                {
                  "Role-based access control for safe collaboration across inbox, campaigns, settings, and integrations."
                }
              </p>
              <span className={"fp-more"}>{"Explore →"}</span>
            </a>
            <a
              className={
                "fp-card link webping-card-enter motion-reduce:animate-none"
              }
              href={"/features/api"}
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
                  <path d={"M22 21v-2a4 4 0 0 0-3-3.87"} />
                  <path d={"M16 3.13a4 4 0 0 1 0 7.75"} />
                </svg>
              </div>
              <h3>{"API & webhooks"}</h3>
              <p>
                {
                  "Programmatic access and event notifications for connecting WebPing to your systems and workflows."
                }
              </p>
              <span className={"fp-more"}>{"Explore →"}</span>
            </a>
            <a
              className={
                "fp-card link webping-card-enter motion-reduce:animate-none"
              }
              href={"/features/security"}
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
              <h3>{"Security"}</h3>
              <p>
                {
                  "Practical security controls for WhatsApp operations: access, configuration, integrations, and team habits."
                }
              </p>
              <span className={"fp-more"}>{"Explore →"}</span>
            </a>
          </div>
        </div>
      </section>
      <section className={"fp-final"}>
        <div className={"wrap fp-final-inner"}>
          <div>
            <p className={"fp-label on-dark"}>{"Get started"}</p>
            <h2>{"Build your WhatsApp workflow with WebPing"}</h2>
            <p>
              {"Pick the features you need and launch with a team-ready setup."}
            </p>
          </div>
          <div className={"fp-cta-row"}>
            <a className={"btn"} href={"/app"}>
              {"Try WebPing"}
            </a>
            <a className={"btn-ghost light"} href={"/contact"}>
              {"Talk to us"}
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
      <script defer={true} src={"/assets/site.js?v=91"} />
    </>
  );
}
