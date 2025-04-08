import { Article } from "@/@types/news";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Bookmark, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import useNews from "@/store/news";
import { useTransition } from "react";
import { wait } from "@/lib/wait";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type NewsProps = {
	article: Article;
};
const News = ({ article }: NewsProps) => {
	const isBookmarked = useNews((state) => state.isBookmarked);
	const bookmarkNews = useNews((state) => state.bookmarkNews);
	const unBookmarkNews = useNews((state) => state.unBookmarkNews);
	const [isPending, startTransition] = useTransition();

	const newsButtonTriggerHandler = () => {
		startTransition(async () => {
			await wait(3000);
			if (isBookmarked(article)) {
				unBookmarkNews(article);
				toast.success("news un bookmarked successfully");
			} else {
				bookmarkNews(article);
				toast.success("news  bookmarked successfully");
			}
		});
	};

	return (
		<Card className="gap-2 pt-0 group h-full">
			<div className="rounded-t-xl mb-2 shadow overflow-hidden h-[200px] relative">
				<img
					src={article.image}
					alt={article.title}
					className="h-full object-cover w-full group-hover:scale-115 transition-all duration-500"
				/>
				<Button
					className="xl:scale-0 xl:opacity-0  cursor-pointer absolute top-2 right-2  dark:bg-black/50  dark:hover:bg-black/75 group-hover:scale-100 group-hover:opacity-100 duration-300"
					variant="outline"
					size="icon"
					disabled={isPending}
					onClick={newsButtonTriggerHandler}
				>
					{isPending ? (
						<Loader className="animate-spin" />
					) : (
						<Bookmark
							className={cn("h-4 w-4", {
								"fill-primary text-primary": isBookmarked(article),
							})}
						/>
					)}
				</Button>
			</div>
			<CardHeader>
				<CardDescription className="text-xs">
					<Badge variant="secondary">
						{new Date(article.publishedAt).toDateString()}
					</Badge>
				</CardDescription>
				<CardTitle className="text-lg group-hover:underline cursor-pointer">
					<Link to={article.url} target="_blank">
						{article.title}
					</Link>
				</CardTitle>
			</CardHeader>
			<CardContent className="flex-1">
				<p className="line-clamp-3">{article.description}</p>
			</CardContent>
			<CardFooter className="text-xs">
				<p>Written by {article.source.name}</p>
			</CardFooter>
		</Card>
	);
};
export default News;
