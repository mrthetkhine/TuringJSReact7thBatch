import Image from 'next/image'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import styles from './page.module.css'
import HelloWorld,{Another} from "./components/HelloWorld";
import JsxDemo from "./components/JsxDemo";
import Greeting from "./components/Greeting";
import FirstLevel from "./components/FirstLevel";
import Border from "./components/Border";
import JsxAsProperty from "./components/JsxAsProperty";
import Profile from "./components/Profile";
import NumberProblem from "./components/NumberProblem";
import ListDemo from "./components/ListDemo";
import TableDemo from "./components/TableDemo";
import TimeDemo from "./components/TimeDemo";
import EventDemo from "./components/events/EventDemo";
import Counter from "./components/Counter";
import Parent from "./components/rendering/Parent";
import Timer from "./components/rendering/Timer";
import Snapshot from "./components/rendering/Snapshot";
import CounterProblem from "./components/rendering/CounterProblem";
import EqualityDemo from "./components/rendering/EqualityDemo";
import Link from "next/link";
import TodoListDemo from "./components/rendering/TodoListDemo";
import FormDemo from "./components/form/FormDemo";
import TabDemo from "./components/tab/TabDemo";
import TodoVersion2 from "./components/rendering/TodoVersion2";
import RenderingDemo from "./components/rendering/RenderingDemo";
import Fancy from "./components/rendering/Fancy";
import DifferentRoot from "./components/rendering/DifferentRoot";
import DifferentProperty from "./components/rendering/DifferentProperty";
import ChildWithKey from "./components/rendering/ChildWithKey";
import CounterWithReducer from "./components/reducer/CounterWithReducer";
import TodoWithReducer from "./components/reducer/TodoWithReducer";
import ContextDemo from "./components/context/ContextDemo";
import TodoCount from "./components/reducer/TodoCount";
import ReducerWithContext from "./components/reducer/ReducerWithContext";
import RefDemo from "./components/ref/RefDemo";
import FocusInputDemo from "./components/ref/FocusInputDemo";
import OtherDOMRefDemo from "./components/ref/OtherDOMRefDemo";
import DatePicker from "./components/ref/DatePicker";
import EffectDemo from "./components/EffectDemo";
import DataFetchDemo from "./components/DataFetchDemo";
import CustomHook from "./components/hook/CustomHook";
import RandomProfile from "./components/hook/RandomProfile";
import BasicForm from "./components/form/BasicForm";
import {ValidationSchemaExample} from "./components/form/ValidationSchemaExample";
import CustomFormik from "./components/form/CustomFormik";
import CustomFormikDemo from "./components/form/CustomFormikDemo";
import PortalDemo from "./components/PortalDemo";
import IdDemo from "./components/hook/IdDemo";
import CallBackProblem from "./components/hook/CallBackProblem";
export default function Home() {
    console.log('CreateElement ',React.createElement);

    let p = {
        name:'Someone',
        age: 23,
    }
    let date = new Date();

    let headers =['Tab1','Tab2','Tab3'];
  return (
    <main >
      <div >
           {/* <HelloWorld/>
            <Another/>
            <HelloWorld/>*/}
          {/*<JsxDemo/>*/}
          {/*<Greeting name={"Aung Hla"}
                    person={{name:'Someone'}}/>
          <Greeting />*/}
          {/*<FirstLevel person={p}
                      another={"This is another property"}>
                <h1>Child one</h1>
                <h2>Child two</h2>
          </FirstLevel>*/}
          {/*<Border>
              <Greeting name={"Aung Hla"}
                        person={{name:'Someone'}}/>
          </Border>
          <Border>
              <HelloWorld/>
          </Border>*/}
         {/* <JsxAsProperty tag={<HelloWorld/>}/>*/}
         {/* <Profile admin={0}/>*/}
          {/*<NumberProblem/>*/}
          {/*<ListDemo/>*/}
          {/*<TableDemo/>*/}
         {/* <TimeDemo date={date}/>*/}
         {/* <EventDemo/>*/}
        {/*  <Counter/>*/}
         {/* <hr/>
          <Counter/>*/}
          {/*<Parent/>*/}
         {/* <Timer/>*/}
          {/*<Snapshot/>*/}
        {/*  <CounterProblem/>*/}
        {/*  <EqualityDemo/>*/}
         {/* <ListDemo/>*/}
         {/* <TodoListDemo/>*/}
         {/* <FormDemo/>*/}
          {/*<TabDemo headers={headers}>
              <div>
                  Page 1
              </div>
              <div>
                  Page 2
              </div>
              <div>
                  Page 3
              </div>
          </TabDemo>*/}
         {/* <TodoVersion2/>*/}
         {/* <Counter/>
          <br/>
          <Counter/>
          <br/>
          <Counter/>*/}
         {/* <RenderingDemo/>*/}
         {/* <Fancy/>*/}
         {/* <DifferentRoot/>*/}
        {/* <DifferentProperty/>*/}
         {/* <ChildWithKey/>*/}
        {/*  <CounterWithReducer/>*/}


          {/*<ContextDemo/>*/}

        {/*  <RefDemo/>*/}
       {/*   <FocusInputDemo/>*/}
       {/*   <OtherDOMRefDemo/>*/}
       {/*   <DatePicker/>*/}
       {/*   <EffectDemo/>*/}
        {/*  <DataFetchDemo/>*/}
        {/*  <DifferentRoot/>*/}
          {/*<RandomProfile/>
          <CustomHook/>
*/}
         {/* <ReducerWithContext/>*/}
         {/* <BasicForm/>*/}
        {/*  <ValidationSchemaExample/>*/}
        {/*  <CustomFormikDemo/>*/}
        {/*  <PortalDemo/>*/}
        {/*  <IdDemo/>*/}
          <CallBackProblem/>
      </div>
    </main>
  )
}
