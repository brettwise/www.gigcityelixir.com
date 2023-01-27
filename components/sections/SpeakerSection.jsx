import React from "react";
import SectionWrapper from "../SectionWrapper";
import { css } from "@emotion/core";
import { typography } from "../../utils/typography";
import { colors } from "../../utils/constants";

export default function SpeakerSection() {
  return (
    <SectionWrapper header="Our Speakers" id="speakers">
      <div
        css={css`
          margin-left: -${typography.rhythm(1)};
          margin-top: -${typography.rhythm(1)};
        `}
      >
        <Bio
          // imgSrc="alexa.jpg"
          name="Alexa Hunleth"
          // href="/alexa-hunleth"
          // twitterHandle="fhunleth"
        />
        <Bio
          // imgSrc="bruce.jpg"
          name="Bruce Tate"
          // twitterHandle="redrapids"
          // href="/bruce-tate"
        />
        <Bio
          // imgSrc="frank.jpg"
          name="Frank Hunleth"
          // href="/frank-hunleth"
          // twitterHandle="fhunleth"
        />
        <Bio
          // imgSrc="greg.jpg"
          name="Greg Mefford"
          // href="/greg-mefford"
          // twitterHandle="ferggo"
        />
        <Bio
          // imgSrc="osa.jpg"
          name="Osa Gaius"
          // href="/osa-gaius"
          // twitterHandle="osagaius"
        />
        <Bio
          // imgSrc="randall.jpg"
          name="Randall Thomas"
          // href="/randall-thomas"
          // twitterHandle="redrapids"
        />
        <AndMore />
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
        margin-left: ${typography.rhythm(1)};
        margin-top: ${typography.rhythm(1)};
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
