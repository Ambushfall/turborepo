import styles from 'styles/page.module.css';
import { twtitle } from 'tw/styles';
import ProjectModule from "./ProjectModule";
const { container, main, description, title } = styles;
const GitHubUserName = 'Ambushfall';

// export const revalidate = 60

async function fetchRepos(username: string) {
    // console.warn(process.env.NEXT_PUBLIC_HOST)

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/github/${username}`,
            {
                next: {
                    revalidate: 60
                }
            });
        return res.json();
    } catch (error) {
        console.log(error)
    }

}

export default async function Page() {

    const repos = await fetchRepos(GitHubUserName);
    if (typeof repos.message === 'string') {
        const { message, status, wait } = repos
        return (
            <div className={container} >
                <main className={main}>
                    <h1 className={title}>Code: {status}</h1>
                    <h1 className={title}>{message}</h1>
                </main>
            </div>
        )
    }

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