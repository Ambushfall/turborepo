const fs = require('fs/promises')
const path = require('path')

async function run() {
    const reg = /^([^.]+)$/g;
    const appDirectory = path.join(process.cwd(), '/app');
    const appFilenames = await fs.readdir(appDirectory)
    const filterDirectories = appFilenames.filter((e) => e.match(reg) ? e !== 'components' && e !== 'api' && e !== 'github' && e !== 'editor' : false)

    // console.log(filterDirectories)

    const obj = new Object({ hrefs: filterDirectories })
    console.log(obj)
    fs.writeFile("json/paths.json", JSON.stringify(obj), function (err) {
        if (err) throw err;
        console.log('complete');
    }
    );
}

run()