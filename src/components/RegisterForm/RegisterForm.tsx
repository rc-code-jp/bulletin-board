import { useNavigate } from "@tanstack/react-router";

import { useState } from "react";

export function RegisterForm() {
	const navigate = useNavigate();
	const [inputValue, setInputValue] = useState("");

	const submit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// XSS対策
		const q = encodeURIComponent(inputValue);

		navigate({
			to: "/view/$q",
			params: {
				q: q,
			},
		});
	};

	return (
		<form onSubmit={submit}>
			<div>
				<input
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
			</div>
			<div>
				<button type="submit">submit</button>
			</div>
		</form>
	);
}
