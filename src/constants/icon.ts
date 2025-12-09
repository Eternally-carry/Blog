import type { Favicon } from "@/types/config.ts";

export const defaultFavicons: Favicon[] = [
	{
		src: "/favicon/favicon-b.ico",
		theme: "light",
		sizes: "256*256",
	},
	{
		src: "/favicon/favicon-w.ico",
		theme: "dark",
		sizes: "256*256",
	},
];
