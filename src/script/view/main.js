import '../component/nav-bar';
import './meals-content';
import './categories-content';
import './ingredients-content';
import '../component/search-bar';
import '../component/meal-list';
import MealData from '../data/meal-data';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const mealListElement = document.querySelector('meal-list');
  // const meals = document.querySelectorAll('#meals');
  // const categories = document.querySelectorAll('#categories');
  // const ingredients = document.querySelectorAll('#ingredients');
  // const mainElement = document.querySelector('main');
  // [[meals, 'meals-content'], [categories, 'categories-content'], [ingredients, 'ingredients-content']].forEach((navbarContent) => {
  //   navbarContent[0].forEach((item)=>{
  //     item.addEventListener('click', () => {
  //       mainElement.innerHTML = `<${navbarContent[1]}></${navbarContent[1]}>`;
  //       [...meals, ...categories, ...ingredients].forEach((navbar) => { navbar.classList.remove('active'); });
  //       item.classList.add('active');
  //     });
  //   })
  // });

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

  const showRandomMeal = async () => {
    try {
      mealListElement.renderLoading();
      const result = await MealData.searchRandomMeal();
      mealListElement.meals = result;
    } catch (e) {
      mealListElement.renderError(e);
    }
  };
  showRandomMeal();

  const sidenav = document.querySelectorAll('.sidenav');
  const options = {
    edge: 'left',
  };
  M.Sidenav.init(sidenav, options);
};

export default main;
