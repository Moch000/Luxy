import React from "react";
import { StyleReset } from "atomize";

export default function Main({ Component, pageProps }) {
	return (
		<>
			<StyleReset />
			<Component {...pageProps} />
		</>
	);
}
