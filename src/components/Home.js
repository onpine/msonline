import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom'
import img from '../img.png'
import { connect } from 'react-redux';
// import Rainbow from '../hoc/Rainbow'

class Home extends Component {
  render() {
    console.log(this.props)
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={img} alt='img' />
            <div className="card-content">
              <Link to = {'/'+post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ): (
      <div className="center">没有文章进行展示</div>
    )
    return (
      <div>
        <div className="container home">
          <h3 className="center">Home页面</h3>
          {postList}
        </div>
      </div>
    )
  }
 
}

const mapStateToProps = (state => {
  return {
    posts: state.posts
  }
})

export default connect(mapStateToProps)(Home);