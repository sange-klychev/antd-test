import {Rule} from 'antd/es/form';

interface IRules {
    email: Rule[];
    password: Rule[];
    confirmPassword: Rule[];
}

export const resetPasswordRules: IRules = {
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
    ],
    confirmPassword: [
        {
            required: true,
            message: 'Please enter confirm password'
        }
    ]
};
