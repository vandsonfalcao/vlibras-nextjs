import React from "react";
import useReadyStateEffect from "./useReadyStateEffect";

type Props = {
	forceOnload?: boolean;
};

export default function VLibras({ forceOnload }: Props): JSX.Element {
	useReadyStateEffect(
		() => {
			const script = document.createElement("script");
			script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
			script.async = true;
			const widgetUrl = `https://vlibras.gov.br/app`;
			script.onload = () => {
				// @ts-ignore
				new window.VLibras.Widget(widgetUrl);
				if (forceOnload) {
					// @ts-ignore
					window.onload();
				}
			};
			document.head.appendChild(script);
		},
		[forceOnload],
		"complete"
	);

	return (
		// @ts-ignore
		<div vw="true" className="enabled">
			<div vw-access-button="true" className="active" />
			<div vw-plugin-wrapper="true">
				<div className="vw-plugin-top-wrapper" />
			</div>
		</div>
	);
}
