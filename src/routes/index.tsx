import {Route, Routes} from 'react-router-dom';
import MainLayout from '../components/Layout';
import {Login, NotFound, Registration, ResetPassword, Todos} from '../pages';
import Dashboard from '../pages/Dashboard';
import {TestReport} from '../pages/Reports';
import {GuestRoute} from './components';
import Page from './components/Page';
import PrivateRoute from './components/PrivateRoute';
import {APP_ROUTES} from './constants';

function AppRoutes() {
    return (
        <Routes>
            <Route
                path='/'
                element={
                    <PrivateRoute>
                        <MainLayout />
                    </PrivateRoute>
                }
            >
                <Route
                    index
                    element={
                        <Page>
                            <Dashboard />
                        </Page>
                    }
                />
                <Route
                    path={APP_ROUTES.testReport()}
                    element={
                        <Page>
                            <TestReport />
                        </Page>
                    }
                />
                <Route
                    path={APP_ROUTES.todos}
                    element={
                        <Page>
                            <Todos />
                        </Page>
                    }
                />
            </Route>
            <Route
                path={APP_ROUTES.login}
                element={
                    <GuestRoute>
                        <Page>
                            <Login />
                        </Page>
                    </GuestRoute>
                }
            />
            <Route
                path={APP_ROUTES.resetPassword}
                element={
                    <Page>
                        <ResetPassword />
                    </Page>
                }
            />
            <Route
                path={APP_ROUTES.registration}
                element={
                    <Page>
                        <Registration />
                    </Page>
                }
            />
            <Route
                path='*'
                element={
                    <Page>
                        <NotFound />
                    </Page>
                }
            />
        </Routes>
    );
}

export default AppRoutes;
