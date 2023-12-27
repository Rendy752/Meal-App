import CategoriesData from '../data/categories-data';

class CategoryItem extends HTMLLIElement {
  set category(category) {
    const setCategory = async () => {
      this._category = category;
      const showListMeal = async (category) => {
        try {
          const listMeal = await CategoriesData.searchMealByCategory(category);
          return listMeal;
        } catch (e) {
          return null;
        }
      };
      this._listMeal = await showListMeal(category.strCategory);
      this.render();
    };
    setCategory();
  }

  render() {
    this.innerHTML = `
        <div class="collapsible-header orange darken-4">
        <div class="row hoverable category-item-header">
            <div class="col l4 s12 center-align">
            <img src=${
              this._category.strCategoryThumb
            } class="responsive-img circle white">
            </div>
            <div class="col l8 s12">
                <h5>${this._category.strCategory}</h5>
                <p>${this._category.strCategoryDescription.replace(
                  '\n',
                  '<br>'
                )}</p>
            </div>
        </div>
        </div>
        <div class="collapsible-body orange darken-3">
        <div id="list-meal-container" class="row"></div>
        </div>
    `;
    this._listMeal.forEach((meal) => {
      this.querySelector('#list-meal-container').innerHTML += `
            <img src="${meal.strMealThumb}" class="tooltipped col l3 m4 s6" 
            data-position="top"
            data-tooltip="${meal.strMeal}">
        `;
    });
    var tooltip = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltip);
  }
}

customElements.define('category-item', CategoryItem, { extends: 'li' });
