import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfileGallery from "./components/ProfileGallery";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SetupDate from "./components/SetupDate";

function App() {
    return (
        <div>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<ProfileGallery/>}/>
                            <Route path="/setup-date" element={<SetupDate/>}/>
                            <Route path="*" element={<h2>Page not found</h2>}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
