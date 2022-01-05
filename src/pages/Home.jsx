import React, {Component} from 'react';
import img from "../images/Frame.png";
import Cards from "../Components/Cards";
import {Container} from "../Components/Cards";
import About from "./About";
import Stories from "./Stories";

// Components


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [
                {title: "Lorem Ipsum", description: "Aldus PageMaker including versions of Lorem Ipsum"},
                {title: "Aldus PageMaker", description: "Lorem Ipsum and Lore including versions of Lorem Ipsum"},
                {title: "Lorem Ipsum", description: "Aldus PageMaker including versions of Lorem Ipsum"},
                {title: "Aldus PageMaker", description: "Lorem Ipsum and Lore including versions of Lorem Ipsum"},
                {title: "Lorem Ipsum", description: "Aldus PageMaker including versions of Lorem Ipsum"},
                {title: "Aldus PageMaker", description: "Lorem Ipsum and Lore including versions of Lorem Ipsum"}
            ]
        }
    }

    render() {
        const {blogs} = this.state;
        return (
            <div>
                <Cards datas={blogs}/>
            </div>
        );
    }
}

export default Home;
