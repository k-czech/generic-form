import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Quadra Net - sieć serwisowa, serwis AGD, RTV, IT. Zgłoszenie nowej naprawy",
		short_name: "Quadra-Net",
		description:
			"QUADRA-NET zapewnia kompleksowe usługi serwisowe elektroniki użytkowej. Zapraszamy do zapoznania się z naszą ofertą. Serwis AGD, RTV oraz IT",
		start_url: "/",
		display: "standalone",
		background_color: "#FFFFFF",
		theme_color: "#45388f",
		icons: [
			{
				src: "/images/icon-192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/images/icon-512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	};
}
