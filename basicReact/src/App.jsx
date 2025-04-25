import { useState } from 'react'

import './App.css'
import Developer from './Developer.jsx'
import Todo from './Todo.jsx'
import Actor from './Actor.jsx'
import Singer from './Singer.jsx'
function App() {
  const [count, setCount] = useState(0)
  const actors = ['sakib khan', 'salman khan', 'sharukh khan', 'hrithik roshan', 'tiger shroff', 'ranbir kapoor', 'ranveer singh', 'akshay kumar', 'ajay devgan', 'aamir khan']
  const Singers = [
    { name: "Arjit singh", age: 35, song: "Tum hi ho", Speciality: "Bollywood" },
    { name: "Lata Mangeshkar", age: 92, song: "Lag ja gale", Speciality: "Bollywood" },
    { name: "Kumar Sanu", age: 60, song: "Tujhe dekha to", Speciality: "Bollywood" },
    { name: "Sonu Nigam", age: 50, song: "Kal ho na ho", Speciality: "Bollywood" },
    { name: "Asha Bhosle", age: 89, song: "Dum maro dum", Speciality: "Bollywood" },
    {name : "Atif Aslam", age: 40, song: "Jeene laga hoon", Speciality: "Bollywood"},
    {name : "Armaan Malik", age: 28, song: "Main rahoon ya na rahoon", Speciality: "Bollywood"},
    {name : "Shreya Ghoshal", age: 38, song: "Jaadu hai nasha hai", Speciality: "Bollywood"},
  ]
  return (
    <>
      <h1>My First React App</h1>
      
      <Person />
      <Student Grade="10" Mark="70%" summary="Average"> </Student>
      <Student Grade="7" Mark="50%" summary="Low"> </Student>
      <Student Grade = "12" Mark = "90%" summary =  "Awesome"> </Student>
      <Developer />
      <Device Name="Laptop" price="50,000" Brand="LENEVO"> </Device>
      <Device Name="Gaming Laptop" price="500,000" Brand="DELL"> </Device>
      <Device Name="MACBOOK" price="524,000" Brand="Macintoch"> </Device>
      <Device Name="Mobile" price="533330" Brand="Iphone"> </Device>
      <Todo morning = "Yoga" breakfast = "dim puch" readingTime = "10PM" lunchTime = "11" isDone = "true"> </Todo>
       <Todo morning = "Running" breakfast = "pantha vat" readingTime = "11PM" lunchTime = "12:20PM" isDone = "false"> </Todo>
      <Actor name="Sarukh Khan"></Actor>
      <Actor name="Bappa raz"></Actor>
      {
        actors.map(actor => <Actor name = {actor}></Actor>)
      }

      {
        Singers.map(singer => <Singer singer={singer} ></Singer>)
      }
    </>
  )
}

function Person() {
  const name = "Joy Shib";
  const age = 25;
  const isStudent = true;

  const person = { name: "Joy Shib", age: 25, isStudent: true };

  return (
    // <h3>My name is { name}, I am {age} year old and i am a {isStudent} </h3>
    <h3> My Name is {person.name}.I am {person.age} years old.</h3>
   
  )
}
// distructuring..
const {Grade, Mark, summary} = {Grade: "10", Mark: "70%", summary: "Average"};
  function Student ({ Grade, Mark, summary }) {
  return (
    <div className='student'> 
     <h1>Student Informations.</h1>
     <p>Class :{Grade} </p>
    <p>Score : {Mark} </p>
    <p>Performence : {summary} </p>
    </div>
  )
}

function Device(props) {
  const deviceStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid black",
    borderRadius: "10px",
    backgroundColor: "lightpink",
    color: "black",
    fontSize: "20px",
    fontWeight: "2rem",
  }
  return (
    <div className="device" style={deviceStyle}>
      <h1>Device Informations.</h1>
      <h3>Device Name : {props.Name}</h3>
      <p>Price : {props.price}</p>
      <p>Brand : {props.Brand}</p>
      </div>
    )
}

export default App
