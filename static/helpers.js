// Copyright 2016 Google Inc.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Some helper functions for the codelab.

function showRestaurantsAround() {
  var restaurants = [
    { name: 'Pudding Lane', price: '0', city: 'London' },
    { name: 'Cask', price: '10-20', city: 'London' },
    { name: 'Duke of Wellington', price: '10-15', city: 'London' },
  ];

  _showRestaurants(restaurants);
}

function showTopRestaurants() {
  var restaurants = [
    { name: 'Tasty Sushi', price: '15-25', city: 'Cardiff' },
    { name: 'Warm Pizza', price: '10-15', city: 'Glasgow' },
    { name: 'Chez Francois', price: '50-100', city: 'Belfast' },
  ];

  _showRestaurants(restaurants);
}

function _showRestaurants(restaurants) {
  var restaurantList = document.getElementById('restaurant-list');
  restaurantList.innerHTML = '';

  restaurants.forEach(function(r) {
    var restaurant = document.createElement('local-restaurant');
    restaurant.name = r.name;
    restaurant.price = r.price;
    restaurant.city = r.city;
    restaurantList.appendChild(restaurant);
  });
}
