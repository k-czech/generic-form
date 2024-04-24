import NextImage from "next/image";

export const Header = () => {
	return (
		<header className="bg-white shadow">
			<div className="container mx-auto py-6">
				<NextImage
					src="https://ql.quadra-net.pl/i/www/MM2_logo.svg"
					alt="Media Markt"
					width={0}
					height={0}
					sizes="100vw"
					className="h-auto w-[240px]"
					priority
				/>
			</div>
		</header>
	);
};
