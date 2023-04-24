import { getRepos } from "@utils/getrepos";

export default async function Page({
    params: { userName },
  }: {
    params: { userName: string };
  }) {
    const data = await getRepos(userName)
    console.log(data)
    return <></>
}