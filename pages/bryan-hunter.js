import { BioPage, ExternalLink } from "../components/BioPage";
import { speakers } from "../data/speakers";

export default function() {
  const speaker = speakers.find((bio) => bio.slug === "bryan-hunter");
  return (
    <BioPage
      src={speaker.imgSrc}
      name={speaker.name}
      subtitle={speaker.subtitle}
    >
      <p>{speaker.description}</p>
      <ExternalLink href={`https://twitter.com/${speaker.twitter}`}>
        {speaker.twitter}
      </ExternalLink>
    </BioPage>
  );
}
