import { MessageType } from '@/types/message.types';
import Image from 'next/image';
import Link from 'next/link';

interface MessageProps {
    message: MessageType;
}

export const Message = ({ message }: MessageProps) => {
    return (
        <article className="flex gap-4">
            <figure className="mb-2 aspect-square rounded-full bg-gray-700 w-14 h-14 overflow-hidden relative flex items-center justify-center ">
                <Image
                    src={"https://lumiere-a.akamaihd.net/v1/images/anakin_skywalker_003_fbc652cd.jpeg?region=0,0,1379,809"}
                    alt="Picture of the user who posted the message"
                    className='object-cover'
                    fill
                    sizes='64px'
                />
            </figure>
            <section>
                <div className="flex gap-1 items-center">
                    <h3>{message.name}</h3>
                    <p className="text-white/60 ">
                        @<Link href={`/users/${message.username}`}>{message.username}</Link>
                    </p>
                </div>
                <p>{message.messages}</p>
                <div>
                    <Image
                        className='rounded-lg w-auto h-auto'
                        src={"https://lumiere-a.akamaihd.net/v1/images/anakin_skywalker_006_7fed3ce6.jpeg?region=0,0,1231,814"}
                        alt="Picture of the user who posted the message"
                        width={300}
                        height={300}
                    />
                </div>
                <p className='mt-1'>{message.repliesCount} Respuestas</p>
            </section>
        </article>
    )
}
