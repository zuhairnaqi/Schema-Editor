
const tablesData = [
  {
    id: 3,
    schemaName: "Contact",
    tableName: "contacts",
    relationships: [
      {
        name: 'teacher',
        key: "hasOne",
        local_table_id: 3,
        local_key: "id",
        foreign_table_id: 6,
        foreign_table: "teachers",
        foreign_key: "teacher_id",
      },
      {
        name: 'student',
        key: "hasOne",
        local_table_id: 3,
        local_key: "id",
        foreign_table_id: 11,
        foreign_table: "students",
        foreign_key: "student_id",
      },
    ],
    definition: {
      columns: [
        {
          name: "id",
          dataType: "bigincrements",
          modifiers: [
            {
              name: "nullable",
            },
          ],
        },
        {
          name: "name",
          dataType: "string",
        },
        {
          name: "Title",
          dataType: "string",
        },
        {
          name: "first_name",
          dataType: "string",
          length: "100",
        },
        {
          name: "middle",
          dataType: "string",
          length: "100",
        },
        {
          name: "last_name",
          dataType: "string",
          length: "100",
        },
        {
          name: "email",
          dataType: "string",
          length: "30",
        },
        {
          name: "gender",
          dataType: "boolean",
        },
        {
          name: "occupation",
          dataType: "text",
          textType: "MediumText",
        },
        {
          name: "phone",
          dataType: "integer",
        },
        {
          name: "birthday",
          dataType: "date",
        },
        {
          name: "notes",
          dataType: "text",
          textType: "LongText",
        },
        {
          name: "created_at",
          dataType: "timestamp",
        },
        {
          name: "updated_at",
          dataType: "timestamp",
        },
      ],
    },
  },
  {
    id: 6,
    schemaName: "Teacher",
    tableName: "teachers",
    relationships: [
      {
        name: 'contact',
        key: "belongsTo",
        local_table_id: 6,
        local_key: "id",
        foreign_table_id: 3,
        foreign_table: "contacts",
        foreign_key: "contact_id",
      },
    ],
    definition: {
      columns: [
        {
          name: "id",
          dataType: "bigincrements",
          modifiers: [
            {
              name: "nullable",
            },
          ],
        },
        {
          name: "name",
          dataType: "string",
        },
        {
          name: "Title",
          dataType: "string",
        },
        {
          name: "first_name",
          dataType: "string",
          length: "100",
        },
        {
          name: "middle",
          dataType: "string",
          length: "100",
        },
        {
          name: "last_name",
          dataType: "string",
          length: "100",
        },
        {
          name: "email",
          dataType: "string",
          length: "30",
        },
        {
          name: "gender",
          dataType: "boolean",
        },
        {
          name: "occupation",
          dataType: "text",
          textType: "MediumText",
        },
        {
          name: "phone",
          dataType: "integer",
        },
        {
          name: "birthday",
          dataType: "date",
        },
        {
          name: "notes",
          dataType: "text",
          textType: "LongText",
        },
        {
          name: "created_at",
          dataType: "timestamp",
        },
        {
          name: "updated_at",
          dataType: "timestamp",
        },
      ],
    },
  },
  {
    id: 11,
    schemaName: "Student",
    tableName: "students",
    relationships: [
      {
        name: 'contact',
        key: "belongsTo",
        local_table_id: 11,
        local_key: "id",
        foreign_table_id: 3,
        foreign_table: "contacts",
        foreign_key: "contact_id",
      },
    ],
    definition: {
      columns: [
        {
          name: "id",
          dataType: "bigincrements",
          modifiers: [
            {
              name: "nullable",
            },
          ],
        },
        {
          name: "name",
          dataType: "string",
        },
        {
          name: "Title",
          dataType: "string",
        },
        {
          name: "first_name",
          dataType: "string",
          length: "100",
        },
        {
          name: "middle",
          dataType: "string",
          length: "100",
        },
        {
          name: "last_name",
          dataType: "string",
          length: "100",
        },
        {
          name: "email",
          dataType: "string",
          length: "30",
        },
        {
          name: "gender",
          dataType: "boolean",
        },
        {
          name: "occupation",
          dataType: "text",
          textType: "MediumText",
        },
        {
          name: "phone",
          dataType: "integer",
        },
        {
          name: "birthday",
          dataType: "date",
        },
        {
          name: "notes",
          dataType: "text",
          textType: "LongText",
        },
        {
          name: "created_at",
          dataType: "timestamp",
        },
        {
          name: "updated_at",
          dataType: "timestamp",
        },
      ],
    },
  },
];
