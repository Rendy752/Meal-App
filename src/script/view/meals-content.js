import '../component/meal-list';
import '../component/search-bar';
import '../component/meal-detail-modal';

class MealsContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="section container">
    <search-bar></search-bar>
    <meal-list></meal-list>
    <meal-detail-modal></meal-detail-modal>
    </div>
    `;
  }
}

customElements.define('meals-content', MealsContent);
