module.exports = {
  routes: [
    {
      method: "GET",
      path: "/job-posting-frs",
      handler: "job-postings-fr-controller.find",
      config: {
        policies: [],
      },
    },
    // {
    //   method: "GET",
    //   path: "/job-posting-frs/count",
    //   handler: "job-posting-fr.count",
    //   config: {
    //     policies: [],
    //   },
    // },
    {
      method: "GET",
      path: "/job-posting-frs/:id",
      handler: "job-postings-fr-controller.findOne",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/job-posting-frs",
      handler: "job-postings-fr-controller.create",
      config: {
        policies: [],
      },
    },
    {
      method: "PUT",
      path: "/job-posting-frs/:id",
      handler: "job-postings-fr-controller.update",
      config: {
        policies: [],
      },
    },
    {
      method: "DELETE",
      path: "/job-posting-frs/:id",
      handler: "job-postings-fr-controller.delete",
      config: {
        policies: [],
      },
    },
  ],
};
