/* Components */
import { Counter } from "./components/Counter/Counter";
import Greeting from "@/app/components/Greeting";
import CounterWithReducer from "@/app/components/CounterWithReducer";
import CustomContainer from "@/app/components/CustomContainer";

export default function IndexPage() {
 /* return <Counter />;*/
  return (<div>
    {/*<Greeting message={"hi"}/>*/}
    {/*<CounterWithReducer/>*/}
   {/* <CustomContainer>
      <h1>Child 1</h1>
      <h2>Child 2</h2>
    </CustomContainer>*/}
    <Counter />
  </div>);
}

export const metadata = {
  title: "Redux Toolkit",
};
