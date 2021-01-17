export const owner = "favm72"
export const repository = "reactgit"
export const baseURL = `https://api.github.com/repos/${owner}/${repository}/`

export const getCommits = async () => {    
    const response = await fetch(`${baseURL}commits`)
    const commits = await response.json()
    return commits   
}
