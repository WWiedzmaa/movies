import axios from "axios";
import { React } from 'react';

class ApiUtil {
  static baseUrl = "https://api.themoviedb.org/3/";
  static apiKey = process.env.REACT_APP_API_KEY;
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