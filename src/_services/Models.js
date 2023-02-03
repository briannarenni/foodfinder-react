export const cuisineFilters = ['American', 'Chinese', 'Greek', 'Italian', 'Mexican', 'Thai'];

export const cityFilters = ['Atlanta', 'Chicago', 'Houston', 'Los Angeles', 'Miami', 'New Orleans', 'New York City', 'Orlando', 'Portland', 'Seattle', 'San Diego', 'San Francisco'];

export const sortFilters = ['Name (A-Z)', 'Rating (High)', 'Rating (Low)'];

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

