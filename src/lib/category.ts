import { Category } from "@/@types/category";
import {
	Cpu,
	FlaskConical,
	Globe,
	Handshake,
	HeartPulse,
	LucideProps,
	MapPinHouse,
	Medal,
	Newspaper,
	TvMinimal,
} from "lucide-react";

export const categories = [
	"general",
	"world",
	"business",
	"technology",
	"entertainment",
	"sports",
	"science",
	"health",
	"nation",
] as const;

export const newsCategories: {
	title: string;
	href: string;
	icon: React.ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
	>;
}[] = [
	{ title: "General", href: "/category/general", icon: Newspaper },
	{ title: "World", href: "/category/world", icon: Globe },
	{ title: "Business", href: "/category/business", icon: Handshake },
	{ title: "Technology", href: "/category/technology", icon: Cpu },
	{ title: "Entertainment", href: "/category/entertainment", icon: TvMinimal },
	{ title: "Sports", href: "/category/sports", icon: Medal },
	{ title: "Science", href: "/category/science", icon: FlaskConical },
	{ title: "Health", href: "/category/health", icon: HeartPulse },
	{ title: "Nation", href: "/category/nation", icon: MapPinHouse },
];

export const isCategory = (name: unknown): name is Category => {
	if (typeof name === "string") {
		return categories.includes(name as Category);
	}
	return false;
};
