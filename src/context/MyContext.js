import { createContext } from "react";
import { Subject } from "rxjs";
import { getCommits } from "../api/gitAPI";

export const MyContext = createContext()

const delay = ms => new Promise(res => setTimeout(res, ms));

class MyRepo {
	onChange = new Subject()
	current = {
		loading: false,
		commits: [],
		error: false,
		message: ""	
	}
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

export const MyProvider = ({ children }) => {	
	
	const myRepo = new MyRepo()
	
	return (
		<MyContext.Provider value={{ myRepo }}>
			{ children }
		</MyContext.Provider>
	)
}
