import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router';
import App from './app';
import './index.css';
import {setupStore} from './redux';

const store = setupStore();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);
