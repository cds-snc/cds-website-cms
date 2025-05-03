module.exports = {
  routes: [
    {
      method: "GET",
      path: "/job-posting-frs",
      handler: "job-postings-fr-controller.find",
    },
    {
      method: "GET",
      path: "/job-posting-frs/:id",
      handler: "job-postings-fr-controller.findOne",
    },
    {
      method: "POST",
      path: "/job-posting-frs",
      handler: "job-postings-fr-controller.create",
    },
    {
      method: "PUT",
      path: "/job-posting-frs/:id",
      handler: "job-postings-fr-controller.update",
    },
    {
      method: "DELETE",
      path: "/job-posting-frs/:id",
      handler: "job-postings-fr-controller.delete",
    },
  ],
};
