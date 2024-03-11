import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const Day = new Date();
const Hours = Day.getHours();
let text;
const customStyle = {
    color: ""
}
if(Hours<12){
    text = "Good Morning";
    customStyle.color = "red";
}
else if(Hours>12 && Hours<18){
    text = " Good Evening";
    customStyle.color= "green";
}
else{
    text = "Good Night";
    customStyle.color= "blue";
};



ReactDOM.createRoot(document.getElementById('root')).render(
<>
<h1 style={customStyle}>Hey {text}</h1>

</>
)
 