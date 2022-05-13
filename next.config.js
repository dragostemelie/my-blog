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
  async redirects() {
    return [
      {
        source: "/articles/using-page-lifecycle-api-with-custom-react-hook",
        destination: "/stories/using-page-lifecycle-api-with-custom-react-hook",
        permanent: true,
      },
      {
        source: "/stories/jango-player-my-first-react-native-app",
        destination: "/stories/jango-player-a-react-native-app",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
