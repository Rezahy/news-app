import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div className="px-7 py-7 sm:px-10 pb-10">
			<Header>404 not found page</Header>
			<Button asChild>
				<Link to="/" replace>
					Back to home page
				</Link>
			</Button>
		</div>
	);
}
