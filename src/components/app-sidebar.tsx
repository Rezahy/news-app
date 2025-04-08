import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Input } from "./ui/input";
import { Bookmark, Search } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FormEvent, useRef } from "react";
import { newsCategories } from "@/lib/category";
import { Button } from "./ui/button";

export function AppSidebar() {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const searchRef = useRef<HTMLInputElement | null>(null);
	const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.code === "Enter" && searchRef.current) {
			const { value } = searchRef.current;
			if (value.trim().length > 0) {
				navigate(`/search/${decodeURI(value)}`);
			}
		}
	};
	const onSubmitHandler = (e: FormEvent) => {
		e.preventDefault();
		if (searchRef.current && searchRef.current.value.trim().length > 0) {
			const { value } = searchRef.current;
			navigate(`/search/${decodeURI(value)}`);
		}
	};
	return (
		<Sidebar>
			<SidebarHeader className="relative mt-2">
				<form onSubmit={onSubmitHandler}>
					<Input
						placeholder="Search news ..."
						className="pr-9"
						onKeyDown={onKeyDownHandler}
						ref={searchRef}
						autoFocus={false}
					/>
					<Button
						variant="ghost"
						size="sm"
						className="absolute right-2 text-gray-500 top-[50%] -translate-y-[50%]"
					>
						<Search absoluteStrokeWidth size={16} />
					</Button>
				</form>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Bookmarked news</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton asChild isActive={pathname === "/bookmark"}>
									<Link to="/bookmark">
										<Bookmark className="fill-primary text-primary" />
										<span>Bookmarked</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarGroup>
					<SidebarGroupLabel>News categories</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{newsCategories.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild isActive={pathname === item.href}>
										<Link to={item.href}>
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
