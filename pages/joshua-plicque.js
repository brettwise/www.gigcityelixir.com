import { BioPage, ExternalLink } from "../components/BioPage";
import { speakers } from "../data/speakers";

export default function () {
  const speaker = speakers.find((bio) => bio.slug === "joshua-plicque");
  return (
    <BioPage
      src={speaker.imgSrc}
      name={speaker.name}
      subtitle={speaker.subtitle}
    >
      <p>{speaker.description}</p>
      <ExternalLink href="https://www.youtube.com/@liveviewmastery">LiveView Mastery</ExternalLink>
      <ExternalLink href="https://orequals.com/">Or Equals</ExternalLink>
    </BioPage>
  );
}
