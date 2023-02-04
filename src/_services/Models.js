export const sortFilters = ['Name', 'Highest Rating', 'Lowest Rating'];

export const cuisineFilters = ['American', 'Chinese', 'Greek', 'Italian', 'Mexican', 'Thai'];

export const cityFilters = ['Atlanta', 'Chicago', 'Las Vegas', 'Los Angeles', 'Miami', 'New York City', 'Orlando', 'Seattle'];

export class MenuItem {
  constructor(name, price, group) {
    this.ItemName = name;
    this.ItemPrice = price;
    this.ItemGroup = group;
  }
}

export class Restaurant {
  constructor(name, cuisine, city, grade, rating) {
    this.RestName = name;
    this.Cuisine = cuisine;
    this.City = city;
    this.Grade = grade;
    this.Rating = rating;
  }
}

