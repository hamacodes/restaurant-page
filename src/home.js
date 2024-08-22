// home.js

export default function createHomePage() {
  // Select the content div
  const content = document.querySelector('#content');

  // Create elements for the homepage
  const headline = document.createElement('h1');
  headline.textContent = "Welcome to Hama's Restaurant";

  const img = document.createElement('img');
  img.src = 'https://picsum.photos/id/112/2000/1000';
  img.alt = 'Delicious food from Hama\'s Restaurant';

  const description = document.createElement('p');
  description.textContent = "We serve the best food in town! Our ingredients are fresh, our chefs are world-class, and the atmosphere is simply unbeatable. Come visit us!";

  // Append elements to the content div
  content.appendChild(headline);
  content.appendChild(img);
  content.appendChild(description);
};
