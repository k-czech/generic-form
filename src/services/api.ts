import { promises as fs } from "fs";

export type FormFieldProps = {
	id: string;
	title?: string;
	type:
		| "SELECT"
		| "TEXT"
		| "TEXTAREA"
		| "PHONE"
		| "EMAIL"
		| "POSTAL_CODE"
		| "BUILDING_NUMBER"
		| "APARTMENT_NUMBER"
		| "RADIO"
		| "FILE";
	required: boolean;
	options?: string[];
	label?: string;
	format?: string;
	amount?: number;
	maxLength?: number;
};

type FormFieldSectionProps = {
	id: string;
	title: string;
	fields: FormFieldProps[];
};

type FormFieldDataProps = {
	title: string;
	description: string;
	sections: FormFieldSectionProps[];
};

export type FormDataProps = {
	id: string;
	data: FormFieldDataProps;
};

export const getFormField = async () => {
	const path = `${process.cwd()}/src/app/data.json`;
	const file = await fs.readFile(path, "utf8");
	const data: FormDataProps = JSON.parse(file);
	return data;
};
