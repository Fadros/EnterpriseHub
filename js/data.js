let enterprises = [
    {
        id: 1,
        name: "Les Outillages J.S.",
        category: "Tool Store",
        city: "Saint-Roch-de-l'Achigan",
        rating: 4.2,
        votes: 15,
        description: "Tool shop with equipment for home repairs, renovation projects, and workshop basics."
    },
    {
        id: 2,
        name: "B12 Burger Terrebonne",
        category: "Restaurant",
        city: "Terrebonne",
        rating: 4.5,
        votes: 15,
        description: "Burger restaurant known for quick service, loaded fries, and a casual family-friendly menu."
    },
    {
        id: 3,
        name: "Garage Martin Express",
        category: "Auto Repair",
        city: "Mascouche",
        rating: 4.7,
        votes: 29,
        description: "Local garage for oil changes, brakes, diagnostics, and seasonal tire service."
    },
    {
        id: 4,
        name: "Studio Lune Coiffure",
        category: "Salon",
        city: "Repentigny",
        rating: 4.8,
        votes: 33,
        description: "Hair salon offering cuts, coloring, and styling appointments in a calm studio setting."
    },
    {
        id: 5,
        name: "Marche Belle Recolte",
        category: "Grocery",
        city: "Laval",
        rating: 4.4,
        votes: 21,
        description: "Neighborhood grocery store with fresh produce, ready-to-cook meals, and local food products."
    },
    {
        id: 6,
        name: "Clinique Horizon Sante",
        category: "Health Clinic",
        city: "Montreal",
        rating: 4.6,
        votes: 18,
        description: "Walk-in health clinic focused on family care, preventive visits, and routine follow-ups."
    },
    {
        id: 7,
        name: "Atelier Pixel Print",
        category: "Print Shop",
        city: "Blainville",
        rating: 4.3,
        votes: 12,
        description: "Print shop for flyers, menus, business cards, posters, and simple branding materials."
    },
    {
        id: 8,
        name: "Nordik IT Solutions",
        category: "Technology",
        city: "Montreal",
        rating: 4.9,
        votes: 41,
        description: "IT support company helping small businesses with networks, laptops, backups, and security."
    },
    {
        id: 9,
        name: "Maison Florale d'Or",
        category: "Florist",
        city: "Terrebonne",
        rating: 4.4,
        votes: 17,
        description: "Florist creating everyday bouquets, event arrangements, and same-day gift options."
    }
];

const enterpriseList = document.getElementById("enterprise-list");
const resultsCount = document.getElementById("results-count");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

function searchEnterprises(searchText) {
    const normalizedSearch = searchText.trim().toLowerCase();

    if (normalizedSearch === "") {
        return enterprises;
    }

    return enterprises.filter(function (enterprise) {
        const fieldsToSearch = [
            enterprise.name,
            enterprise.city,
            enterprise.category,
            enterprise.description
        ];

        return fieldsToSearch.some(function (field) {
            return field.toLowerCase().includes(normalizedSearch);
        });
    });
}

function averageRating(list) {
    if (list.length === 0) {
        return 0;
    }

    let total = 0;

    list.forEach(function (enterprise) {
        total += enterprise.rating;
    });

    return total / list.length;
}

function createCardMarkup(enterprise) {
    return `
        <article class="card">
            <div class="card-header">
                <div>
                    <p class="category-pill">${enterprise.category}</p>
                    <h2>${enterprise.name}</h2>
                </div>
                <p class="rating-pill">${enterprise.rating.toFixed(1)} / 5</p>
            </div>
            <div class="card-meta">
                <p>${enterprise.city}</p>
                <p>${enterprise.votes} reviews</p>
            </div>
            <p class="card-description">${enterprise.description}</p>
            <button type="button">View Profile</button>
        </article>
    `;
}

function renderEnterprises(list) {
    if (list.length === 0) {
        enterpriseList.innerHTML = `
            <div class="empty-state">
                <p>No enterprise matches your search yet. Try another business name, city, or category.</p>
            </div>
        `;
        resultsCount.textContent = "0 enterprises";
        return;
    }

    const cardsMarkup = list.map(createCardMarkup).join("");
    const average = averageRating(list).toFixed(1);

    enterpriseList.innerHTML = cardsMarkup;
    resultsCount.textContent = `${list.length} enterprises - ${average} average rating`;
}

function handleSearch() {
    const filteredEnterprises = searchEnterprises(searchInput.value);
    renderEnterprises(filteredEnterprises);
}

searchButton.addEventListener("click", handleSearch);

searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        handleSearch();
    }
});

renderEnterprises(enterprises);
