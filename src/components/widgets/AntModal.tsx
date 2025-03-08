import {Modal} from 'antd';
import {FC, ReactNode} from 'react';

interface Props {
    content: ReactNode;
    open: boolean;
    handleOk: VoidFunction;
    handleCancel: VoidFunction;
    title: string;
}

export const AntModal: FC<Props> = ({
    content,
    open,
    handleOk,
    handleCancel,
    title
}) => (
    <Modal
        open={open}
        title={title}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, {OkBtn, CancelBtn}) => (
            <>
                <CancelBtn />
                <OkBtn />
            </>
        )}
    >
        {content}
    </Modal>
);
