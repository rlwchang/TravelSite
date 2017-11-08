const $ = require('jquery');
import Navbar from "./modules/Navbar";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

var navbar = new Navbar();
var revealFeatureItem = new RevealOnScroll(".feature-item", "85%");
var revealTestimonial = new RevealOnScroll(".testimonial", "60%");
var stickyHeader = new StickyHeader();
