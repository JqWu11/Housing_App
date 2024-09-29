const listings = [
  {
    title: "123 Main St, Ann Arbor, MI",
    price: 1200,
    beds: 2,
    baths: 1,
    img: "https://images1.apartments.com/i2/zxlRM-Pd0yKP2mB-4zTCw26ArWhVCfVKDZrkN0gdNxw/111/the-courtyards-apartments-ann-arbor-mi-courtyard-student-apartments.jpg",
    description: "A lovely apartment close to campus, perfect for students."
  },
  {
    title: "456 Oak Dr, Ann Arbor, MI",
    price: 1500,
    beds: 3,
    baths: 2,
    img: "https://s3.amazonaws.com/rcp-prod-uploads/property_images/slider_images/2021-06/87f164ae3db3e0a6910beddca0b2b736a9f106a7QN.jpeg",
    description: "Spacious house located near the engineering campus."
  },
  {
    title: "789 Maple St, Ann Arbor, MI",
    price: 900,
    beds: 1,
    baths: 1,
    img: "https://images1.forrent.com/i2/Hu_-_DJOpr0FLV7USsNrhDnfn52_5_Gd1MaCDzN5JNk/117/image.jpg?p=1",
    description: "Cozy studio apartment in a quiet neighborhood."
  },
  {
    title: "435 State St, Ann Arbor, MI",
    price: 2100,
    beds: 4,
    baths: 2,
    img: "https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/01/hmt.STK_.StudentHouses.03.31.22.046.jpg?fit=1200%2C801&ssl=1",
    description: "Large downtown housing."
  }
];

// Function to generate listings
function generateListings(listingsData) {
  const listingsContainer = document.getElementById('listings');

  // Clear previous content
  listingsContainer.innerHTML = '';

  // Create listing boxes for each property
  listingsData.forEach(listing => {
    const listingBox = document.createElement('div');
    listingBox.classList.add('listing-box');

    // Encode the parameters for the URL
    const params = new URLSearchParams({
      title: listing.title,
      price: listing.price,
      beds: listing.beds,
      baths: listing.baths,
      img: listing.img,
      description: listing.description
    });

    listingBox.innerHTML = `
      <a href="property-details.html?${params.toString()}">
        <h2 class="listing-title">${listing.title}</h2>
        <img src="${listing.img}" alt="${listing.title}" class="listing-img">
        <div class="listing-info">
          <h3>$${listing.price}/month</h3>
          <p>${listing.beds} bed${listing.beds > 1 ? 's' : ''}, ${listing.baths} bath${listing.baths > 1 ? 's' : ''}</p>
        </div>
      </a>
    `;

    // Append the listing box to the listings container
    listingsContainer.appendChild(listingBox);
  });
}

// Initial render of listings
generateListings(listings);

// Search functionality
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', function() {
  const query = searchInput.value.toLowerCase();

  // Filter listings based on title
  const filteredListings = listings.filter(listing =>
    listing.title.toLowerCase().includes(query)
  );

  // Apply the filtered listings to the page
  generateListings(filteredListings);
});

// Filtering functionality
function applyFilters() {
  const priceFilter = document.getElementById('priceFilter').value;
  const bedFilter = document.getElementById('bedFilter').value;

  let filteredListings = listings;

  // Apply price filter
  if (priceFilter !== 'all') {
    filteredListings = filteredListings.filter(listing => listing.price <= parseInt(priceFilter));
  }

  // Apply bedroom filter
  if (bedFilter !== 'all') {
    filteredListings = filteredListings.filter(listing => listing.beds >= parseInt(bedFilter));
  }

  // Re-render listings with the filtered data
  generateListings(filteredListings);
}

// Attach event listeners to filters
document.getElementById('priceFilter').addEventListener('change', applyFilters);
document.getElementById('bedFilter').addEventListener('change', applyFilters);