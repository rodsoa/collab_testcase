import useSWR from 'swr'
import UsersListItem from './users-list-item';

const UsersList = () => {
    const fetcher = (url: string) => fetch(url).then(r => r.json())
    const { data, isLoading } = useSWR('http://localhost:3333/api/users?results=10&nat=BR', fetcher)

    if (isLoading) return <h1>carregando ...</h1>

    return (
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {data.results.map((user: any) => <UsersListItem user={user} key={user.login.uuid} />)}
        </ul>
    );
};

export default UsersList;