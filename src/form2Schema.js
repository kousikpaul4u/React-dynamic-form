export const schema = {
  definitions: {
    correspondence_info: {
      type: 'object',
      properties: {
        case_form_type: {
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
        sub_type: {
          title: 'Case Sub Type',
          $ref: '#/definitions/case_sub_type/regular',
        },
        date_received: {
          type: 'string',
          title: 'Date Received',
          format: 'date',
        },
        correspondence_date: {
          type: 'string',
          title: 'Correspondence Date',
          format: 'date',
        },
        recieved_date_stamp: {
          type: 'string',
          title: 'Received Date Stamp',
          format: 'date',
        },
        post_mark_date: {
          type: 'string',
          title: 'Post Mark Date',
          format: 'date',
        },
        forwarded_by: {
          type: 'string',
          title: 'Forwarded By',
        },
        email_address: {
          type: 'string',
          title: 'Email Address',
        },
        department: {
          type: 'string',
          title: 'Department',
        },
      },
    },
    case_info: {
      type: 'object',
      properties: {
        assigned_group: {
          type: 'string',
          title: 'Date Received',
          format: 'date',
        },
        assigned_specialist: {
          type: 'string',
          title: 'Assigned Specialist',
          format: 'date',
        },
        recieved_date_stamp: {
          type: 'string',
          title: 'Received Date Stamp',
          format: 'date',
        },
        post_mark_date: {
          type: 'string',
          title: 'Post Mark Date',
          format: 'date',
        },
        forwarded_by: {
          type: 'string',
          title: 'Forwarded By',
        },
        email_address: {
          type: 'string',
          title: 'Email Address',
        },
        department: {
          type: 'string',
          title: 'Department',
        },
      },
    },
    address: {
      type: 'object',
      properties: {
        street_address: {
          type: 'string',
        },
        city: {
          type: 'string',
        },
        state: {
          type: 'string',
        },
      },
      required: [
        'street_address',
        'city',
        'state',
      ],
    },
    case_sub_type: {
      regular: {
        type: 'object',
        properties: {
          case_sub_type: {
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
        },
      },
      glasshouse: {
        type: 'object',
        properties: {
          case_sub_type: {
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
        },
      },
    },
  },
  type: 'object',
  properties: {
    correspondence_info: {
      title: 'Correspondence',
      $ref: '#/definitions/correspondence_info',
    },
    case_info: {
      title: 'Case',
      $ref: '#/definitions/address',
    },
    loan_info: {
      title: 'Loan',
      $ref: '#/definitions/address',
    },
    spoc_info: {
      title: 'SPOC',
      $ref: '#/definitions/address',
    },
    property_info: {
      title: 'Property',
      $ref: '#/definitions/address',
    },
    investor_info: {
      title: 'Property',
      $ref: '#/definitions/address',
    },
    parties_info: {
      title: 'Property',
      $ref: '#/definitions/address',
    },
  },
};
export const uiSchema = {
  solutionDescription: {
    'ui:widget': 'textarea',
  },
  task: {
    assigned_group: {
      'ui:disabled': true,
    },
  },
  correspondence_info: {
    sub_type: {
      'ui:disabled': false,
    },
    forwarded_by: {
      'ui:disabled': true,
    },
  },
};
