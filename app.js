document.getElementById('searchBtn').addEventListener('click', function() {
    const searchQuery = document.getElementById('searchInput').value;
    if (searchQuery) {
      alert(`Searching for: ${searchQuery}`);
      // You can redirect to the listings page with the search query
      window.location.href = `listings.html?search=${encodeURIComponent(searchQuery)}`;
    } else {
      alert('Please enter a search term!');
    }
  });