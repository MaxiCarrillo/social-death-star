import { FAQCard } from '@/components/faq/FAQCard'
import { FAQSection } from '@/components/faq/FAQSection'
import faqsAPI from '@/services/faq/faq.service'
import React from 'react'

const FAQPage = async () => {

    const faqPages = await faqsAPI.getFAQPages();

    return (
        <section className='p-4'>
            <FAQSection sections={faqPages.data} />
        </section>
    )
}

export default FAQPage