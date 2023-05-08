import styles from '@app/page.module.css';
import { twtitle } from '@tw/styles';
import ProjectModule from "./ProjectModule";
const { container, main, description } = styles;
const GitHubUserName = 'Ambushfall';

// export const revalidate = 60;
// false | 'force-cache' | 0 | number
// export const dynamic = 'force-dynamic';
// 'auto' | 'force-dynamic' | 'error' | 'force-static'


async function fetchRepos(username: string) {
    // console.warn(process.env.NEXT_PUBLIC_HOST)
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/github/${username}`);
    return await response.json();
}

export default async function Page() {
    const repos = await fetchRepos(GitHubUserName);
    if (typeof repos === 'number' || typeof repos.message === 'string')

        return (
            <div className={container} >
                <main className={main}>
                    <h1 className={twtitle}>Error: {repos?.message ? repos.message : repos}</h1>
                </main>
            </div>
        )

    return (
        <>
            <div className={container} >
                <main className={main}>
                    <h1 className={twtitle} >All Of My Projects</h1>
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