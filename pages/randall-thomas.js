import { BioPage, ExternalLink } from "../components/BioPage";
import { speakers } from "../data/speakers";

export default function () {
  const speaker = speakers.find((bio) => bio.slug === "randall-thomas");
  return (
    <BioPage
      src={speaker.imgSrc}
      name={speaker.name}
      subtitle={speaker.subtitle}
    >
      <p>Randall Thomas (<a href="https://twitter.com/@daksis">@daksis</a>) is a classically trained musician that took one too many calculus classes and got sucked into geekery: computers, robots, video games, high-energy physics - the usual suspects.</p>
      <p>Afflicted with rabid technology ADD, Randall has built companies in various industries with numerous startups -- everything from robotics to digital video to cloud computing. After escaping a high-security military prison and driving a heavily armed conversion van filled with ex-spec-ops soldiers for hire around the Los Angeles underground.</p>
      <p>Randall founded Thunderbolt Labs - a software consultancy that teaches companies how to build better software by embedding with their teams and building it beside them. Randall is an internationally recognized speaker on practical data techniques and the insanely nonsensical business of startups. Randall is likely lost in a book or on a running trail when not glued to a computer, wondering if he will get to the end of either. He has a fondness for good food and a weakness for great whiskey and will happily discuss either at length.</p>
      <ExternalLink href="https://https://twitter.com/@daksis">@daksis</ExternalLink>
    </BioPage>
  );
}
