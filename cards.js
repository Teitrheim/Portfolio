const projects = [
  {
    title: "Square Eyes",
    description:
      "In this assignment I created a a properly functioning, responsive website for streaming movies using HTML and CSS",
    imageId: 8, // Replace with the actual image ID from your WordPress site
    githubRepo: "https://github.com/yourusername/square-eyes",
    liveSite: "https://www.square-eyes-live-site.com",
  },
  {
    title: "Square Eyes",
    description:
      "In this assignment I created a a properly functioning, responsive website for streaming movies using HTML and CSS",
    imageId: 8, // Replace with the actual image ID from your WordPress site
    githubRepo: "https://github.com/yourusername/square-eyes",
    liveSite: "https://www.square-eyes-live-site.com",
  },
  {
    title: "Square Eyes",
    description:
      "In this assignment I created a a properly functioning, responsive website for streaming movies using HTML and CSS",
    imageId: 8, // Replace with the actual image ID from your WordPress site
    githubRepo: "https://github.com/yourusername/square-eyes",
    liveSite: "https://www.square-eyes-live-site.com",
  },
  // Add more projects as needed
];

const fullProductUrl = "https://portfolio.seeorno.no/wp-json/wp/v2/media";

// Function to create project cards
async function createProjectCard(project) {
  const card = document.createElement("article");
  card.classList.add("card");

  // Fetch image data
  const imageData = await fetch(`${fullProductUrl}/${project.imageId}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching image data:", error);
      return null;
    });

  // Set the image source if image data is available
  const imageUrl = imageData
    ? imageData.source_url
    : "path/to/default-image.jpg";

  card.innerHTML = `
        <header>
        </header>
        <img src="${imageUrl}" alt="${project.title} Screenshot">
        <div class="content">
            <p>${project.description}</p>
        </div>
        <footer>
            <a rel="noopener" href="${project.githubRepo}" target="_blank">GitHub Repo</a>
            <a rel="noopener" href="${project.liveSite}" target="_blank">Live Site</a>
        </footer>
    `;

  return card;
}

// Function to add project cards to the DOM
async function displayProjects() {
  const dynamicContent = document.getElementById("dynamicContent");

  // Fetch image data for each project and create cards
  const cardPromises = projects.map(async (project) => {
    const card = await createProjectCard(project);
    dynamicContent.appendChild(card);
  });

  // Wait for all cards to be created and added to the DOM
  await Promise.all(cardPromises);
}

// Call the function when the page is loaded
window.addEventListener("load", displayProjects);
