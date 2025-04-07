import NewsApi from "@/api/news";
import NewsList from "@/components/news-list";
import { useQuery } from "@tanstack/react-query";
import LoadingPage from "./loading";
import Header from "@/components/header";

const HomePage = () => {
	const { data, isPending, error } = useQuery({
		queryKey: ["news", "search", "usa"],
		queryFn: NewsApi.searchNews.bind(null, "usa"),
	});

	return (
		<div className="px-7 py-7 sm:px-10 pb-10">
			{(isPending || data) && <Header>Top news in USA</Header>}
			{isPending && <LoadingPage />}
			{data && <NewsList articles={data.articles} />}
			{error && <Header>{error.message}</Header>}
		</div>
	);
};
export default HomePage;
