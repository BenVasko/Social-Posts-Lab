"use strict";

const post = {
    bindings: {
        post: "<",
        index: "<",
        deletePost: "&"
    },
    templateUrl: "components/post/post.html"
}

angular
    .module("App")
    .component("post", post);