import React from "react";
import SectionWrapper from "../SectionWrapper";
import { css } from "@emotion/core";
import { typography } from "../../utils/typography";
import { colors } from "../../utils/constants";

const speakers = [
  "Alexa Hunleth",
  "Amos King",
  "Andrew Ek",
  "Ben Wheat",
  "Bruce Tate",
  "Bryan Hunter",
  "Chris Keathley",
  "Eric Oestrich",
  "Frank Hunleth",
  "Greg Mefford",
  "Jeffrey Matthias",
  "Joshua Plicque",
  "Kimberly Johnson",
  "Melvin Cedeno",
  "Osa Gaius",
  "Randall Thomas",
  "Scott Southworth",
  "Sean Moriarity",
  "Steve Bussey",
  "Zach Daniel",
];

export default function SpeakerSection() {
  return (
    <SectionWrapper header="Our Speakers" id="speakers">
      <div
        css={css`
          margin-left: -${typography.rhythm(1)};
          ${"" /* margin-top: -${typography.rhythm(1)}; */}
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin-left: ${typography.rhythm(1)};
          gap: 8px;
        `}
      >
        {speakers.map((name) => (
          <Bio
            key={name}
            // imgSrc="alexa.jpg"
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
        <img src={`/static/speakers/${imgSrc}`} alt="" />
        <div
          css={css`
            background-color: ${colors.plum};
            color: white;
            padding: ${typography.rhythm(1 / 3)};
            flex-grow: 1;
            ${typography.scale(1 / 3)};
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
