import { Fragment } from "react"
import { Jumbotron } from "reactstrap"
import Footer from "./Footer"
import Header from "./Header"

export default function Main(props) {
    return (
        <Fragment>
            <Header />
			<div className="mycontainer">
				<div className="pagecontent">
					<Jumbotron>
						<div className="container">
							<div className="row row-header">
								<div className="col-12 col-sm-6">
									<h1>REACTGIT</h1>
									<p>We will use git API in order to fetch commits from a public uploaded project!!</p>
								</div>
							</div>
						</div>
					</Jumbotron>
				</div>				
				<Footer />
			</div>
        </Fragment>
    )
}