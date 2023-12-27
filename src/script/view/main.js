import '../component/nav-bar';
import '../component/footer-container';
import './meals-content';
import './categories-content';
import './ingredients-content';
import MealData from '../data/meal-data';
import CategoriesData from '../data/categories-data';

const main = async (content = 'meals-content') => {
  if (content === 'meals-content') {
    const mealListElement = document.querySelector('meal-list');

    const showRandomMeal = async () => {
      try {
        mealListElement.renderLoading();
        const result = await MealData.searchRandomMeal();
        mealListElement.meals = result;
      } catch (e) {
        mealListElement.renderError(e);
      }
    };
    await showRandomMeal();

    const searchElement = document.querySelector('search-bar');
    const onButtonSearchKeywordClicked = async () => {
      try {
        mealListElement.renderLoading();
        const result = await MealData.searchMeal(searchElement.keyword);
        mealListElement.meals = result;
      } catch (e) {
        mealListElement.renderError(e);
      }
    };
    searchElement.clickEvent = onButtonSearchKeywordClicked;

    const modal = document.querySelectorAll('meal-detail-modal');
    M.Modal.init(modal, { preventScrolling: false });
  } else if (content === 'categories-content') {
    const categoriesListElement = document.querySelector('categories-list');
    const showCategories = async () => {
      try {
        categoriesListElement.renderLoading();
        const categories = await CategoriesData.showCategories();
        categoriesListElement.categories = categories;
      } catch (e) {
        categoriesListElement.renderError(e);
      }
    };
    await showCategories();
    const collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible);
  }

  const sidenav = document.querySelectorAll('.sidenav');
  const options = {
    edge: 'left'
  };
  M.Sidenav.init(sidenav, options);
};

export default main;
