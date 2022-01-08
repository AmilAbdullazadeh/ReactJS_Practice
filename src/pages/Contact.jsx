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
        //mutable
        this.state = {
            firstname: '',
            age: 0,
            car: 'BMW',
            loan: false
        }
    }

    handleChange = (event) => {
        const { type, checked, name, value } = event.target;
        this.setState({ [name]: type === 'checkbox' ? checked : value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // if (!this.state.firstname || !this.state.age || !this.state.description || !this.state.car || !this.state.loan) return alert("Please enter your data to form")
        let data = {
            firstname: this.state.firstname,
            age: this.state.age,
            description: this.state.description,
            car: this.state.car,
            loan: this.state.loan
        }
        console.log('data', data);
    }

    handleText = (name) => {
        alert(name);
    }

    render() {
        const {firstname, age, description, car, loan} = this.state;
        return (
            <Container>

                <form onSubmit={this.handleSubmit}>
                    <Container>
                        <label htmlFor="firstname">Firstname</label>
                        <input type="text" name="firstname" value={firstname} placeholder="Please enter your first name"
                               onChange={this.handleChange}/>

                        <label htmlFor="age">Age</label>
                        <input type="number" name="age" value={age} placeholder="Please enter your age"
                               onChange={this.handleChange}/>

                        <label htmlFor="description">Description</label>
                        <textarea type="text" name="description" value={description}
                                  placeholder="Please enter your description" onChange={this.handleChange}/>

                        <label htmlFor="car">Car</label>
                        <select name="car" onChange={this.handleChange} value={car}>
                            <option value="BMW">BMW</option>
                            <option value="KIA">KIA</option>
                        </select>

                        <label htmlFor="loan">Loan</label>
                        <input type="checkbox" name="loan" checked={loan} onChange={this.handleChange}/>

                        <button type='submit'>Submit</button>
                    </ Container>
                </form>

                <CustomButton type='button' eventName={() => this.handleText("Hello")}/>

            </Container>
        );
    }
}

export default Contact;
