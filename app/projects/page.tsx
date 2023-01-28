
import { Octokit } from "@octokit/core";
import styles from '../page.module.css';
import ProjectModule from "./ProjectModule";
const { container, main, title, grid, card, description } = styles;
const GitHubUserName = 'Ambushfall';
const octokit = new Octokit({ auth: process.env.PRS_ACC_TOK });

export const revalidate = 0;

const getRepos = async () => {
    const request = await octokit.request('GET /users/{username}/repos{?type,sort,direction,per_page,page}', {
        username: GitHubUserName,
        sort: 'pushed',
        per_page: 100,
        type: 'all'
    })

    const { data, headers, url, status } = request

    return status === 200 ? data : status
};

export default async function Page() {
    const repos = await getRepos()
    console.log('fetched')
    if (typeof repos === 'number') return (
        <div className={container} >
            <main className={main}>
                <h1 className={title}>Error: {repos}</h1>
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