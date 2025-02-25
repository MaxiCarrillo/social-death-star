import { UserTabs } from "@/components/users/UserTabs"
import userAPI from "@/services/users/users.service"
import Image from "next/image"
import Link from "next/link"

const UserPage = async ({ params }: { params: { username: string } }) => {

    const userPromise = userAPI.getUserData(params.username);
    const userMessagesPromise = userAPI.getUserMessages(params.username);
    const userMessagesRepliesPromise = userAPI.getUserMessagesReplies(params.username);

    const [user, userMessages, userMessagesReplies] = await Promise.all([
        userPromise,
        userMessagesPromise,
        userMessagesRepliesPromise
    ])

    return (<main className="flex flex-col bg-gray-900 p-8">
        <div className="mb-2 aspect-square rounded-full bg-gray-700 w-16 flex items-center justify-center overflow-hidden ">
            <Image
                src={user.photoUrl}
                alt="Picture of the user"
                width={64}
                height={64}
                priority
            />
        </div>
        <div>
            <h2>
                {user.name}
            </h2>
        </div>
        <div>
            @<Link href={`/users/${user.username}`}>{user.username}</Link>
        </div>
        <div className="my-4">
            {user.bio}
        </div>
        <div className="flex gap-4 mb-4">
            <p><strong>{user.followersCount}</strong> Seguidores</p>
            <p><strong>{user.followingCount}</strong> Siguiendo</p>
        </div>
        <UserTabs messages={userMessages.content} replies={userMessagesReplies.content} />
    </main>
    )
}

export default UserPage
