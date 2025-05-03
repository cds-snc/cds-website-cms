module.exports = {
  routes: [
    {
      method: "GET",
      path: "/job-posting-ens",
      handler: "job-postings-en-controller.find",
    },
    {
      method: "GET",
      path: "/job-posting-ens/:id",
      handler: "job-postings-en-controller.findOne",
    },
    {
      method: "POST",
      path: "/job-posting-ens",
      handler: "job-postings-en-controller.create",
    },
    {
      method: "PUT",
      path: "/job-posting-ens/:id",
      handler: "job-postings-en-controller.update",
    },
    {
      method: "DELETE",
      path: "/job-posting-ens/:id",
      handler: "job-postings-en-controller.delete",
    },
  ],
};
