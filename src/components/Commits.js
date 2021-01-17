import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { owner, repository } from '../api/gitAPI';
import { MyContext } from '../context/MyContext';

const useRepoHook = () => {
    const { myRepo } = useContext(MyContext)
    const [state, setState] = useState(myRepo.current)    

    useEffect(() => {        
        let suscription = myRepo.onChange.subscribe(newState => {                 
            setState(newState)
        })
        myRepo.fillCommits()
        return () => {
            if (suscription != null)
                suscription.unsubscribe()
        }
    }, [myRepo])
    return [state, setState]
}


const Commits = (props) => {

    const [state] = useRepoHook()

    if (state.loading) {
        console.log("loading")
        return (<div className="container">...Loading</div>)
    } else if (state.error) {
        console.log("error")
        return (<div className="container">{state.message}</div>)
    } else {
        console.log("default")
        return (
            <div className="container">
                <h3 className="mytitle">Commits from {owner}/{repository}</h3>
                <Table responsive hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATE</th>
                            <th>TIME</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>MESSAGE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.commits.map(x =>
                                <tr key={x.sha}>
                                    <td className="wwrap">{x.sha}</td>
                                    <td>{new Date(x.commit.author.date).toLocaleDateString()}</td>
                                    <td>{new Date(x.commit.author.date).toLocaleTimeString()}</td>
                                    <td>{x.commit.author.name}</td>
                                    <td>{x.commit.author.email}</td>
                                    <td>{x.commit.message}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
    
}

export default Commits
