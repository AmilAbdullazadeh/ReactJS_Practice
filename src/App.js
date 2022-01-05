import './App.css';
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Stories from "./pages/Stories";

// router
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <h5>Navbar</h5>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/about/black">Black About</Link></li>
                        <li><Link to="/about/red">Red About</Link></li>
                        <li><Link to="/stories">Stories</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/" >
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/stories">
                        <Stories/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
