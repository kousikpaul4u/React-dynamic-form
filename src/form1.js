import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import * as FormInput from './form1Schema';

class FormOne extends Component {

  constructor(props){
    super(props);
    this.state = {
      formData: {},
      schema: FormInput.schema,
      uiSchema: FormInput.uiSchema,
    }
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onFormError = this.onFormError.bind(this);
    this.edit = this.edit.bind(this);
  }

  onFormChange(form){
    const formData = form.formData;
    let fieldName, properties, schema;
    FormInput.schema.definitions.FieldTypes.forEach(function(field) {
      let FieldTypeEnum = FormInput.schema.definitions[field][form.formData.FormType];
      fieldName = Object.assign({}, form.schema.properties[field], FieldTypeEnum );
      properties = Object.assign({},form.schema.properties, { [field]: fieldName });
      schema = Object.assign({}, form.schema, {properties});
    }, this);
    this.setState({ formData, schema });
    // const tmp = FormInput.updateJson(form.schema, CaseTypeEnum, 'CaseType');
  }

  onFormSubmit(form){
    this.setState({
      formData: Object.assign(
        {}, form.formData, { submitted: form.formData.name + ' submitted ' + form.formData.CaseType}
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
