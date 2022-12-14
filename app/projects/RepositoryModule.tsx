'use client';

import { GitHubUserName, hideForks, descriptionClassName, linkContainerDivStyle } from "./Constants";

export const RepositoryModule = ({ repoData  }: { repoData: any[]; }) => {
    const userHome = `https://github.com/${GitHubUserName}`;


    return <>{repoData.map((v, k) => hideForks && v.fork ? false :
        <li className='inline-block max-w-xs max-h-min m-4 p-6 border-[#eaeaea] dark:border-[#222] text-center align-middle bg-inherit border-2 rounded-xl' key={k}>

            <p className='text-xl font-medium'>{v.name}</p>
            {v.description ? <span className={descriptionClassName}>{v.description}</span> : <p className={descriptionClassName}>No description</p>}

            {v.stargazers_count > 0 && <a className='relative col-span-1 float-right' href={`${userHome}/${v.name}/stargazers`}>
                <span className='relative col-span-1'>⭐ {v.stargazers_count}</span></a>}
            {v.language !== null ? <a href={`${userHome}?tab=repositories&q=&language=${v.language}`}></a> : false}
            {v.forks_count > 0 && <a href={`${userHome}/${v.name}/network/members`}>
                <span>{v.forks_count}</span></a>}
            {v.homepage && v.homepage !== '' ? <div className={linkContainerDivStyle}>
                <a className='relative col-span-2' href={v.html_url}>Code </a>
                <a className='relative col-span-3' href={v.homepage}>Live </a> </div> : <div className={linkContainerDivStyle}>
                <a className='relative col-span-4' href={v.html_url}>View Project</a></div>}
        </li>)}
    </>;
};
