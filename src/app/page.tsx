import styles from "./page.module.css";
import Loading from "@/app/components/Loading";

export default function Home() {
  return (
    <main className={styles.main}>
      <Loading />
    </main>
  );
}
