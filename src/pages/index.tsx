import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../shared/styles/Home.module.css";
import mypic from "../assets/uploads/mypic.png";
import linkedin from "../assets/uploads/linkedin.png";
import github from "../assets/uploads/github.png";
import mail from "../assets/uploads/mail.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Murillo Fogaça</title>
        <meta
          name="description"
          content="Front-End | Website, Apps and Mobiles"
        />
        <link rel="icon" href="/marca-x.ico" />
      </Head>

      <main className={styles.main}>
        <div className="container">
          <div className="flex px-3 justify-between items-center flex-col-reverse lg:flex-row">
            <div className="px-5">
              <h1 className={styles.title}>Murillo Fogaça</h1>
              <h2 className="text-3xl font-bold mb-4">Front-End Web | Mobile</h2>

              <p className="my-3">
                <b>Front-End:</b> HTML5, CSS3, SCSS, React, Next.js, Wordpress,
                Bootstrap, Tailwind, Materials UI and Design System Create
              </p>
              <p className="my-3">
                <b>Back-End:</b> PHP, SQL, MySQL / Docker using docker compose, Api
                Rest
              </p>
              <p className="my-3">
                <b>Experiences in CMS:</b> Wordpress (Senior), Moodle, Drupal and
                Joomla.
              </p>
              <p className="my-3">
                <b>Experiences in Frameworks:</b> Next.js, Laravel and Codeigniter
              </p>
              <p className="my-3"><b>Mobile:</b> Flutter (Basic)</p>
              <p className="my-3">
                <b>Others:</b> Analysis SEO, SemRush, Analytics, Adobe Photoshop/XD and
                Figma
              </p>
              <p className="my-3">
              <b>Experience with Agile process, Scrum and project management.</b>
              </p>
              <p className="mt-5">
              <Link href="https://github.com/Murilloxfogaca">
                <a className="mt-4 mr-2" target="_blank">
                  <Image
                    src={github}
                    alt="Github"
                    width={30}
                    height={30}
                    className={styles.icon}
                  />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/murilloxfogaca/">
                <a className="mt-4 mx-2" target="_blank">
                  <Image
                    src={linkedin}
                    alt="Linkedin"
                    width={30}
                    height={30}
                    className={styles.icon}
                  />
                </a>
              </Link>
              <Link href="mailto:sxecesar@gmail.com">
                <a className="ml-2 mt-4">
                  <Image
                    src={mail}
                    alt="Email"
                    width={30}
                    height={30}
                    className={styles.iconemail}
                  />
                </a>
              </Link>
              </p>
            </div>
            <div className="px-5 py-3">
              <Image
                src={mypic}
                alt="Murillo Fogaça"
                width={350}
                height={350}
                className={styles.mypic}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
