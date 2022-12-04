import React from 'react'
import Link from 'next/link'
import styles from "../../../styles/Projects.module.css";

function Card(props) {
    return (
        <div className={styles.paralax} style={{backgroundImage: `url(${props.img})`}}>
            <div className="max-w-lg text-center py-4">
                <div>
                    <h2 className="text-white text-7xl font-bold">{props.title}</h2>
                    <h3 className="text-white text-3xl font-semibold mb-4">{props.subtitle}</h3>
                    <p className="mt-2 text-white">{props.text}</p>
                </div>
                <div className="flex justify-center mt-4">
                    {props.url === "#" ? (
                        <a target="_blank"  rel="noreferrer"  className="text-xl font-medium btn btn-blue">Coming soon</a>
                    ) : (
                        <Link href={props.url} >
                            <a target="_blank"  rel="noreferrer"  className={styles.btn}>See more</a>
                        </Link>

                    )}
                </div>
            </div>
        </div>
    )
}

export default Card;