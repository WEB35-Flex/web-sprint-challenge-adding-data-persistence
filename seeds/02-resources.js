exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("Resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("Resources").insert([
        {
          resource_name: "text editor",
          description: "a source-code editor like vs code",
        },
        {
          resource_name: "computer",
          description: "a desktop or laptop with windows, macOS, or linux",
        },
        {
          resource_name: "js library",
          description: "a library such as react or redux",
        },
      ]);
    });
};
