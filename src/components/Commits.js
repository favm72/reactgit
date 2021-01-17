import React, { useContext } from 'react';
import { Table } from 'reactstrap';
import { MyContext } from '../context/MyContext';

const Commits = (props) => {

    const { state, setState } = useContext(MyContext)

    return (
        <div className="container">
            <h3 className="mytitle">Repository: TEST</h3>
            <Table responsive hover size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>MESSAGE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.commits.map(x =>
                            <tr key={x.id}>
                                <td>{x.id}</td>
                                <td>{x.date}</td>
                                <td>{x.message}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Commits
