import styles from "./WindowSizeDisplay.module.scss";
import useWindowSize from "../hooks/useWindowSize";
import pcImg from '../../../assets/img/pc.webp';
import tabletImg from "../../../assets/img/tablet.webp";
import phoneImg from "../../../assets/img/phone.webp";

function WindowSizeDisplay() {
	const { width, height } = useWindowSize();

	let deviceImage = phoneImg;
	let deviceLabel = 'Телефон';

	if (width >= 992) {
		deviceImage = pcImg;
		deviceLabel = 'Монітор';
	} else if (width >= 560) {
		deviceImage = tabletImg;
		deviceLabel = 'Планшет';
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.card}>
				<h2 className={styles.text}>Розмір вікна: {width} x {height}</h2>
				<img src={deviceImage} alt={deviceLabel} className={styles.image} />
				<p className={styles.label}>{deviceLabel}</p>
			</div>
		</div>
	);
}

export default WindowSizeDisplay;