import Head from 'next/head'
import styles from '../../styles/Certificates.module.css'
import Slides from '../../components/certificates/Slide'
import "swiper/css/bundle";
import Link from 'next/link'

export default function Certificates() {
    return (
        <div className={styles.container}>
            <Head>
            <title>Murillo Fogaça | Certificates</title>
                <meta name="description" content="Front End | My certificates" />
                <link rel="icon" href="/marca-x.ico" />
            </Head>

            <main className={styles.main}>
                <div className='container py-5'>
                    <h1 className="text-5xl font-bold text-center mb-5">Certificates</h1>
                    <div>
                        <Slides  />
                    </div>
                    <p className='text-center py-4 text-uppercase font-bold mt-5'><Link href="/"><a>Back</a></ Link></p>    
                </div>
            </main>
        </div>
    )
}