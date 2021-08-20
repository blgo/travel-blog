// JS Goes here - ES6 supported

import "./js/app";
import "./js/backtotop";
import "./js/util";
import { Fancybox } from "@fancyapps/ui";

var cloudinary = require('cloudinary-core');
var cl = cloudinary.Cloudinary.new();
cl.responsive();

// $.fancybox.defaults.buttons =
// [
// "zoom",
// //"share",
// "slideShow",
// "fullScreen",
// //"download",
// "thumbs",
// "close"
// ];
