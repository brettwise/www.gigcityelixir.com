import React from "react";
import Link from "gatsby-link";
import get from "lodash/get";
import Helmet from "react-helmet";

import brucePic from "./../images/bruce-tate.jpg";
import davePic from "./../images/dave-thomas.jpg";
import johnPic from "./../images/john-hughes.jpg";
import annaPic from "./../images/anna-neyzberg.jpg";
import chrisPic from "./../images/chris-mccord.jpg";
import jamesPic from "./../images/james-gray.jpg";

import Bio from "../components/Bio";
import SectionWrapper from "../components/SectionWrapper";

import { rhythm } from "../utils/typography";
import { css } from "emotion";
import * as consts from "../styles/variables";

const bioStyles = css`
  display: inline-block;
  text-align: center;
`;

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");

    return (
      <div>
        <section
          css={`
            margin-bottom: ${rhythm(2)};
          `}>
          <h1
            css={`
              margin-bottom: ${rhythm(1 / 3)};
            `}>
            From José Valim
          </h1>
          <p
            css={`
              font-weight: 700;
            `}>
            A word from Elixir's Creator
          </p>
          <p
            css={`
              color: ${consts.orange};
              font-family: "OdudoMono-Regular", sans-serif;
              line-height: 37px;
              letter-spacing: 0.3px;
            `}>
            “Gig City Elixir’s speaker line-up is strong. They’re bringing in
            the programmers that shaped Elixir before Elixir was even born as
            well as the developers that are evolving the language and community
            every day.”
          </p>
        </section>

        <SectionWrapper
          header="About Us"
          subhead="A message from conference organizer Bruce Tate.">
          <p>
            Gig City Elixir is a different kind of programming conference in
            beautiful Chattanooga, Tennessee. We will focus on sessions that are
            different from what you're used to seeing, with a variety of talk
            lengths and formats that will open more learning channels than ever
            before.
          </p>
          <p>
            One of the best speaker lineups at any 2018 programming conference
            will teach you the foundational techniques you'll need to succeed in
            today's programming industry. You'll learn to use functional
            programming concepts that will make you a better programmer,
            regardless of the languages and tools you use at work today.
          </p>
        </SectionWrapper>

        <SectionWrapper header="Our Speakers" subhead="More to be announced.">
          <div
            css={`
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
              grid-column-gap: 30px;

              img {
                border-radius: 3px;
                margin-bottom: 0;
              }
            `}>
            <div className={bioStyles}>
              <img src={davePic} alt="picture of dave thomas" />
              <p>Dave Thomas</p>
            </div>

            <div className={bioStyles}>
              <img src={johnPic} alt="picture of john hughes" />
              <p>John Hughes</p>
            </div>

            <div className={bioStyles}>
              <img src={chrisPic} alt="picture of chris mccord" />
              <p>Chris McCord</p>
            </div>

            <div className={bioStyles}>
              <img src={brucePic} alt="picture of bruce tate kayaking" />
              <p>Bruce Tate</p>
            </div>

            <div className={bioStyles}>
              <img src={jamesPic} alt="picture of james edward gray" />
              <p>James Edward Gray II</p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper
          header="Get Notified When Tickets Go Live"
          subhead="As well as infrequent announcements and info.">
          <span
            css={`
              font-family: "OdudoMono-Regular", sans-serif;
              color: ${consts.orange};
              font-size: 20px;
            `}>
            Be the first to know when tickets go live!
          </span>
          <form
            action="https://tinyletter.com/gigcityelixir"
            method="post"
            target="popupwindow"
            onSubmit="window.open('https://tinyletter.com/gigcityelixir', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
            <input
              type="email"
              name="email"
              id="tlemail"
              placeholder="attendee@company.com"
            />
            <input type="hidden" value="1" name="embed" />
            <input className="button" type="submit" value="Subscribe" />
          </form>
        </SectionWrapper>

        <SectionWrapper
          header="Scholarships"
          subhead="Because we're stronger together.">
          <p>
            We will make Gig City Elixir a diverse experience. We will have
            scholarships available to those under-represented in our programming
            community including women and minorities. We will do the mentoring
            it takes before the conference to make sure programmers can take
            full advantage. If you or someone you know might benefit and can't
            afford their own ticket, let us know.
          </p>
          <button>More Info Soon</button>
        </SectionWrapper>

        <SectionWrapper
          header="Registration"
          subhead="Join us at Gig City Elixir 2018!">
          <p
            css={`
              font-family: "OdudoMono-Regular", sans-serif;
              color: ${consts.purple};
              font-size: 30px;
            `}>
            $350 Individual // $450 Corporate
          </p>
          <button
            css={`
              background-color: ${consts.orange};
            `}>
            Registration Coming Soon
          </button>
        </SectionWrapper>
      </div>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
