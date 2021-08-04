const initState = {
  posts: [
    {id:'1', title:'1111', body:'11111111111111'},
    {id:'2', title:'2222', body:'22222222222222'},
    {id:'3', title:'3333', body:'33333333333333'},
  ]
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return post.id !== action.id
    })
    return {
      ...state ,
      posts: newPosts,
    }
  }
  return state
}

export default rootReducer