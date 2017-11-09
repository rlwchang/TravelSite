const $ = require('jquery');
import Navbar from "./modules/Navbar";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import Modal from "./modules/Modal";

var navbar = new Navbar();
var revealFeatureItem = new RevealOnScroll(".feature-item", "85%");
var revealTestimonial = new RevealOnScroll(".testimonial", "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
