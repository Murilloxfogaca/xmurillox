import Head from 'next/head'
import styles from '../../styles/Projects.module.css'
import Ref from '../../components/projects/Card'
import Link from 'next/link'

export default function Projects() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Murillo Fogaça | Projects</title>
                <meta name="description" content="Front End | My Projects" />
                <link rel="icon" href="/marca-x.ico" />
            </Head>

            <main className={styles.main}>
                <div className='container py-5'>
                    <h1 className="text-5xl font-bold text-center mb-5">Projects</h1>
                    <div className={styles.row}>
                        <Ref url="https://insidea5.com.br/" title="Inside A5" subtitle="Blog Punk" text="Producer of events in the interior of the State of São Paulo, since 2014 producing shows, together with the digital format, creates content for the punk movement in the region of SP" />
                        <Ref url="https://orubrica.com.br/" title="Rubrica" subtitle="Graphic Design and Workshops" text="Rubrica is an initiative by Felipe Fogaça that started in 2018 with the idea of ​​expanding some subversive graphic works linked to music and politics."/>
                        <Ref url="https://salaodolivropolitico.com.br/" title="Salão do livro político" subtitle="Book fair" text="Book Fair from September 24th to October 3rd in partnership with more than 50 Independent Publishers, on the youtube channel of TV Boitempo and TV PUC SP" />
                        <Ref url="https://www.atlasagrobr.com.br/" title="Atlas Agro" subtitle="Magazine for Agro" text="Atlas Agro is a company located in the state of Mato Grosso, Canarana, which for 10 years has been producing and selling several varieties of sesame, both domestically and abroad."  />
                    </div>
                    <p className='text-center py-4 text-uppercase font-bold'><Link href="/"><a>Back</a></ Link></p>    
                </div>
            </main>
        </div>
    )
}