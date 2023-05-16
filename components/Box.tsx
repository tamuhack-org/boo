import styles from "../styles/Docs.module.scss";
import Link from "next/link";

export function Box(props: { text: string; desc: string; link: string }) {
  return (
    <Link href={props.link} className={styles.box}>
      <h1>{props.text}</h1>
      <p>{props.desc}</p>
    </Link>
  );
}

export function BoxGroup({ children }) {
  return <div className={styles.group}>{children}</div>;
}
