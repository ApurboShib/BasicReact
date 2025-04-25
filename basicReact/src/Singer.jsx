export default function Singers({singer}) {
    return (
        <div>
            <h3>Singer : {singer.name} </h3>
            <p>Age : {singer.age} </p>
            <p>Best Song : {singer.song} </p>
            <p>Singer Specialoty : {singer.Speciality} </p>
        </div>
    )
    
}