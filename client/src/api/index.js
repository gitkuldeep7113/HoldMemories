import axios from 'axios';
 
const url = 'http://localhost:5000/posts'

const fetchPosts = () => axios.get(url);