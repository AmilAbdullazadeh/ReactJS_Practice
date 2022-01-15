import React, {Fragment} from 'react';
import styled from 'styled-components';

const Post = ({posts}) => (
    <Fragment>
        {
            posts.map((post, idx) => (
                <Item key={idx}>
                    <h5>{post.title}</h5>
                    <p>{post.body}</p>
                </Item>
            ))
        }
    </Fragment>
)

export default Post;

// Styles
const Item = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  row-gap: 10px;
  column-gap: 5px;
  min-height: 350px;
  min-width: 200px;
  border: 1px solid #282c34;
  border-radius: 5px;
  margin: 10px 5px;
`
