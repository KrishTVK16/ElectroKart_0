
document.addEventListener('DOMContentLoaded', () => {
    
    /* --- Product Database --- */
    const productsDB = {
        "cam1": {
            title: "Canon EOS 3000D DSLR",
            price: "₹28,999",
            originalPrice: "₹35,999",
            discount: "19% off",
            rating: "4.4 ★",
            img: "https://www.pngall.com/wp-content/uploads/2016/04/Camera-Free-Download-PNG.png",
            specs: {
                "Sensor": "APS-C CMOS Sensor with 18 MP",
                "ISO": "100-6400 sensitivity range",
                "Processor": "DIGIC 4+ Image Processor",
                "Connectivity": "Wi-Fi, NFC",
                "Warranty": "2 Year Warranty"
            }
        },
        "head1": {
            title: "Sony WH-1000XM5 Wireless",
            price: "₹26,990",
            originalPrice: "₹34,990",
            discount: "23% off",
            rating: "4.8 ★",
            img: "https://www.pngall.com/wp-content/uploads/4/Headphone-PNG-File.png",
            specs: {
                "Type": "Over Ear, Wireless",
                "ANC": "Industry Leading Noise Cancellation",
                "Battery": "Up to 30 Hours",
                "Driver": "30mm Driver Unit",
                "Warranty": "1 Year Warranty"
            }
        },
        "mac1": {
            title: "Apple MacBook Air M2",
            price: "₹89,900",
            originalPrice: "₹1,19,900",
            discount: "25% off",
            rating: "4.9 ★",
            img: "https://www.pngall.com/wp-content/uploads/13/Apple-MacBook-Air-PNG-Free-Download.png",
            specs: {
                "Processor": "Apple M2 Chip",
                "RAM": "8 GB Unified Memory",
                "Storage": "256 GB SSD",
                "Display": "13.6 inch Liquid Retina",
                "Warranty": "1 Year Warranty"
            }
        },
        "watch1": {
            title: "Samsung Galaxy Watch 5",
            price: "₹14,999",
            originalPrice: "₹29,999",
            discount: "50% off",
            rating: "4.3 ★",
            img: "https://www.pngall.com/wp-content/uploads/14/Samsung-Galaxy-Watch-Active-2-PNG-Photos.png",
            specs: {
                "Display": "Super AMOLED",
                "Sensors": "BioActive Sensor",
                "Battery": "Up to 40 Hours",
                "Water Res": "5ATM + IP68",
                "Warranty": "1 Year Warranty"
            }
        },
        "iphone14": {
            title: "Apple iPhone 14 (Blue, 128 GB)",
            price: "₹56,999",
            originalPrice: "₹69,900",
            discount: "18% off",
            rating: "4.6 ★",
            img: "https://www.pngall.com/wp-content/uploads/13/iPhone-14-PNG-Cutout.png",
            specs: {
                "Display": "6.1 inch Super Retina XDR",
                "Camera": "12MP + 12MP | 12MP Front",
                "Processor": "A15 Bionic Chip",
                "Battery": "All Day Battery Life",
                "Warranty": "1 Year Warranty"
            }
        },
        "s23": {
            title: "Samsung Galaxy S23 5G",
            price: "₹74,999",
            originalPrice: "₹79,999",
            discount: "5% off",
            rating: "4.5 ★",
            img: "https://www.pngall.com/wp-content/uploads/13/Samsung-Galaxy-S23-Ultra-PNG-Cutout.png",
            specs: {
                "Display": "Dynamic AMOLED 2X",
                "Camera": "50MP Triple Camera",
                "Processor": "Snapdragon 8 Gen 2",
                "Battery": "3900 mAh",
                "Warranty": "1 Year Warranty"
            }
        },
        "bose": {
            title: "Bose QuietComfort 45",
            price: "₹19,900",
            originalPrice: "₹24,900",
            discount: "10% off",
            rating: "4.8 ★",
            img: "https://www.pngall.com/wp-content/uploads/4/Headphone-PNG-File.png",
            specs: {
                "Type": "Over Ear Noise Cancelling",
                "Modes": "Quiet and Aware Modes",
                "Battery": "24 Hours",
                "Comfort": "Plush Synthetic Leather",
                "Warranty": "1 Year Warranty"
            }
        },
        "macpro": {
            title: "Apple MacBook Pro M2",
            price: "₹1,29,900",
            originalPrice: "₹1,29,900",
            discount: "0% off",
            rating: "4.9 ★",
            img: "https://www.pngall.com/wp-content/uploads/13/Apple-MacBook-Pro-PNG-Cutout.png",
            specs: {
                "Processor": "Apple M2 Pro",
                "RAM": "16 GB Unified Memory",
                "Storage": "512 GB SSD",
                "Display": "14.2 inch Liquid Retina XDR",
                "Warranty": "1 Year Warranty"
            }
        },
        "iwatch": {
            title: "Apple Watch Ultra",
            price: "₹41,900",
            originalPrice: "₹45,900",
            discount: "8% off",
            rating: "4.7 ★",
            img: "https://www.pngall.com/wp-content/uploads/15/Apple-Watch-Ultra-PNG-File.png",
            specs: {
                "Case": "49mm Titanium Case",
                "GPS": "Precision Dual-frequency GPS",
                "Battery": "Up to 36 Hours",
                "Durability": "100m Water Resistance",
                "Warranty": "1 Year Warranty"
            }
        },
        "ipad": {
            title: "Apple iPad Air (5th Gen)",
            price: "₹54,900",
            originalPrice: "₹59,900",
            discount: "5% off",
            rating: "4.8 ★",
            img: "https://www.pngall.com/wp-content/uploads/13/iPad-PNG-Image.png",
            specs: {
                "Processor": "Apple M1 Chip",
                "Display": "10.9 inch Liquid Retina",
                "Camera": "12MP Wide Camera",
                "Connectivity": "Wi-Fi 6",
                "Warranty": "1 Year Warranty"
            }
        }
    };

    /* --- Dynamic Details Page Logic --- */
    if (window.location.pathname.includes('service-detail.html')) {
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id');
        const product = productsDB[productId] || productsDB["iphone14"]; // Default fallback

        // Populate Data
        document.title = `${product.title} | ElectroKart`;
        
        const detailImg = document.querySelector('.detail-img');
        if(detailImg) {
            detailImg.src = product.img;
            detailImg.alt = product.title;
        }

        const titleEl = document.querySelector('.detail-info h1');
        if(titleEl) titleEl.textContent = product.title;

        const ratingEl = document.querySelector('.rating-badge');
        if(ratingEl) ratingEl.textContent = product.rating;

        const priceEl = document.querySelector('.detail-price-lg');
        if(priceEl) priceEl.textContent = product.price;

        const originalPriceEl = document.querySelector('.detail-info span[style*="text-decoration"]');
        if(originalPriceEl) originalPriceEl.textContent = product.originalPrice || '';

        const discountEl = document.querySelector('.detail-info span[style*="color: var(--success-color)"]');
        if(discountEl) discountEl.textContent = product.discount || '';

        // Update Add to Cart Button Data
        const addToCartBtn = document.querySelector('.add-to-cart-btn');
        if(addToCartBtn) {
            addToCartBtn.dataset.id = productId || "iphone14";
            addToCartBtn.dataset.title = product.title;
            addToCartBtn.dataset.price = product.price;
            addToCartBtn.dataset.img = product.img;
        }

        // Update Specs
        const specsContainer = document.querySelector('.specs-list');
        if(specsContainer && product.specs) {
            let specsHtml = '';
            for (const [key, value] of Object.entries(product.specs)) {
                specsHtml += `
                    <div class="spec-item">
                        <span class="spec-label">${key}</span>
                        <span>${value}</span>
                    </div>
                `;
            }
            specsContainer.innerHTML = specsHtml;
        }
    }

    /* --- Theme Toggle --- */
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('electroTheme');

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            localStorage.setItem('electroTheme', isDark ? 'dark' : 'light');
        });
    }

    /* --- Mobile Menu --- */
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle && navMenu) {
        const navContainer = navMenu.closest('.nav-container');
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            
            // Add/remove class to nav-container for CSS targeting
            if (navContainer) {
                if (navMenu.classList.contains('active')) {
                    navContainer.classList.add('menu-active');
                } else {
                    navContainer.classList.remove('menu-active');
                }
            }
            
            // Toggle icon or state if needed
            if (navMenu.classList.contains('active')) {
                mobileToggle.textContent = '✕';
                mobileToggle.style.color = '#2874f0'; // Blue close button matches mobile menu header usually
                mobileToggle.style.zIndex = '2001';
            } else {
                mobileToggle.textContent = '☰';
                mobileToggle.style.color = 'white';
            }
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                if (navContainer) {
                    navContainer.classList.remove('menu-active');
                }
                mobileToggle.textContent = '☰';
                mobileToggle.style.color = 'white';
            }
        });
    }

    /* --- Mobile Dropdown Toggle --- */
    const mobileDropdowns = document.querySelectorAll('.nav-menu .dropdown');
    mobileDropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('.nav-link');
        if (dropdownLink) {
            dropdownLink.addEventListener('click', (e) => {
                // Only handle on mobile (when nav-menu is active)
                if (window.innerWidth <= 1024) {
                    e.preventDefault();
                    e.stopPropagation();
                    dropdown.classList.toggle('active');
                }
            });
        }
    });

    /* --- Mobile Search Toggle --- */
    const mobileSearchBtn = document.querySelector('.mobile-search-toggle');
    const searchBar = document.querySelector('.search-bar');
    const searchInput = document.querySelector('.search-input');
    
    if (mobileSearchBtn && searchBar) {
        mobileSearchBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            searchBar.classList.toggle('active');
            if (searchBar.classList.contains('active') && searchInput) {
                searchInput.focus();
            }
        });

        // Hide search on blur
        if (searchInput) {
            searchInput.addEventListener('blur', () => {
                setTimeout(() => {
                    searchBar.classList.remove('active');
                }, 200);
            });
        }
    }

    /* --- Search Functionality (Stub) --- */
    const searchIcon = document.querySelector('.search-icon');
    
    function handleSearch() {
        const query = searchInput ? searchInput.value.trim() : '';
        if(query) {
            alert(`Searching for: ${query}\n(This is a demo frontend)`);
        }
    }

    if(searchIcon) {
        searchIcon.addEventListener('click', handleSearch);
    }
    if(searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if(e.key === 'Enter') handleSearch();
        });
    }

    /* --- Cart Functionality --- */
    let cart = JSON.parse(localStorage.getItem('electroCart')) || [];
    const cartCountEl = document.getElementById('cart-count');

    function updateCartCount() {
        // Count total items including quantities
        const count = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
        if(cartCountEl) cartCountEl.textContent = count;
        
        const headerCartCounts = document.querySelectorAll('.header-cart-count');
        headerCartCounts.forEach(el => el.textContent = count);
    }

    function saveCart() {
        localStorage.setItem('electroCart', JSON.stringify(cart));
        updateCartCount();
    }

    window.addToCart = function(id, title, price, img) {
        // Check if item exists
        const existingItem = cart.find(item => item.id === id);
        
        if (existingItem) {
            // Increment quantity if exists
            existingItem.quantity = (existingItem.quantity || 1) + 1;
            alert(`Quantity updated! You now have ${existingItem.quantity} of this item in your cart.`);
        } else {
            // Add new item with quantity 1
            cart.push({ id, title, price, img, quantity: 1 });
            alert('Item added to cart successfully!');
        }
        
        saveCart();
    }

    window.changeQuantity = function(id, change) {
        const itemIndex = cart.findIndex(item => item.id === id);
        if (itemIndex > -1) {
            const item = cart[itemIndex];
            item.quantity = (item.quantity || 1) + change;
            
            if (item.quantity <= 0) {
                // Remove if quantity becomes 0
                cart.splice(itemIndex, 1);
            }
            saveCart();
            renderCartPage();
        }
    }

    window.removeFromCart = function(id) {
        cart = cart.filter(item => item.id !== id);
        saveCart();
        renderCartPage();
    }

    function renderCartPage() {
        const cartContainer = document.getElementById('cart-items');
        const totalItemsEl = document.getElementById('total-items');
        const totalPriceEl = document.getElementById('total-price');
        const finalPriceEl = document.getElementById('final-price');

        if (!cartContainer) return; // Not on cart page

        if (cart.length === 0) {
            cartContainer.innerHTML = `
                <div class="empty-cart" style="text-align: center; padding: 3rem; background: white;">
                    <img src="https://img.icons8.com/ios/100/shopping-cart.png" alt="Empty Cart" style="margin: 0 auto 1rem; opacity: 0.5;">
                    <h3>Your cart is empty!</h3>
                    <p>Add items to it now.</p>
                    <a href="services.html" class="btn btn-primary" style="margin-top: 1rem;">Shop Now</a>
                </div>
            `;
            if(totalItemsEl) totalItemsEl.textContent = '0';
            if(totalPriceEl) totalPriceEl.textContent = '₹0';
            if(finalPriceEl) finalPriceEl.textContent = '₹0';
            return;
        }

        let total = 0;
        let totalQty = 0;
        let html = '';

        cart.forEach(item => {
            const qty = item.quantity || 1;
            let priceNum = parseInt(item.price.replace(/[^0-9]/g, ''));
            if(isNaN(priceNum)) priceNum = 0; 
            
            total += priceNum * qty;
            totalQty += qty;

            html += `
                <div class="cart-item">
                    <img src="${item.img}" alt="${item.title}" class="cart-item-img">
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.title}</div>
                        <div class="cart-item-price">${item.price}</div>
                        
                        <div class="quantity-controls">
                            <button class="qty-btn" onclick="changeQuantity('${item.id}', -1)">-</button>
                            <span class="qty-val">${qty}</span>
                            <button class="qty-btn" onclick="changeQuantity('${item.id}', 1)">+</button>
                        </div>

                        <button class="remove-btn" onclick="removeFromCart('${item.id}')">REMOVE</button>
                    </div>
                </div>
            `;
        });

        cartContainer.innerHTML = html;
        if(totalItemsEl) totalItemsEl.textContent = totalQty;
        if(totalPriceEl) totalPriceEl.textContent = '₹' + total.toLocaleString('en-IN');
        if(finalPriceEl) finalPriceEl.textContent = '₹' + total.toLocaleString('en-IN');
    }

    /* --- Attach Click Listeners to Add to Cart Buttons --- */
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); 
            const id = btn.dataset.id;
            const title = btn.dataset.title;
            const price = btn.dataset.price;
            const img = btn.dataset.img;
            addToCart(id, title, price, img);
        });
    });

    // Initialize
    updateCartCount();
    renderCartPage();
});
