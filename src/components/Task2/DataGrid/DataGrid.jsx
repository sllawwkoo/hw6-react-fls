import { useCallback, useDeferredValue, useMemo, useState } from "react";
import GridRow from "../GridRow/GridRow";
import { products } from "../ dataTask2";
import styles from "./DataGrid.module.scss";

const DataGrid = () => {
	const [query, setQuery] = useState("");
	const [sortKey, setSortKey] = useState("name");
	const [isAscending, setIsAscending] = useState(true); // по зростанню чі спаданню сортувати

	const deferredQuery = useDeferredValue(query);
	const deferredSortKey = useDeferredValue(sortKey);
	const deferredIsAscending = useDeferredValue(isAscending);

	const handleSort = useCallback(
		(key) => {
			setSortKey(key);
			setIsAscending((prev) => (key === sortKey ? !prev : true));
		},
		[sortKey]
	);

	const filteredSorted = useMemo(() => {
		const filtered = products?.filter((product) =>
			product.name.toLowerCase().includes(deferredQuery.toLowerCase())
		);
		return filtered.sort((a, b) => {
			if (a[deferredSortKey] < b[deferredSortKey])
				return deferredIsAscending ? -1 : 1;
			if (a[deferredSortKey] > b[deferredSortKey])
				return deferredIsAscending ? 1 : -1;
			return 0;
		});
	}, [deferredQuery, deferredSortKey, deferredIsAscending]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.controls}>
				<input
					type="text"
					placeholder="Пошук за назвою"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<div className={styles.sortButtons}>
					<button onClick={() => handleSort("name")}>Назва</button>
					<button onClick={() => handleSort("price")}>Ціна</button>
					<button onClick={() => handleSort("category")}>Категорія</button>
				</div>
			</div>
			<div className={styles.header}>
				<span>Назва</span>
				<span>Ціна</span>
				<span>Категорія</span>
			</div>
			{filteredSorted.map((product) => (
				<GridRow
					key={product.id}
					{...product}
				/>
			))}
		</div>
	);
};

export default DataGrid;