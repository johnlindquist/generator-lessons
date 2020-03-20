

let promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    new Promise(resolve => {
        setTimeout(() => {
            resolve(3)
        }, 3000)
    })
]

async function start() {
    for await (let promise of promises) {
        console.log(promise)
    }
}

start()