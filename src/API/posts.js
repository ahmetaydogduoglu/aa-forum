export const fetchAllPosts = async () => {
    try {
        const resposne = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await resposne.json()
        return json
    } catch (error) {
        throw error
    }
}

export const fetchAllComments = async () => {
    try {
        const resposne = await fetch('https://jsonplaceholder.typicode.com/comments')
        const json = await resposne.json()
        return json
    } catch (error) {
        throw error
    }
}
