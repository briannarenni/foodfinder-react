import ky from 'ky';
import { MenuItem, Restaurant } from './models';

class apiService {
  URL = 'https://foodfindernetapi.azurewebsites.net';
  cuisines = ['american', 'chinese', 'greek', 'italian', 'mexican', 'thai'];
  restCuisine = '';
  menuItems = [];
  restName = '';
  restaurants = [];

  async getCuisineMenu(cuisine) {
    const params = new URLSearchParams({ cuisine });
    const data = await ky.get(`${this.URL}/menus/cuisine`, { searchParams: params }).json();
    this.menuItems = data.map(menuItem => {
      const { ItemName, ItemPrice, ItemGroup } = menuItem;
      return new MenuItem(ItemName, ItemPrice, ItemGroup);
    });
    return this.menuItems;
  }

  async getRestaurants() {
    // TODO
  }

}

export default apiService;
