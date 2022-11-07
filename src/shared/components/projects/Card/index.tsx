import React from 'react'
import Link from 'next/link'

function Card(props) {
    return (
        <div className="px-3">
            <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-4">
                <div>
                    <h2 className="text-gray-800 text-3xl font-semibold">{props.title}</h2>
                    <h3 className="text-gray-800 text-2xl font-semibold">{props.subtitle}</h3>
                    <p className="mt-2 text-gray-600">{props.text}</p>
                </div>
                <div className="flex justify-end mt-4">
                    <Link href={props.url} >
                        <a target="_blank"  rel="noreferrer"  className="text-xl font-medium btn btn-blue">See more</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card;