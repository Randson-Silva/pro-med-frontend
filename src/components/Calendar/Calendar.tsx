import { useState } from "react";
import "./styles.css";

function Calendar() {
    const [month, setMonth] = useState(new Date().getMonth())
    const [year, setYear] = useState(new Date().getFullYear())

    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    function getDaysInMonth(month: number, year: number) {
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    }

    function getMonthDaysByWeekDay() {
        const monthDays = getDaysInMonth(month, year);

        return [
            {
                name: 'Dom',
                weekDayIndex: 0,
                days: monthDays.filter(date => date.getDay() === 0),
            },
            {
                name: "Seg",
                weekDayIndex: 1,
                days: monthDays.filter(date => date.getDay() === 1),

            },
            {
                name: "Ter",
                weekDayIndex: 2,
                days: monthDays.filter(date => date.getDay() === 2),

            },
            {
                name: "Quar",
                weekDayIndex: 3,
                days: monthDays.filter(date => date.getDay() === 3),

            },
            {
                name: "Qui",
                weekDayIndex: 4,
                days: monthDays.filter(date => date.getDay() === 4),

            },
            {
                name: "Sex",
                weekDayIndex: 5,
                days: monthDays.filter(date => date.getDay() === 5),

            },
            {
                name: "Sáb",
                weekDayIndex: 6,
                days: monthDays.filter(date => date.getDay() === 6),

            }
        ]
    }

    const monthFirstDay = new Date(year, month, 1).getDay();

    return (
        <div className="calendar">
            <div className="calendar-header">
                <h1>{monthNames.at(month)?.toUpperCase()}</h1>
                <h2>{year}</h2>
            </div>
            
            <div className="calendar-columns">
                {getMonthDaysByWeekDay().map(column => {
                    const columnDays = column.days.map(date => date.getDate());

                    return (
                        <div 
                            className={`calendar-column ${column.weekDayIndex < monthFirstDay ? 'down' : ''}`}
                        >
                            <span className="calendar-column-header">
                                {column.name}
                            </span>

                            <div className="calendar-column-days">
                                {columnDays.map(value => <span>{value}</span>)}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Calendar