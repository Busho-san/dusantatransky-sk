/**
 * Gatsby SSR APIs.
 *
 * Web nepoužíva cookies. Návštevnosť meria Cloudflare Web Analytics (bez cookies),
 * snippet je vložený ručne (Web Analytics → dusantatransky.sk → JS Snippet installation).
 */
const React = require("react")

const CF_BEACON_TOKEN = "6fb37890803442629b038aececc430a3"

exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    React.createElement("script", {
      key: "cf-web-analytics",
      type: "module",
      src: "https://static.cloudflareinsights.com/beacon.min.js",
      "data-cf-beacon": JSON.stringify({ token: CF_BEACON_TOKEN }),
    }),
  ])
}
