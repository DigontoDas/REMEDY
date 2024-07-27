document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    function displayProducts(medicines) {
        productList.innerHTML = '';
        medicines.forEach(medicine => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = 
                `<img src="${medicine.image}" alt="${medicine.name}">
                <h3>${medicine.name}</h3>
                <p class="Info">${medicine.info}</p>
                <button>Info</button>`;
            productList.appendChild(productDiv);
        });
    }

    function fetchMedicines(query = '') {
        fetch(`fetch_medicines.php?query=${query}`)
            .then(response => response.json())
            .then(data => displayProducts(data))
            .catch(error => console.error('Error fetching medicines:', error));
    }

    searchButton.addEventListener('click', function() {
        const query = searchInput.value;
        fetchMedicines(query);
    });

    // Fetch and display all products initially
    fetchMedicines();
});
