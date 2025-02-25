import Link from "next/link";

interface FAQCardProps {
    label: string;
    href: string;
}

export const FAQCard = ({ label, href }: FAQCardProps) => {
    return (
        <Link href={href}>
            <div className='border rounded-lg p-4'>
                <h2>{label}</h2>
            </div>
        </Link>
    )
}
