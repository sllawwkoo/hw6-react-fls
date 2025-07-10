import TaskCard from "../TaskCard/TaskCard";
import { tasks } from "../../data";
import DebouncedSearch from "./DebouncedSearch/DebouncedSearch";

function Task4() {
	const { title, text } = tasks[3];
	return (
		<>
			<TaskCard
				title={title}
				text={text}
			/>
			<DebouncedSearch/>
		</>
	);
}

export default Task4;
