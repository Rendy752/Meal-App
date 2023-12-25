import '../component/meal-list';
import '../component/search-bar';

class MealsContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <search-bar>
    <meal-list>
    `;
  }
}

customElements.define('meals-content', MealsContent);
