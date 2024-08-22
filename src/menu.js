// menu.js

export default function createMenuPage() {
  // Select the content div
  const content = document.querySelector('#content');

  // Create elements for the menu page
  const headline = document.createElement('h1');
  headline.textContent = "Our Menu";

  const menu = document.createElement('ul');
  menu.innerHTML = `
    <li>
      <h2>Appetizers</h2>
      <p>Delicious appetizers to start your meal.</p>
    </li>
    <li>
      <h2>Entrees</h2>
      <p>Delicious entrees to enjoy.</p>
    </li>
    <li>
      <h2>Desserts</h2>
      <p>Delicious desserts to finish your meal.</p>
    </li>
  `;

  // Append elements to the content div
  content.appendChild(headline);
  content.appendChild(menu);
};