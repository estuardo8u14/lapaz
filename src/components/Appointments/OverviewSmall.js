import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
	ScheduleComponent,
	Day,
	Week,
	WorkWeek,
	Month,
	Agenda,
	Inject,
	ViewsDirective,
	TimelineViews,
	TimelineMonth,
	DragAndDrop,
	Resize,
	ViewDirective,
} from '@syncfusion/ej2-react-schedule';

function OverviewSmall() {
	return (
		<div>
			<ScheduleComponent
				height='90%'
				currentView='Week'>
				<ViewsDirective>
					<ViewDirective
						option='Day'
						startHour='06:00'
						endHour='23:00'
						displayName='Hoy'></ViewDirective>
					<ViewDirective
						option='Week'
						showWeekend={true}
						displayName='Semana'></ViewDirective>
					<ViewDirective
						option='Month'
						showWeekend={false}
						displayName='Mes'></ViewDirective>
					<ViewDirective option='WorkWeek'></ViewDirective>
					<ViewDirective
						option='Agenda'
						displayName='Agenda'></ViewDirective>
					<ViewDirective
						option='TimelineDay'
						displayName='Línea del tiempo (día)'></ViewDirective>
					<ViewDirective
						option='TimelineWeek'
						displayName='Línea del tiempo (semana)'></ViewDirective>
				</ViewsDirective>
				<Inject
					services={[
						Day,
						Week,
						WorkWeek,
						Month,
						Agenda,
						TimelineViews,
						TimelineMonth,
						DragAndDrop,
						Resize,
					]}
				/>
			</ScheduleComponent>
			{/* <ScheduleComponent>
				<Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
			</ScheduleComponent> */}
		</div>
	);
}

export default OverviewSmall;
