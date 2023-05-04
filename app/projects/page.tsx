
import styles from '@app/page.module.css';
import ProjectModule from "./ProjectModule";
// import { getRepos } from '@utils/getrepos';
const { container, main, title, grid, card, description } = styles;
const GitHubUserName = 'Ambushfall';

// export const revalidate = 60;
const getRepos = async (userName: string) => {
    // .........
    const route = `https://api.github.com/users/${userName}/repos?&sort=pushed&per_page=100`
    if (process.env.PRS_ACC_TOK) {
      const parameters = {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization:
            process.env.PRS_ACC_TOK
        },
        next: {
          revalidate: 60*24
        }
      }
      try {
        
        const res = await fetch(route, parameters)
        const data : any[] = await res.json();
        data.sort((a, b) => b.forks_count - a.forks_count);
        data.sort((a, b) => b.stargazers_count - a.stargazers_count);
        return data
      } catch (error: any) {
        if (error?.response && error.status === 403 && error.response.headers['x-ratelimit-remaining'] === '0') {
          const resetTimeEpochSeconds = error.response.headers['x-ratelimit-reset'];
          const currentTimeEpochSeconds = Math.floor(Date.now() / 1000);
          const secondsToWait = resetTimeEpochSeconds - currentTimeEpochSeconds;
          console.log(`You have exceeded your rate limit. Retrying in ${secondsToWait} seconds.`);
          setTimeout(fetch, secondsToWait * 1000, route, parameters);
        }
  
        if (error?.data?.message == 'Bad credentials') {
          return error.data.message
        }
      }
    } else {
      return 404
    }
  }

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
