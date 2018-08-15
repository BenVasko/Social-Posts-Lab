"use strict";

const postForm = {
    bindings: {
        onSubmit: "&"
    },
    templateUrl: "components/form/form.html"
    
}

angular
    .module("App")
    .component("postForm", postForm);