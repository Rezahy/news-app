import { Article } from "@/@types/news";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
	bookmarkedNewsList: Article[];
};

type Actions = {
	bookmarkNews: (news: Article) => void;
	unBookmarkNews: (news: Article) => void;
	isBookmarked: (news: Article) => boolean;
};

const useNews = create<State & Actions>()(
	persist(
		(set, get) => ({
			bookmarkedNewsList: [],
			bookmarkNews: (news: Article) => {
				set((state) => ({
					bookmarkedNewsList: [news, ...state.bookmarkedNewsList],
				}));
			},
			unBookmarkNews: (news: Article) => {
				set((state) => ({
					bookmarkedNewsList: state.bookmarkedNewsList.filter(
						(item) => item.url !== news.url
					),
				}));
			},
			isBookmarked: (news: Article) => {
				return get().bookmarkedNewsList.some((item) => item.url === news.url);
			},
		}),
		{ name: "@news-app:bookmarked-news-list-state-1.0.0", version: 1 }
	)
);

export default useNews;
