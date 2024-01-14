import { FileRoute } from "@tanstack/react-router";
import { useMemo } from "react";

export const Route = new FileRoute('/view/$q').createRoute({
	component: ViewComponent,
});

function ViewComponent() {
	const { q } = Route.useParams();

	const str = useMemo(() => decodeURIComponent(q), []);

	return (
		<div className="box">
			<div className="left-box">
				<p>
					お知らせ
					<br />
					<span>Info</span>
				</p>
			</div>
			<div className="slide-sample">
				<ul>
					<li>{str}</li>
				</ul>
			</div>
		</div>
	);
}
