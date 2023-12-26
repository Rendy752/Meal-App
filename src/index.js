import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import 'material-icons/iconfont/material-icons.css';
import './style/style.css';

import main from './script/view/main';

const meals = document.querySelectorAll('#meals');
const categories = document.querySelectorAll('#categories');
const ingredients = document.querySelectorAll('#ingredients');
const mainElement = document.querySelector('main');
mainElement.setAttribute('class', 'orange lighten-3');
[
  [meals, 'meals-content'],
  [categories, 'categories-content'],
  [ingredients, 'ingredients-content']
].forEach((navbarContent) => {
  navbarContent[0].forEach((item) => {
    item.addEventListener('click', () => {
      mainElement.innerHTML = `<${navbarContent[1]}></${navbarContent[1]}>`;
      main(navbarContent[1]);
      [...meals, ...categories, ...ingredients].forEach((navbar) => {
        navbar.classList.remove('active');
      });
      item.classList.add('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', main('meals-content'));
