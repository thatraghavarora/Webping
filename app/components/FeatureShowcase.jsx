import Image from "next/image";
import Link from "next/link";
import AnimatedContent from "./AnimatedContent";
import inbox from "../../docs/screenshots/inbox.png";
import broadcasts from "../../docs/screenshots/broadcasts-view.png";
import automation from "../../docs/screenshots/automation-builder.png";
import pipeline from "../../docs/screenshots/pipelines-view.png";

const features = [
  {
    title: "Shared inbox",
    description: "Assign chats, share context and reply from one team inbox.",
    href: "/features/shared-inbox",
    image: inbox,
    alt: "WebPing shared inbox with a conversation list and open chat",
  },
  {
    title: "WhatsApp campaigns",
    description: "Send approved templates to selected audiences and track delivery.",
    href: "/features/broadcasts",
    image: broadcasts,
    alt: "WebPing broadcasts list with campaign delivery status",
  },
  {
    title: "Workflow automation",
    description: "Set up rules to handle repetitive replies and follow-ups.",
    href: "/features/automations",
    image: automation,
    alt: "WebPing automation builder with a trigger and workflow steps",
  },
  {
    title: "Sales pipelines",
    description: "Track deals by stage and see which conversations need a follow-up.",
    href: "/features/sales-pipelines",
    image: pipeline,
    alt: "WebPing pipeline board showing deals grouped by stage",
  },
];

export default function FeatureShowcase() {
  return (
    <section className="wp-showcase" aria-labelledby="wp-showcase-title">
      <div className="wrap">
        <header className="wp-showcase-heading">
          <p className="kicker">Explore WebPing CRM</p>
          <h2 id="wp-showcase-title">From the first message to the next sale</h2>
          <p>See how your team can manage chats, campaigns and deals in one place.</p>
        </header>
        <div className="wp-showcase-grid">
          {features.map(({ title, description, href, image, alt }) => (
            <AnimatedContent key={href}>
              <article className="wp-showcase-tile">
                <div className="wp-showcase-copy">
                  <h3><Link href={href}>{title}</Link></h3>
                  <p>{description}</p>
                </div>
                <div className="wp-showcase-preview">
                  <Image src={image} alt={alt} sizes="(max-width: 720px) 90vw, 520px" />
                </div>
              </article>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
