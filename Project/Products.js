function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardImg = document.createElement('div');
    cardImg.classList.add('card-img');
    const img = document.createElement('div');
    img.classList.add('img');
    cardImg.appendChild(img);

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = product.name;

    const cardSubtitle = document.createElement('div');
    cardSubtitle.classList.add('card-subtitle');
    cardSubtitle.textContent = product.description;

    const cardDivider = document.createElement('hr');
    cardDivider.classList.add('card-divider');

    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');

    const cardPrice = document.createElement('div');
    cardPrice.classList.add('card-price');
    cardPrice.innerHTML = `<span>$</span>${product.price.toFixed(2)}`;

    const cardBtn = document.createElement('button');
    cardBtn.classList.add('card-btn');
    const svg = document.createElement('svg');
    svg.innerHTML = `<path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26c-6.627 0-12-5.373-12-12S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z"/>`;
    cardBtn.appendChild(svg);

    card.appendChild(cardImg);
    card.appendChild(cardTitle);
    card.appendChild(cardSubtitle);
    card.appendChild(cardDivider);
    cardFooter.appendChild(cardPrice);
    cardFooter.appendChild(cardBtn);
    card.appendChild(cardFooter);

    return card;
}

// Sample JSON data
const jsonData = {
    "products": [
        {
            "id": 1,
            "name": "Women's Floral Dress",
            "description": "Floral Print Surplice Neck Dress, Boho Long Sleeve Ruffle Hem Dress, Women's Clothing.",
            "category": "Dresses",
            "price": 49.99
        },
        {
            "id": 2,
            "name": "Men's Classic Suit",
            "description": "A timeless and elegant two-piece suit for men. Ideal for formal events and business meetings.",
            "category": "Suits",
            "price": 199.99
        },
        {
            "id": 3,
            "name": "Running Shoes",
            "description": "High-performance running shoes with advanced cushioning technology. Suitable for both casual and athletic use.",
            "category": "Shoes",
            "price": 79.99
        },
        {
            "id": 4,
            "name": "Leather Handbag",
            "description": "A stylish and durable leather handbag for women. Spacious interior with multiple compartments.",
            "category": "Accessories",
            "price": 129.99
        },
        {
            "id": 5,
            "name": "Casual Men's T-Shirt",
            "description": "Comfortable and stylish short-sleeve t-shirt for men. Made from high-quality cotton.",
            "category": "T-Shirts",
            "price": 19.99
        },
        {
            "id": 6,
            "name": "Women's High-Heel Sandals",
            "description": "Elegant high-heel sandals for women. Perfect for evenings and special occasions.",
            "category": "Shoes",
            "price": 89.99
        },
        {
            "id": 7,
            "name": "Slim Fit Jeans",
            "description": "Classic slim-fit jeans for a modern and stylish look. Available in various sizes and colors.",
            "category": "Jeans",
            "price": 59.99
        },
        {
            "id": 8,
            "name": "Men's Leather Jacket",
            "description": "A rugged and stylish leather jacket for men. Perfect for cool weather and casual wear.",
            "category": "Jackets",
            "price": 179.99
        },
        {
            "id": 9,
            "name": "Stylish Sunglasses",
            "description": "Fashionable sunglasses with UV protection. Enhance your style and protect your eyes.",
            "category": "Accessories",
            "price": 39.99
        },
        {
            "id": 10,
            "name": "Cozy Knit Sweater",
            "description": "Warm and cozy knit sweater for chilly days. Available in various colors and sizes.",
            "category": "Sweaters",
            "price": 69.99
        },
        {
            "id": 11,
            "name": "Elegant Evening Gown",
            "description": "A stunning evening gown for special occasions. Floor-length with intricate lace detailing.",
            "category": "Dresses",
            "price": 149.99
        },
        {
            "id": 12,
            "name": "Classic Leather Belt",
            "description": "Timeless leather belt for men. Adds a touch of sophistication to any outfit.",
            "category": "Accessories",
            "price": 29.99
        },
        {
            "id": 13,
            "name": "Athletic Running Shorts",
            "description": "Comfortable and breathable running shorts for active individuals. Perfect for workouts.",
            "category": "Athletic Wear",
            "price": 24.99
        },
        {
            "id": 14,
            "name": "Chic Leather Ankle Boots",
            "description": "Fashionable leather ankle boots for women. Versatile and stylish for various occasions.",
            "category": "Shoes",
            "price": 109.99
        },
        {
            "id": 15,
            "name": "Men's Casual Button-Up Shirt",
            "description": "Casual button-up shirt for men. Comfortable and suitable for everyday wear.",
            "category": "Shirts",
            "price": 34.99
        },
        {
            "id": 16,
            "name": "Quilted Winter Jacket",
            "description": "Stylish quilted winter jacket for both men and women. Keeps you warm in cold weather.",
            "category": "Jackets",
            "price": 129.99
        },
        {
            "id": 17,
            "name": "Printed Silk Scarf",
            "description": "Luxurious silk scarf with vibrant prints. Adds a touch of elegance to any outfit.",
            "category": "Accessories",
            "price": 49.99
        },
        {
            "id": 18,
            "name": "Cotton Lounge Pajamas",
            "description": "Comfortable cotton pajama set for lounging at home. Stylish and cozy for a good night's sleep.",
            "category": "Sleepwear",
            "price": 44.99
        },
        {
            "id": 19,
            "name": "Retro Round Sunglasses",
            "description": "Vintage-inspired round sunglasses. Adds a retro flair to your look.",
            "category": "Accessories",
            "price": 36.99
        },
        {
            "id": 20,
            "name": "Denim Jacket with Patches",
            "description": "Trendy denim jacket adorned with stylish patches. A statement piece for casual wear.",
            "category": "Jackets",
            "price": 89.99
        }
    ]
};


const productContainer = document.getElementById('product-container');
jsonData.products.forEach((product) => {
    const productCard = createProductCard(product);
    productContainer.appendChild(productCard);
});