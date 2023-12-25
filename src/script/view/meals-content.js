import '../component/meal-list';
import '../component/search-bar';

class MealsContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="section container">
      <search-bar></search-bar>
      <meal-list></meal-list>
    </div>
    `;
  }
}

customElements.define('meals-content', MealsContent);
