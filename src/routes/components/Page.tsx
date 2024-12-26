import {ReactNode, useEffect} from 'react';
import config from '../../app/config';
import {useAppSelector} from '../../hooks/useRedux';

interface Props {
    children: ReactNode;
}

const Page = ({children}: Props) => {
    const title = useAppSelector((state) => state.page.title);
    useEffect(() => {
        if (title) {
            document.title = `${config.projectName || 'Project'} - ${title}`;
        } else {
            document.title = config.projectName || '';
        }
    }, [title]);
    return <>{children}</>;
};

export default Page;
