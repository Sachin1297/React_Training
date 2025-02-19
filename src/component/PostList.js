import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts : []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/userMgmt/element')
        .then(response => {
            console.log(response)
            this.setState({posts : response.data}) 
        })
        .catch(error =>{
            console.log(error)
        })
    }
    
    render() {
        const { posts } = this.state 
        return (
            <div>
                List of posts
                {
                    posts.length ?
                    posts.map(post => <div key={post._id}>{post.name}</div>) :
                    null
                }  
            </div>
        );
    }
}

export default PostList;