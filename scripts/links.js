const baseURL = "https://richmondae.github.io/wdd230/";
const linksURL = "https://richmondae.github.io/wdd230/data/links.json";


async function fetchLinks() {
    try {
        const response = await fetch(linksURL);

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        displayLinks(data.lessons);
    } catch (error) {
        console.error("Error fetching links:", error);
    }
}

// Create card and set attributes for section
const card = document.createElement('section');
card.setAttribute('id', "card1");
card.setAttribute('class', "card");

// Create header in card
const cardTitle = document.createElement('h3');
cardTitle.textContent = "Learning Activities";

// Append header to card
card.appendChild(cardTitle);

// Create an unordered list for lessons
const weeks = document.createElement('ul');
weeks.setAttribute('id', "lessons");

// Loop through JSON data and create ul list for lessons
const displayLinks = (lessons) => {
    lessons.forEach((lesson) => {
        // Get container and declare insert order
        const container = document.getElementById('container');
        container.insertBefore(card.cloneNode(true), container.firstChild);

        // Create li for lesson, set attributes and text content
        const week = document.createElement('li');
        week.textContent = `Week ${lesson.lesson}: `;
        week.setAttribute('id', `lesson${lesson.lesson}`);
        week.setAttribute('class', "lessons");

        // Loop through links list and create an element for each lesson link
        lesson.links.forEach((link) => {
            const lessonLink = document.createElement('a');
            lessonLink.setAttribute('id', link.title);
            lessonLink.setAttribute('class', 'lesson');
            lessonLink.setAttribute('href', link.url);
            lessonLink.setAttribute('target', "_blank");
            lessonLink.innerHTML = link.title;

            // Append links to week list item
            week.appendChild(lessonLink);
        });

        // Append week (with links) to weeks ul
        weeks.appendChild(week);
    });

    // Append weeks to card
    card.appendChild(weeks);
}

fetchLinks();
