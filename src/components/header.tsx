import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
]

const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

export default ({ title = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{title ? `${title} | toshi-toma.com` : ''}</title>
        <meta
          name="description"
          content="An example Next.js site using Notion for the blog"
        />
        <meta name="og:title" content="My Notion Blog" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@_ijjk" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <ul>
        {navItems.map(({ label, page }) => (
          <li key={label}>
            <Link href={page}>
              <a className={pathname === page ? 'active' : undefined}>
                {label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
