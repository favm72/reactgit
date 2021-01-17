import { Subject } from "rxjs";
import { getCommits, owner, repository } from "../api/gitAPI";

export default class MyRepo {
	onChange = new Subject()
	current = {
		loading: false,
		commits: [],
		error: false,
		message: "",
		owner: owner,
		repository: repository,
		branch: "master"	
    }    
    delay(ms) {
        return new Promise(res => setTimeout(res, ms))
    }
	async fillCommits() {
		try {			
			this.current.loading = true
			this.current.error = false			
			this.onChange.next({ ...this.current })						
			await this.delay(1500)
			let commits = await getCommits(this.current.owner, this.current.repository, this.current.branch)
			if (commits.message != null)
				throw new Error(commits.message)			
			this.current.commits = commits
			this.current.loading = false
			this.onChange.next({ ...this.current })
		} catch (error) {	
			this.current.loading = false
			this.current.error = true
			this.current.message = error.message	
			this.onChange.next({ ...this.current })
		}
	}
}
