import axios from "axios";

class ApiUtil {
  static baseUrl = "https://api.themoviedb.org/3/";
  static apiKey = "5219cb6186dc8cdfa863dcdc035f17f8";
  static async getAll() {
    try {
      const response = await axios.get(`${this.baseUrl}trending/all/day`, {
        params: {
            api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {}
  }
  static async getMovies() {
    try {
      const response = await axios.get(`${this.baseUrl}trending/movie/day`, {
        params: {
            api_key: this.apiKey,
        },  
      });
      return response.data;
    } catch (error) {}
  }
  static async getSerial() {
    try {
      const response = await axios.get(`${this.baseUrl}trending/tv/day`, {
        params: {
            api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {}
  }
  static async getPeople() {
    try {
      const response = await axios.get(`${this.baseUrl}trending/person/day`, {
        params: {
            api_key: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {}
  }
}

export default ApiUtil;