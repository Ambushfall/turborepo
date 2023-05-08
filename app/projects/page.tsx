import 'server-only'

import styles from '@app/page.module.css';
import { twtitle } from '@tw/styles';
import ProjectModule from "@components/ProjectModule";
const { container, main, description, title } = styles;
const GitHubUserName = 'Ambushfall';

// export const revalidate = 60

async function fetchRepos(username: string) {
    // console.warn(process.env.NEXT_PUBLIC_HOST)
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/github/${username}`, { cache: 'no-store' });
    // Recommendation: handle errors
    // if (!res.ok) {
    //     // This will activate the closest `error.js` Error Boundary
    //     throw new Error('Failed to fetch data');
    // }
    
    return res.json();
}

export default async function Page() {
    console.log('hello I AM SERVER COMPONENT WTF')
    const repos = await fetchRepos(GitHubUserName);
    if (typeof repos === 'number' || typeof repos.message === 'string')

        return (
            <div className={container} >
                <main className={main}>
                    <h1 className={title}>Error: {repos?.message ? repos.message : repos}</h1>
                </main>
            </div>
        )

    return (
        <>
            <div className={container} >
                <main className={main}>
                    <h1 className={title} >All Of My Projects</h1>
                    <small className={description} >Some useful, some stupid, all fun!</small>
                    <section>
                        <div></div>
                    </section>
                    <ProjectModule repos={repos} />
                    <h4>Made with ❤ by <a href="https://github.com/2KAbhishek/projects">2KAbhishek X OSS</a></h4>
                    <h4>Modified with Next by <a href="https://github.com/Ambushfall/">Ambushfall</a></h4>
                </main>
            </div>
        </>
    )
}