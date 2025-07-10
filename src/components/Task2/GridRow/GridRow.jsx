import { memo } from "react";
import styles from "./GridRow.module.scss";

function GridRow({name, price, category}) {
	return (
		<div className={styles.row}>
			<span>{name}</span>
			<span>{`$${price}`}</span>
			<span>{category}</span>
		</div>
	);
}

export default memo (GridRow);