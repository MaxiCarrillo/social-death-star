"use client";

import useMessages from '@/contexts/message.context';
import Image from 'next/image';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface MessagePostFormProps {
    parentId?: string;
}

type FormData = {
    message: string;
}

export const MessagePostForm = ({ parentId }: MessagePostFormProps) => {
    const { postMessages } = useMessages();
    const { register, handleSubmit, resetField, setFocus } = useForm<FormData>();

    useEffect(() => {
        setFocus('message');
    }, []);

    const onSubmit = async (data: FormData) => {
        await postMessages(data.message, parentId);
        resetField('message');
        setFocus('message');
    }

    return (
        <div className='mb-4 flex w-full gap-4'>
            <figure className="flex-shrink-0 mb-2 aspect-square rounded-full w-14 h-14 overflow-hidden relative flex items-center justify-center ">
                <Image
                    src="https://i.pinimg.com/564x/e2/d0/56/e2d0565bb2af730ed20a565a032b60a8.jpg"
                    alt="User"
                    fill
                    className='object-cover'
                />
            </figure>
            <div className='w-full text-end'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea
                        rows={4}
                        className="w-full resize-none bg-gray-700 p-2 rounded-lg"
                        placeholder="¿Qué está pasando?"
                        {...register('message', { required: true })}
                    />
                    <button className="button-primary">Postear</button>
                </form>
            </div>
        </div>
    )
}
