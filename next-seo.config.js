/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "quadratic-diplomacy",
  titleTemplate: "%s | quadratic-diplomacy",
  defaultTitle: "quadratic-diplomacy",
  description:
    "Distribute tokens among your team members based on quadratic voting.",
  canonical: "https://quadratic-diplomacy.sznm.dev",
  openGraph: {
    url: "https://quadratic-diplomacy.sznm.dev",
    title: "quadratic-diplomacy",
    description:
      "Distribute tokens among your team members based on quadratic voting.",
    images: [
      {
        url: "https://og-image.sznm.dev/**quadratic-diplomacy**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "quadratic-diplomacy.sznm.dev og-image",
      },
    ],
    site_name: "quadratic-diplomacy",
  },
  twitter: {
    handle: "@moonshotcollect",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
