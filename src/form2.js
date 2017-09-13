import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import * as FormInput from './form2Schema';

class FormOne extends Component {

  constructor(props){
    super(props);
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onFormError = this.onFormError.bind(this);
    this.edit = this.edit.bind(this);
  }

  componentWillMount(){
    const parentDrop = Object.assign({}, FormInput.schema.properties.parentDrop, FormInput.lookUps.parentDropEnum );
    const properties = Object.assign({},FormInput.schema.properties,{parentDrop});
    // const updatedSchema = FormInput.updateJson(FormInput.schema, 'parentDrop', FormInput.lookUps.parentDropEnum);
    this.setState({
      schema: Object.assign({}, FormInput.schema, {properties}), //updatedSchema,
      uiSchema: FormInput.uiSchema,
      formData: { name: 'You' },
    });
  }

  onFormChange(form){
    const childDropEnum = form.formData.parentDrop === 'odd' ? FormInput.lookUps.oddEnum : FormInput.lookUps.evenEnum;
    const formData = form.formData;
    const childDrop = Object.assign({}, form.schema.properties.childDrop, childDropEnum );
    const properties = Object.assign({},form.schema.properties,{childDrop});
    const schema = Object.assign({}, form.schema, {properties});
    this.setState({ formData, schema });
  }

  onFormSubmit(form){
    this.setState({
      formData: Object.assign(
        {}, form.formData, { submitted: form.formData.name + ' submitted ' + form.formData.childDrop}
      )
    });
  }

  onFormError(formData){

  }

  edit(){
    this.setState({ uiSchema: { "ui:disabled": false }});
  }

  render() {
    return (
      <div>
          <Form
            formData={this.state.formData}
            schema={this.state.schema}
            uiSchema={this.state.uiSchema}
            onChange={this.onFormChange}
            onSubmit={this.onFormSubmit}
            onError={this.onFormError}
          >
          <div>
            <button type="button" className="btn btn-primary" onClick={this.edit}>Edit</button>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          </Form>
      </div>
      );
  }
}

export default FormOne;
