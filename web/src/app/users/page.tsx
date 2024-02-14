"use client";

import UsersList from "./components/users-list";

export default function Page() {
    return (
        <div className="flex items-center">
            <div className="max-w-3xl mx-auto">
                <div className="mt-20 p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flow-root">
                        <UsersList />
                    </div>
                </div>
            </div>
        </div>
    );
}