import React, {Component} from 'react';

class Home extends Component {
    constructor() {
        super();
        // immutable
        this.state = {
            name: 'Amil',
            age: 18,
            hobbies: ["Football", "Baseball", "Tennis"],
            family: {
                brother: "Asim"
            },
            animals: {
                bird: 'fluffy',
                dog: 'Ruffles'
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    // handleChange = () => {
    //     // change
    //     this.setState({
    //         name: 'Asim'
    //     }, () => console.log("name", this.state.name))
    // }

    handleChange() {
        // change
        this.setState({
            name: 'Asim',
            animals: {
                ...this.state.animals,
                dog: "Pati"
            }
        }, () => console.log("state", this.state))
    }


    render() {
        return (
            <div>
                <div>Username is: {this.state.name}</div>
                <div>
                    Hobbies: <br/>
                    {
                        this.state.hobbies.map((hobby, idx) => (<p key={idx}>{hobby}</p>))
                    }
                </div>
                <div>
                    Brother name is: {this.state.family.brother}
                </div>
                <div>
                    <button onClick={this.handleChange}>Change</button>
                </div>
            </div>
        );
    }
}

export default Home;
