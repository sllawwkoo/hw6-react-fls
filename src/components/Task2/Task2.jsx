import TaskCard from "../TaskCard/TaskCard";
import { tasks } from "../../data";
import DataGrid from "./DataGrid/DataGrid";

function Task2() {
	const { title, text } = tasks[1];
	return (
		<>
			<TaskCard
				title={title}
				text={text}
			/>
			<DataGrid/>
		</>
	);
}

export default Task2;
