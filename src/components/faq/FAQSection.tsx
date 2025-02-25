import { FAQPageType } from '@/types/faq.types'
import { FAQCard } from './FAQCard'

interface FAQSectionProps {
    sections: FAQPageType[];
}

export const FAQSection = ({ sections }: FAQSectionProps) => {
    return (
        <>
            <h1 className='mb-4'>Preguntas Frecuentes</h1>

            <section className='grid grid-cols-4 gap-4'>
                {
                    sections.map((section) => (
                        <FAQCard key={section.id} label={section.title} href={`/faq/${section.slug}`} />
                    ))
                }
            </section>
        </>
    )
}
