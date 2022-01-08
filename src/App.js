import './App.css';
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Stories from "./pages/Stories";
import Contact from "./pages/Contact";

// router
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <h5>Navbar</h5>
                <nav>
                    <List>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/about/black">Black About</Link></li>
                        <li><Link to="/about/red">Red About</Link></li>
                        <li><Link to="/stories">Stories</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </List>
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
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
