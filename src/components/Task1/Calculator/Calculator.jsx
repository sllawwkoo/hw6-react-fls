import styles from "./Calculator.module.scss";
import { useId, useMemo, useState } from "react";
import ResultDisplay from "../ResultDisplay/ResultDisplay";

function Calculator() {
	const [value1, setValue1] = useState("");
	const [value2, setValue2] = useState("");
	const [counter, setCounter] = useState(0);

	const myId1 = useId();
	const myId2 = useId();

	const handleClickChange1 = (e) => {
		setValue1(e.target.value);
	};
	const handleClickChange2 = (e) => {
		setValue2(e.target.value);
	};

	const getSum = useMemo(() => {
		const result = parseFloat(value1) + parseFloat(value2);

		return isNaN(result) ? "" : result;
	}, [value1, value2]);

	const handleClickIncrement = () => {
		setCounter((prev) => prev + 1);
	};

	const handleClickDecrement = () => {
		setCounter((prev) => prev - 1);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.inputsBlock}>
					<div className={styles.inputLine}>
						<label htmlFor={myId1}>Введіть перше число</label>
						<input
							id={myId1}
							type="number"
							value={value1}
							onChange={handleClickChange1}
						/>
					</div>
					<div className={styles.inputLine}>
						<label htmlFor={myId2}>Введіть друге число</label>
						<input
							id={myId2}
							type="number"
							value={value2}
							onChange={handleClickChange2}
						/>
					</div>
				</div>
				<ResultDisplay result={getSum} />
				<div className={styles.counterBlock}>
					<button
						className={styles.counterButton}
						onClick={handleClickIncrement}
					>
						+
					</button>
					<span className={styles.counter}>{counter}</span>
					<button
						className={styles.counterButton}
						onClick={handleClickDecrement}
					>
						-
					</button>
				</div>
			</div>
		</div>
	);
}

export default Calculator;
