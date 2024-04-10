module.exports = {
  routes: [
    {
      method: "GET",
      path: "/job-posting-ens",
      handler: "job-postings-en-controller.find",
      config: {
        policies: [],
      },
    },
    // {
    //   method: "GET",
    //   path: "/job-posting-ens/count",
    //   handler: "job-posting-en.count",
    //   config: {
    //     policies: [],
    //   },
    // },
    {
      method: "GET",
      path: "/job-posting-ens/:id",
      handler: "job-postings-en-controller.findOne",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/job-posting-ens",
      handler: "job-postings-en-controller.create",
      config: {
        policies: [],
      },
    },
    {
      method: "PUT",
      path: "/job-posting-ens/:id",
      handler: "job-postings-en-controller.update",
      config: {
        policies: [],
      },
    },
    {
      method: "DELETE",
      path: "/job-posting-ens/:id",
      handler: "job-postings-en-controller.delete",
      config: {
        policies: [],
      },
    },
  ],
};
