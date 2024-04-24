import { ReactNode } from "react";

export const Title = ({ children }: { children: ReactNode }) => {
	return <h1 className="text-3xl font-normal">{children}</h1>;
};
