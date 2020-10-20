import Link from 'next/link'
import React from 'react'


export default function FirstPost() {
    return (
        <div>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to homepage</a>
                </Link>
            </h2>
        </div>
    )
}
