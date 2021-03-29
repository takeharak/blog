/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import { SeoQuery, SiteSiteMetadata } from "../generated/graphql"

interface Props
  extends Pick<SiteSiteMetadata, "description" | "title">,
    Pick<React.HTMLAttributes<HTMLHtmlElement>, "lang"> {
  meta?: Array<{ name: string; content: string }>
}

const SEO: React.FC<Props> = ({ description, lang, meta, title }) => {
  const data: SeoQuery = useStaticQuery(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description ?? data.site?.siteMetadata?.description
  const defaultTitle = data.site?.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title ?? ``}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription ?? ``,
        },
        {
          property: `og:title`,
          content: title ?? ``,
        },
        {
          property: `og:description`,
          content: metaDescription ?? ``,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.site?.siteMetadata?.social?.twitter ?? ``,
        },
        {
          name: `twitter:title`,
          content: title ?? ``,
        },
        {
          name: `twitter:description`,
          content: metaDescription ?? ``,
        },
      ].concat(meta ?? [])}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO
