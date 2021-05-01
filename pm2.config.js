module.exports = {
    apps: [
        {
            name: "Remix",
            script: "remix run",
            ignore_watch: ["."],
            env: {
                NODE_ENV: "development",
            },
        },
        {
            name: "tailwind",
            script: "NODE_ENV=development yarn run watch:css",
            ignore_watch: ["."],
            env: {
                NODE_ENV: "development",
            },
        },
    ],
}
