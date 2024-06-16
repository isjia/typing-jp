// const inquirer = require('inquirer');
const ghpages = require('gh-pages');
// const openBrowser = require('open');
const chalk = require('chalk');

const repoObj = require('../package.json').repository;
const branch = process.argv[2];
const dest = process.argv[3];

const message = `编译后，${branch}分支自动提交`;

const publishTo = (url) => {
    console.log(
        chalk.yellow(`
            \n
            Now publishing to the ${branch} of \n
            ${url} \n
        `)
    );
    return new Promise((resolve) => {
        ghpages.publish(
            'dist',
            {
                branch,
                repo: url,
                dest,
                message,
            },
            (err) => {
                if (err) {
                    console.error(err);
                    resolve(false);
                    return;
                }
                console.log(
                    chalk.green(`
                        \n
                        Publish is success! \n
                    `)
                );
                resolve(true);
            }
        );
    });
};

const cb = function (err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(
        chalk.green(`
            \n
            Publish is success! \n
        `)
    );
};

const publishToPages = function (url) {
    ghpages.publish(
        'dist',
        {
            branch,
            repo: url,
        },
        cb
    );
};

(async () => {
    if (!['beta', 'master', 'gh-pages'].includes(branch)) {
        console.log(`\n 分支名 ${branch} 不正确，应为 beta 或 master 或 gh-pages \n`);
        return;
    }
    // let prompt = null;
    // if (branch === 'master') {
    //     console.log('\n');
    //     prompt = await inquirer.prompt([
    //         {
    //             name: 'ans',
    //             message: '当前为 master 分支发布，请输入提交信息',
    //             validate: Boolean,
    //         },
    //     ]);
    //     message = prompt.ans;
    // }
    // ghpages.clean();
    // const repos = Object.keys(repoObj)
    //     .map((k) => {
    //         if (k.startsWith('url')) return repoObj[k];
    //         return undefined;
    //     })
    //     .filter(Boolean);

    // const resArr = [];
    // for (const repoUrl of repos) {
    //     resArr.push(await publishTo(repoUrl));
    // }
    const urlStrArr = repoObj.url.split('//');
    const sshUrl = 'ssh://git@' + urlStrArr[1];
    // const resArr = [await publishTo(sshUrl)];
    publishToPages(sshUrl);

    // if (resArr.every(Boolean)) {
    // const giteeUrl = 'https://gitee.com/barneyZhao/typing-cn/pages';
    // console.log(` Auto open browser to ${chalk.yellow(giteeUrl)} \n`);
    // openBrowser(giteeUrl);
    // }
})();
