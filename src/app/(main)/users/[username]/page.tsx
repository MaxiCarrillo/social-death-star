import { UserTabs } from "@/components/UserTabs/UserTabs"
import Image from "next/image"
import Link from "next/link"
import ProfileImage from "../.././../../../public/anakin_profile.webp"

const UserPage = ({ params }: { params: { username: string } }) => {

    const user = {
        username: params.username,
        name: 'Anakin Skywalker',
        bio: 'Yo soy el elegido, el que traerá equilibrio a la fuerza',
        followersCount: 15,
        followingCount: 3,
        messages: [
            {
                name: 'Anakin Skywalker',
                username: 'anakin',
                messages: 'Jar Jar Binks es un Sith Lord',
                repliesCount: 3,
            },
            {
                name: 'Anakin Skywalker',
                username: 'anakin',
                messages: 'Obi-Wan, eres un traidor',
                repliesCount: 2,
            }
        ],
        replies: [
            {
                name: 'Anakin Skywalker',
                username: 'anakin',
                messages: 'No, no, no. Eso no es verdad. Eso es imposible',
                repliesCount: 0,
            }
        ]
    }

    return (<main className="flex flex-col bg-gray-900 p-8">
        <div className="mb-2 aspect-square rounded-full bg-gray-700 w-16 flex items-center justify-center overflow-hidden ">
            <Image
                src={ProfileImage}
                alt="Picture of the user"
                width={64}
                height={64}
                priority
                placeholder="blur"
            />
            {/* <h2>
                AK
            </h2> */}
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
        <UserTabs messages={user.messages} replies={user.replies} />
    </main>
    )
}

export default UserPage
