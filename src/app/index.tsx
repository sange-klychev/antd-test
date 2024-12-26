import {ToastContainer} from 'react-toastify';
import Routes from '../routes';

const App: React.FC = () => {
    return (
        <>
            <Routes />
            <ToastContainer />
        </>
    );
};

export default App;
