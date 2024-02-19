/* Components */
import { Providers } from "@/lib/providers";
import { Nav } from "./components/Nav";
import {Suspense} from "react";
/* Instruments */
import styles from "./../styles/layout.module.css";
import "./../styles/globals.css";
import Loading from "@/app/dashboard/loading";

export default function DashboardLayout(props: React.PropsWithChildren) {
  return (<div>
        <h1>Dashboard layout</h1>
          <Suspense fallback={<Loading/>}>
              <main className={styles.main}>{props.children}</main>
          </Suspense>



   </div>
  );
}
