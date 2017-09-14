import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';

export const schema = {
    definitions: {
      FieldTypes: [
          "CaseType"
      ],
      CaseFormType: {
        type: 'string',
        title: 'Case Form Type',
        enum: [
          'regular',
          'glasshouse',
          'partnerProduct',
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
  "ui:autofocus": true,
  name: {
    "ui:widget": (props) => {
      console.log('Props: ', props);
      return (
        <TextField
            onChange={(event) => props.onChange(event.target.value)}
        />
      );
    },
  },
  FormType: {
    "ui:widget": (props) => {
      console.log('Props: ', props);
      return (
        <SelectField
          value={props.value}
          onChange={(event, index, value)=> props.onChange(value)}
        >
        {
          arrangeEnum(props).map((menu) =>
          <MenuItem value={menu.value} primaryText={menu.text}/>)
        }
        </SelectField>
      );
    }
  }
};

export const updateJson = function(object, value, key) {
  for (var x in object) {
    if (typeof object[x] === 'object') {
      if (x === key) {
        console.log(x);
        console.log(object[x]);
        object[x] = Object.assign({}, object[x], updateJson(object[x]));
      } else {
        updateJson(object[x], value);
      }
    } else {
      updateJson(object[x], value);
    }
  }
}

export const arrangeEnum = function(props) {
  let selectValsarr = [];
    for(let i = 0; i < props.schema.enum.length; i++) {
      const obj = {
        value: props.schema.enum[i],
        text: props.schema.enumNames[i],
      }
      selectValsarr.push(obj);
    }
  return selectValsarr;
}
