import Head from "next/head";
import { TypographyStyle } from "react-typography";
import { GlobalStyles, typography } from "../utils/typography";

export default function GCEHead({ title = "Gig City Elixir 2023" }) {
  return (
    <Head>
      <TypographyStyle typography={typography} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <meta name="title" property="og:title" content={title} />
      <meta
        name="description"
        property="og:description"
        content="May 19-20, 2023 at The Edney Innovation Center in Chattanooga, TN. When we reflect on what makes GCE special, we know it's the community connections we make and strengthen while we are together. We are delighted to plan an in person conference in Chattanooga in 2023!"
      />
      <link rel="icon" href="/static/favicon-32x32-alt.png" sizes="32x32" />
      <link rel="icon" href="/static/favicon-96x96-alt.png" sizes="96x96" />
      <link rel="icon" href="/static/favicon-16x16-alt.png" sizes="16x16" />
      <GlobalStyles />
    </Head>
  );
}
