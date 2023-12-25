const baseUrl = 'www.themealdb.com/api/json/v1/1';
class MealData {
  static searchMeal = async (keyword) => {
    try {
      const response = await fetch(`${baseUrl}/search.php?s=${keyword}`);
      const responseJson = await response.json();
      return responseJson.teams.length
        ? responseJson.teams
        : `${keyword} is not found`;
    } catch (e) {
      return 'Problem occurred, such as your internet';
    }
  };
}

export default MealData;
