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
      <a data-target="slide-out" class="sidenav-trigger waves-effect waves-light"><i class="material-icons">menu</i></a>
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

  <div class="fixed-action-btn">
    <a class="btn-floating btn-large red">
      <i class="large material-icons">menu</i>
    </a>
    <ul>
      <li id="meals" class="tooltipped" data-position="top" data-tooltip="Meals"><a class="btn-floating red waves-effect waves-light"><i class="material-icons">local_dining</i></a></li>
      <li id="categories" class="tooltipped" data-position="top" data-tooltip="Categories"><a class="btn-floating yellow darken-1 waves-effect waves-light"><i class="material-icons">room_service</i></a></li>
      <li id="ingredients" class="tooltipped" data-position="top" data-tooltip="Ingredients"><a class="btn-floating blue waves-effect waves-light"><i class="material-icons">restaurant</i></a></li>
    </ul>
  </div>
  `;
    const tooltip = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltip);
  }
}
customElements.define('nav-bar', NavBar);
