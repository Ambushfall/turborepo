



export const getRepos = async (userName: string) => {
  const route = `https://api.github.com/users/${userName}/repos?&sort=pushed&per_page=100`
  if (process.env.PRS_ACC_TOK) {
    const parameters = {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization:
          process.env.PRS_ACC_TOK
      },
      next: { revalidate: 100 }
    }
    try {
      const res = await fetch(route, parameters)
      console.log(res.headers.get('x-ratelimit-remaining'))
      if (res.status === 403 && res.headers.get('x-ratelimit-remaining') === '0') {
        const resetTimeEpochSeconds = Number(res.headers.get('x-ratelimit-reset'));
        const currentTimeEpochSeconds = Math.floor(Date.now() / 1000);
        const secondsToWait = resetTimeEpochSeconds - currentTimeEpochSeconds;
        console.log(`You have exceeded your rate limit. Retrying in ${secondsToWait} seconds.`);
        setTimeout(fetch, secondsToWait * 1000, route, parameters);
        return res.status
      }
      const data: any[] = await res.json();


      data.sort((a, b) => b.forks_count - a.forks_count);
      data.sort((a, b) => b.stargazers_count - a.stargazers_count);

      return data
    } catch (error: any) {

      console.log(`getrepos.ts:26 Err:${error}`)

    }
  } else {
    return 404
  }
}