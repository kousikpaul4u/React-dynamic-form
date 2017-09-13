import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import * as FormInput from './form1Schema';
// eslint-disable-next-line
var jsonQ=require("jsonq");

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

  componentWillMount(){
    // const FormType = Object.assign({}, FormInput.schema.properties.FormType, FormInput.lookUps.FormTypeEnum );
    // const properties = Object.assign({},FormInput.schema.properties,{FormType});
    // // const updatedSchema = FormInput.updateJson(FormInput.schema, 'FormType', FormInput.lookUps.FormTypeEnum);
    // this.setState({
    //   schema: Object.assign({}, FormInput.schema, {properties}), //updatedSchema,
    //   uiSchema: FormInput.uiSchema,
    //   formData: { name: 'You' },
    // });
  }

  onFormChange(form){
    let CaseTypeEnum = '';
    switch (form.formData.FormType) {
      case 'RG':
        CaseTypeEnum = FormInput.schema.definitions.CaseType.regular;
        break;
      case 'GH':
        CaseTypeEnum = FormInput.schema.definitions.CaseType.glasshouse;
        break;
      case 'PP':
        CaseTypeEnum = FormInput.schema.definitions.CaseType.partnerProduct;
        break;
    }
    const formData = form.formData;
    const CaseType = Object.assign({}, form.schema.properties.CaseType, CaseTypeEnum );
    const properties = Object.assign({},form.schema.properties,{CaseType});
    const schema = Object.assign({}, form.schema, {properties});
    this.setState({ formData, schema });
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
