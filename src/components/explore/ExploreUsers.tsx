import { TrendingUserType } from "@/types/user.types";
import Link from "next/link";
import { USER_CARD_LAYOUT, UserCard } from "../users/UserCard";

interface ExploreUsersProps {
    users: TrendingUserType[];
}

export const ExploreUsers = ({ users }: ExploreUsersProps) => {

    if (!users || !users.length) return null;

    return (
        <div className="border border-white/15 rounded-lg px-8 py-4">
            <h2>A quién seguir</h2>
            <ul className="flex flex-col gap-4 mt-4">
                {
                    users.slice(0, 4).map((user, index) => (
                        <li key={index}>
                            <UserCard user={user} layout={USER_CARD_LAYOUT.VERTICAL} />
                        </li>
                    ))
                }
                {
                    users.length > 4 && <li className="text-white/50">
                        <Link href="/explore?type=USERS" className="link-primary">Mostrar más</Link>
                    </li>
                }
            </ul>
        </div >
    )
}
