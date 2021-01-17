import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { MyContext } from '../context/MyContext';
import MyForm from './MyForm';

const useRepoHook = (myRepo) => {

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

    const { myRepo } = useContext(MyContext)
    const [state] = useRepoHook(myRepo)
    const onSubmit = (data) => {
        console.log(JSON.stringify(data, null, 2))
        myRepo.current.owner = data.owner
        myRepo.current.repository = data.repo
        myRepo.current.branch = data.branch
        myRepo.fillCommits()
    }

    if (state.loading) {
        return (
            <div className="container loading">
                <div className="spinner-border text-info"></div>
                <div>...Loading</div>
            </div>
        )
    } else if (state.error) {
        return (
            <Fragment>
                <div className="container">
                    <MyForm onSubmit={onSubmit} default={{ owner: state.owner, repo: state.repository, branch: state.branch }} />
                </div>
                <div className="container error">
                    {state.message}
                </div>
            </Fragment>
        )
    } else {
        return (
            <div className="container">
                <h3 className="mytitle">Commits from {state.owner}/{state.repository} in branch {state.branch}</h3>
                <MyForm onSubmit={onSubmit} default={{ owner: state.owner, repo: state.repository, branch: state.branch }} />
                <Table responsive hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATETIME</th>
                            <th>AUTHOR</th>
                            <th>MESSAGE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.commits.map(x =>
                                <tr key={x.sha}>
                                    <td className="wwrap">{x.sha}</td>
                                    <td>
                                        {new Date(x.commit.author.date).toLocaleDateString()}
                                        <br />{new Date(x.commit.author.date).toLocaleTimeString()}
                                    </td>
                                    <td>
                                        {x.commit.author.name}
                                        <br />{x.commit.author.email}
                                    </td>
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
