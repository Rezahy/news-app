import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	params: {
		apikey: import.meta.env.VITE_API_KEY,
		lang: "en",
	},
});

export default axiosInstance;
