exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Tasks").insert([
        {
          description:
            "come up with a plan on how you're going to tackle your project",
          completed: false,
          project_id: 3,
        },
        {
          description: "download the needed dependencies for your project",
          completed: false,
          project_id: 3,
        },
        {
          description: "make your port dynamic",
          completed: false,
          project_id: 1,
        },
        {
          description: "implement your routes",
          completed: false,
          project_id: 2,
        },
        {
          description: "create media breakpoints for 500px and 350px",
          completed: false,
          project_id: 4,
        },
        {
          description: "implement flexbox in your project",
          completed: false,
          project_id: 4,
        },
      ]);
    });
};
