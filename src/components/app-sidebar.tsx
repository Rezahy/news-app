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
import { useRef } from "react";
import { newsCategories } from "@/lib/category";

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
	return (
		<Sidebar>
			<SidebarHeader className="relative mt-2">
				<Input
					placeholder="Search news ..."
					className="pr-8"
					onKeyDown={onKeyDownHandler}
					ref={searchRef}
				/>
				<Search
					absoluteStrokeWidth
					size={16}
					className="absolute right-4 text-gray-500 top-[50%] -translate-y-[50%]"
				/>
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
