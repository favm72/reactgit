export const owner = "favm72"
export const repository = "reactgit"
export const baseURL = `https://api.github.com/repos/`

export const getCommits = async (owner, repository, branch) => {    
    const response = await fetch(`${baseURL}${owner}/${repository}/commits?sha=${branch}`)
    const commits = await response.json()
    return commits   
}
