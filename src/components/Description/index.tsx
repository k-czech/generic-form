import { ReactNode } from "react";

export const Description = ({ children }: { children: ReactNode }) => {
	return <p className="text-sm font-normal">{children}</p>;
};
