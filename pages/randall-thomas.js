import { BioPage } from "../components/BioPage";
import { speakers } from "../data/speakers";

export default function () {
  const speaker = speakers.find((bio) => bio.slug === "randall-thomas");
  return (
    <BioPage
      src={speaker.imgSrc}
      name={speaker.name}
      subtitle={speaker.subtitle}
    >
      <p>{speaker.description}</p>
    </BioPage>
  );
}
