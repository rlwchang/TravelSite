const $ = require('jquery');
import Navbar from "./Navbar";
import RevealOnScroll from "./RevealOnScroll";

var navbar = new Navbar();
var revealFeatureItem = new RevealOnScroll(".feature-item", "85%");
var revealTestimonial = new RevealOnScroll(".testimonial", "60%");
