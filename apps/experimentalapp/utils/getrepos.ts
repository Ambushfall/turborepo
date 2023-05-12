import { Repositories } from "types/repositories"

export const getRepos = async (userName: string) => {
  const route = `https://api.github.com/users/${userName}/repos?&sort=pushed&per_page=100`
  if (process.env.PRS_ACC_TOK) {
    const parameters: RequestInit = {
      // cache: 'no-store',
      next: {
        revalidate: 200
      },
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization:
          process.env.PRS_ACC_TOK
      }
    }
    try {
      
      const res: Response = await fetch(route, parameters)
      console.log(`ratelimit remaining: ${res.headers.get('x-ratelimit-remaining')}`)
      if (res.status === 403 && res.headers.get('x-ratelimit-remaining') === '0') {
        const resetTimeEpochSeconds = Number(res.headers.get('x-ratelimit-reset'));
        const currentTimeEpochSeconds = Math.floor(Date.now() / 1000);
        const secondsToWait = resetTimeEpochSeconds - currentTimeEpochSeconds;
        console.log(`You have exceeded your rate limit. Retrying in ${secondsToWait} seconds.`);
        setTimeout(fetch, secondsToWait * 1000, route, parameters);

        return {
          status: res.status,
          remaining: res.headers.get('x-ratelimit-remaining'),
          message: `You have exceeded your rate limit. Retrying in ${secondsToWait} seconds.`
        }
      }
      
      const data: Repositories = await res.json();
      // console.log(data)
      data.sort((a, b) => b.forks_count - a.forks_count);
      data.sort((a, b) => b.stargazers_count - a.stargazers_count);

      return data
    } catch (error: any) {

      // console.log(`getrepos.ts:40 Err:${error}`)
      console.log('getRepos')


    }
  } else {
    throw Error('ERROR: PRS_ACC_TOK Missing from ENV!')
  }
}