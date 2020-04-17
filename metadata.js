// From layout API:

const AmbulancesMetaData = {
  schemaName: "Ambulances",
  mapping: "__ambulances",
  schemaLabel: "Ambulances",
  PrimaryFeldName: "rego",
  // more complex field validation and cross validations
  validations: [
    {
      subjectFieldId: "1234",
      operation: ">=",
      referenceFieldId: "5678"
    },
    {
      subjectFieldId: "1234",
      operation: "!==",
      value: null
    }
  ],
  layouts: {
    create: {
      version: "1",
      columns: [
        {
          sections: [
            {
              heading: null,
              fields: [
                {
                  id: "345-3245-3245",
                  name: "Service Interval",
                  type: "picklist",
                  defaultValue: { id: 1, name: "Bi-annually" },
                  readOnly: false,
                  visible: false,
                  values: [
                    { id: "1", name: "Bi-annually" },
                    { id: "2", name: "Annally" }
                  ],
                  validations: {
                    required: true,
                  }
                },
                {
                  id: "12-23-34-45",
                  name: "Paramedic",
                  type: "reference",
                  defaultValue: null,
                  readOnly: false,
                  visible: false,
                  // any other field level definitions that make sense, maxLength for text fields? Or should that be a constraint?
                  metadata: {
                    schema: "Resources",
                    mapping: "__resource",
                    fieldMapping: "paramedicId"
                  },
                  validations: {
                    // error message context?
                    required: true,
                    regex: "/[34]/",
                    contains: "34",
                    equals: "34"
                  }
                }
              ]
            }
          ]
        }
      ],
    },
    update: {
      version: "1",
      layout: { cols: 2 },
      sections: [
        {
          heading: null,
          fields: [
            {
              id: "12-23-34-45",
              name: "Paramedic",
              type: "reference",
              defaultValue: null,
              readOnly: false,
              visible: false,
              // any other field level definitions that make sense, maxLength for text fields? Or should that be a constraint?
              metadata: {
                schema: "Resources",
                mapping: "__resource",
                fieldMapping: "paramedicId"
              },
              validations: {
                // error message context?
                required: true,
                regex: "/[34]/",
                contains: "34",
                equals: "34"
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
              readOnly: false,
              visible: false,
              values: [
                { id: "1", name: "Bi-annually" },
                { id: "2", name: "Annally" }
              ],
              validations: {
                required: true,
              }
            }
          ]
        }
      ]
    }
  }
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
