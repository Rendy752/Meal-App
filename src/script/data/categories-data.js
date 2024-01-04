const baseUrl = 'https://www.themealdb.com/api/json/v1/1';
class CategoriesData {
  static showCategories = async () => {
    try {
      const response = await fetch(`${baseUrl}/categories.php`);
      const responseJson = await response.json();
      return Promise.resolve(responseJson.categories);
    } catch (e) {
      return Promise.reject(
        'Problem occurred, such as your internet. Please try again later',
      );
    }
  };

  static searchMealByCategory = async (category) => {
    try {
      const response = await fetch(`${baseUrl}/filter.php?c=${category}`);
      const responseJson = await response.json();
      return Promise.resolve(responseJson.meals);
    } catch (e) {
      return Promise.reject(
        'Problem occurred, such as your internet. Please try again later',
      );
    }
  };
}

export default CategoriesData;
