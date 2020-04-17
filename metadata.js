// From layout API:

{
  schemaName: "Ambulances",
  mapping: "__ambulances",
  schemaLabel: "Ambulances",
  primaryField: "rego",
  formValidations: [
    {
      subjectFieldId: '1234', 
      operation: "=",
      referenceFieldId: '5678'
    }
  ],
  layouts: {
    create: {
      version: "1",
      columns: [
        {
          sections: [
            {
              heading: '',
              fields: [
                {
                  id: "345-3245-3245",
                  name: "Service Interval",
                  type: "picklist",
                  defaultValue: { id: 1, name: "Bi-annually" },
                  visible: true,
                  readOnly: false,
                  values: [
                    { id: "1", name: "Bi-annually" },
                    { id: "2", name: "Annally" }
                  ],
                  // Used for all field level validations / constraints
                  fieldValidations: {
                    required: true,
                  }
                },
                {
                  id: "12-23-34-45",
                  name: "Paramedic",
                  mapping: "paramedicId",
                  type: "reference",
                  defaultValue: null,
                  visible: true,
                  readOnly: false,
                  // any other field level definitions that make sense, maxLength for text fields? Or should that be a constraint?
                  referenceSchema: {
                    name: "Resources",
                    mapping: "__resource",
                  },
                  fieldValidations: {
                    required: true,
                    contains: "34"
                  }
                }
              ]
            }
          ]
        }
      ]
      update: {
        version: "1",
        columns: [
          {
            sections: [
              {
                heading: null,
                fields: [
                  {
                    id: "12-23-34-45",
                    name: "Paramedic",
                    mapping: "paramedicId",
                    type: "reference",
                    defaultValue: null,
                    visible: true,
                    readOnly: false,
                    // any other field level definitions that make sense, maxLength for text fields? Or should that be a constraint?
                    referenceSchema: {
                      name: "Resources",
                      mapping: "__resource",
                    },
                    fieldValidations: {
                      required: true,
                      contains: "34"
                    }

                  }
                ]
              },
              {
                heading: null,
                fields: [
                  {
                    id: "345-3245-3245",
                    name: "Service Interval",
                    type: "picklist",
                    defaultValue: { id: 1, name: "Bi-annually" },
                    visible: true,
                    readOnly: false,
                    values: [
                      { id: "1", name: "Bi-annually" },
                      { id: "2", name: "Annally" }
                    ]
                  }
                ]
              }
            ]
          }
       ]
      }
    }
  ]
};

// Create/update layout payload

const createLayout = {
  schema: "Ambulances",
  area: "Crud",
  views: {
    create: {
      layout: { cols: 1 }, // we enforce this in the UI so maybe ignore it for crud layouts
      sections: [
        {
          heading: null,
          fields: {
            type: "picklist",
            name: "Service Interval",
            defaultValue: { id: 1, name: "Bi-annually" },
            required: true,
            readOnly: false,
            hidden: false,
            values: [
              { id: "1", name: "Bi-annually" },
              { id: "2", name: "Annally" }
            ]
            //...
          }
        }
      ]
    }
  }
};

// Save crud data

const save = {
  schema: "Ambulances",
  version: "1",
  fields: {
    "345-3245-3245": "Bi-annually"
  }
};

const read = {
  Ambulances: {
    version: "1",
    fields: {
      "345-3245-3245": "Bi-annually"
    }
  }
};
