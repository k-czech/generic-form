"use client";

import { serviceAction } from "@/app/actions";
import { FormDataProps } from "@/services/api";
import { useFormState } from "react-dom";
import { generateServiceForm } from "./generateServiceForm";
import { Button } from "../ui/button";

export const ServiceForm = ({ form }: { form: FormDataProps }) => {
	const [state, action] = useFormState(
		(_prevState: unknown, formData: FormData) => {
			return serviceAction(formData);
		},
		null,
	);

	return (
		<form action={action} className="space-y-10">
			{form.data.sections.map((section) => (
				<fieldset
					key={section.id}
					className="flex max-w-3xl flex-col space-y-3"
				>
					<input type="hidden" name="id" value={form.id} readOnly />
					<span className="mb-4 text-2xl font-normal">{section.title}</span>
					{section.fields.map((field) => (
						<label key={field.id}>{generateServiceForm(field)}</label>
					))}
				</fieldset>
			))}
			<Button
				type="submit"
				className="w-full max-w-xs uppercase transition-colors duration-500 hover:bg-slate-700"
			>
				Wyślij
			</Button>
		</form>
	);
};
