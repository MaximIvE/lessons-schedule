import schedule from '../../data/schedule.json';
import transcript from '../../data/transcript.json';
import teachers from '../../data/teachers.json';

import { DayStyled, Lesson, Link, Text } from './Day.styled';

const Day = ({group=5, day="Понеділок"}) => {

    // const group = 9;
    // const day="Понеділок";
   

    const getDay=((group, day)=>{
        let numberLesson = 0;
        return schedule[group][day].map(session=>{
            numberLesson = numberLesson + 1;
        const teacher = transcript[group].filter(e=>e.lesson === session);
        const {name, link} = teachers[teacher[0].teacher];
            return  <Lesson key={numberLesson}>

                        { link ? 
                        <Link  target="_blank" rel="noreferrer" title = {name} href={link}>
                           {numberLesson + "."} {session}
                        </Link>
                        : <Text title ={name}>{numberLesson + "."} {session}</Text>}
                    </Lesson>})
    });
    // getDay(group, day)
    
    return  <DayStyled>
                {getDay(group, day)}
            </DayStyled>
};

export default Day;