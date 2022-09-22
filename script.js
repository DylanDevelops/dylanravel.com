import $ from 'jquery'
import 'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import Swup from 'swup';
const swup = new Swup();


$(document).ready(()=>{
    $('body').html('Hello World, if you see this message Parcel Bundler and Github Hosting are working nicely!');
})