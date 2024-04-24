"use server";

export const serviceAction = async (data: FormData) => {
	console.log("serviceAction", Object.fromEntries(data.entries()));
};
