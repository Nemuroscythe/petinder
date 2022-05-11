import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfileGallery from "./components/ProfileGallery";
import AddPet from "./components/AddPet";

function App() {
    return (
        <div>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <ProfileGallery/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
