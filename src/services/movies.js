import axios from "axios";

class MovieDataService {
  getAll(page = 0) {
    return axios.get(`https://review-movies.onrender.com/movies?page=${page}`);
    //return axios.get(`https://review-movies.onrender.com/movies?`, {params: {page: page}})
  }
  get(id) {
    return axios.get(`https://review-movies.onrender.com/movies/${id}`);
  }
  find(query, by = "title", page = 0) {
    return axios.get(
      `https://review-movies.onrender.com/movies?${by}=${query}&page=${page}`
    );
  }
  createReview(data) {
    return axios.post("https://review-movies.onrender.com/reviews", data);
  }
  updateReview(data) {
    return axios.put("https://review-movies.onrender.com/reviews", data);
  }
  deleteReview(data) {
    return axios.delete("https://review-movies.onrender.com/reviews", data);
  }
  getRatings() {
    return axios.get("https://review-movies.onrender.com/movies/ratings");
  }
}
const movieDataServiceInstance = new MovieDataService();

export default movieDataServiceInstance;
