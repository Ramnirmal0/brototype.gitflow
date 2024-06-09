// Select the card-container element
const cardContainer = document.querySelector(".card-container");

// Iterate over the commits array
commits.forEach((commit) => {
  // Create elements for the commit card
  const card = document.createElement("div");
  card.classList.add("card");

  const boldText = document.createElement("b");
  boldText.textContent = `${commit.date} by ${commit.owner}`;

  const heading = document.createElement("h5");
  heading.textContent = "Message";

  const paragraph = document.createElement("p");
  paragraph.textContent = commit.message;

  const link = document.createElement("a");
  link.href = "#"; // Add your actual link here

  const button = document.createElement("button");
  button.classList.add("button-68");
  button.textContent = "View Commit";

  // Append elements to the card
  link.appendChild(button);
  card.appendChild(boldText);
  card.appendChild(heading);
  card.appendChild(paragraph);
  card.appendChild(link);

  // Append the card to the card container
  cardContainer.appendChild(card);
});
