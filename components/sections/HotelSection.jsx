import React from "react";
import { css } from "@emotion/core";
import SectionWrapper from "../SectionWrapper";
import { buttonCss } from "../Button";
import { typography } from "../../utils/typography";
import { colors, hues } from "../../utils/constants";

const HotelSection = () => (
  <SectionWrapper
    header="Accomodations"
    subhead="Book a room at the Moxy at our conference rate"
  >
    <p>
      We're excited to announce the Moxy as the hotel partner for GigCityElixir.
      This great new boutique hotel offers an unforgettable experience, from the
      check in experience with a signature cocktail to one of the most unique
      meeting areas in the city. In the midst of the exciting Southside, the
      hotel is a few minutes walk from the conference venue (or a quick shuttle
      ride), and also right on top of the landmark Chattanooga Choo Choo Hotel.
      It also is a few minutes walk from the finest restaurants in the city,
      live music, and more.
    </p>
    <div
      css={css`
        padding: ${typography.rhythm(1)};
        border-radius: 3px;
        border: 1px solid ${colors.peachy_plum};
        background: ${colors.blush};
      `}
    >
      <p>
        Our conference is the same weekend as the IRONMAN Chattanooga, so don't
        delay and get your rooms booked!
      </p>
      <a
        href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1674143445948&key=GRP&app=resvlink"
        css={buttonCss}
      >
        Book a Room at the Moxy
      </a>
    </div>
    <address
      css={css`
        margin: ${typography.rhythm(1)} 0 0;
      `}
    >
      <span>MOXY Chattanooga Downtown</span>
      <br />
      1220 King Street
      <br />
      Chattanooga, Tennessee 37403
    </address>
  </SectionWrapper>
);

export default HotelSection;
