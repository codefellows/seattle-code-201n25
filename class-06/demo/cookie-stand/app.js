'use strict';

// this array should have all 14 hours:
let hours = ['6 a.m.', '7 a.m.', '8 a.m.'];

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  averageCookiesSoldEachHourArray: [],
  getRandomCustomers: function() {
    //The maximum is inclusive and the minimum is inclusive 
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesPerHour: function() {
    // Do this 14 times, one for each hour in our hours array — For loop?
    let customersThisHour = this.getRandomCustomers();
    // Multipy the random number of customer by the average number of cookie sold per customer
    let cookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
    // push that number into the averageCookiesSoldEachHourArray
    this.averageCookiesSoldEachHourArray.push(cookiesSoldThisHour);
    // add up the values in the averageCookiesSoldEachHourArray to get the total
  },
  render: function() {
    this.calcCookiesPerHour();
    console.log(this.averageCookiesSoldEachHourArray);
    console.log('Render method ran');
    // render the UL and LIs

    // create a varrible — create an element
    // maybe give it content (text?)
    // append it to the DOM — to do this I need 2 things:
    // 1.) a window into the DOM (get element by ID?)
    // 2.) an element to append to the DOM
  }
};

seattle.render();
// console.log(seattle.averageCookiesSoldEachHourArray);
