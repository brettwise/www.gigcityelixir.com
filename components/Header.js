import { css } from "@emotion/core";
import { colors } from "../utils/constants";
import { typography } from "../utils/typography";
import Column from "./Column";

import DateAndVenue from "./DateAndVenue";
import Logo from "./Logo";

export default function Header() {
  return (
    <header
      css={css`
        background-color: ${colors.plum};
        padding: ${typography.rhythm(1)} 0;
        color: ${colors.blush};
        background-image: url("/static/topo.png");
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
      `}
    >
      <Column
        extraCss={css`
          display: flex;
          align-items: center;
          padding: 0;
        `}
      >
        <Logo />
        <DateAndVenue />
      </Column>
    </header>
  );
}
