
import React from 'react';
import {Form, Button, FormGroup} from 'react-bootstrap';

export default class AddStreet extends React.Component {

    render(){
        return(
            <div>
                <Form horizontal onSubmit={this.handleCreate.bind(this)}>
                    <FormGroup controlId="formHorizontal">
                    Street Name
                    <input default='name' ref="createInput"/>
                        <Button type="submit"> Submit</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    };

    handleCreate(event) {
        event.preventDefault();

        const createInput = this.refs.createInput;
        const id = new Date();
        const streetName = createInput.value;

        this.props.createStreet(id, streetName);
        this.refs.createInput.value = '';
    }

}
