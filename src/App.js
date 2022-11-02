// import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ClassComponent, { ClassComponent2 } from './classComponent';
import FunctionComponent, { FunctionComponent2 } from './funcComponent';
import StudentDetails from './studentDetails';

// import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
// import LayoutPage from "./pages/LayoutPage";
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";

import React, { useState } from 'react';
import { useOutlet } from 'react-router-dom';

// ---- This function is for Components Rendering with Props ----
// function App() {
//   const details = {
//     "dob": "01/01/1900",
//     "city": "Chennai",
//     "state": "TN",
//     "country": "India"
//   };

//   return (
//     <>
//       <ClassComponent age="20" dateJoined="01/01/2022" />
//       <ClassComponent2 det={details} />
//       <hr />
//       <FunctionComponent name="Dinesh" subject="ReactJs" />
//       <FunctionComponent2 det={details} />
//     </>
    
//   );
// }

// ---- This function is for React Router DOM ----
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<LayoutPage />}>
//             <Route index element={<HomePage />}></Route>
//             <Route exact path="/about" element={<AboutPage />}></Route>
//             <Route exact path="/contact" element={<ContactPage />}></Route>
//           </Route>
//         </Routes>
//       </BrowserRouter>

//       <HashRouter>
//         <Routes>
//           <Route path="/" element={<LayoutPage />}>
//             <Route index element={<HomePage />}></Route>
//             <Route exact path="/about" element={<AboutPage />}></Route>
//             <Route exact path="/contact" element={<ContactPage />}></Route>
//           </Route>
//         </Routes>
//       </HashRouter>
//     </>
//   )
// }

// ---- This function is for Rendering, Conditional Rendering and Rendering with Loops ----
// function App(props) {
//     // const studentNamesArr = ["Dinesh", "Abhinaya", "Gopal", "Kabilan", "Soban"];
//     // let output = [];
//     // studentNamesArr.forEach((v, i)=>{
//     //     output.push(<div key={i}>{v}</div>);
//     // });

//     const studentDetailsArr = [
//         {
//             name: "Dinesh",
//             subject: "HTML"
//         },
//         {
//             name: "Abhinaya",
//             subject: "CSS"
//         },
//         {
//             name: "Gopal",
//             subject: "Bootstrap"
//         },
//         {
//             name: "Kabilan",
//             subject: "ReactJs"
//         },
//         {
//             name: "Soban",
//             subject: "NodeJs"
//         },
//     ];
    
//     // let wrapper = [];
//     // studentDetailsArr.forEach((v, i)=>{
//     //     let output = [];
//     //     for(let temp in v) {
//     //         output.push(<div key={i+temp}>{studentDetailsArr[i][temp]}</div>);
//     //     }
//     //     wrapper.push(<div className='card'>{output}</div>);
//     // });

//     const showDetails = () => {
//         console.log("Function is invoked");
//     }

//     return(
//         <>
//             {/* <h1>I'm Dinesh</h1>
//             <button onClick={showDetails}>Click Here</button> */}

//             {/* {props.logged ? <ClassComponent /> : <FunctionComponent />} */}

//             {/* {props.logged && <ClassComponent />} */}

//             {/* {wrapper} */}

//             {studentDetailsArr.map((v, i) => <StudentDetails key={i} details={v} />)}
//         </>
//     )
// }

// ---- This function is for "state" ----
// function App() {
//     // const name = "Dinesh";
//     // const [name, setName] = useState("Dinesh");
//     const [det, setDet] = useState({
//         name: "Dinesh",
//         subject: "HTML"
//     });

//     const changeName = () => {
//         // setName("Abhinaya");
//         setDet((previousState) => {
//             return {
//                 ...previousState,
//                 subject: "CSS"
//             };
//         });
//     }

//     return (
//         <>
//             <h1>I'm {det.name}</h1>
//             <h3>My Subject: {det.subject}</h3>
//             <button onClick={changeName}>Change Name</button>
//         </>
//     )
// }

// --- This Class is for "state" ----
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Dinesh",
            subject: "ReactJs"
        };
    }

    changeName = () => {
        this.setState((previousState) => {
            return {
                ...previousState,
                name: "Gopal"
            }
        });
    }

    render() {
        return (
            <>
                <h1>I'm {this.state.name}</h1>
                <h2>My Subject is: {this.state.subject}</h2>
                <button onClick={this.changeName}>Change Name</button>
            </>
        )
    }
}









// function App() {
//   // const [det, setDet] = useState({
//   //   name: "Dinesh",
//   //   subject: "ReactJS",
//   //   dateJoined: "01/01/2022"
//   // });
//   // const setDetails = () => {
//   //     setDet(previousState => {
//   //         return {...previousState, subject: "NodeJs"};
//   //     });
//   // }
//   const [det, setDet] = useState({
//     name: "Dinesh"
//   });
//   const setDetails = () => {
//     setDet((previousState)=> {
//       return {...previousState, subject: "ReactJs"};
//     })
//   }
//   return (
//       <div>
//           <h2>I am {det.name}!</h2>
//           <p>Subject: {det.subject}</p>
//           {/* <p>Date Joined: {det.dateJoined}</p> */}
//           <button type="button" onClick={setDetails}>Change Subject</button>
//       </div>
//   );
// }

// function App() {
//   const [det, setDet] = useState({
//     name: "Tony",
//     subject: "ReactJs"
//   });
//   const [login, setLogin] = useState(true);

//   const changeName = () => {
//     setDet((previousState) => {
//       return {...previousState, name: "Priya", subject: "NodeJs", joined: "01/01/2022"};
//     });
//   }

//   const changeLogin = () => {
//     setLogin(false);
//   }
//   const changeLogout = () => {
//     setLogin(true);
//   }
//   return (
//     <>
//       <h1>I'm {det.name}</h1>
//       <h3>Subject: {det.subject}</h3>
//       <h3>Joined: {det.joined}</h3>
//       <button onClick={changeName}>Get Updated Name</button><br />
//       {login.toString()}<br />
//       {login ? <button onClick={changeLogin}>Login</button> : <button onClick={changeLogout}>Logout</button>}
      
//     </>
//   )
// }

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {name: "Tony"};
//   }
//   changeName = () => {
//     this.setState({name: "Dinesh"});
//   }
//   render() {
//     return (
//       <>
//         <p>I'm {this.state.name}</p>
//         <button onClick={this.changeName}>Get Updated Name</button>
//         <p>This is a test data</p>
//         <p>This is a test data</p>
//         <p>This is a test data</p>
//         <p>This is a test data</p>
//         <p>This is a test data</p>
//         <p>This is a test data</p>
//         <p>This is a test data</p>
//         <p>This is a test data</p>
//       </>
//     )
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {subject: "ReactJs"};
//   }

//   // static getDerivedStateFromProps(props, state) {
//   //   return { subject: props.subject}
//   // }

//   componentDidMount() {
//       setTimeout(() => {
//           this.setState({subject: "MongoDB"})
//       }, 4000)
//   }

//   render() {
//     return (
//       <>
//         <p>Subject: {this.state.subject}</p>
//       </>
//     )
//   }
// }

// class App extends React.Component {
//   constructor() {
//       super();
//       this.state = {
//           name: "Dinesh",
//           subject: "ReactJS",
//           dateJoined: "01/01/2022"
//       };
//   }
//   // static getDerivedStateFromProps(props, state) {
//   //     return {subject: props.subject };
//   // }
//   shouldComponentUpdate(previousState) {
//     console.log(previousState.subject);
//     console.log(this.state.subject);
//     if(previousState.subject === this.state.subject) {
//       return false;
//     } else 
//       return true;
//   }
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     document.getElementById("div1").innerHTML = "Before update: " + prevState.subject;
//   }
//   componentDidUpdate() {
//       document.getElementById("div2").innerHTML = "After update: " + this.state.subject;
//   }
//   changeSubject = () => {
//       this.setState({subject: "ReactJS"});
//   }
//   render() {
//       return (
//           <div>
//               <h2>I am {this.state.name}!</h2>
//               <p>Subject: {this.state.subject}</p>
//               <p>Date Joined: {this.state.dateJoined}</p>
//               <button type="button" onClick={this.changeSubject}>Change Subject</button>
//               <div id="div1"></div>
//               <div id="div2"></div>
//           </div>
//       );
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {show: true};
//   }
//   delComp = () => {
//       this.setState({show: false});
//   }
//   render() {
//       let res;
//       if (this.state.show) {
//           res = <StudentDetails />;
//       };
//       return (
//           <div>
//               {res}
//               <button type="button" onClick={this.delComp}>Delete Component</button>
//           </div>
//       );
//   }
// }
// class StudentDetails extends React.Component {
//   componentWillUnmount() {
//       alert("The component named StudentDetails is about to be unmounted.");
//   }
//   render() {
//       return (
//           <h1>Hello World!</h1>
//       );
//   }
// }

export default App;
