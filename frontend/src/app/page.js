import Image from 'next/image'
import React from 'react';
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
export default function Home() {
    console.log('CreateElement ',React.createElement);

    let p = {
        name:'Someone',
        age: 23,
    }
    let date = new Date();
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
          <EventDemo/>
      </div>
    </main>
  )
}
