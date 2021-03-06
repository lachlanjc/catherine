import Head from 'next/head'
import { palette } from './theme'

const name = 'Catherine Campbell'
const makeTitle = title => (title === name ? title : `${title} – ${name}`)

const Meta = ({
  title = name,
  description = 'Catherine Campbell is an M.A. student in Peace and Social Transformation at the Earlham School of Religion.',
  image = 'https://catherine.lachlanjc.now.sh/card.png',
  color = palette.primary
}) => (
  <Head>
    <meta key="og_type" property="og:type" content="website" />
    <meta key="og_site" property="og:site_name" content={name} />
    <meta key="twitter_site" name="twitter:site" content="@cthrnlc" />
    <title>{makeTitle(title)}</title>
    <meta key="og_title" property="og:title" content={makeTitle(title)} />
    <meta key="twitter_title" name="twitter:title" content={makeTitle(title)} />
    <meta key="desc" name="description" content={description} />
    <meta key="og_desc" property="og:description" content={description} />
    <meta key="twitter_desc" name="twitter:description" content={description} />
    <meta key="og_img" property="og:image" content={image} />
    <meta
      key="twitter_card"
      name="twitter:card"
      content="summary_large_image"
    />
    <meta key="twitter_img" name="twitter:image" content={image} />
    <meta key="theme_color" name="theme-color" content={color} />
    <meta key="tile_color" name="msapplication-TileColor" content={color} />
    <link
      key="safari_icon"
      rel="mask-icon"
      href="/safari-pinned-tab.svg"
      color={color}
    />
    <link
      key="apple_icon"
      rel="apple-touch-icon"
      sizes="180x180"
      href="/apple-touch-icon.png"
    />
    <link
      key="favicon_32"
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon-32x32.png"
    />
    <link
      key="favicon_16"
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon-16x16.png"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Gentium+Book+Basic:400,400i,700&display=swap"
      rel="stylesheet"
      key="fonts"
    />
  </Head>
)

export default Meta
