import { Children } from '@/utils/types';
import ScrollSmootherWrapper from '@/utils/gsap/ScrollSmoother';
import Footer from '@/components/Footer/Footer';
import { Metadata } from 'next';
import { Locale, MetadataParams } from '@/i18n/types';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: MetadataParams): Promise<Metadata> {
    const { locale } = await params;
    if (!routing.locales.includes(locale as Locale)) notFound();
    const t = await getTranslations('experience.metadata');

    return {
        title: t('title'),
        description: t('description')
    }
}

function Layout({ children }: Children) {
    return (
        <ScrollSmootherWrapper>
            <main>
                { children }
            </main>
            <Footer />
        </ScrollSmootherWrapper>
    )
}

export default Layout;