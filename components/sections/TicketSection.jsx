import React from "react";
import SectionWrapper from "../SectionWrapper";
import Button from "../Button";
import Link from "gatsby-link";
import { purple } from "../../styles/variables";

const TicketSection = () => (
  <SectionWrapper
    header="Registration"
    subhead="Join us at Gig City Elixir 2018!"
  >
    <p
      className="ff-odudomono-r"
      css={`
        color: ${purple};
        font-size: 30px;
        text-align: center;
      `}
    >
      Tickets now: $399.99
    </p>
    <Link to="/tickets/">
      <Button className="button" text="Click to Register" alert={true} />
    </Link>
  </SectionWrapper>
);

export default TicketSection;
