/** @type {import('next').NextConfig} */
require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')

console.log("process.env", process.env.NODE_ENV)

const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: "my-value",
  },
  webpack: (config) => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      new Dotenv({
        path: path.join(__dirname, process.env.NODE_ENV),
        systemvars: true
      })
    ]

    return config
  }
};

module.exports = nextConfig;
