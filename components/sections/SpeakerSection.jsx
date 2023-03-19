import React from "react";
import { css } from "@emotion/core";
import { typography } from "../../utils/typography";
import { breakpoint, points } from "../../utils/breakpoints";
import { colors, hues } from "../../utils/constants";
import { speakers } from "../../data/speakers";

export default function SpeakerSection() {
  return (
    <div
      css={css`
        background-color: ${colors.plum};
        margin-left: 0;
        margin-right: 0;
        padding: 0 ${typography.rhythm(1)} ${typography.rhythm(3)};

        h2 {
          color: white;
        }
      `}
    >
      <header
        css={css`
          margin: auto;
        `}
      >
        <h2 id="speakers">Our Speakers</h2>
      </header>
      <div
        css={css`
          margin-left: -${typography.rhythm(1)};
          display: grid;
          grid-template-columns: 1fr;
          margin-left: 0;
          gap: 8px;

          ${breakpoint("medium")} {
            grid-template-columns: 1fr 1fr;
          }

          ${breakpoint("large")} {
            grid-template-columns: 1fr 1fr 1fr;
          }

          ${breakpoint("xLarge")} {
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
        `}
      >
        {speakers.map((speaker) => (
          <Bio key={speaker.slug} {...speaker} />
        ))}
      </div>
    </div>
  );
}

function Bio({ children, imgSrc, name, slug, twitterHandle, githubUser }) {
  return (
    <a
      href={`/${slug}`}
      className="ff-odudomono-r"
      css={css`
        border-radius: 3px;
        overflow: hidden;
        display: grid;
        grid-template-columns: 1fr 2fr;
        flex-direction: column;
        justify-content: space-between;
        background-color: ${colors.peachy_plum};

        &:hover,
        &:focus {
          text-decoration: none;
          filter: saturate(125%);
        }

        img {
          display: block;
          margin: 0;
          aspect-ratio: 1;
          object-fit: cover;
          background-color: ${colors.peachy_plum};
          position: relative;
        }
      `}
    >
      {imgSrc ? (
        <img src={`/static/speakers/${imgSrc}`} alt="" />
      ) : (
        <div
          css={css`
            background-color: hsl(${hues.plum}, 80%, 20%, 20%);
            min-height: ${typography.rhythm(4)};
          `}
        />
      )}
      <div
        css={css`
          color: white;
          padding: ${typography.rhythm(1 / 3)} ${typography.rhythm(1)};
          display: flex;
          align-items: center;
          ${typography.scale(1 / 4)};
        `}
      >
        {name}
      </div>
      {/* {children}
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
      )} */}
    </a>
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
