import Head from "next/head";
import { TypographyStyle } from "react-typography";
import { GlobalStyles, typography } from "../utils/typography";

export default function GCEHead({ title = "Gig City Elixir 2023" }) {
  return (
    <Head>
      <TypographyStyle typography={typography} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <link rel="icon" href="/static/favicon-32x32-alt.png" sizes="32x32" />
      <link rel="icon" href="/static/favicon-96x96-alt.png" sizes="96x96" />
      <link rel="icon" href="/static/favicon-16x16-alt.png" sizes="16x16" />
      <GlobalStyles />
    </Head>
  );
}
