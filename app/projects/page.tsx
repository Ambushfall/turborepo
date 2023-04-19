
import { Octokit } from "@octokit/core";
import styles from '../page.module.css';
import { Endpoints } from '@octokit/types'
import ProjectModule from "./ProjectModule";
import { RequestParameters } from "@octokit/core/dist-types/types";

const { container, main, title, grid, card, description } = styles;
const GitHubUserName = 'Ambushfall';
const octokit = new Octokit({ auth: process.env.PRS_ACC_TOK });

export const revalidate = 60;

type listUserReposParams = Endpoints["GET /users/{username}/repos"]["parameters"]

const getRepos = async () => {
    const endpoint = 'GET /users/{username}/repos{?type,sort,direction,per_page,page}';
    const params: listUserReposParams = {
        username: GitHubUserName,
        sort: 'pushed',
        per_page: 100,
        type: 'all'
    }
    const response = await requestRetry(endpoint, params);

    console.log(response)

    return response?.data ? response.data : 403
};

async function requestRetry(route: string, parameters: RequestParameters) {
    try {
        const response = await octokit.request(route, parameters);
        return response
    } catch (error: any) {
        if (error?.response && error.status === 403 && error.response.headers['x-ratelimit-remaining'] === '0') {
            const resetTimeEpochSeconds = error.response.headers['x-ratelimit-reset'];
            const currentTimeEpochSeconds = Math.floor(Date.now() / 1000);
            const secondsToWait = resetTimeEpochSeconds - currentTimeEpochSeconds;
            console.log(`You have exceeded your rate limit. Retrying in ${secondsToWait} seconds.`);
            setTimeout(requestRetry, secondsToWait * 1000, route, parameters);
        }

        if (error?.data?.message == 'Bad credentials') {
            return error.data.message
        }
    }
}


export default async function Page() {
    const repos = await getRepos()
    console.log(repos.message)
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