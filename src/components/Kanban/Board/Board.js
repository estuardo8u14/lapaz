import React, { useState, useEffect, useReducer, createContext } from 'react';
import NewTask from './New Task/NewTask';
import BoardLanes from './BoardLanes';
import './Board.css';
const stagesData = [
	{ name: 'Pendientes', id: 1 },
	{ name: 'En curso', id: 2 },
	{ name: 'Terminadas', id: 3 },
];
const taskData = [
	{
		id: 1,
		title: 'Orden Juan Pérez',
		description: 'Sulfato de magnesio 5 g',
		stage: 1,
		startDate: new Date(2020, 3, 1),
		endDate: new Date(2020, 3, 20),
	},
	{
		id: 2,
		title: 'Orden Maria Gonzáles',
		description: 'Laxis, I Ampolla IV cada doce horas.',
		stage: 1,
		startDate: new Date(2020, 2, 25),
		endDate: new Date(2020, 3, 25),
	},
	{
		id: 3,
		title: 'Orden Julio Madriz',
		description: 'Riesgo de déficit de líquidos',
		stage: 2,
		startDate: new Date(2020, 1, 1),
		endDate: new Date(2020, 1, 25),
	},
	{
		id: 4,
		title: 'Orden Miguel Asturias',
		description:
			'Valorar reflejos del paciente, diuresis y frecuencia respiratoria',
		stage: 3,
		startDate: new Date(2020, 0, 5),
		endDate: new Date(2020, 1, 15),
	},
	{
		id: 5,
		title: 'Orden Javier Givarra',
		description: 'Administración de oxígeno',
		stage: 3,
		startDate: new Date(2020, 2, 5),
		endDate: new Date(2020, 3, 12),
	},
	{
		id: 6,
		title: 'Orden Diego Ruíz',
		description: 'Conectar monitor cardíaco',
		stage: 3,
		startDate: new Date(2020, 2, 5),
		endDate: new Date(2020, 3, 12),
	},
];

export const BoardContext = createContext({});

function reducer(state, action) {
	switch (action.type) {
		case 'ON_DROP':
			const droppedTask = action.payload;
			const updatedTasks = state.map((task) => {
				if (task.id === droppedTask.id) {
					return droppedTask;
				}
				return task;
			});
			return updatedTasks;
		case 'LOAD_DATA':
			return action.payload;
		case 'ADD_NEW':
			return [...state, action.payload];
		case 'ON_DELETE':
			return state.filter((task) => task.id !== action.payload);
		default:
			return state;
	}
}
function Board() {
	const [taskState, dispatch] = useReducer(reducer, taskData);
	const [stages, setStage] = useState(stagesData);

	useEffect(() => {
		dispatch({ type: 'LOAD_DATA', payload: taskState });
	}, [taskState, stages]);

	const onDragStartHandler = (event, taskId, stageId) => {
		var data = {
			taskId: taskId,
			stageId: stageId,
		};
		event.dataTransfer.setData('text/plain', JSON.stringify(data));
		event.dataTransfer.effectAllowed = 'move';
		//event.dataTransfer.setData("taskName", taskName);
	};

	const onTaskContainerDragStartHandler = (event, laneId) => {
		let fromBox = JSON.stringify({ laneId: laneId });
		event.dataTransfer.setData('laneId', fromBox);
	};
	const onTaskContainerDragOverHandler = (event) => {
		if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
			event.preventDefault();
		}
	};

	const onTaskContainerDropHandler = (event, droppedLaneId) => {
		/*  let fromLane:any = JSON.parse(event.dataTransfer.getData("laneId"));
   swapStages(fromLane.laneId,droppedLaneId) */
	};

	const swapStages = (fromLane, toLane) => {
		/*  const filterStage = stages.filter((x) => x.id === fromLane);
      filterStage[0].id=toLane;
      setStage([...stages,filterStage[0]]) */
	};
	const onDragOverHandler = (event) => {
		if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
			event.preventDefault();
		}
	};

	const onDropHandler = (event, droppedStageId) => {
		let droppedData = event.dataTransfer.getData('text/plain');
		droppedData = JSON.parse(droppedData);
		const filterTask = taskState.filter((x) => x.id === droppedData.taskId);
		filterTask[0].stage = droppedStageId;
		dispatch({ type: 'ON_DROP', payload: filterTask[0] });
	};

	const onAddingNewTask = (dataFromChild) => {
		dataFromChild.stage = 1;
		dataFromChild.id = taskState.length + 1;
		dispatch({ type: 'ADD_NEW', payload: dataFromChild });
	};

	const onUpdatingTask = (dataFromChild) => {
		console.log(dataFromChild);
		dispatch({ type: 'ON_DROP', payload: dataFromChild });
	};

	const onDeletingTask = (taskId) => {
		dispatch({ type: 'ON_DELETE', payload: taskId });
	};

	const ContextData = {
		taskState,
		onDragStartHandler,
		onDragOverHandler,
		onDropHandler,
		onUpdatingTask,
		onDeletingTask,
		onTaskContainerDragStartHandler,
		onTaskContainerDropHandler,
		onTaskContainerDragOverHandler,
	};

	return (
		<div className='container-fluid pt-3'>
			<div className='row'>
				<div className='col-lg-12'>
					<NewTask addNewTask={onAddingNewTask} />
				</div>
			</div>
			<hr />
			<div className='row'>
				<div className='col-lg-12'>
					<BoardContext.Provider value={ContextData}>
						<BoardLanes stages={stages}></BoardLanes>
					</BoardContext.Provider>
				</div>
			</div>
		</div>
	);
}

export default Board;
