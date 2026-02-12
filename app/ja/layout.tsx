import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
    title: 'Taskel Documentation (JA)',
    description: 'Taskel - 実行者のためのタスク管理OS',
}

const banner = <Banner storageKey="taskel-beta-banner">Taskel Alpha Version is now available! 🎉</Banner>
const navbar = (
    <Navbar logo={<b>Taskel Docs</b>} />
)
const footer = <Footer>Taskel {new Date().getFullYear()} © Yjiro.</Footer>

import { ReactNode } from 'react'

export default async function JaLayout({ children }: { children: ReactNode }) {
    return (
        <Layout
            banner={banner}
            navbar={navbar}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/yjiro0403/taskel-docs"
            footer={footer}
            editLink="GitHubで編集"
            sidebar={{ defaultMenuCollapseLevel: 1 }}
            i18n={[
                { locale: 'en', name: 'English' },
                { locale: 'ja', name: '日本語' }
            ]}
        >
            {children}
        </Layout>
    )
}
