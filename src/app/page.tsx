import { Title } from "@/components/Title";
import { Description } from "@/components/Description";
import { Section } from "@/components/Section";
import { ServiceForm } from "@/components/ServiceForm";
import { getFormField } from "@/services/api";

export default async function Home() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	const form = await getFormField();

	return (
		<>
			<Section>
				<article className="space-y-3">
					<Title>{form.data.title}</Title>
					<Description>{form.data.description}</Description>
				</article>
			</Section>
			<Section>
				<ServiceForm form={form} />
			</Section>
		</>
	);
}
