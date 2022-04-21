/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["./styles"],
    prependData: `@import "variables.scss";`,
  },
};

module.exports = nextConfig;
