import {Rule} from 'antd/es/form';

interface IRules {
    email: Rule[];
    name: Rule[];
    password: Rule[];
    confirmPassword: Rule[];
}

export const registrationRules: IRules = {
    email: [
        {
            required: true,
            message: 'Please enter your email'
        }
    ],
    name: [
        {
            required: true,
            message: 'Please enter your name'
        }
    ],
    password: [
        {
            required: true,
            message: 'Please enter your password'
        }
    ],
    confirmPassword: [
        {
            required: true,
            message: 'Please enter confirm password'
        }
    ]
};
