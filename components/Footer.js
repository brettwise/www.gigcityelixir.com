import { css } from "@emotion/core";
import Link from "next/link";
import { colors } from "../utils/constants";
import { typography } from "../utils/typography";
import { SkipToNavContent } from "../components/SkipToNav";

export default function Footer({ extraCss }) {
  return (
    <footer css={extraCss}>
      <nav
        className="ff-odudomono-r"
        css={css`
          justify-self: end;
          text-align: center;
          border-bottom: ${typography.rhythm(1 / 2)} solid ${colors.blush};
          padding: ${typography.rhythm(1 / 2)};
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          > a {
            padding: ${typography.rhythm(1 / 2)};
            :link {
              color: ${colors.plum};
            }
            :visited {
              color: ${colors.peachy_plum};
            }
            :hover,
            :focus {
              color: ${colors.peach};
            }
            :active {
              color: ${colors.ash};
            }
          }
        `}
      >
        <SkipToNavContent />
        <Link href="/" prefetch>
          <a href="/">Home</a>
        </Link>
        <Link href="/about" prefetch>
          <a href="/about">About</a>
        </Link>
        <Link href="/schedule" prefetch>
          <a href="/schedule">Schedule</a>
        </Link>
        <Link href="/coc" prefetch>
          <a href="/coc">CoC</a>
        </Link>
        <Link href="/contact" prefetch>
          <a href="/contact">Contact</a>
        </Link>
        <Link href="https://2018.gigcityelixir.com/">
          <a href="https://2018.gigcityelixir.com/">2018</a>
        </Link>
        <Link href="https://2019.gigcityelixir.com/">
          <a>2019</a>
        </Link>
      </nav>
      <script
        crossOrigin="anonymous"
        src="https://polyfill.io/v3/polyfill.min.js?flags=gated&features=Object.assign"
      />
    </footer>
  );
}
