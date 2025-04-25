export default function Todo({morning, breakfast, readingTime, lunchTime}) {
    return (
        <div className="todo">
            <h1>My Daily Routine</h1>
            <ol>
                <li> Must {morning} at morning - 6 AM</li>
                <li>Breakfast food {breakfast} at - 8:30 AM</li>
                <li>Reading Book at - {readingTime} </li>
                <li>Lunch at - {lunchTime} </li>
                <li>Evening Walk at - 5 PM</li>
                <li>Dinner at - 8 PM</li>
                <li>Sleep at - 10 PM</li>
            </ol>
    </div>
    )
}

// conditional rendering.
// export default function Todo({morning, breakfast, readingTime, isDone}) {
//     if (isDone) {
//         return <li>Finished the task. { morning}</li>
//     }
//     else {
//         return <li>Not finished the task. {morning} </li>
//     }
// }