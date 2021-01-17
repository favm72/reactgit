import { createContext, useState } from "react";

export const MyContext = createContext()

const defaultState = {
	commits: [
		{ date: "2020-01-01", id: "abc", message: "first commit" },
		{ date: "2020-01-02", id: "abd", message: "second commit" },
		{ date: "2020-01-03", id: "abe", message: "third commit" }
	]
}

export const MyProvider = ({ children }) => {

	const [state, setState] = useState(defaultState);
	
	return (
		<MyContext.Provider value={{ state, setState }}>
			{ children }
		</MyContext.Provider>
	)
}
