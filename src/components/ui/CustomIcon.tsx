import Icon from '@ant-design/icons';
import {LucideProps} from 'lucide-react';
import {ComponentType, FC} from 'react';

interface Props extends LucideProps {
    icon: ComponentType<LucideProps>;
}

export const CustomIcon: FC<Props> = ({icon: Component, size}) => (
    <Icon component={() => <Component size={size} />} />
);
