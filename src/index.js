import { model } from "./model";
import './styles/main.css';
import { templates } from './templates';


let site = document.querySelector('#site');


model.forEach(block => {
    console.log(block);

    const toHTML = templates[block.type]

    if (toHTML) {
        site.insertAdjacentHTML('beforeEnd', toHTML(block))
    }

})


