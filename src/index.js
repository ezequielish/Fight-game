import data from './data/data';
import Arena from './components/arena';
import  './assest/css/style.css'
const $container = document.querySelector('.container');
import Batalla from './components/batalla';
// window.onload = Arena($container,data.arena);
window.onload = new Batalla(2,4);