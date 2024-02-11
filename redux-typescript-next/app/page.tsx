/* Components */
import 'bootstrap/dist/css/bootstrap.css';
import { Counter } from "./components/Counter/Counter";
import Greeting from "@/app/components/Greeting";
import CounterWithReducer from "@/app/components/CounterWithReducer";
import CustomContainer from "@/app/components/CustomContainer";
import TodoUI from "@/app/components/TodoUI/TodoUI";
import CustomFetchDemo from "@/app/components/CustomFetchDemo";
import UserWithRTKQueryDemo from "@/app/components/UserWithRTKQueryDemo";

export default function IndexPage() {
 /* return <Counter />;*/
  return (<div>
    {/*<Greeting message={"hi"}/>*/}
    {/*<CounterWithReducer/>*/}
   {/* <CustomContainer>
      <h1>Child 1</h1>
      <h2>Child 2</h2>
    </CustomContainer>*/}
   {/* <Counter />*/}
    {/*<TodoUI/>*/}
    {/*<CustomFetchDemo/>*/}
    <UserWithRTKQueryDemo/>
  </div>);
}

export const metadata = {
  title: "Redux Toolkit",
};
