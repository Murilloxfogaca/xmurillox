import Head from "next/head";
import styles from "../../shared/styles/Projects.module.css";
import Ref from "../../shared/components/projects/Card";
import Makeitstop from "../../assets/uploads/makeitstop.jpg";
import Rubrica from "../../assets/uploads/rubrica.jpg";
import Salaodolivro from "../../assets/uploads/salaodolivro.jpg";
import Terraviva from "../../assets/uploads/terraviva.jpg";

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Murillo Fogaça | Projects</title>
        <meta name="description" content="Front End | My Projects" />
        <link rel="icon" href="/marca-x.ico" />
      </Head>

      <main className={styles.main}>
            <Ref
              img={Makeitstop.src}
              url="https://insidea5.com.br/"
              title="Inside A5"
              subtitle="Blog Punk"
              text="Producer of events in the interior of the State of São Paulo, since 2014 producing shows, together with the digital format, creates content for the punk movement in the region of SP"
              />
            <Ref
              img={Rubrica.src}
              url="#"
              title="Rubrica"
              subtitle="Graphic Design and Workshops"
              text="Rubrica is an initiative by Felipe Fogaça that started in 2018 with the idea of ​​expanding some subversive graphic works linked to music and politics."
              />
            <Ref
              img={Salaodolivro.src}
              url="https://salaodolivropolitico.com.br/"
              title="Salão do livro político"
              subtitle="Book fair"
              text="Book Fair from September 24th to October 3rd in partnership with more than 50 Independent Publishers, on the youtube channel of TV Boitempo and TV PUC SP"
              />
            <Ref
              img={Terraviva.src}
              url="#"
              title="Terra Viva Armazém"
              subtitle="Manager system to aliments"
              text="Organic garden management system for small farmers"
            />
      </main>
    </div>
  );
}
