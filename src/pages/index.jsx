import AboutMe from './about-me';
import Gallery from './gallery';
import Contacts from './contacts';
import Messages from './messages';

import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/messages" element={<Messages />} />
        </Routes>
    )
}

export default App;