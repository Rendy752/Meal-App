import '../component/meal-list';
import '../component/search-bar';

class MealsContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="section container">
      <search-bar>
      <meal-list>
    </div>
    `;
  }
}

customElements.define('meals-content', MealsContent);
