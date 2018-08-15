"use strict";

const socialPosts = {
    templateUrl: "components/social/social.html",
    controller: function() {
        let vm = this;
        vm.formVisible = false;
        vm.listOfPosts = [{
            title: "I Rode My Bike",
            body: "Today I rode my bike in the park. It was fun."
        },
        {
            title: "Chinese Food",
            body: "I went out to a Chinese restaurant this evening with my beautiful wife. It was spectacular."
        }];
        vm.onSubmit = (newPost) => {
            vm.listOfPosts.unshift(angular.copy(newPost));
            vm.formVisible = false;
        }
        //I know this wasn't required, but the lack of not being able to delete something was annoying me
        vm.deletePost = (index) => {
            vm.listOfPosts.splice(index, 1);
          };
    }
}

angular
    .module("App")
    .component("socialPosts", socialPosts);