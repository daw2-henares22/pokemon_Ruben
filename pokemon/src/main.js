// Import our custom CSS
import '../style.css'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { home } from "./vistas/home"
import { header } from "./componentes/header"
import { footer } from "./componentes/footer"

//Inyectamos el componente header
document.querySelector('header').innerHTML = header.template;
//Inyectamos la vista home
document.querySelector('main').innerHTML = home.template;
//Inyectamos el componente footer
document.querySelector('footer').innerHTML = footer.template;