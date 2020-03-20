

async function* users() {
    let names = ["johnlindquist", "eggheadio"]
    for (let name of names) {
        let response = await fetch(`https://api.github.com/users/${name}`)
        yield response.json()
    }
}

async function start() {
    for await (let user of users()) {
        console.log(user.name)
    }
}

start()