/* Components */
import { Providers } from "@/lib/providers";
import { Nav } from "./components/Nav";
import ChakraProviders from './providers';
/* Instruments */
import styles from "./styles/layout.module.css";
import "./styles/globals.css";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>

      <html lang="en">
        <body>
        <ChakraProviders>
          <section className={styles.container}>
            <Nav />

            <header className={styles.header}>

            </header>

            <main className={styles.main}>{props.children}</main>

            <footer className={styles.footer}>
              <span>Learn </span>

            </footer>
          </section>

        </ChakraProviders>
        </body>
      </html>

    </Providers>
  );
}
