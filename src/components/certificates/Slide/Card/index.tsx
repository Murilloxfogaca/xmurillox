import React from 'react'
import Link from 'next/link'

function Card(props) {
    return (
        <div className="px-3 py-10">
            <div className="max-w-md py-5 px-8 bg-white shadow-lg rounded-lg my-4" id={props.type}>
                <h2 className="text-gray-800 text-2xl font-bold">{props.title}</h2>
                <h3 className="text-gray-800 mt-1 text-1xl font-semibold">
                    <Link href={props.institutionlink} ><a target="_blank"  rel="noreferrer">{props.institution}</a></Link> | {props.titlesub}</h3>
                <h4 className="font-semibold text-gray-500">{props.data}</h4>
            </div>
        </div>
    )
}

export default Card;