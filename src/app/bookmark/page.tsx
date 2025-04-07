import EmptyView from "@/components/empty-view";
import Header from "@/components/header";
import News from "@/components/news";
import useNews from "@/store/news";
import { AnimatePresence, motion } from "motion/react";

const BookmarkedPage = () => {
	const bookmarkedNewsList = useNews((state) => state.bookmarkedNewsList);
	return (
		<div className="sm:px-10 px-7 py-5 pb-10 ">
			<Header>Bookmarked News</Header>
			{bookmarkedNewsList.length > 0 ? (
				<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
					<AnimatePresence>
						{bookmarkedNewsList.map((article, index) => (
							<motion.div
								layout
								key={article.url + article.source.url}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									duration: 0.25,
									delay: index / 10,
								}}
								exit={{ opacity: 0 }}
							>
								<News article={article} />
							</motion.div>
						))}
					</AnimatePresence>
				</section>
			) : (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<EmptyView>Your Bookmarked News List is Empty</EmptyView>
				</motion.div>
			)}
		</div>
	);
};
export default BookmarkedPage;
