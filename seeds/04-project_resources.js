exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ProjectResources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ProjectResources").insert([
        { project_id: 1, resource_id: 1 },
        { project_id: 1, resource_id: 2 },
        { project_id: 2, resource_id: 3 },
        { project_id: 3, resource_id: 3 },
        { project_id: 4, resource_id: 1 },
        { project_id: 4, resource_id: 2 },
      ]);
    });
};
