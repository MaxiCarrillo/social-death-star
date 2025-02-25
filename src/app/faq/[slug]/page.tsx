import { FAQSection } from '@/components/faq/FAQSection';
import faqsAPI from '@/services/faq/faq.service';

const FAQPage = async ({ params }: { params: { slug: string } }) => {

    const faqPages = await faqsAPI.getFAQPages();
    const faqPage = faqPages.data.find((page) => page.slug === `/${params.slug}`);

    return (
        <section className='p-4'>

            <FAQSection sections={faqPages.data} />

            <section className='mt-8'>
                <h2>{faqPage?.body}</h2>
            </section>
        </section>
    )
}

export default FAQPage