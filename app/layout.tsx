import type { Metadata } from 'next'
import Link from 'next/link'
import { House, Github } from 'react-bootstrap-icons'
import './globals.css'

const Header = () => (
  <header className="container mx-auto max-w-6xl px-3 py-8 flex gap-4 items-center justify-between">
    <Link href="/" title="Homepage">
      <House size={24} aria-hidden />
    </Link>
    <nav className="flex gap-6 md:gap-8 text-lg">
      <Link
        href="/cv/campbell_catherine.pdf"
        className="hover:opacity-80 hover:underline underline-offset-4"
      >
        CV
      </Link>
      <Link
        href="/portfolio"
        className="hover:opacity-80 hover:underline underline-offset-4"
      >
        Portfolio
      </Link>
    </nav>
  </header>
)

const Footer = () => (
  <footer className="text-center px-2 py-3 md:py-4">
    <a
      className="flex items-center justify-center gap-3 text-stone-600 hover:text-stone-500 transition-colors"
      href="https://github.com/lachlanjc/catherine"
    >
      <Github size={20} aria-hidden />
      View source code
    </a>
  </footer>
)

const title = 'Catherine Campbell'
const description =
  'Catherine is an M.Div. candidate at the Yale Divinity School, currently interning at CHOP.'

export const metadata: Metadata = {
  title: { default: title, template: `%s – ${title}` },
  description,
  metadataBase: new URL('https://catherinecampbell.me'),
  twitter: { title, description, site: 'cthrnlc' },
  openGraph: { title, description },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-amber-50 text-stone-800 dark:bg-stone-900 dark:text-stone-200 font-serif">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
