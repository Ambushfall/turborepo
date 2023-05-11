'use client'

import { useEffect, useState } from 'react';
import styles from 'styles/page.module.css'
import { RepositoryModule } from './RepositoryModule';

export default function ProjectModule({ repos }: { repos: any[] }) {
    // console.log(repos)
    const [query, setQuery] = useState('')
    // const [data, setData] = useState({ Array: [] });
    // const keys = ['']

    useEffect(() => {
        // console.log()
    }, [query]);

    return (
        <div>
            <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                    <input
                        type="text"
                        className="
      form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
    "
                        id="searchField"
                        placeholder="Search Projects" onChange={(e) => setQuery(e.target.value)}
                        autoFocus
                    />
                </div>
            </div>
            <ul className={styles.grid} >
                <RepositoryModule repoData={searchFunction(repos, query)} />
            </ul>
        </div>
    )
}

function searchFunction(repos: any[], query: string): any {
    return repos.filter((e, i) => e.name.toString().toLowerCase().replaceAll(' ', '').replaceAll('-', '').includes(query.toLowerCase().replaceAll(' ', '').replaceAll('-', '')));
}

