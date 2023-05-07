'use client'
import { useEffect, useState, Suspense } from 'react';
import styles from '@app/page.module.css';
import ProjectModule from "./ProjectModule";
import Loading from '@app/loading';
const { container, main, title, grid, card, description } = styles;
const GitHubUserName = 'Ambushfall';



export default function Page() {

    const [data, setData] = useState<any[]>([])
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`/github/${GitHubUserName}`)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setData(data);
                setLoading(false);
            })
    }, [])

    if (isLoading) return <Loading />
    if (!data) return <Loading />
    // @ts-expect-error
    if (typeof data === 'number' || typeof data?.message === 'string') {
        return (
            <div className={container} >
                <main className={main}>
                    {/* @ts-expect-error */}
                    <Suspense fallback={<Loading />}><h1 className={title}>Error: {data?.message ? data.message : data}</h1></Suspense>
                </main>
            </div>
        )
    }


    return (
        <>
            <div className={container} >
                <main className={main}>
                    <h1 className={title} >All Of My Projects</h1>
                    <small className={description} >Some useful, some stupid, all fun!</small>
                    <Suspense fallback={<Loading />}>
                    <section>
                        <div>{/* Profile Modulo */}</div>
                    </section>
                    <ProjectModule repos={data} /></Suspense>
                    <h4>Made with ❤ by <a href="https://github.com/2KAbhishek/projects">2KAbhishek X OSS</a></h4>
                    <h4>Modified with Next by <a href="https://github.com/Ambushfall/">Ambushfall</a></h4>
                </main>
            </div>
        </>
    )
}