import { Article } from "@/@types/news";
import News from "./news";

type NewsListProps = {
	articles: Article[];
};
const NewsList = ({ articles }: NewsListProps) => {
	return (
		<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
			{articles.map((article) => (
				<News key={article.url + article.source.url} article={article} />
			))}
		</section>
	);
};
export default NewsList;
