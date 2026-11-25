import Image from "next/image";
import AnimatedContent from "./AnimatedContent";
import artwork from "../../images/webping-inbox-artwork.webp";

export default function InboxArtwork() {
  return (
    <AnimatedContent className="wrap">
      <figure className="webping-inbox-artwork">
        <Image
          src={artwork}
          alt="Illustration of chat bubbles gathered around a shared team inbox"
          sizes="(max-width: 768px) 94vw, 760px"
        />
      </figure>
    </AnimatedContent>
  );
}
