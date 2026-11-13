/**
 * Gatsby SSR APIs.
 *
 * GTM plugin vkladá na začiatok <body> <noscript><iframe ...ns.html?id=GTM-...>.
 * Nástroje, ktoré čítajú text stránky, ho vidia ako text. Odstraňujeme ho,
 * hlavný GTM skript v <head> ostáva.
 */
exports.onPreRenderHTML = ({ getPreBodyComponents, replacePreBodyComponents }) => {
  replacePreBodyComponents(
    getPreBodyComponents().filter(
      component => !(component && component.key === "plugin-google-tagmanager")
    )
  )
}
