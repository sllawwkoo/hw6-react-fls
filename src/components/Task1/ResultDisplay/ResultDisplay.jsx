import { memo } from "react";
import styles from "./ResultDisplay.module.scss";

function ResultDisplay({ result }) {

	console.log("ResultDisplay");
	

	return (
		<div className={styles.wrapper}>
			<span className={styles.result}>{result}</span>
		</div>
	);
}

export default memo(ResultDisplay);
