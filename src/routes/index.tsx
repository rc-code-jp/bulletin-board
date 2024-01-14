import { FileRoute } from "@tanstack/react-router";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";

export const Route = new FileRoute('/').createRoute({
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<div>
			<RegisterForm></RegisterForm>
		</div>
	);
}
