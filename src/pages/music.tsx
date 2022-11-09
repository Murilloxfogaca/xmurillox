import Head from "next/head";
import styles from "../../shared/styles/Projects.module.css";
import Link from "next/link";

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Murillo Fogaça | Projects</title>
        <meta name="description" content="Front End | My Projects" />
        <link rel="icon" href="/marca-x.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.row}>
          <div>
            <h1 role="h2">Queimando Seus Reis</h1>
            <a href="#">Ver mais</a>
            <div></div>
          </div>
          <div>
            <h2>Consonância</h2>
            <a href="#">Ver mais</a>
          </div>
          <div>
            <h2>Janeiro Indústrial</h2>
            <a href="#">Em breve</a>
          </div>
          <div>
            <h2>Antilhano</h2>
            <a href="#">Ver mais</a>
            <div></div>
          </div>
          <div>
            <h3 role="h2">xFôlegox</h3>
            <a href="#">Ver mais</a>
            <div></div>
          </div>
        </div>
        <div className={styles.row}>
          <Link href="/">
            <a>Back</a>
          </Link>
        </div>
      </main>
    </div>
  );
}
