import $ from "jquery";

class Navbar {
    constructor() {
        this.header = $(".header");
        this.menuIcon = $(".header__menu-icon");
        this.menuContent = $(".header__content");
        this.events();
    }

    events() {
        this.menuIcon.on("click", this.toggleMenu.bind(this));
    }

    toggleMenu() {
        this.menuContent.toggleClass("header__content--is-visible");
        this.header.toggleClass("header--is-expanded");
        this.menuIcon.toggleClass("header__menu-icon--close-x");
    }


}

export default Navbar;
