import { useState } from "react";
import "./styles.css"

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
                name: 'sundays',
                days: monthDays.filter(date => date.getDay() === 0),
            },
            {
                name: "mondays",
                days: monthDays.filter(date => date.getDay() === 1),

            },
            {
                name: "tuesdays",
                days: monthDays.filter(date => date.getDay() === 2),

            },
            {
                name: "wednesdays",
                days: monthDays.filter(date => date.getDay() === 3),

            },
            {
                name: "thursdays",
                days: monthDays.filter(date => date.getDay() === 4),

            },
            {
                name: "fridays",
                days: monthDays.filter(date => date.getDay() === 5),

            },
            {
                name: "saturdays",
                days: monthDays.filter(date => date.getDay() === 6),

            }
        ]
    }

    const monthDaysByWeekDay = getMonthDaysByWeekDay();

    return (
        <div className="calendar">
            <div className="calendar-header">
                <h1>{monthNames.at(month)?.toUpperCase()}</h1>
                <h2>{year}</h2>
            </div>
            {/* 
            <div className="calendar-columns">
                {monthDaysByWeekDay.map(column => {
                    const columnValues = [column.name, column.days.map(date => date.getDate())];

                    return (
                        <div className="calendar-column">
                            {columnValues.map(value => <span>{value}</span>)}
                        </div>
                    ) 
                })}
            </div> */}

            <div className="calendar-column">
                <table>
                    <thead>
                        <tr>
                            <td>Seg</td>
                            <td>Ter</td>
                            <td>Qua</td>
                            <td>Qui</td>
                            <td>Sex</td>
                            <td>Sab</td>
                            <td>Dom</td>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>29</td>
                            <td>30</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Calendar