import { Category } from "@/@types/category";
import { NewsResponse } from "@/@types/news";
import { isCategory } from "@/lib/category";
import requestErrorMessage from "@/lib/request-error";
import axiosInstance from "@/services/axios/axios-instance";

class NewsApi {
	static async searchNews(query: string) {
		// ! This code below show space with %2520 instead %20
		// const response = await axiosInstance.get("search", {
		// 	params: { q: encodeURI(query) },
		// });
		const response = await axiosInstance.get(`search?q=${encodeURI(query)}`);
		if (response.status !== 200) {
			throw new Error(requestErrorMessage(response.status));
		}
		return response.data as NewsResponse;
	}
	static async searchNewsByCategory(category: Category) {
		if (!isCategory(category)) {
			throw new Error(`There is't ${category} category on website`);
		}
		const response = await axiosInstance.get("top-headlines", {
			params: {
				category,
			},
		});
		if (response.status !== 200) {
			throw new Error(requestErrorMessage(response.status));
		}

		return response.data as NewsResponse;
	}
}

export default NewsApi;
