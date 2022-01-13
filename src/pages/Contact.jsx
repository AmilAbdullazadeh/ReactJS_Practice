import React, {Component} from 'react';
import styled from 'styled-components';
import CustomButton from "../components/CustomButton";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
  column-gap: 20px;
`;

// Multiple Select

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowing: false,
            password: ''
        }
        console.log('constructor is working !!', this.state);
    }

    handleChange = (event) => {
        const {type, checked, name, value} = event.target;
        this.setState({
            [name]: type === 'checkbox' ? checked : value
        });
    }

    componentDidMount() {
        console.log('componentDidMount is working !!', this.state);
    }

    componentDidUpdate(prevState) {
        console.log('componentDidUpdate is working !!');
    }

    componentWillUnmount() {
        this.setState({
            isShowing: false,
            password: ''
        });
        console.log('componentWillUnmount is working !!', this.state);
    }

    render() {
        const {isShowing, password} = this.state;
        return (
            <Container>
                <Container>
                    <label htmlFor="password">Password</label>
                    <input type={isShowing === true ? 'text' : 'password'} name="password" value={password} placeholder="Please enter your password"
                           onChange={this.handleChange}/>
                    <input type="checkbox" name="isShowing" checked={isShowing} onChange={this.handleChange}/>
                </ Container>
            </Container>
        );
    }

    handleSubmit
}

export default Contact;
