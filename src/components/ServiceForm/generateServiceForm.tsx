import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FormFieldProps } from "@/services/api";

export const generateServiceForm = (field: FormFieldProps) => {
	switch (field.type) {
		case "SELECT":
			return (
				<Select>
					<SelectTrigger>
						<SelectValue placeholder={field.title || field.label} />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							{field.options?.map((option) => (
								<SelectItem key={option} value={option}>
									{option}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			);
		case "RADIO":
			return (
				<RadioGroup>
					{field.options?.map((option) => (
						<div key={option} className="flex items-center space-x-2">
							<RadioGroupItem value={option} id={option} />
							<Label htmlFor={option}>{option}</Label>
						</div>
					))}
				</RadioGroup>
			);
		case "EMAIL":
			return <Input type="email" placeholder={field.title || field.label} />;
		case "PHONE":
			return <Input type="tel" placeholder={field.title || field.label} />;
		case "TEXTAREA":
			return (
				<Textarea
					placeholder={field.title || field.label}
					maxLength={field.maxLength}
				/>
			);
		case "FILE":
			return <Input type="file" placeholder={field.title || field.label} />;
		case "POSTAL_CODE":
			return <Input type="text" placeholder={field.title || field.label} />;
		case "TEXT":
			return <Input type="text" placeholder={field.title || field.label} />;
	}
};
