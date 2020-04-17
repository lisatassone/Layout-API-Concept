// From layout API:

const layout = {
  Crud: {
    Ambulances: {
      schema: "Ambulances",
      mapping: "__ambulances",
      defaultSchemaLabel: "Ambulances",
      defaultField: "rego",
      views: {
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
                      required: true,
                      readOnly: false,
                      hidden: false,
                      values: [
                        { id: "1", name: "Bi-annually" },
                        { id: "2", name: "Annally" },
                      ],
                    },
                    {
                      id: "12-23-34-45",
                      name: "Paramedic",
                      type: "reference",
                      defaultValue: null,
                      readOnly: false,
                      required: false,
                      hidden: false,
                      // any other field level definitions that make sense, maxLength for text fields? Or should that be a constraint?
                      metadata: {
                        schema: "Resources",
                        mapping: "__resource",
                        fieldMapping: "paramedicId",
                      },
                      constraints: [
                        // more complex field validation and cross validations
                        [
                          // each array is 'and' conditions, separated by 'or' condition
                          {
                            operation: "regex",
                            value: "/[34]/",
                            // error message context?
                          },
                          {
                            operation: "=",
                            value: "34",
                          },
                          {
                            operation: "contains",
                            value: "34",
                          },
                        ],
                        [
                          {
                            operation: ">=",
                            id: "id of another field", // use the value of this field for comparison
                          },
                        ],
                      ],
                      conditions: [
                        // run validation when these things happen
                        {
                          operation: "!==",
                          id: "345-3245-3245",
                          value: null,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
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
                      type: "reference",
                      defaultValue: null,
                      readOnly: false,
                      required: false,
                      hidden: false,
                      // any other field level definitions that make sense, maxLength for text fields? Or should that be a constraint?
                      metadata: {
                        schema: "Resources",
                        mapping: "__resource",
                        fieldMapping: "paramedicId",
                      },
                      constraints: [
                        [
                          // each array is 'and' conditions, separated by 'or' condition
                          {
                            operation: "regex",
                            value: "/[34]/",
                          },
                          {
                            operation: "=",
                            value: "34",
                          },
                        ],
                        [
                          {
                            operation: ">=",
                            id: "id of another field", // use the value of this field for comparison
                          },
                        ],
                      ],
                      conditions: [
                        // run validation when these things happen
                        {
                          operation: "!==",
                          id: "345-3245-3245",
                          value: null,
                        },
                      ],
                    },
                  ],
                },
                {
                  heading: null,
                  fields: [
                    {
                      id: "345-3245-3245",
                      name: "Service Interval",
                      type: "picklist",
                      defaultValue: { id: 1, name: "Bi-annually" },
                      required: true,
                      readOnly: false,
                      hidden: false,
                      values: [
                        { id: "1", name: "Bi-annually" },
                        { id: "2", name: "Annally" },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
  },
};

// Create/update layout payload

const createLayout = {
  schema: "Ambulances",
  area: "Crud",
  views: {
    create: {
      columns: [
        {
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
                  { id: "2", name: "Annally" },
                ],
                //...
              },
            },
          ],
        },
      ],
    },
  },
};

// Save crud data

const save = {
  schema: "Ambulances",
  version: "1",
  fields: {
    "345-3245-3245": "Bi-annually",
  },
};

const read = {
  Ambulances: {
    version: "1",
    fields: {
      "345-3245-3245": "Bi-annually",
    },
  },
};
