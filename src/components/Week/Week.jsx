import Day from "components/Day";

import schedule from '../../data/schedule.json';

import { Text, WeekStyled, List } from './Week.styled';

const Week = () => {
    const weekDayss = ["Понеділок", "Вівторок", "Середа", "Четверг", "П'ятниця"];
    const group = 8;
    // const day="Понеділок";

    const getWeek = (weekDays) => {

       return  weekDays.map((day) => {
        const info = schedule[group][day];
        if (!info) return null;
        return <li key={group + day}> <Day group={group} day={day}/> </li>;
       }) 
    
    };

    return (
        <WeekStyled>
            <Text>{group} клас</Text>
            <List>
                {getWeek(weekDayss)}
            </List>
        </WeekStyled>
    )


}

export default Week;