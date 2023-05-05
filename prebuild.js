const fs = require('fs/promises')
const path = require('path')

async function run() {
    const reg = /^([^.]+)$/g;
    const appDirectory = path.join(process.cwd(), '/app');
    const appFilenames = await fs.readdir(appDirectory)
    const filterDirectories = appFilenames.filter((e) => e.match(reg) ? e !== 'components' && e !== 'api' && e !== 'github' : false)

    // console.log(filterDirectories)

    const obj = new Object({ paths: filterDirectories })
    console.log(obj)
    fs.writeFile("paths.json", JSON.stringify(obj), function (err) {
        if (err) throw err;
        console.log('complete');
    }
    );
}

run()