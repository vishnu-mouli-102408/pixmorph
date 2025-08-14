import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Toaster } from "sonner";

import { Providers } from "./providers";

import { fontSans, fontHeading, fontDisplay } from "@/config/fonts";

export const metadata: Metadata = {
	title: {
		default: "PixMorph",
		template: `%s - PixMorph`,
	},
	description:
		"Upload, transform, and optimize your images with AI-powered tools. Resize, crop, remove backgrounds, and more with URL-based transformations.",
	icons: {
		icon: "/favicon/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html suppressHydrationWarning lang="en">
			<head>
				<link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
				<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
				<link rel="shortcut icon" href="/favicon/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
			</head>
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable,
					fontHeading.variable,
					fontDisplay.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col min-h-screen">
						<main className="flex-grow">{children}</main>
						<Toaster richColors position="bottom-center" />
					</div>
				</Providers>
			</body>
		</html>
	);
}
