import { createContext, useState } from "react";

export const MyContext = createContext()

const defaultState = {
	commits: []
}

export const MyProvider = ({ children }) => {

	const [state, setState] = useState(defaultState);
	
	return (
		<MyContext.Provider value={{ state, setState }}>
			{ children }
		</MyContext.Provider>
	)
}
