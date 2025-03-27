"use client";

import useMessages from '@/contexts/message.context';
import { UserType } from '@/types/user.types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface MessagePostFormProps {
    parentId?: string;
    currentUser?: UserType;
}

type FormData = {
    message: string;
}

export const MessagePostForm = ({ parentId, currentUser }: MessagePostFormProps) => {
    const router = useRouter();
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

    if (!currentUser) return <div className='mb-4 flex flex-col items-center justify-center gap-4 border border-blue-500 rounded-lg p-4'>
        <h3>Inicia sesión para escribir un mensaje</h3>
        <button className="button-primary" onClick={()=>router.push('/login')}>Iniciar sesión</button>
    </div>;

    return (
        <div className='mb-4 flex w-full gap-4'>
            <figure className="flex-shrink-0 mb-2 aspect-square rounded-full w-14 h-14 overflow-hidden relative flex items-center justify-center ">
                <Image
                    src={currentUser?.photoUrl}
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
