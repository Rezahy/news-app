import NewsApi from "@/api/news";
import LoadingPage from "@/app/loading";
import EmptyView from "@/components/empty-view";
import Header from "@/components/header";
import NewsList from "@/components/news-list";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const SearchPage = () => {
	const { query } = useParams<{ query: string }>();
	const { data, isPending, error } = useQuery({
		queryKey: ["news", "search", query],
		queryFn: NewsApi.searchNews.bind(null, query!),
		enabled: !!query,
	});

	return (
		<div className="sm:px-10 px-7 py-5 pb-10 ">
			{(isPending || data) && (
				<Header>Top news in {query} search keyword</Header>
			)}
			{isPending && <LoadingPage />}
			{data && data.articles?.length > 0 ? (
				<NewsList articles={data.articles} />
			) : (
				<EmptyView>We can't find anything with {query} keyword</EmptyView>
			)}
			{error && <Header>{error.message}</Header>}
		</div>
	);
};
export default SearchPage;
