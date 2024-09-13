import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import NavBar2 from "./component/NavBar2";
import News from "./component/News";
function App() {
    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <Navbar/>
                    <NavBar2 />
                    <div className="container">
                        <div className="row">
                            <div className="col-md">
                                <Routes>
                                    <Route
                                        path="/"
                                        element={
                                            <News key="general"
                                            category="general" />}
                                    />
                                    <Route
                                        path="/entertainment"
                                        element={
                                            <News key="entertainment"
                                            category="entertainment" />
                                        }
                                    />
                                    <Route
                                        path="/Technology"
                                        element={
                                            <News key="technology"
                                            category="technology" />}
                                    />
                                    <Route
                                        path="/Sports"
                                        element={
                                            <News key="sports"
                                            category="sports" />}
                                    />
                                    <Route
                                        path="/business"
                                        element={
                                            <News key="business"
                                            category="business" />}
                                    />
                                    <Route
                                        path="/health"
                                        element={
                                            <News key="health"
                                            category="health" />}
                                    />
                                    <Route
                                        path="/science"
                                        element={
                                            <News key="science"
                                            category="science" />}
                                    />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
