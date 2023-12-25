import 'materialize-css/dist/js/materialize.min';
import logo from '../../images/logo.png';

class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
  <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo"><img src=${logo} alt="logo" width="64px"></a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li id="meals"><a>Meals</a></li>
        <li id="categories"><a>Categories</a></li>
        <li id="ingredients"><a>Ingredients</a></li>
      </ul>
    </div>
  </nav>  
      `;
    const meals = this.querySelector('#meals');
    const categories = this.querySelector('#categories');
    const ingredients = this.querySelector('#ingredients');
    const mainElement = document.querySelector('main');
    [[meals, 'meals-content'], [categories, 'categories-content'], [ingredients, 'ingredients-content']].forEach((navbarContent) => {
      navbarContent[0].addEventListener('click', () => {
        mainElement.innerHTML = `<${navbarContent[1]}>`;
        [meals, categories, ingredients].forEach((navbar) => { navbar.classList.remove('active'); });
        navbarContent[0].classList.add('active');
      });
    });
  }
}
customElements.define('nav-bar', NavBar);
