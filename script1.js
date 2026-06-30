// 1. Data Mock untuk 6 Kartu Produk Batik (berisi informasi Warna, Harga IDR, dan Rating Bintang)
const productsData = [
    { id: 1, name: "Batik Keris Klasik", color: "Cokelat", price: 250000, rating: "★★★★★", bg: "#7c2d12" },
    { id: 2, name: "Batik Megamendung Modern", color: "Biru", price: 350000, rating: "★★★★☆", bg: "#0284c7" },
    { id: 3, name: "Batik Parang Seling", color: "Cokelat", price: 180000, rating: "★★★★☆", bg: "#a16207" },
    { id: 4, name: "Batik Sogan Premium", color: "Hitam", price: 550000, rating: "★★★★★", bg: "#1e293b" },
    { id: 5, name: "Batik Flora Kontemporer", color: "Merah", price: 290000, rating: "★★★☆☆", bg: "#b91c1c" },
    { id: 6, name: "Batik Pesisiran Anggun", color: "Biru", price: 420000, rating: "★★★★★", bg: "#0f766e" }
];

// 2. State App Berjalan
let cartCount = 0;

// 3. Mengambil Element dari DOM
const productGrid = document.getElementById('productGrid');
const colorFilter = document.getElementById('colorFilter');
const priceFilter = document.getElementById('priceFilter');
const priceValue = document.getElementById('priceValue');
const cartBadge = document.getElementById('cartBadge');
const noProducts = document.getElementById('noProducts');

// 4. Fungsi Format Angka ke IDR (Rupiah)
function formatIDR(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// 5. Fungsi Render Produk ke Layar menggunakan CSS Grid Template Literals
function displayProducts(products) {
    productGrid.innerHTML = "";
    
    if (products.length === 0) {
        noProducts.style.display = "block";
        return;
    }
    
    noProducts.style.display = "none";
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        productCard.innerHTML = `
            <div class="product-img-placeholder" style="background-color: ${product.bg};">
                ${product.color} Motif
            </div>
            <div class="product-info">
                <h4>${product.name}</h4>
                <p class="product-color">Warna: ${product.color}</p>
                <div class="product-rating">${product.rating}</div>
                <div class="product-price">${formatIDR(product.price)}</div>
                <button class="btn-add-to-cart" onclick="addToCart()">Tambah ke Kartu</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// 6. Fungsi Logika Filter Real-Time (Warna + Slider Harga)
function filterProducts() {
    const selectedColor = colorFilter.value;
    const maxPrice = parseInt(priceFilter.value);
    
    // Perbarui teks harga di samping slider secara real-time
    priceValue.textContent = formatIDR(maxPrice);
    
    // Proses penyaringan array data produk
    const filtered = productsData.filter(product => {
        const matchColor = (selectedColor === 'all' || product.color === selectedColor);
        const matchPrice = (product.price <= maxPrice);
        return matchColor && matchPrice;
    });
    
    displayProducts(filtered);
}

// 7. Fungsi Update Badge Keranjang Belanja saat Tombol Klik
function addToCart() {
    cartCount++;
    cartBadge.textContent = cartCount;
    
    // Tambahkan efek animasi bounce kecil saat bertambah
    cartBadge.classList.add('bounce');
    setTimeout(() => {
        cartBadge.classList.remove('bounce');
    }, 200);
}

// 8. Event Listeners untuk Filter Real-Time
colorFilter.addEventListener('change', filterProducts);
priceFilter.addEventListener('input', filterProducts);

// Inisialisasi awal aplikasi saat halaman dimuat pertama kali
displayProducts(productsData);
priceValue.textContent = formatIDR(priceFilter.value);

