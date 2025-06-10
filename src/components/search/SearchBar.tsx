"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
    query: string;
}

interface SearchBarProps {
    initialQuery?: string;
}

export const SearchBar = ({ initialQuery }: SearchBarProps) => {

    const router = useRouter();
    const { register, handleSubmit, setValue } = useForm<FormData>({
        defaultValues: {
            query: initialQuery
        }
    })

    useEffect(() => {
        setValue('query', initialQuery || '')
    }, [initialQuery])

    const onSubmit = (data: FormData) => {
        router.push(`/?query=${data.query}&type=hash`)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='flex gap-2 border-b border-white/15 p-4'>
                <input
                    {...register("query")}
                    id="query"
                    type="search"
                    placeholder="Buscar..."
                    className="w-full rounded-full bg-transparent border border-none outline outline-1 outline-white/15 focus:outline-blue-500 focus:outline-2 px-4 py-2"
                />
                <button className='button-primary'>Buscar</button>
            </form>
        </>
    )
}
