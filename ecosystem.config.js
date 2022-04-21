module.exports = {
  apps: [
    {
      name: "My blog",
      script: "yarn",
      args: "start",
      version: "1.0.0",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
