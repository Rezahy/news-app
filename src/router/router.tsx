import BookmarkedPage from "@/app/bookmark/page";
import CategoryPage from "@/app/category/[name]/page";
import NotFound from "@/app/not-found";
import HomePage from "@/app/page";
import SearchPage from "@/app/search/[query]/page";
import { Navigate, RouteObject } from "react-router-dom";

const router: RouteObject[] = [
	{ path: "/", element: <HomePage /> },
	{ path: "/category/:name", element: <CategoryPage /> },
	{ path: "/search/:query", element: <SearchPage /> },
	{ path: "/bookmark", element: <BookmarkedPage /> },
	{ path: "/notfound", element: <NotFound /> },
	{ path: "*", element: <Navigate to="/notfound" replace /> },
];
export default router;
