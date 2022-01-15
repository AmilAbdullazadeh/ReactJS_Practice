import React, {useState, useEffect, useCallback} from 'react';

// libs
import styled from 'styled-components';
import axios from "axios";

// comps
import Post from '../components/Post';

const Posts = () => {
    // useState
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // declare the async data fetching function
    const fetchPosts = useCallback(async () => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(data);
        setLoading(false);
    }, [])

    // componentDidMount, componentDidUpdate, componentShouldUpdate, componentWillUnmount
    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <Container>
            {
                !loading ? (<Post posts={posts} />) : 'Loading...'
            }
        </Container>
    )
}


export default Posts;

// Styles
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 25px;
  min-height: 100vh;
  min-width: 100%;
`
