import { css } from "@emotion/core";
import DateAndVenue from "../components/DateAndVenue";
import Footer from "../components/Footer";
import GCEHead from "../components/GCEHead";
import Logo from "../components/Logo";
import ReturningAnnouncement from "../components/sections/ReturningAnnouncement";
import SpeakerSection from "../components/sections/SpeakerSection";
import { SkipToNavLink } from "../components/SkipToNav";
import { breakpoint } from "../utils/breakpoints";
import { colors } from "../utils/constants";
import { typography } from "../utils/typography";

export default function Index() {
  return (
    <Wrapper>
      <GCEHead />
      <SkipToNavLink />
      <Main>
        <Hero>
          <HeroLeft>
            <Logo
              extraCss={css`
                @supports (display: grid) {
                  ${breakpoint("medium")} {
                    font-size: 3rem;
                    background: ${colors.plum};
                    padding: 0;
                    box-shadow: 0 0 0 ${typography.rhythm(3 / 2)} ${colors.plum};
                    border: 0;
                  }
                  ${breakpoint("large")} {
                    padding-left: ${typography.rhythm(1)};
                    font-size: 4rem;
                  }
                }
              `}
            />
          </HeroLeft>
          <DateAndVenue />
          <div
            css={css`
              grid-area: mid;
              background-color: ${colors.plum};
              width: calc(100% / 3 * 2);
              @supports (display: grid) {
                width: auto;
              }
            `}
          >
            <ReturningAnnouncement />
          </div>
        </Hero>
        <SpeakerSection />
      </Main>
      <Footer />
    </Wrapper>
  );
}

function Wrapper({ children }) {
  return (
    <div
      css={css`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
      `}
    >
      {children}
    </div>
  );
}

function Main({ children }) {
  return (
    <div
      css={css`
        flex-grow: 1;
      `}
    >
      {children}
    </div>
  );
}

function Hero({ children }) {
  return (
    <div
      css={css`
        color: ${colors.blush};
        flex-direction: column-reverse;
        padding-top: ${typography.rhythm(2)};
        padding-bottom: ${typography.rhythm(2)};

        background-color: ${colors.plum};
        background-image: url("/static/topo.svg");
        background-position: 50% 0%;
        background-repeat: no-repeat;
      `}
    >
      <div
        className="limit-width"
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: end;
          align-items: center;
          @supports (display: grid) {
            justify-content: normal;
            ${breakpoint("medium")} {
              display: grid;
              /* 3 rows, 3 cols */
              grid-template-columns: 1fr 1fr 1fr;
              grid-template-rows: auto auto auto;
              grid-column-gap: ${typography.rhythm(3)};
              grid-template-areas:
                "left top top"
                "left mid mid"
                "left bot bot";
            }
          }
        `}
      >
        {children}
      </div>
    </div>
  );
}

function HeroLeft({ children }) {
  return (
    <div
      css={css`
        @supports (display: grid) {
          ${breakpoint("medium")} {
            margin: 0;
            grid-area: left;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            max-height: 100vh;
          }
        }
      `}
    >
      {children}
    </div>
  );
}
