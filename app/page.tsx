import Button from './button'
import { Envelope } from 'react-bootstrap-icons'

import Image from 'next/image'
import portraitImg from '../public/portrait.jpg'
import Content from './content.mdx'

export default function Page() {
  return (
    <main className="container px-3 max-w-6xl mx-auto grid gap-12 pb-12 md:py-12 xl:py-16 md:[grid-template-columns:2fr_3fr]">
      <Image
        alt="Portrait of Catherine Campbell smiling"
        src={portraitImg}
        placeholder="blur"
        priority
        quality={100}
        className="rounded-xl shadow-lg shadow-stone-200 dark:shadow-stone-900"
      />
      <article className="prose prose-lg prose-stone dark:prose-invert prose-a:font-normal prose-a:text-sky-600 prose-h1:font-extralight">
        <Content />
        <div className="not-prose flex flex-wrap items-center gap-4">
          <Button href="mailto:catherine.campbell617@gmail.com">
            <Envelope aria-hidden />
            Email me
          </Button>
          <Button href="https://campuspress.yale.edu/catherinecampbell/">
            M.Div. Portfolio
          </Button>
          (she/her)
        </div>
      </article>
    </main>
  )
}
