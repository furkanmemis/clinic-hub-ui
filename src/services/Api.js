import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_BASE_URL;

class ApiService {
  constructor(service) {
    this.service = service;
    this.url = `${serverUrl}/${service}`;
  }

  getHeaders() {
    const token = localStorage.getItem("authentication-token");
    return {
      Authorization: token ? `Bearer ${token}` : "",
    };
  }

  get(endpoint = "") {
    return axios.get(`${this.url}/${endpoint}`, {
      headers: this.getHeaders(),
    });
  }

  post(endpoint = "", data) {
    return axios.post(`${this.url}/${endpoint}`, data, {
      headers: this.getHeaders(),
    });
  }

  put(endpoint = "", data) {
    return axios.put(`${this.url}/${endpoint}`, data, {
      headers: this.getHeaders(),
    });
  }

  delete(endpoint = "") {
    return axios.delete(`${this.url}/${endpoint}`, {
      headers: this.getHeaders(),
    });
  }
}

const AuthenticationService = new ApiService("auth");

export { AuthenticationService };