
import styles from '@app/page.module.css';
import ProjectModule from "./ProjectModule";
import { getRepos } from '@utils/getrepos';
const { container, main, title, grid, card, description } = styles;
const GitHubUserName = 'Ambushfall';

export const revalidate = 60;


export default async function Page() {
    const repos = await getRepos(GitHubUserName)
    // console.log(repos)
    if (typeof repos === 'number' || typeof repos.message === 'string')

        return (
            <div className={container} >
                <main className={main}>
                    <h1 className={title}>Error: {repos?.message ? repos.message : repos}</h1>
                </main>
            </div>
        )
    // const request = await octokit.request('GET /users/{username}', { username: GitHubUserName })

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
