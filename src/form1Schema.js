export const schema = {
    definitions: {
      CaseFormType: {
        type: 'string',
        title: 'Case Form Type',
        enum: [
          'RG',
          'GH',
          'pp',
        ],
        enumNames: [
          'Regular',
          'Glasshouse',
          'Partner Product',
        ],
      },
      CaseType: {
        regular: {
          type: 'string',
          title: 'Case Sub Type',
          enum: [
            'A',
            'B',
            'C',
          ],
          enumNames: [
            'A',
            'B',
            'C',
          ],
        },
        glasshouse:  {
          type: 'string',
          title: 'Case Sub Type',
          enum: [
            'X',
            'Y',
            'Z',
          ],
          enumNames: [
            'X',
            'Y',
            'Z',
          ],
        },
        partnerProduct:  {
          type: 'string',
          title: 'Case Sub Type',
          enum: [
            'M',
            'N',
            'O',
          ],
          enumNames: [
            'M',
            'N',
            'O',
          ],
        },
      }
    },
    title: "Form",
    type: "object",
    required: ["name"],
    properties: {
      name: {
        type: "string", 
        title: "Case ID", 
        default: "Enter Case ID"
      },
      FormType: {
        type: "string",
        title: "Form Type", 
        $ref: '#/definitions/CaseFormType',
      },
      CaseType: {
        type: "string",
        title: "Case Type",
        $ref: '#/definitions/CaseType/regular',
      },
      multiselect: {
        type: "array",
        title: "Multi Select Number",
        items : { 
          type:"string",
          enum:[],
          enumNames:[]
        }
      },
      submitted: {
        type: "string"
      },
      done: {
        type: "boolean",
        title: "Done?",
        default: false
      }
    }
};
export const uiSchema =  {
  "ui:disabled": true,
  "ui:autofocus": true
};

export const updateJson = function(object, value, updateValue) {
  for (var x in object) {
    if (typeof object[x] === 'object') {
      updateJson(object[x], value);
    }
    if(x === value) {
      console.log(x);
      console.log(object[x]);
      object[x] = Object.assign({}, object[x], updateJson(object[x]));
    }
  }
}
