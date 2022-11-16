export {}

export const submitData =  async  (url: string, method: string, data: string, contentType = 'application/json') => {
    
    const res = await fetch(url, {
        method: method,
        headers:{
            'Content-Type' : contentType
        },
        body: data
    })

    console.log("fetch status: " + res.status);

    if(res.status === 200)
        return true

    return false
}