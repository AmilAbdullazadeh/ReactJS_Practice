import React, {Component} from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 5px 20px;
  background-color: beige;
  display: flex;
  column-gap: 15px;
  row-gap: 15px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
`;

export const Card = styled.div`
  width: 300px;
  height: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  box-shadow: 2px 3px 20px -1px;
`;

class Cards extends Component {

    render() {
        const {datas} = this.props;
        return (
            <Container>
                {
                    datas.map((data, idx) => (
                        <Card key={idx} >
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                        </Card>
                    ))
                }
            </Container>
        );
    }
}

export default Cards;
