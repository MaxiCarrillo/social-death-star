import { UserTabs } from "@/components/users/UserTabs"
import userAPI from "@/services/users/users.service"
import Image from "next/image"
import Link from "next/link"

interface UserPageContainerProps {
    username: string
}

const UserPageContainerAsync = async ({ username }: UserPageContainerProps) => {
    const userPromise = userAPI.getUserData(username);
    const userMessagesPromise = userAPI.getUserMessages(username);
    const userMessagesRepliesPromise = userAPI.getUserMessagesReplies(username);
    const userFollowersPromise = userAPI.getUserFollowers(username);
    const userFollowingPromise = userAPI.getUserFollowing(username);

    const [user, userMessages, userMessagesReplies, userFollowers, userFollowing] = await Promise.all([
        userPromise,
        userMessagesPromise,
        userMessagesRepliesPromise,
        userFollowersPromise,
        userFollowingPromise
    ])

    return (
        <main className="border-r border-l h-full border-white/15">
            <div className="flex flex-col gap-2 py-4 px-4 border-b border-white/15">
                <div className="aspect-square rounded-full bg-gray-700 w-16 flex items-center justify-center overflow-hidden ">
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
                    @<Link href={`/users/${user.username}`}>{user.username}</Link>
                </div>
                <div>
                    {user.bio}
                </div>
                <div className="flex gap-4">
                    <p><strong>{user.followersCount}</strong> Seguidores</p>
                    <p><strong>{user.followingCount}</strong> Siguiendo</p>
                </div>
            </div>
            <UserTabs
                messages={userMessages.content}
                replies={userMessagesReplies.content}
                followers={userFollowers.content}
                following={userFollowing.content}
            />
        </main>
    )
}

export default UserPageContainerAsync