const dishes = [
  {
    id: 1,
    name: 'Jollof Rice (Signature)',
    description: 'Smoky, rich Nigerian jollof made with fresh tomatoes, peppers and blended spices. Served with fried plantain.',
    price: 2500,
    category: 'Main - Nigerian',
    image: 'https://i.pinimg.com/1200x/36/07/0d/36070dffaab706fa91a8444ed1c2a12c.jpg'
  },
  {
    id: 2,
    name: 'Egusi Soup with Pounded Yam',
    description: 'Creamy melon-seed (egusi) stew with tender beef and spinach. Served with freshly pounded yam.',
    price: 3200,
    category: 'Main - Nigerian',
    image: 'https://i.pinimg.com/1200x/79/2b/32/792b320f5f3f1c58cc15179f19a13c95.jpg'
  },
  {
    id: 3,
    name: 'Suya (Spicy Skewers)',
    description: 'Char-grilled spicy beef skewers with suya spice. Served with onions, tomatoes and spicy pepper.',
    price: 1800,
    category: 'Starter - Nigerian',
    image: 'https://i.pinimg.com/1200x/18/db/7e/18db7ef5dc847b6eabb3508c902f87ab.jpg'
  },
  {
    id: 4,
    name: 'Peppered Fish',
    description: 'Whole tilapia grilled and finished in a hot pepper sauce, served with rice or yam.',
    price: 3500,
    category: 'Main - Nigerian',
    image: 'https://i.pinimg.com/1200x/aa/01/40/aa0140bafe80b0c781c8d036e4e08a6d.jpg'
  },
  {
    id: 5,
    name: 'Akara (Bean Fritters)',
    description: 'Crispy outside, soft inside; golden akara served with a side of spicy dip.',
    price: 900,
    category: 'Starter - Nigerian',
    image: 'https://i.pinimg.com/1200x/23/2f/d6/232fd6042d83e09faa354f96009690ed.jpg'
  },
  {
    id: 6,
    name: 'Puff Puff (Dessert)',
    description: 'Light and fluffy fried dough balls dusted in sugar. the perfect finish.',
    price: 600,
    category: 'Dessert - Nigerian',
    image: 'https://i.pinimg.com/1200x/47/70/76/47707617b85e4790c2b516a20e3d220a.jpg'
  },
  {
    id: 7,
    name: 'Moi Moi (Steamed Bean Pudding)',
    description: 'Savory steamed bean pudding made from blended black-eyed peas, peppers and onions. Served hot and optionally stuffed with egg or fish.',
    price: 1200,
    category: 'Starter - Nigerian',
    image: 'https://i.pinimg.com/1200x/4b/32/13/4b32132e87bd033dca097f5a78273743.jpg'
  },
  {
    id: 8,
    name: 'Oha Soup with Fufu',
    description: 'Traditional Eastern Nigerian oha soup with tender assorted meat, thickened with cocoyam and served with smooth fufu.',
    price: 3000,
    category: 'Main - Nigerian',
    image: 'https://i.pinimg.com/1200x/c4/8d/1e/c48d1e2fd1f8b86df225de1f2ad491d6.jpg'
  },
  {
    id: 9,
    name: 'Banga Soup with Starch',
    description: 'Rich palm-nut (banga) soup simmered with fresh spices and seafood, paired with soft starch.',
    price: 3400,
    category: 'Main - Nigerian',
    image: 'https://i.pinimg.com/1200x/f8/63/f5/f863f57b3616162e84dfe0831ee89a2d.jpg'
  },
  {
    id: 10,
    name: 'Ofada Rice & Ayamase (Ofada Sauce)',
    description: 'Fragrant local Ofada rice served with spicy green pepper sauce (ayamase) loaded with assorted meat and offals.',
    price: 2800,
    category: 'Main - Nigerian',
    image: 'https://i.pinimg.com/1200x/78/6c/27/786c27051e466cecc4f44b4767e7f96b.jpg'
  },
  {
    id: 11,
    name: 'Nkwobi (Spicy Cow Foot)',
    description: 'Aromatic, spicy cow-foot delicacy tossed in rich palm-oil and spice mix. Served warm in a wooden mortar-style bowl.',
    price: 2500,
    category: 'Starter - Nigerian',
    image: 'https://i.pinimg.com/1200x/64/d0/c0/64d0c0fa4057a30f784290f6ef0d78be.jpg'
  },
  {
    id: 12,
    name: 'Abacha (African Salad)',
    description: 'Chilled cassava salad with shredded abacha, garden eggs, stockfish, palm oil and crunchy utazi for a tangy bite.',
    price: 1500,
    category: 'Starter - Nigerian',
    image: 'https://i.pinimg.com/1200x/2a/78/f2/2a78f207b6ef55cc843b3b02dff8f7f9.jpg'
  },
  {
    id: 13,
    name: 'Beans & Dodo (Plantain)',
    description: 'Hearty stewed beans cooked in tomato-pepper sauce, served with sweet fried plantains for contrast.',
    price: 1400,
    category: 'Main - Nigerian',
    image: 'https://i.pinimg.com/1200x/2d/02/de/2d02dee1e5e96adffa3972aa95039bf6.jpg'
  },
  {
    id: 14,
    name: 'Fried Yam & Egg Sauce',
    description: 'Crispy fried yam cubes paired with a rich tomato and pepper egg sauce. A popular comfort combo.',
    price: 1300,
    category: 'Breakfast - Nigerian',
    image: 'https://i.pinimg.com/1200x/82/1f/89/821f8954176c59f557485d482fd429f0.jpg'
  },
  {
    id: 15,
    name: 'Eggs Benedict',
    description: 'Poached eggs and ham on English muffins, topped with silky hollandaise sauce.',
    price: 1800,
    category: 'Breakfast - Intercontinental',
    image: 'https://i.pinimg.com/1200x/0a/9a/25/0a9a2547142a46e442e4ca96a2845bc6.jpg'
  },
  {
    id: 16,
    name: 'Full English Breakfast',
    description: 'A hearty plate with eggs, bacon, sausages, baked beans, grilled tomato and toast.',
    price: 2200,
    category: 'Breakfast - Intercontinental',
    image: 'https://i.pinimg.com/1200x/24/83/df/2483dffb8c40b175411522fdf9801b6d.jpg'
  },
  {
    id: 17,
    name: 'Pancake Stack',
    description: 'Fluffy pancakes stacked high with maple syrup and fresh berries.',
    price: 1500,
    category: 'Breakfast - Intercontinental',
    image: 'https://i.pinimg.com/1200x/78/ea/1b/78ea1b43771a57fe19bc585c4ed150d2.jpg'
  },
  {
    id: 18,
    name: 'Avocado Toast',
    description: 'Smashed avocado on sourdough, finished with lemon, chili flakes and olive oil.',
    price: 1400,
    category: 'Breakfast - Intercontinental',
    image: 'https://i.pinimg.com/1200x/2b/c5/4a/2bc54ab609fc9d71785c17a39fb2587e.jpg'
  },
  {
    id: 19,
    name: 'Club Sandwich',
    description: 'Triple-decker sandwich with turkey, bacon, lettuce, tomato and mayo.',
    price: 1600,
    category: 'Intercontinental',
    image: 'https://i.pinimg.com/1200x/2e/29/dd/2e29dda7d4cf80d18fef4dee4cc3dc0a.jpg'
  },
  {
    id: 20,
    name: 'Caesar Salad',
    description: 'Crisp romaine with parmesan, croutons and classic Caesar dressing.',
    price: 1600,
    category: 'Intercontinental - Starter',
    image: 'https://i.pinimg.com/1200x/07/b3/fa/07b3fa5f80454a92f323140a4504ad23.jpg'
  },
  {
    id: 21,
    name: 'Margherita Pizza',
    description: 'Wood-fired pizza with fresh tomato, mozzarella and basil.',
    price: 2800,
    category: 'Intercontinental',
    image: 'https://i.pinimg.com/1200x/bc/45/3d/bc453dcf86908a1335d154c3ca251fb4.jpg'
  },
  {
    id: 22,
    name: 'Spaghetti Bolognese',
    description: 'Slow-simmered beef ragu served over al dente spaghetti.',
    price: 2500,
    category: 'Intercontinental',
    image: 'https://i.pinimg.com/1200x/a6/6a/03/a66a0333b456e02fd18b2bfdf6dc8529.jpg'
  },
  {
    id: 23,
    name: 'Grilled Salmon',
    description: 'Pan-seared salmon fillet with lemon butter, served with seasonal vegetables.',
    price: 3600,
    category: 'Intercontinental',
    image: 'https://i.pinimg.com/1200x/87/10/d9/8710d922c11083869b81e0628a275942.jpg'
  },
  {
    id: 24,
    name: 'Gourmet Beef Burger',
    description: 'Juicy beef patty with cheddar, lettuce, tomato and house sauce. Served with fries.',
    price: 2200,
    category: 'Intercontinental',
    image: 'https://i.pinimg.com/1200x/2a/e2/cc/2ae2cca2df5c972d3e3928de84e1bc0e.jpg'
  },
  {
    id: 25,
    name: 'Chicken Platter (Rotisserie)',
    description: 'Slow-roasted rotisserie chicken served with sides and house sauce. Perfect for sharing.',
    price: 5200,
    category: 'Platter',
    image: 'https://i.pinimg.com/1200x/e1/d6/d6/e1d6d693f5086999ccf0be425af9b5ee.jpg'
  },
  {
    id: 26,
    name: 'Mixed Grill Platter',
    description: 'Assortment of grilled meats; beef, chicken, lamb, served with sides and dipping sauces.',
    price: 6500,
    category: 'Platter',
    image: 'https://i.pinimg.com/1200x/95/da/45/95da450cf42b6595415d906a57c6db2f.jpg'
  },
  {
    id: 27,
    name: 'Seafood Platter',
    description: 'A generous selection of prawns, calamari, mussels and grilled fish served with lemon and butter.',
    price: 7200,
    category: 'Platter',
    image: 'https://i.pinimg.com/1200x/b5/4f/26/b54f264ab7c737569f10d9d4a3669d8c.jpg'
  },
  {
    id: 28,
    name: 'Vegetarian Platter',
    description: 'An array of grilled and fresh vegetarian delights falafel, grilled veg, hummus and salads.',
    price: 4500,
    category: 'Platter - Vegetarian',
    image: 'https://i.pinimg.com/1200x/14/3a/4f/143a4fcf6a263f6ddd4af896f57cefb7.jpg'
  },
  {
    id: 29,
    name: 'Cheese Platter',
    description: 'Selection of artisanal cheeses served with crackers, fruit and chutney.',
    price: 3000,
    category: 'Starter/Platter',
    image: 'https://i.pinimg.com/1200x/16/f4/33/16f433a8a4f8c81b10a3d1ec857f79e6.jpg'
  },
  {
    id: 30,
    name: 'Charcuterie Board',
    description: 'Cured meats, pickles, nuts and bread for sharing.',
    price: 3500,
    category: 'Starter/Platter',
    image: 'https://i.pinimg.com/1200x/10/cb/94/10cb94981d147b40596640efc4447834.jpg'
  },
  {
    id: 31,
    name: 'Bruschetta',
    description: 'Toasted bread topped with tomato, basil and balsamic reduction.',
    price: 900,
    category: 'Starter',
    image: 'https://i.pinimg.com/1200x/25/ca/69/25ca69aef421267c0219824f02aa1cf7.jpg'
  },
  {
    id: 32,
    name: 'Crispy Calamari',
    description: 'Lightly battered calamari rings served with tartar sauce and lemon.',
    price: 1300,
    category: 'Starter',
    image: 'https://i.pinimg.com/1200x/32/ee/26/32ee26943782ec5295bad455ca7c8138.jpg'
  },
  {
    id: 33,
    name: 'Buffalo Chicken Wings',
    description: 'Spicy buffalo wings tossed in house sauce. Served with ranch dip.',
    price: 1200,
    category: 'Starter',
    image: 'https://i.pinimg.com/1200x/e1/6c/6a/e16c6abdb9e04596239436e47178c1cc.jpg'
  },
  {
    id: 34,
    name: 'Fresh Orange Juice',
    description: 'Cold-pressed fresh orange juice, squeezed to order.',
    price: 700,
    category: 'Drink - Non-alcoholic',
    image: 'https://i.pinimg.com/1200x/73/4e/36/734e36283a69cc937b7b47793ad9ad28.jpg'
  },
  {
    id: 35,
    name: 'Cold Brew Coffee',
    description: 'Smooth cold brew coffee served over ice. Bold and refreshing.',
    price: 800,
    category: 'Drink - Coffee',
    image: 'https://i.pinimg.com/1200x/33/9f/65/339f6597db264329b1038df6a2407883.jpg'
  },
  {
    id: 36,
    name: 'Classic Margarita',
    description: 'Tequila, lime and triple sec shaken and served on the rocks with a salted rim.',
    price: 1500,
    category: 'Cocktail',
    image: 'https://i.pinimg.com/1200x/83/17/ad/8317ad3eed28a28773e98bed3d3aa55b.jpg'
  },
  {
    id: 37,
    name: 'Mojito',
    description: 'White rum, lime, mint and soda. A refreshing classic.',
    price: 1500,
    category: 'Cocktail',
    image: 'https://i.pinimg.com/1200x/32/17/a9/3217a9d3c7b7aec9fbf5bc3c0785c0a4.jpg'
  },
  {
    id: 38,
    name: 'Old Fashioned',
    description: 'Bourbon, sugar and bitters stirred with an orange twist.',
    price: 1800,
    category: 'Cocktail',
    image: 'https://i.pinimg.com/1200x/7e/c2/40/7ec240b8281b4301e8fd39e6292267a0.jpg'
  },
  {
    id: 39,
    name: 'Negroni',
    description: 'Equal parts gin, Campari and sweet vermouth, stirred and served over ice.',
    price: 1800,
    category: 'Cocktail',
    image: 'https://i.pinimg.com/1200x/fb/86/dc/fb86dc2456c0e460397e8cfeb1dd2e7c.jpg'
  },
  {
    id: 40,
    name: 'Gin & Tonic',
    description: 'Classic gin paired with premium tonic and a slice of lime.',
    price: 1200,
    category: 'Cocktail',
    image: 'https://i.pinimg.com/1200x/8f/57/c7/8f57c79bfa7d17c3c95d614a538be6ac.jpg'
  }
]

export default dishes
