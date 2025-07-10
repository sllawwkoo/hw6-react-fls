import TaskCard from "../TaskCard/TaskCard";
import { tasks } from "../../data";
import Calculator from "./Calculator/Calculator";

function Task1() {
	const { title, text } = tasks[0];
	return (
		<>
			<TaskCard
				title={title}
				text={text}
			/>
			<Calculator/>
		</>
	);
}

export default Task1;
