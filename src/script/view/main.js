import '../component/nav-bar';
import '../component/footer-container';
import './meals-content';
import './categories-content';
import './ingredients-content';
import MealData from '../data/meal-data';
import CategoriesData from '../data/categories-data';
import IngredientsData from '../data/ingredients-data';

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
    const modal = document.querySelectorAll('meal-detail-modal');
    M.Modal.init(modal, { preventScrolling: false });
  } else if (content === 'ingredients-content') {
    const ingredientsListElement = document.querySelector('ingredients-list');
    const showIngredients = async () => {
      try {
        ingredientsListElement.renderLoading();
        const ingredients = await IngredientsData.showIngredients();
        ingredientsListElement.ingredients = ingredients;
      } catch (e) {
        ingredientsListElement.renderError(e);
      }
    };
    await showIngredients();
    const collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible);
  }

  const sidenav = document.querySelectorAll('.sidenav');
  const options = {
    edge: 'left',
  };
  M.Sidenav.init(sidenav, options);

  const FloatingActionButton = document.querySelectorAll('.fixed-action-btn');
  M.FloatingActionButton.init(FloatingActionButton, {
    direction: 'top',
  });

  const modal = document.querySelectorAll('meal-detail-modal');
  M.Modal.init(modal, { preventScrolling: false });
};

export default main;
