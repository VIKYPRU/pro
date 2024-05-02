import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Event from "./components/Event";
import State from "./components/State";
import Counter from "./components/Counter";
import Task2 from "./components/Task2";
import Jsx from "./components/Jsx";
// import Task3 from './components/Task3';
// import Task4 from './components/Task4';
// import Task5 from './components/Task5';
// import Tasks5 from './components/Tasks5';
// import Task6 from './components/Task6';
import UseEffect from "./components/UseEffect";
import Convert from "./components/Convert";
import Togconv from "./components/Togconv";
import SetTimeout from "./components/SetTimeout";
import SetInterval from "./components/SetInterval";
import HappyBrithday from "./components/HappyBrithday";
import Task7 from "./components/Task7";
import Task8 from "./components/Task8";
// import Http from './components/Http';
import HttpPost from "./components/HttpPost";
import React, { useReducer } from "react";
import Reduce from "./components/Reduce";
import UseReduceObj from "./components/UseReduceObj";
import A from "./components/A";
import C from "./components/C";

import B from "./components/B";
import Loading from "./components/Loading";
import UseCallback from "./components/UseCallback";
import UseMemo from "./components/UseMemo";
import UseRef1 from "./components/UseRef1";
import UseRef2 from "./components/UseRef2";
import Task9UseReduce from "./components/Task9UseReduce";
import Click1 from "./components/Click1";
import Click2 from "./components/Click2";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import Product from "./components/Product";
import Portal from "./components/Portal";
import ErrorBoundary from "./components/ErrorBoundary";
import Counter11 from "./components/Counter11";
import Counter12 from "./components/Counter12";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import Test2 from "./components/Test2";
import CounterFunction from "./components/CounterFunction";
import TestCurrency from "./components/TestCurrency";
export const CounterContext = React.createContext();

// export const userContext=React.createContext()
// export const passwordContext=React.createContext()

function App() {
  // const initialstate = 0
  // const reduce = (state, action) => {
  //   switch (action) {
  //     case 'inc': return state + 1
  //     case 'dec': return state - 1
  //     case 'res': return initialstate
  //     default: return state

  //   }

  // }
  // const [count, dispatch] = useReducer(reduce, initialstate)
  // return (
  //   <div className='App'>
  //     {count}
  //     <CounterContext.Provider value={{
  //       count: count, dispatch: dispatch
  //     }}>
  //       <A />
  //       <B />
  //       <C />

  //     </CounterContext.Provider>

  //   </div>
  // )
  console.log("Hello world");
  return (
    <div className="App">
      {/* <Hello name={" vicky"} age={22}>
        <p>He is a IT employee</p>   */}
      {/* children props */}
      {/* </Hello>
      <Welcome/> */}
      {/* <Event/>
     <State/>
     <Counter/>
     <Task2/>
     <Jsx/>  */}
      {/* <Task3/> */}
      {/* <Task4/>
     <Task5/> */}
      {/* <Tasks5/> */}
      {/* <Task6/>  */}
      {/* <UseEffect/>
      <Convert/>
      <Togconv/>
      <SetTimeout/>
      <SetInterval/>
      <HappyBrithday/>
      <Task7/> */}
      {/* <Task8/> */}
      {/* <Http/> */}
      {/* <HttpPost/>  */}
      {/* <div className='App'>
        <userContext.Provider value={{"name":"adam","age":"23"}}>
          <passwordContext.Provider>
            <C/>
          </passwordContext.Provider>
        </userContext.Provider>
       </div> */}
      {/* <Reduce/> */}
      {/* <UseReduceObj/> */}
      {/* <Loading />
      <UseCallback/>
      <UseMemo/>
      <UseRef1/>
      <UseRef2/>
      <Task9UseReduce/> */}
      {/* <Click1 />
      <Click2 />
      <Counter1 />
      <Counter2 /> */}
      <Portal />
      {/* <ErrorBoundary>
        <Product name="Iphone" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Product name="Samsung" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Product name="one-plus" />
      </ErrorBoundary> */}
      {/* <Counter11 name="Adam"/>
      <Counter12/> */}
      {/* <CounterFunction render={(count,handleInc)=>(<CounterOne)}/> */}
      {/* <CounterOne/>
      <CounterTwo/> */}
      {/* <Test2/> */}
      <TestCurrency/>
    
    </div>
  );
}

export default App;
