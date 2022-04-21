import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <link rel="icon" href="/blog/favicon.svg" type="image/svg+xml" />
      <meta name="theme-color" content="#000" />
      <meta
        name="description"
        content={`A statically generated blog example using Next.js.`}
      />
      <meta property="og:image" content={''} />
    </Head>
  )
}

export default Meta
