import { useEffect, useState } from "react";

function useMediaQuery(query: string): boolean {
	const [matches, setMatches] = useState(false);
	useEffect(
		() => {
			const mediaQuery = window.matchMedia(query);
			setMatches(mediaQuery.matches);
			const handler = (event: any) => setMatches(event.matches);
			mediaQuery.addEventListener("change", handler);
			return () => mediaQuery.removeEventListener("change", handler);
		}, // eslint-disable-next-line react-hooks/exhaustive-deps
		[],
	);
	return matches;
}

export default function useBreakpoints() {
	const breakpoints = {
		isSm: useMediaQuery("(max-width: 768px)"),
		isMd: useMediaQuery("(min-width: 769px) and (max-width: 1024px)"),
		isLg: useMediaQuery("(min-width: 1025px)"),
		active: "xs",
	};
	if (breakpoints.isSm) breakpoints.active = "sm";
	if (breakpoints.isMd) breakpoints.active = "md";
	if (breakpoints.isLg) breakpoints.active = "lg";
	return breakpoints;
}
