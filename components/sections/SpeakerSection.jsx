import React from "react";
import SectionWrapper from "../SectionWrapper";
import { css } from "@emotion/core";
import { typography } from "../../utils/typography";
import { breakpoint } from "../../utils/breakpoints";
import { colors } from "../../utils/constants";

const speakers = [
  { name: "Alexa Hunleth" },
  { name: "Amos King" },
  { name: "Andrew Ek", imgSrc: "andrew-ek.jpeg" },
  { name: "Ben Wheat" },
  { name: "Bruce Tate", imgSrc: "bruce.jpg" },
  { name: "Bryan Hunter" },
  { name: "Chris Keathley" },
  { name: "Eric Oestrich" },
  { name: "Frank Hunleth" },
  { name: "Greg Mefford" },
  { name: "Jeffrey Matthias" },
  { name: "Joshua Plicque" },
  { name: "Kimberly Johnson" },
  { name: "Melvin Cedeno" },
  { name: "Osa Gaius" },
  { name: "Randall Thomas" },
  { name: "Scott Southworth" },
  { name: "Sean Moriarity" },
  { name: "Steve Bussey" },
  { name: "Vanessa Lee" },
  { name: "Zach Daniel" },
];

export default function SpeakerSection() {
  return (
    <SectionWrapper
      header="Our Speakers"
      id="speakers"
      extraCss={css`
        background-color: ${colors.plum};
        margin-left: 0;
        margin-right: 0;
        padding: 0 ${typography.rhythm(1)} ${typography.rhythm(3)};

        h2 {
          color: white;
        }
      `}
    >
      <div
        css={css`
          margin-left: -${typography.rhythm(1)};
          display: grid;
          grid-template-columns: 1fr;
          margin-left: 0;
          gap: 8px;

          ${breakpoint("large")} {
            grid-template-columns: 1fr 1fr;
          }
        `}
      >
        {speakers.map(({ name, imgSrc }) => (
          <Bio
            key={name}
            // imgSrc={imgSrc}
            name={name}
            // href="/alexa-hunleth"
            // twitterHandle="fhunleth"
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

function Bio({ children, href, imgSrc, name, twitterHandle, githubUser }) {
  return (
    <div
      className="ff-odudomono-r"
      css={css`
        border-radius: 3px;
        overflow: hidden;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        img {
          display: block;
          margin-bottom: 0;
          background-color: ${colors.peachy_plum};
          position: relative;
        }
      `}
    >
      <div
        href={href}
        css={css`
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          font-size: 2rem;
        `}
      >
        {imgSrc && <img src={`/static/speakers/${imgSrc}`} alt="" />}
        <div
          css={css`
            background-color: ${colors.peachy_plum};
            color: white;
            padding: ${typography.rhythm(1 / 3)};
            flex-grow: 1;
            ${typography.scale(1 / 4)};
          `}
        >
          {name}
        </div>
      </div>
      {children}
      {twitterHandle && (
        <div
          css={css`
            padding: ${typography.rhythm(1 / 4)};
            border: 1px solid ${colors.plum};
            bborder-radius: 0 0 3px 3px;
          `}
        >
          <a href={`https://twitter.com/${twitterHandle}`}>@{twitterHandle}</a>
        </div>
      )}
      {!twitterHandle && githubUser && (
        <div
          css={css`
            padding: ${typography.rhythm(1 / 4)};
            border: 1px solid ${colors.plum};
            bborder-radius: 0 0 3px 3px;
          `}
        >
          <a href={`https://github.com/${githubUser}`}>{githubUser}</a>
        </div>
      )}
    </div>
  );
}

function AndMore() {
  return (
    <div
      className="ff-odudomono-r"
      css={css`
        border-radius: 3px;
        margin-left: ${typography.rhythm(1)};
        margin-top: ${typography.rhythm(1)};
        overflow: hidden;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        `}
      >
        <div
          css={css`
            text-transform: uppercase;
            border: 1px solid ${colors.plum};
            letter-spacing: 1px;
            color: colors.plum;
            padding: ${typography.rhythm(1 / 3)};
            flex-grow: 1;
          `}
        >
          And more to come!
        </div>
      </div>
    </div>
  );
}
