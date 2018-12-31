import data from './data/data';
import Arena from './components/arena';
import  './assest/css/style.css'
const $container = document.querySelector('.container');

window.onload = Arena($container,data.arena);
