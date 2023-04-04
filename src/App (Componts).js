import { useState } from 'react';
import './App.css';
import Clock from './Clock';
import CounterHook from './CounterHook';
import CounterHookOne from './CounterHookOne';
import CounterHookTwo from './CounterHookTwo';
import CounterOne from './CounterOne';
import CounterThree from './CounterThree';
import CounterTwo from './CounterTwo';
import EffectDemo from './EffectDemo';
import Employees from './Employees';
import LifeCycleTwo from './LifeCycleTwo';
import LifeCycle from './LifeCyle';
import LifeCycleOne from './LifeCyleOne';
import Clock2 from './PracticeFiles/Clockpf';
import Counterpf from './PracticeFiles/Counterpf';
import Counter2pf from './PracticeFiles/Counter2pf';
import Employeespf from './PracticeFiles/Employeespf';
import EventCls2pf from './PracticeFiles/EventCls2pf';
import Registerpf from './PracticeFiles/Registerpf';
import Register2pf from './PracticeFiles/Register2pf';
import { LoginPage } from './Projects/Login page/LoginPage';
import { Registerlp } from './Projects/Login page/Registerlp';
import LoginForm from './Projects/LoginForm';
import ReducerHook from './ReducerHook';
import ReducerHookOne from './ReducerHookOne';
import Register from './Register';
import RegisterOne from './RegisterOne';
import RegisterTwo from './RegisterTwo';
import RegisterTwo_two from './RegisterTwo_two';
import UpdateTitle from './UpdateTitle';
import ReducerHookpf from './PracticeFiles/ReducerHookpf';
import ReducerHookOnepf from './PracticeFiles/ReducerHookOnepf';
import LifeCyclepf from './PracticeFiles/LifeCyclepf';
import LifeCycleOnepf from './PracticeFiles/LifeCycleOnepf';
import LifeCycleTwopf from './PracticeFiles/LifeCycleTwopf';
import ClockHook from './ClockHook';
import Container from './Container';
import LoadDataHook from './LoadDataHook';
import LoadDataHookOne from './LoadDataHookOne';
import LoadDataHookpf from './PracticeFiles/LoadDataHookpf';
import LoadDataHookpf2 from './PracticeFiles/LoadDataHook2pf';
import LoadDataHookOnepf from './PracticeFiles/LoadDataHookOnepf';
import LoadDataHook3pf from './PracticeFiles/LoadDataHook3pf';
import FetchDataReducer from './FetchDataReducer';
import RefDemo from './RefDemo';
import RefDemoCls from './RefDemoCls';
import SignUp from './SignUp';
import ContainerDemo from './ContainerDemo';
import UseMemoDemo from './UseMemoDemo';
import SignUppf from './PracticeFiles/SignUppf';
import ComponentC from './ComponentC';
import React from 'react';


export const CityContext = React.createContext(''); 
export const StateContext = React.createContext('');

function App() {

  const username = "Ram";
  const city = "Hyderabad";
  const state = "Telangana";
  const user = {firstname:"Ram",lastname:"Kapoor",city:"Mumbai"}
      

  return (
    <div className='App'>
      <CityContext.Provider value={user} >     
        <ComponentC username={username}  />
      </CityContext.Provider>
    </div>
  );
}

export default App;

