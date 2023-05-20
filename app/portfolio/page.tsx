import type { Metadata } from 'next'
import Content from './content.mdx'

const title = 'Portfolio'
const description =
  'Read selected academic writings and essays by Catherine Campbell.'
export const metadata: Metadata = {
  title,
  description,
  twitter: { title, description },
  openGraph: { title, description },
}

export default function Page() {
  return (
    <article className="container mx-auto max-w-3xl px-3 pt-8 pb-12 md:py-12 xl:py-16 prose prose-lg prose-stone dark:prose-invert prose-a:font-normal prose-a:text-sky-600 prose-h1:font-extralight prose-h2:font-normal">
      <Content />
    </article>
  )
}
