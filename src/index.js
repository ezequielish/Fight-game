import data from './data/data';
import Arena from './components/arena';
import  './assest/css/style.css'
const $container = document.querySelector('.container');
import Batalla from './components/batalla';
const datos = {
    arena: data.arena,
    personajes: data.personajes
}
window.onload = new Arena($container,datos);
// window.onload = new Batalla(2,4);