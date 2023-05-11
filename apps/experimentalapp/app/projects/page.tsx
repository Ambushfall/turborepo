// @ts-nocheck
import styles from 'styles/page.module.css';
import { twtitle } from 'tw/styles';
import ProjectModule from "components/projects/ProjectModule";
import { getRepos } from 'utils';

const { container, main, description, title } = styles;
const GitHubUserName = 'Ambushfall';

// export const revalidate  = 60

export default async function Page() {

    const repos = await getRepos(GitHubUserName);
    if (!Array.isArray(repos)) {
        const { message, status } = repos
        return (
            <div className={container} >
                <main className={main}>
                    <h1 className={twtitle}>Code: {status}</h1>
                    <h1 className={twtitle}>{message}</h1>
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