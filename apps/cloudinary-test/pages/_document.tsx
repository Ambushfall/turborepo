import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Next.js Gallery Inspired by Next.js Cloudinary example"
          />
          <meta property="og:site_name" content="Next.jsconf-pics.vercel.app" />
          <meta
            property="og:description"
            content="Next.js Gallery Inspired by Next.js Cloudinary example"
          />
          <meta property="og:title" content="Next.js Gallery" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Next.js Gallery" />
          <meta
            name="twitter:description"
            content="Next.js Gallery Inspired by Next.js Cloudinary example"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
