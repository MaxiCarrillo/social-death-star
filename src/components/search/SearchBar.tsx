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
        <form onSubmit={handleSubmit(onSubmit)} className='flex gap-2'>
            <input
                {...register("query")}
                id="query"
                type="text"
                placeholder="Buscar #ejemplo..."
                className="px-2 py-1 rounded-md text-foreground text-gray-800 w-full"
            />
            <button className='button-primary'>Buscar</button>
        </form>
    )
}
