import $ from "jquery";

class Modal {
    constructor() {
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close");
        this.events();
    }

    events() {
        var modalObj = this;
        // CLicking the open button
        this.openModalButton.on("click", this.openModal.bind(this));
        // Clicking the close button
        this.closeModalButton.on("click", this.closeModal.bind(this));
        // Clicking esc key
        $(document).keydown(this.keyPressHandler.bind(this));
    }

    keyPressHandler(event) {
        if (event.which == 27) {
            this.closeModal()
        }
    }

    openModal() {
        this.modal.addClass("modal--is-visible");
        return false;
    }

    closeModal() {
        this.modal.removeClass("modal--is-visible");
    }


}

export default Modal;
