import Image from 'next/image';
import { Octokit } from "@octokit/core";
import styles from '../page.module.css'
const { container, main, title, grid, card } = styles

const GitHubUserName = 'Ambushfall';
const maxPages = 2;
const hideForks = true;
const octokit = new Octokit({ auth: process.env.PRS_ACC_TOK });

const linkContainerDivStyle = 'inline-block align-middle justify-center items-center'

// display infomation from github profile
/* const displayProfile = ({ profile }: { profile: any }) => {

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
}; */

// get list of user's public repos
const getRepos = async () => {
    let repos: any[] = [];
    for (let i = 1; i <= maxPages; i++) {
        const request = await octokit.request('GET /users/{username}/repos{?type,sort,direction,per_page,page}', {
            username: GitHubUserName,
            sort: 'pushed',
            per_page: 100,
            page: { i },
            type: 'public'
        })
        // console.log(request.data)
        repos = repos.concat(request.data);
    }
    repos.sort((a, b) => b.forks_count - a.forks_count);
    repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

    var filterArray = repos.reduce((accumulator, current) => {
        if (!accumulator.some((item: any) => item.id === current.id && item.name === current.name)
        ) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);

    return filterArray
};



// display list of all user's public repos
const DisplayRepos = ({ repos }: { repos: any[] }) => {
    const userHome = `https://github.com/${GitHubUserName}`
    // repos.forEach(v => console.log(v.name))

    return <>{repos.map((v, k) => v.fork ? false :
        <li className='inline-block m-4 p-6 border-[#eaeaea] dark:border-[#222] text-center align-middle bg-inherit border-2 rounded-xl' key={k} >

            <p className='text-xl font-medium' >{v.name}</p>
            <span className="line-clamp-1 text-sm m-2 text-gray-500" >{v.description}</span>

            {v.stargazers_count > 0 && <a className='relative col-span-1 float-right' href={`${userHome}/${v.name}/stargazers`}>
                <span className='relative col-span-1' >⭐ {v.stargazers_count}</span></a>}
            {v.language !== null ? <a href={`${userHome}?tab=repositories&q=&language=${v.language}`}></a> : <p ></p>}
            {v.forks_count > 0 && <a href={`${userHome}/${v.name}/network/members`}>
                <span >{v.forks_count}</span></a>}
            {v.homepage && v.homepage !== "" ? <div className={linkContainerDivStyle}>
                <a className='relative col-span-2' href={v.html_url}>Code </a>
                <a className='relative col-span-3' href={v.homepage}>Live </a> </div> : <div className={linkContainerDivStyle}>
                <a className='relative col-span-4' href={v.html_url}>View Project</a></div>}
        </li>)}
    </>
};


export default async function Page() {
    const repos = await getRepos()
    // const request = await octokit.request('GET /users/{username}', { username: GitHubUserName })

    return (
        <>
            <div className={container} >
                <main className={main}>
                    <h1 className={title} >All Of My Projects</h1>
                    <small>Some useful, some stupid, all fun!</small>
                    <section >
                        <div ></div>
                    </section>
                    <section >
                        <input type="text" placeholder="Search Projects" />
                        <ul className={grid} >
                            <DisplayRepos repos={repos} />
                        </ul>
                    </section>
                    <h4>Made with ❤ by <a href="https://github.com/2KAbhishek/projects">2KAbhishek X OSS</a></h4>
                    <h4>Modified with Next by <a href="https://github.com/Ambushfall/">Ambushfall</a></h4>
                </main>
            </div>
        </>
    )
}