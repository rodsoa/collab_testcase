'use client';

import { useAppContext } from "@/app/layout";
import { useRouter } from "next/navigation";

const UsersListItem = ({ user }: any) => {
    const [state, setState] = useAppContext();
    const router = useRouter();

    const handleClick = () => {
        setState(user)
        router.push('/users/detail');
    }

    return (
        <li className="py-3 sm:py-4" onClick={handleClick}>
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img
                        className="w-10 h-10 rounded-full"
                        src={user.picture.thumbnail}
                        alt="Neil image"
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {`${user.name.first} ${user.name.last}`}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {user.email}
                    </p>
                </div>
            </div>
        </li>
    );
}

export default UsersListItem;