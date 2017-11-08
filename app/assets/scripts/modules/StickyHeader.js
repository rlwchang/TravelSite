import $ from "jquery";
import smoothScroll from "jquery-smooth-scroll";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";


class StickyHeader {
    constructor() {
        this.header = $(".header");
        this.headerTriggerElement = $(".large-hero__title");
        this.pageSection = $(".page-section");
        this.headerLinks = $(".menu a");
        this.createHeaderWaypoint();
        this.createPageSectionWaypoints();
        this.addSmoothScroll();
    }

    addSmoothScroll() {
        this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint() {
        var stickyHeaderObj = this;
        new Waypoint({
            element: stickyHeaderObj.headerTriggerElement[0],
            handler: function(direction) {
                if (direction == "down") {
                    stickyHeaderObj.header.addClass("header--dark");
                } else {
                    stickyHeaderObj.header.removeClass("header--dark");
                }
            }
        });
    }

    createPageSectionWaypoints() {
        var stickyHeaderObj = this;
        this.pageSection.each(function() {
            var currentPageSection = this;

            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if (direction == "down") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        stickyHeaderObj.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "18%"
            });

            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if (direction == "up") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        stickyHeaderObj.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "-40%"
            });
        });
    }
}

export default StickyHeader
