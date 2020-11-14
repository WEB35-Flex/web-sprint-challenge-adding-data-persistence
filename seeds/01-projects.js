exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Projects")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("Projects").insert([
        {
          project_name: "Node.js",
          description: "Build a backend server using node.js and express",
          completed: false,
        },
        {
          project_name: "Client Side Routing",
          description:
            "Build a react application and implement routes with React Router",
          completed: false,
        },
        {
          project_name: "Advanced State Management",
          description: "Use Redux to manage state inside a React application",
          completed: false,
        },
        {
          project_name: "Responsive Web Design",
          description: "Make your page responsive",
          completed: false,
        },
      ]);
    });
};
