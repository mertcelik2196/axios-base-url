import axios from "axios";

const axiosBaseURL = axios.create({
baseURL: "https://netoniro.herokuapp.com/api/"
});

export default axiosBaseURL;
