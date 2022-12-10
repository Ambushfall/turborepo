import Image from 'next/image';
import { Octokit } from "@octokit/core";

const GitHubUserName = 'Ambushfall';
const maxPages = 2;
const hideForks = true;
const octokit = new Octokit({ auth: process.env.PRS_ACC_TOK });



// display infomation from github profile
const displayProfile = ({ profile }: { profile: any }) => {

    return (<>
        <figure>
            <Image alt="user avatar" src={profile.avatar_url} />
        </figure>
        <div>
            <h2><a href={profile.blog}><strong>{profile.name}</strong></a></h2>
            <p>{profile.bio}</p>
            <p>
                <strong>Location:</strong> {profile.location}
            </p>
            <p>
                <strong>@{profile.login} </strong>
                Repos: {profile.public_repos}
                Gists: {profile.public_gists}
            </p>
        </div></>
    )
};

// get list of user's public repos
const getRepos = async () => {
    let repos: any[] = [];
    for (let i = 1; i <= maxPages; i++) {
        const request = await octokit.request('GET /users/{username}/repos{?type,sort,direction,per_page,page}', {
            username: GitHubUserName,
            sort: 'pushed',
            per_page: 100,
            page: { i }
        })
        repos = repos.concat(request.data);
    }
    repos.sort((a, b) => b.forks_count - a.forks_count);
    repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    // displayRepos(repos);
    return repos
};


// display list of all user's public repos
const DisplayRepos = ({ repos }: { repos: any[] }) => {
    const userHome = `https://github.com/${GitHubUserName}`


    // const langUrl = `${userHome}?tab=repositories&q=&language=${repo.language}`
    // const starsUrl = `${userHome}/${repo.name}/stargazers`
    // const forksUrl = `${userHome}/${repo.name}/network/members`

    return <>{repos.map((v, k) =>
        <li key={k} className='repo'>
            <h3>{v.name}</h3>
            <span>{v.description}</span>
            <br />
            <br />
            {v.stargazers_count > 0 && <a href={`${userHome}/${v.name}/stargazers`}>
                <span>⭐ {v.stargazers_count}</span></a>}
            {v.language && <a href={`${userHome}?tab=repositories&q=&language=${v.language}`}>
                <span></span></a>}
            {v.forks_count > 0 && <a href={`${userHome}/${v.name}/network/members`}>
                <span>{v.forks_count}</span></a>}
            {v.homepage && v.homepage !== "" ? <><br /> <br />
                <a className="link-btn" href={v.html_url}>Code </a>
                <a className="link-btn" href={v.homepage}>Live </a> <br /></> : <><br /> <br />
                <a className="link-btn" href={v.html_url}>View Project</a><br /></>}
        </li>)}
    </>
};


export default async function Page() {
    const repos = await getRepos()
    const request = await octokit.request('GET /users/{username}', { username: GitHubUserName })
    const profile = request.data

    return (
        <>
            <main className="container">
                <h1>All Of My Projects</h1>
                <small>Some useful, some stupid, all fun!</small>
                <section className="intro">
                    <div className="user-info"></div>
                </section>
                {/* {devicons.Github()} */}
                <section className="repos">
                    <input type="text" className="filter-repos hide" placeholder="Search Projects" />
                    <ul className="repo-list">
                        <DisplayRepos repos={repos} />
                    </ul>
                </section>
                <h4>Made with ❤ by <a href="https://github.com/2KAbhishek/projects">2KAbhishek X OSS</a></h4>
                <h4>Modified with Next by <a href="https://github.com/Ambushfall/">Ambushfall</a></h4>
            </main>
        </>
    )
}