import logo from '../../images/logo.png';

class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
  <nav class="orange darken-3">
    <div class="container nav-wrapper">
      <a class="brand-logo"><img src=${logo} alt="logo" width="64px"></a>
      <a data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li id="meals" class="hoverable waves-effect waves-yellow"><a>Meals</a></li>
        <li id="categories" class="hoverable waves-effect waves-yellow"><a>Categories</a></li>
        <li id="ingredients" class="hoverable waves-effect waves-yellow"><a>Ingredients</a></li>
      </ul>
    </div>
  </nav> 
  <ul id="slide-out" class="sidenav row orange darken-3">
    <li class="hoverable waves-effect waves-yellow col s12 center-align"><img src=${logo} alt="logo" width="64px"></li>
    <li id="meals" class="hoverable waves-effect waves-yellow col s12"><a>Meals</a></li>
    <li id="categories" class="hoverable waves-effect waves-yellow col s12"><a>Categories</a></li>
    <li id="ingredients" class="hoverable waves-effect waves-yellow col s12"><a>Ingredients</a></li>
  </ul>
      `;
  }
}
customElements.define('nav-bar', NavBar);
