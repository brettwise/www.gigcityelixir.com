import React from "react";
import SectionWrapper from "../SectionWrapper";
import { colors } from "../../utils/constants";
import { css } from "@emotion/core";
import { buttonCss } from "../Button";
import { typography } from "../../utils/typography";
import { breakpoint } from "../../utils/breakpoints";
import Link from "next/link";

const platinumSponsors = css`
  text-align: center;

  h2 {
    color: ${colors.plum};
    border-top: 3px solid ${colors.plum};
    border-bottom: 3px solid ${colors.plum};
    padding-top: 26px;
    padding-bottom: 26px;
  }

  h3 {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;

const flexGrid = css`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${typography.rhythm(1)};
  margin-bottom: ${typography.rhythm(1)};
`;

const flexGridItem = css`
  margin-left: ${typography.rhythm(1)};
  ${breakpoint("large")} {
    width: calc(50% - ${typography.rhythm(1)});
  }
`;

const flexGridItemChampion = css`
  margin-left: ${typography.rhythm(1)};
  width: calc(33.333% - ${typography.rhythm(1)});
  display: flex;
  justify-content: center;
  align-items: center;
`;

const sponsorLink = css`
  border: ${typography.rhythm(1 / 32)} solid ${colors.peachy_plum};
  padding: ${typography.rhythm(1 - 1 / 32)};
  text-decoration: none;

  &:focus,
  &:hover {
    border-width: ${typography.rhythm(1 / 8)};
    padding: ${typography.rhythm(1 - 1 / 8)};
    border-color: ${colors.plum};
  }
`;

const SubscriptionSection = () => (
  <SectionWrapper
    header="Our Sponsors"
    subhead="This conference brought to you in part by these fine folks"
  >
    <div className={platinumSponsors}>
      <h3>Platinum</h3>
      <div css={flexGrid}>
        <Platinum url="https://adobe.com/">
          <figure>
            <img
              src="/static/sponsor-logos/adobe.svg"
              alt="Adobe"
              css={css`
                padding: 5rem 2rem 2rem;
              `}
            />
          </figure>
        </Platinum>
      </div>
      <Link href="/contact">
        <a href="/contact" css={buttonCss}>
          Contact Us About Sponsoring
        </a>
      </Link>
    </div>
  </SectionWrapper>
);

export default SubscriptionSection;

function Platinum({ url, children, customCss }) {
  return (
    <a
      href={url}
      css={css`
        ${flexGridItem}
        ${sponsorLink}
        margin-bottom: ${typography.rhythm(1)};
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        /* Override wide when we have a single platinum sponsor */
        ${breakpoint("large")} {
          width: 100%;
        }

        p:last-child {
          margin-bottom: ${typography.rhythm(1 / 4)};
        }
        p {
          padding-left: ${typography.rhythm(1 / 4)};
          padding-right: ${typography.rhythm(1 / 4)};
        }

        font-size: ${typography.rhythm(5 / 8)};
        color: ${colors.plum};
        text-align: center;

        img {
          flex-shrink: 0;
        }
        ${customCss}
      `}
    >
      {children}
    </a>
  );
}

function Lanyard({ img, name, url, children }) {
  return (
    <a
      href={url}
      css={css`
        margin-left: ${typography.rhythm(1)};
        ${sponsorLink}
        margin-bottom: ${typography.rhythm(1)};
        display: flex;
        justify-content: space-between;
        align-items: center;

        figure {
          width: calc(50% - ${typography.rhythm(1 / 2)});
          margin: 0;
        }

        img {
          /* width: 100%; */
          height: 10em;
          margin: 0;
        }

        div {
          width: calc(50% - ${typography.rhythm(1 / 2)});
        }

        p:last-child {
          margin-bottom: ${typography.rhythm(1 / 4)};
        }
        p {
          padding-left: ${typography.rhythm(1 / 4)};
          padding-right: ${typography.rhythm(1 / 4)};
        }

        font-size: ${typography.rhythm(5 / 8)};
        color: ${colors.plum};
        text-align: center;
      `}
    >
      {children}
    </a>
  );
}

function ScholarshipDonor({ children }) {
  return (
    <li
      css={css`
        ${flexGridItemChampion}
        border: ${typography.rhythm(1 / 32)} solid ${colors.peachy_plum};
        padding: ${typography.rhythm(1 - 1 / 32)};
        border-color: ${colors.blush};
        margin-bottom: ${typography.rhythm(1)};
      `}
    >
      {children}
    </li>
  );
}

function Champion({ img, name, url, linkcss = "" }) {
  return (
    <a
      href={url}
      css={css`
        ${flexGridItemChampion}
        ${sponsorLink}
        border-color: ${colors.blush};
        margin-bottom: ${typography.rhythm(1)};
        ${linkcss}
      `}
    >
      <img
        src={img}
        alt={name}
        css={css`
          display: block;
          margin-bottom: 0;
        `}
      />
    </a>
  );
}
