import { useState, useEffect, useRef } from "react";

export function useDebounce(value, delay) {
	const [debouncedValue, setDebouncedValue] = useState(value);
	const [isDebouncing, setIsDebouncing] = useState(false);
	const timerRef = useRef(null);

	useEffect(() => {
		setIsDebouncing(true);
		if (timerRef.current) clearTimeout(timerRef.current);

		timerRef.current = setTimeout(() => {
			setDebouncedValue(value);
			setIsDebouncing(false);
		}, delay);

		return () => clearTimeout(timerRef.current);
	}, [value, delay]);

	return [debouncedValue, isDebouncing];
}
