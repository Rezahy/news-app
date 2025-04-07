import NewsLoadingSkeleton from "@/components/news-loading-skeleton";

const LoadingPage = () => {
	return (
		<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
			{Array(10)
				.fill(0)
				.map((_, index) => (
					<NewsLoadingSkeleton key={index} />
				))}
		</section>
	);
};
export default LoadingPage;
