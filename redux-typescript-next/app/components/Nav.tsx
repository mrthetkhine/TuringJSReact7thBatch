"use client";

/* Core */
//import Link from "next/link";
import { Link } from '@chakra-ui/next-js'
import { usePathname } from "next/navigation";

/* Instruments */
import styles from "../styles/layout.module.css";
import useAuth from "@/app/hooks/useAuth";

export const Nav = () => {
  const pathname = usePathname();
  const loggedIn = useAuth();
  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        color='blue.400'
        _hover={{ color: 'blue.500' }}
        href="/"
      >
        Home
      </Link>
        { !loggedIn && <Link
            className={`${styles.link} ${
                pathname === "/login" ? styles.active : ""
            }`}
            href="/login"
        >
            Login
        </Link>
        }
        {
            loggedIn && <Link
                className={`${styles.link} ${
                    pathname === "/login" ? styles.active : ""
                }`}
                href="/logout"
            >
                Logout
            </Link>
        }
        {
            loggedIn && <Link
                className={`${styles.link} ${
                    pathname === "/movies" ? styles.active : ""
                }`}
                href="/movies"
            >
                Movies
            </Link>
        }
        {
            loggedIn && <Link
                className={`${styles.link} ${
                    pathname === "/dashboard/home" ? styles.active : ""
                }`}
                href="/dashboard/home"
            >
                Dashboard home
            </Link>

        }

      <Link
        className={`${styles.link} ${
          pathname === "/verify" ? styles.active : ""
        }`}
        href="/verify"
      >
        Verify
      </Link>
    </nav>
  );
};
