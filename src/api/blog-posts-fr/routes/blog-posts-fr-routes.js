module.exports = {
  routes: [
    {
      method: "GET",
      path: "/blog-posts-fr",
      handler: "blog-posts-fr-controller.find",
    },
    {
      method: "GET",
      path: "/blog-posts-fr/:id",
      handler: "blog-posts-fr-controller.findOne",
    },
    {
      method: "POST",
      path: "/blog-posts-fr",
      handler: "blog-posts-fr-controller.create",
    },
    {
      method: "PUT",
      path: "/blog-posts-fr/:id",
      handler: "blog-posts-fr-controller.update",
    },
    {
      method: "DELETE",
      path: "/blog-posts-fr/:id",
      handler: "blog-posts-fr-controller.delete",
    },
  ],
};
