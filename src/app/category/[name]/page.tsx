import { Category } from "@/@types/category";
import NewsApi from "@/api/news";
import LoadingPage from "@/app/loading";
import Header from "@/components/header";
import NewsList from "@/components/news-list";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
	const { name } = useParams<{ name: string }>();
	const { data, isPending, error } = useQuery({
		queryKey: ["news", "category", name],
		queryFn: NewsApi.searchNewsByCategory.bind(null, name as Category),
	});

	return (
		<div className="px-7 py-7 sm:px-10 pb-10 ">
			{(isPending || data) && <Header>Top news in {name}</Header>}
			{isPending && <LoadingPage />}
			{data && <NewsList articles={data.articles} />}
			{error && <Header>{error.message}</Header>}
		</div>
	);
};
export default CategoryPage;
