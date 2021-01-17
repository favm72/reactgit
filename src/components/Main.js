import { Fragment, useContext } from "react"
import { Jumbotron } from "reactstrap"
import { MyContext } from "../context/MyContext"

export default function Main(props) {
	const { myRepo } = useContext(MyContext)	
	return (
		<Fragment>
			<Jumbotron>
				<div className="container">
					<div className="row row-header">
						<div className="col-12 col-sm-6">
							<h1>REACTGIT</h1>
							<p>We will use git API in order to fetch commits from a public uploaded project!!</p>
							{ myRepo.current.commits.length }
						</div>
					</div>
				</div>
			</Jumbotron>
		</Fragment>
	)
}