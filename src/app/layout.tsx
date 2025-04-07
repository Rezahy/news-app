import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "sonner";
import { useTheme } from "@/providers/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { theme } = useTheme();
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="w-screen">
				<SidebarTrigger className="mt-5 ml-5" />
				<section className="max-w-6xl mx-auto">{children}</section>
			</main>
			<div className="absolute top-5 right-5">
				<ModeToggle />
			</div>
			<Toaster theme={theme} />
		</SidebarProvider>
	);
}
