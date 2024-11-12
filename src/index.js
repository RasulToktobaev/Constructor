import { Sidebar } from './classes/sidebar';
import { Site } from './classes/site';
import { model } from "./model";
import './styles/main.css';


const site = new Site('#site');

site.render(model)

const sidebar = new Sidebar('#panel')



