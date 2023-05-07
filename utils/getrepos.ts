import 'server-only';

export const getRepos = async (userName: string) => {
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
        revalidate: 20
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