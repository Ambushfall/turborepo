import 'server-only';
import { cache } from 'react';


export const preload = (userName: string) => {
  void getRepos(userName);
}

export const getRepos = cache(async (userName: string) => {
  // ...
  if (process.env.PRS_ACC_TOK) {
    console.warn(userName)
    const repos = new Array();

    const res = await fetch(`https://api.github.com/users/${userName}/repos?&sort=pushed&per_page=100`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization:
            process.env.PRS_ACC_TOK
        }
      }
    )
    const data = await res.json();
    repos.push(data)
    repos.sort((a, b) => b.forks_count - a.forks_count);
    repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    return repos
  } else {
    return 404
  }
});