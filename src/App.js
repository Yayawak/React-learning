import './App.css';
import AppHeader from './AppHeader';
import PageHome from './PageHome';
import PageAbout from './PageAbout';
import Page404 from './Page404';
import { Routes, Route} from 'react-router-dom';

function App() {
    return (
        <div>
            <AppHeader />
            <Routes>
                <Route path='/' element={<PageHome />} exact/>
                <Route path='/about' element={<PageAbout />} />   
                <Route path='*' element={<Page404 />} />
            </Routes>
        </div>
        
    );
}

export default App;
