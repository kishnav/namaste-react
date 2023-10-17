import React from "react";
import ReactDOM from "react-dom/client";

 // React Element 
  //QUESTION 1
//   const header = React.createElement("div",{id:"root",className:"title"},[
//     React.createElement("h1",{},"This is h1"),
//     React.createElement("h2",{},"This is h2"),
//     React.createElement("h3",{},"This is h3"),
//     React.createElement("h4",{},"This is h4"),
//     React.createElement("h5",{},"This is h5"),
//     React.createElement("h6",{},"This is h6")
//   ])

// console.log(header)
// const header = React.createElement("h1",{id:"h"}, "This is react element")

     // QUESTION 2,3,4

     //    create element using jsx
    //  const element1 = <div className="title">
    //     <h6>Create</h6>
    //     <h5>Element</h5>
    //     <h4>Using</h4>
    //     <h3>JSX</h3>
    //     <h2>IN</h2>
    //     <h1>Namaste React</h1>

    //  </div>

    // EXAMPLE 5 OR 6

    // const Func1 = ()=>{
    // return (
    // <div className="title">
    //     <h6>Create</h6>
    //     <h5>Element</h5>
    //     <h4>Using</h4>
    //     <h3>JSX</h3>
    //     <h2>IN</h2>
    //     <h1>Namaste React</h1>

    //  </div>
    // )
    // }
    //  const Header = ()=>{
    //     return (
    //        <div>
    //          <h1>Functional Component</h1>
    //            <Func1/>
              
    //       </div>
    //    )
    // }

    // LAST QUESTION OF ASSIGNMENT 3
    
    const HeaderComponent = () => {
        return (
            <header>
             <h1>This is header</h1>
            </header>
        )
    }

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(root)
root.render(<HeaderComponent/>)