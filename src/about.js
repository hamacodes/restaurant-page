// about.js

export default function createAboutPage() {
  // Select the content div
  const content = document.querySelector('#content');

  // Create elements for the about page
  const headline = document.createElement('h1');
  headline.textContent = "About Us";

  const description = document.createElement('p');
  description.textContent = "We are a family-owned restaurant that has been serving the community for over 20 years. Our goal is to provide delicious food in a warm and welcoming environment.";

  const description2 = document.createElement('p');
  description2.textContent = "Come visit us today!";
  // Append elements to the content div
  content.appendChild(headline);
  content.appendChild(description);
  content.appendChild(description2);
};