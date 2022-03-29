import Link from "next/link";
import styles from "../styles/Nav.module.css";

export default function Nav(){
    return(
        <nav className={styles.nav}>
            <ul>
                <li className={styles.li}> <Link href="/">Home</Link></li>
                <li className={styles.li}> <Link href="/bmi">Bmi</Link></li>
                <li className={styles.li}> <Link href="/calc">Calc</Link></li>
                <li className={styles.li}> <Link href="/grade">Grade</Link></li>
                <li className={styles.li}> <Link href="/todoList">TodoList</Link></li>
            </ul>
        </nav>
    );
}