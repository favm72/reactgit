import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const MyForm = (props) => {  
    const [state, setState] = useState(props.default)

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value })           
    }

    const handleSubmit = () => {       
        try {
            if (state.owner.trim() == "")
                throw new Error("Owner Field is required.")
            if (state.owner.trim() == "")
                throw new Error("Owner Field is required.")
            if (state.owner.trim() == "")
                throw new Error("Owner Field is required.")
            
            props.onSubmit(state)
        } catch (error) {
            alert(error.message)
        }      
    }

    return (
        <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="owner" className="mr-sm-2">Owner</Label>
                <Input type="text" name="owner" placeholder="Owner" onChange={handleChange} defaultValue={state.owner} />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="repo" className="mr-sm-2">Repository</Label>
                <Input type="text" name="repo" placeholder="Repository" onChange={handleChange} defaultValue={state.repo} />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="branch" className="mr-sm-2">Branch</Label>
                <Input type="text" name="branch" placeholder="Branch" onChange={handleChange} defaultValue={state.branch} />
            </FormGroup>
            <Button type="button" onClick={handleSubmit}>SUBMIT</Button>
        </Form>
    )
}
export default MyForm
