import {useAuth} from '../../hooks';

interface Props {
    className?: string;
}

function Dashboard({className}: Props) {
    const {user} = useAuth();
    if (user) {
        return (
            <div className={className}>
                <div className='text-3xl'>
                    Nice to meet you,{' '}
                    <span className='font-bold'>{user.name}</span>
                </div>
            </div>
        );
    }
    return <div className={className}>Dashboard</div>;
}

export default Dashboard;
