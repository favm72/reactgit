import './App.css';
import Main from './components/Main';
import { MyProvider } from './context/MyContext';

function App() {
	return (
		<MyProvider>
			<Main />
		</MyProvider>		
	);
}

export default App;
