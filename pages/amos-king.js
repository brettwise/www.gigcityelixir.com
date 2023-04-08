import { BioPage, ExternalLink } from "../components/BioPage";
import { speakers } from "../data/speakers";

export default function () {
  const speaker = speakers.find((bio) => bio.slug === "amos-king");
  return (
    <BioPage
      src={speaker.imgSrc}
      name={speaker.name}
      subtitle={speaker.subtitle}
    >
      <p>{speaker.description}</p>
      <ExternalLink href="https://binarynoggin.com">Binary Noggin</ExternalLink>
      <ExternalLink href="https://elixiroutlaws.com">Elixir Outlaws</ExternalLink>
    </BioPage>
  );
}
