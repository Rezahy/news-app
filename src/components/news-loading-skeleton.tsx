import { Skeleton } from "./ui/skeleton";

const NewsLoadingSkeleton = () => {
	return (
		<div className="flex flex-col space-y-3">
			<Skeleton className="h-[200px]  rounded-xl" />
			<div className="space-y-2">
				<Skeleton className="h-3 w-[30%]" />
				<Skeleton className="h-3" />
				<Skeleton className="h-3" />
				<Skeleton className="h-3" />
				<Skeleton className="h-3" />
				<Skeleton className="h-3" />
				<Skeleton className="h-3" />
				<Skeleton className="h-3" />
				<Skeleton className="h-3" />
			</div>
			<div className="mt-8">
				<Skeleton className="h-3 w-[60%]" />
			</div>
		</div>
	);
};
export default NewsLoadingSkeleton;
