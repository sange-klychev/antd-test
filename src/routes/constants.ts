import urlcat from 'urlcat';

export const APP_ROUTES = Object.freeze({
    login: '/login',
    reports: '/reports',
    testReport: function () {
        return urlcat(this.reports, '/testReport');
    },
    registration: '/registration',
    resetPassword: '/resetPassword',
    todos: '/todos'
});
