import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/Header";

const sourceSans = Source_Sans_3({
	subsets: ["latin"],
	weight: ["400", "700"],
	display: "swap",
	style: ["normal"],
	variable: "--font-source-sans",
});

export const metadata: Metadata = {
	title:
		"Quadra Net - sieć serwisowa, serwis AGD, RTV, IT. Zgłoszenie nowej naprawy",
	description:
		"QUADRA-NET zapewnia kompleksowe usługi serwisowe elektroniki użytkowej. Zapraszamy do zapoznania się z naszą ofertą. Serwis AGD, RTV oraz IT",
	openGraph: {
		locale: "pl_PL",
		siteName: "Quadra-Net",
		alternateLocale: "en_GB",
		title:
			"Quadra Net - sieć serwisowa, serwis AGD, RTV, IT. Zgłoszenie nowej naprawy",
		description:
			"QUADRA-NET zapewnia kompleksowe usługi serwisowe elektroniki użytkowej. Zapraszamy do zapoznania się z naszą ofertą. Serwis AGD, RTV oraz IT",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl-PL">
			<body className={sourceSans.className}>
				<Header />
				<main>{children}</main>
				<Toaster />
			</body>
		</html>
	);
}
