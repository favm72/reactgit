export default class MyRepo {
	onChange = new Subject()
	current = {
		loading: false,
		commits: [],
		error: false,
		message: ""	
    }    
    delay = ms => new Promise(res => setTimeout(res, ms));
	async fillCommits() {
		try {			
			this.current.loading = true
			this.current.error = false
			console.log(this.current)
			this.onChange.next({ ...this.current })						
			await delay(1500)
			let commits = await getCommits()
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
