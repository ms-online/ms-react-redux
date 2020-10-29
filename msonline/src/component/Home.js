import React, { Component } from 'react';
import axios from 'axios';
// import Rainbow from '../hoc/Rainbow'


class Home extends Component {
    state = {
        posts: [],
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log(res)
            this.setState({
                posts:res.data.slice(0,20)
            })

        })
    }
    render() {
        const { posts } = this.state
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key = {post.id}>
                        <div className="card-content">
                            <span className="card-title">{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ): (
            <div className="center">没有博客文章进行展示！</div>
        )
         return (
        <div>
            <div className="container">
                <h3 className="center"> Home页面</h3>
              {postList}
            </div>
        </div>
    )
    }
   
}

export default Home