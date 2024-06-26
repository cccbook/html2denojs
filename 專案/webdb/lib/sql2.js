let sqlUrl = "http://localhost:8009/sqlite"

async function sqlFetch(cmd) {
    let r = await fetch(sqlUrl, {
        body: JSON.stringify({sql:cmd}),
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        }
    })
    if (!r.ok) {
        console.log('sqlFetch:error! cmd=', cmd)
        return null
    }
    let obj = await r.json()
    console.log('obj=', obj)
    return obj
}