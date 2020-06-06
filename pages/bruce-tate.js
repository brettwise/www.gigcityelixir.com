import { BioPage, ExternalLink } from "../components/BioPage";

export default function () {
  return (
    <BioPage
      src="bruce.jpg"
      name="Bruce Tate"
      subtitle="Author, Educator, Grox.io Founder"
    >
      <p>
        Bruce Tate is a kayaker, climber, programmer and father of two from
        Chattanooga, Tennessee. A serial entrepreneur, he has helped start three
        companies, and most recently served as CTO for icanmakeitbetter. The
        author of more than a dozen books is active in the Elixir community as a
        speaker, author, editor and conference organizer. His love for teaching
        and computer languages led him to found Groxio in 2018.
      </p>
      <ExternalLink href="https://twitter.com/redrapids">
        @redrapids
      </ExternalLink>
      <ExternalLink href="https://grox.io/">grox.io</ExternalLink>
    </BioPage>
  );
}
