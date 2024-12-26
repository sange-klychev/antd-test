import {Rule} from 'antd/es/form';

interface IRules {
    email: Rule[];
    password: Rule[];
}

export const loginRules: IRules = {
    email: [
        {
            required: true,
            message: 'Please enter your email'
        }
    ],
    password: [
        {
            required: true,
            message: 'Please enter your password'
        }
    ]
};
