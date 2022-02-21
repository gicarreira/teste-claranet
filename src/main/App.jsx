import { Routes, Route } from "react-router-dom";

import Home from '../telas/home/Home'
import Login from '../telas/login/Login'

function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;