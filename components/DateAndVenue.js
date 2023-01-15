import { css } from "@emotion/core";
import { colors } from "../utils/constants";
import { typography } from "../utils/typography";
import { breakpoint } from "../utils/breakpoints";

export default function DateAndVenue({ extraCss }) {
  return (
    <div
      className="ff-odudomono-l"
      css={css`
        grid-area: top;
        text-transform: uppercase;
        letter-spacing: 0.3333ch;
        margin: ${typography.rhythm(1 / 2)};
        padding: ${typography.rhythm(1 / 2)};
        background-color: ${colors.plum};
        font-size: 0.75rem;
        ${breakpoint("medium")} {
          font-size: 1rem;
        }
        ${extraCss}
      `}
    >
      <span className="c-peach">Training</span> May 18
      <br />
      <span className="c-peach">Conference</span> May 19-20
      <br />
      <span
        css={css`
          letter-spacing: 0;
          ${breakpoint("medium")} {
            letter-spacing: inherit;
          }
        `}
      >
        The Edney Innovation Center
      </span>
      <br />
      Chattanooga, TN
    </div>
  );
}
