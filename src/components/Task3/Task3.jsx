import TaskCard from "../TaskCard/TaskCard";
import { tasks } from "../../data";
import WindowSizeDisplay from "./WindowSizeDisplay/WindowSizeDisplay";

function Task3() {
	const { title, text } = tasks[2];
	return (
		<>
			<TaskCard
				title={title}
				text={text}
			/>
			<WindowSizeDisplay/>
		</>
	);
}

export default Task3;
