'use client'

import { useEffect, useState } from 'react';
import styles from '../page.module.css'
import { RepositoryModule } from './RepositoryModule';

export default function ProjectModule({ repos }: { repos: any[] }) {
    const [query, setQuery] = useState('')
    // const [data, setData] = useState({ Array: [] });
    // const keys = ['']

    useEffect(() => {
        console.log(query)
    }, [query]);
   
    return (
        <section >
            <input type="text" placeholder="Search Projects" onChange={(e) => setQuery(e.target.value)} />
            <ul className={styles.grid} >
                <RepositoryModule repoData={repos} />
            </ul>
        </section>
    )
}
