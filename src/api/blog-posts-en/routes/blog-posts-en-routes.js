module.exports = {
    routes: [
        {
          method: "GET",
          path: "/blog-posts-en",
          handler: "blog-posts-en-controller.find"
        },
        {
          method: "GET",
          path: "/blog-posts-en/:id",
          handler: "blog-posts-en-controller.findOne"
        },
        {
          method: "POST",
          path: "/blog-posts-en",
          handler: "blog-posts-en-controller.create",
        },
        {
          method: "PUT",
          path: "/blog-posts-en/:id",
          handler: "blog-posts-en-controller.update",
        },
        {
          method: "DELETE",
          path: "/blog-posts-en/:id",
          handler: "blog-posts-en-controller.delete",
        }
      ]
    
}