"use strict";

function expandOnFocus() {
    return {
        restrict: "A",
        replace: false,
        link: ($scope, $element, $attrs) => {
            $element.on("focus", function() {
                $element.css("padding", "10px");
                $element.css("font-size", "18px");
            });
            $element.on("blur", function() {
                $element.css("padding", "0 10px 0 10px");
                $element.css("font-size", "14px");
            });
        }
    }
}

angular
    .module("App")
    .directive("expandOnFocus", expandOnFocus);