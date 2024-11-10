import { model } from "./model";
import './styles/main.css';


let $site = document.querySelector('#site');


model.forEach(block => {
    $site.insertAdjacentHTML('beforeEnd', block.toHTML())
})


