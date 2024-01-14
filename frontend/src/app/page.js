import Image from 'next/image'
import React from 'react';
//import styles from './page.module.css'
import HelloWorld,{Another} from "./components/HelloWorld";
import JsxDemo from "./components/JsxDemo";
import Greeting from "./components/Greeting";
export default function Home() {
    console.log('CreateElement ',React.createElement);

  return (
    <main >
      <div >
           {/* <HelloWorld/>
            <Another/>
            <HelloWorld/>*/}
          {/*<JsxDemo/>*/}
          <Greeting name={"Aung Hla"}/>
          <Greeting name={"Aung Min"}/>
      </div>
    </main>
  )
}
