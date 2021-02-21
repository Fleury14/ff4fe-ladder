import { Calendar } from 'antd';
import { mockCalendarRaceCell } from '../../data/mock';

const Schedule = (props) => {
  return (
    <Calendar
      dateCellRender={mockCalendarRaceCell}
    />
  )
}

export default Schedule;