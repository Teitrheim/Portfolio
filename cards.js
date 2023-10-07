const projects = [
  {
    title: "Square Eyes",
    description:
      "In my first coding assignment I created a a properly functioning, responsive website for streaming movies using HTML and CSS",
    imageId: 8,
    githubRepo: "https://github.com/yourusername/square-eyes",
    liveSite: "https://www.square-eyes-live-site.com",
  },
  {
    title: "The community science museum/Semester Project",
    description:
      "In my semester project I was to design and write code for an interactive science museum called the Community Science Museum. Its core target audience is primary and middle school children (ages 7-15) and families with young children.",
    imageId: 9,
    githubRepo: "https://github.com/yourusername/square-eyes",
    liveSite: "https://www.square-eyes-live-site.com",
  },
  {
    title: "Fighting Days",
    description:
      "In my project exam I made a blog about the different styles of martial arts using JavaScript, fetch and API",
    imageId: 10,
    githubRepo: "https://github.com/yourusername/square-eyes",
    liveSite: "https://www.square-eyes-live-site.com",
  },
];

const fullProductUrl = "https://portfolio.seeorno.no/wp-json/wp/v2/media";

async function createProjectCard(project) {
  const card = document.createElement("article");
  card.classList.add("card");

  const imageData = await fetch(`${fullProductUrl}/${project.imageId}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching image data:", error);
      return null;
    });

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

async function displayProjects() {
  const dynamicContent = document.getElementById("dynamicContent");

  const cardPromises = projects.map(async (project) => {
    const card = await createProjectCard(project);
    dynamicContent.appendChild(card);
  });

  await Promise.all(cardPromises);
}

window.addEventListener("load", displayProjects);
