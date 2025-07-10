import { useState, useMemo } from "react";
import styles from "./DebouncedSearch.module.scss";
import { useDebounce } from "../hooks/useDebounce";
import { adjectives, nouns } from "../dataTask4";

function DebouncedSearch() {
	const [query, setQuery] = useState("");
	const [debouncedQuery, isDebouncing] = useDebounce(query, 500);

	const items = useMemo(() => {
		return Array.from({ length: 500 }, (_, i) => {
			const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
			const noun = nouns[Math.floor(Math.random() * nouns.length)];
			return `${adj} ${noun} ${i + 1}`;
		});
	}, []);

	const filtered = useMemo(() => {
		const trimmed = debouncedQuery.trim();
		if (!trimmed) return items;

		return items.filter((item) =>
			item.toLowerCase().includes(trimmed.toLowerCase())
		);
	}, [debouncedQuery, items]);


	return (
		<div className={styles.container}>
			<h3 className={styles.heading}>Пошук з debounce</h3>
			<input
				type="text"
				placeholder="Введіть для пошуку..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className={styles.input}
			/>

			{isDebouncing ? (
				<p className={styles.loading}>🔍 Шукаю...</p>
			) : (
				<p className={styles.resultCount}>Знайдено: {filtered.length}</p>
			)}

			<ul className={styles.list}>
				{filtered.map((item, idx) => (
					<li
						key={idx}
						className={`${styles.listItem} ${styles.fade}`}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}

export default DebouncedSearch;
