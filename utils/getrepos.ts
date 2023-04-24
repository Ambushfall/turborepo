import 'server-only';
import { cache } from 'react';


export const preload = (userName: string) => {
  void getRepos(userName);
}

export const getRepos = cache(async (userName: string) => {
  // ...
  console.warn(userName)
  const repos = new Array();
    for (let i = 1; i <= 10; i++) {
        const res = await fetch(
            `https://api.github.com/users/${userName}/repos?&sort=pushed&per_page=100&page=${i}`
            // {
            //     headers: {
            //         Accept: 'application/vnd.github+json',
            //         Authorization:
            //             'token your-personal-access-token-here'
            //     }
            // }
        );
        const data = await res.json();
        repos.push(data)
    }
    repos.sort((a, b) => b.forks_count - a.forks_count);
    repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    return repos
});