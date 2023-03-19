import Footer from "./Footer";
import GCEHead from "./GCEHead";
import { css } from "@emotion/core";
import { points } from "../utils/breakpoints";
import { colors, hues } from "../utils/constants";
import { typography } from "../utils/typography";
import DateAndVenue from "./DateAndVenue";
import Logo from "./Logo";
import Link from "next/link";

export function BioPage({ name, children, src, subtitle }) {
  return (
    <div>
      <GCEHead title={name} />
      <section
        css={css`
          background-color: ${colors.plum};
          padding: ${typography.rhythm(1)} 0 ${typography.rhythm(4)};
          color: ${colors.blush};
          background-image: url("/static/topo.svg");
          background-position: 50% -700px;
          background-repeat: no-repeat;
          background-size: 1400px;
          text-align: center;
          position: relative;
          overflow: hidden;
        `}
      >
        <header
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: left;
            position: relative;
            z-index: 10;
          `}
        >
          <Logo />
          <DateAndVenue
            extraCss={css`
              margin: 0 !important;
              padding: 1em !important;
            `}
          />
        </header>

        <div
          className="ff-odudomono-sb"
          css={css`
            color: hsla(${hues.blush}, 100%, 50%, 0.05);
            font-size: 29vw;
            text-transform: uppercase;
            letter-spacing: 0.5ch;
            line-height: 0.95;
            word-break: break-all;
            position: absolute;
            z-index: 0;
            top: 1ch;
            right: -0.25ch;
            left: 0.25ch;
            overflow: hidden;
            pointer-events: none;
            user-select: none;
          `}
        >
          {name.replace(/\s/, "")}
        </div>
        <div
          css={css`
            max-width: ${points.medium};
            padding: 0 ${typography.rhythm(1.5)};
            margin: 0 auto;
            position: relative;
            z-index: 10;
          `}
        >
          <figure>
            {src && (
              <img
                src={"/static/speakers/" + src}
                css={css`
                  display: block;
                  margin: 4rem auto 4rem;
                  box-shadow: -1em -1em 0 ${colors.peach},
                    1em 1em 0 0 hsla(${hues.plum}, 80%, 20%, 0.5);
                `}
              />
            )}
            {subtitle && (
              <figcaption
                className="ff-odudomono-l"
                css={css`
                  font-size: ${typography.rhythm(2 / 3)};
                  text-transform: uppercase;
                  letter-spacing: 2px;
                  color: ${colors.peach};
                  margin-bottom: -${typography.rhythm(1)};
                  white-space: pre-wrap;
                  /* text-align: left; */
                `}
              >
                {subtitle}
              </figcaption>
            )}
          </figure>
          <h1>{name}</h1>

          <div
            css={css`
              color: ${colors.taffy};
              p {
                text-align: justify;
              }
              a,
              a:link,
              a:visited {
                color: ${colors.peach};
              }
              a:hover {
                color: white;
              }
              a:active {
                color: white;
              }
            `}
          >
            {children}
          </div>

          <Link href="/#speakers">
            <a
              className="ff-odudomono-r"
              css={css`
                display: block;
                margin: ${typography.rhythm(4)} 0 0;
                padding: ${typography.rhythm(1)};
                border: 1px solid ${colors.peachy_plum};
                background: ${typography.rhythm(1)} 50% no-repeat;
                background-size: 2%;
                background-image: url("data:image/svg+xml,%0A%3Csvg width='7px' height='5px' viewBox='0 0 7 5' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch --%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-linecap='square'%3E%3Cg id='bt' transform='translate(-1012.000000, -64.000000)' stroke='%23E9ABD1'%3E%3Cpath d='M1018.5,66.5 L1012.5,66.5' id='Line'%3E%3C/path%3E%3Cpath d='M1012.5,66.5 L1014.5,64.5' id='Line-2'%3E%3C/path%3E%3Cpath d='M1012.5,66.5 L1014.5,68.5' id='Line-3'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                &,
                &:link,
                &:visited {
                  color: ${colors.taffy};
                }
                &:hover,
                &:focus {
                  border-color: ${colors.plummy_peach};
                  color: white;
                  background-size: 2%;
                }
                &:active {
                  border-color: ${colors.peach};
                  color: white;
                }
              `}
              href="/#speakers"
            >
              Speakers
            </a>
          </Link>
        </div>
      </section>

      <Footer
        extraCss={css`
          max-width: ${points.medium};
          margin-left: auto;
          margin-right: auto;
        `}
      />
    </div>
  );
}

export function ExternalLink({ children, href }) {
  return (
    <a
      className="ff-odudomono-r"
      css={css`
        display: inline-block;
        color: ${colors.blush};
        padding: ${typography.rhythm(1 / 3)} ${typography.rhythm(1 / 2)}
          ${typography.rhythm(1 / 2)};
        letter-spacing: 1px;
        background: hsla(${hues.plum}, 80%, 20%, 0.6);
        &:hover,
        &:focus,
        &:visited {
          background: hsla(${hues.plum}, 80%, 20%, 0.75);
          color: ${colors.blush};
        }
        &:active {
          background: hsla(${hues.plum}, 80%, 20%, 0.9);
        }
        margin: ${typography.rhythm(1 / 2)};
      `}
      href={href}
    >
      {children}
    </a>
  );
}
