import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import { SITE_URL, LINKS } from "../data/links"

// title: celý <title> (bez šablóny), path: cesta stránky pre canonical,
// enUrl: zodpovedajúca anglická stránka na .com (hreflang)
function SEO({ title, description, path, enUrl, jsonLd, noindex }) {
  const url = SITE_URL + path
  const image = SITE_URL + "/og-image.png"
  const meta = [
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:locale", content: "sk_SK" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ]
  if (noindex) meta.push({ name: "robots", content: "noindex" })

  const link = noindex
    ? []
    : [
        { rel: "canonical", href: url },
        { rel: "alternate", hrefLang: "sk", href: url },
        { rel: "alternate", hrefLang: "en", href: enUrl || LINKS.en },
        { rel: "alternate", hrefLang: "x-default", href: LINKS.en },
      ]

  return (
    <Helmet htmlAttributes={{ lang: "sk" }} title={title} meta={meta} link={link}>
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}

SEO.defaultProps = {
  path: "/",
  description: "",
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  path: PropTypes.string,
  enUrl: PropTypes.string,
  jsonLd: PropTypes.object,
  noindex: PropTypes.bool,
}

export default SEO
