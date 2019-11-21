export const BlogService = {
    getAllPosts(axios, filter) {
      return axios
        .get("/api/services/app/Post/GetAllUi", {
          params: filter
        })
        .then(resp => {
          return resp
        })
    },
  
    getRecentPosts(axios, postCategoryId, takePost) {
      return axios
        .get("/api/services/app/Post/GetRecentPosts", {
          params: { postCategoryId: postCategoryId, takePost: takePost }
        })
        .then(resp => {
          return resp
        })
    },
  
    getRelatedPosts(axios, postId, takePost) {
      return axios
        .get("/api/services/app/Post/GetRelatedPosts", {
          params: { postId: postId, takePost: takePost }
        })
        .then(resp => {
          return resp
        })
    },
  
    getBlogDetail(axios, id) {
      return axios
        .get("/api/services/app/Post/GetUi", {
          params: {
            id: id
          }
        })
        .then(resp => {
          return resp
        })
    }
  }
  export default BlogService
  