import 'server-only';
import { promises as fs } from 'fs'
import path from 'path'
import { cache } from 'react';


export const preload = () => {
    void getDirs();
}

export const getDirs = cache(async () => {
    const reg = /^([^.]+)$/g;
    const appDirectory = path.join(process.cwd(), '/app');
    const appFilenames = await fs.readdir(appDirectory)
    const filterDirectories = appFilenames.filter((e) => e.match(reg) ? e !== 'components' && e !== 'api' && e !== 'github' : false)
    // console.log(filterDirectories)
    return filterDirectories
});