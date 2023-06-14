
# Restaurant Website

This is a restaurant website built using React, Firebase, Material UI, and dotenv. It includes several functionalities such as displaying all items, a private routing system, a login system, a dynamic cart system, a double filter method, a searching option, dynamic quantity validation (orders cannot be placed if the quantity is less than the order), a details button that opens a modal with extra information, a grid section for responsive design, and a loading system for fetching data.

## Installation

To run this project locally, follow these steps:

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/your-username/restaurant-website.git
2. Navigate to the project directory:
cd restaurant-website
3. Create a .env file in the root directory and add your Firebase configuration details:
REACT_APP_API_KEY=your_firebase_api_key
REACT_APP_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_DATABASE_URL=your_firebase_database_url
REACT_APP_PROJECT_ID=your_firebase_project_id
REACT_APP_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_APP_ID=your_firebase_app_id

4. Start the development server:
npm start

5. Open your browser and visit http://localhost:3000 to see the website.

Functionality:
This restaurant Cafe Stone website offers the following features:

1. Displaying all items: Users can view a list of all available items on the menu.
2. Private routing system: Certain pages are accessible only to authenticated users.
3. Login system: Users can create an account or log in using their credentials.
4. Dynamic cart system: Users can add items to their cart, view the cart contents, and place orders.
5. Double filter method: Users can filter menu items by category and dietary restrictions simultaneously.
6. Searching option: Users can search for specific menu items.
7. Dynamic quantity validation: Orders cannot be placed if the quantity requested is greater than the available quantity.
8. Details button: Users can click on a details button to open a modal that provides additional information about a menu item.
9. Grid section for responsive design: The website layout adapts to different screen sizes using a responsive grid system.
10. Loading system for fetching data: Users see loading indicators while data is being fetched from the backend.



## all fake data for cafe stone here

[
    {
        "id": 11,
        "name": "Pepperoni",
        "quantity": 2,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "price": 340,
        "category_veg": "NonVeg",
        "category": "Pizza",
        "image": "https://img.freepik.com/free-photo/italian-sausage-Pizza-table_140725-7029.jpg",
        "description": "Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot."
    },
    {
        "id": 12,
        "name": "Mushroom",
        "quantity": 3,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "price": 240,
        "category_veg": "NonVeg",
        "category": "Pizza",
        "image": "https://img.freepik.com/free-photo/mixed-ingredient-pizza-with-cheese-tomatoes_114579-3585.jpg?w=740&t=st=1686544161~exp=1686544761~hmac=dbfc1875d3deb48eec559babdef29281d93b9b7779cf24bc42d9f7cfdc2d84e3",
        "description": "This pizza is a true mushroom lover's dream, featuring four different types of mushrooms, two different cheeses, no-cook marinara sauce, and fresh chives."
    },
    {
        "id": 13,
        "name": "Extra cheese",
        "quantity": 2,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "price": 310,
        "category_veg": "NonVeg",
        "category": "Pizza",
        "image": "https://img.freepik.com/free-photo/delicious-pizza-with-vegetables-salami-isolated-white_392895-363596.jpg?w=740&t=st=1686544135~exp=1686544735~hmac=711e077df996f27e91cccfd905bde5623393ec254da151cab5b6e91996b27051",
        "description": "The restaurant will have paintings and drawings from some of the areas most notable new artists. Once a month the lounge will feature a new artist and their work. This will give the art community an opportunity to show their work in a friendly and exciting atmosphere. We will send out special invitations for the opening night and attract many people and newspapers. The showing will only take place in the lounge so we can still seat people in the restaurant.'"
    },
    {
        "id": 14,
        "name": "Sausage",
        "quantity": 3,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "price": 370,
        "category_veg": "Veg",
        "category": "Pizza",
        "image": "https://img.freepik.com/free-photo/freshly-baked-pizza-rustic-wooden-table-generated-by-ai_24640-89760.jpg?w=1060&t=st=1686544107~exp=1686544707~hmac=7ddada96b58d8f9c32fefae30e8c434e5f427fbd57f2deadc4405f89c954544b",
        "description": "Hundreds of years ago in Naples, Italy, pizza (its name related to the Greek pita, or flatbread) was developed in its classic form as a thin layer of dough covered with tomato sauce and topped with mozzarella cheese and basil, a construction known as pizza Margherita"
    },
    {
        "id": 15,
        "name": "Onion",
        "quantity": 1,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "price": 410,
        "category_veg": "NonVeg",
        "category": "Pizza",
        "image": "https://img.freepik.com/free-photo/side-view-pizza-with-slices-bell-pepper-pizza-slices-flour-board-cookware_176474-3185.jpg?w=740&t=st=1686544077~exp=1686544677~hmac=a431721a8821b91fca08edfe96e3605a6eeb50ad50e1980d26bf910a1bc7a49b",
        "description": "The Neapolitan pizza brought to Chicago underwent a transformation of a different sort at the Pizzeria Uno restaurant, which opened in 1943 and was owned by Ike Sewell. The pizzeria used a crust that was more appropriate to a pie (whence “pizza pie”) than a flatbread. Within that “pie shell,” a profusion of toppings were placed on a layer of mozzarella cheese, and the tomato sauce was layered on the top (not the bottom) of the toppings. The pizza pie was baked in a round cake pan coated with olive oil, which lent a crunchy quality to the crust."
    },
    {
        "id": 16,
        "name": "Black olives",
        "quantity": 8,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "price": 230,
        "category_veg": "Veg",
        "category": "Pizza",
        "image": "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=740&t=st=1686544045~exp=1686544645~hmac=94a16c2ee03dc0d7908800ef20dc2bff05a6a35c2adb8f4708af5ec04d867e8b",
        "description": "Some histories attribute the invention of Chicago-style pizza to members of the Malnati family who were associated with Pizzeria Uno, including Rudy Malnati, Sr., and his son Lou Malnati, who opened his own restaurant in Chicago’s suburb of Lincolnwood in 1971. To complicate matters, Rudy Malnati, Jr., claimed ownership of an original family recipe for the upside-down pizza. "
    },
    {
        "id": 21,
        "name": "Turkey burger",
        "quantity": 9,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "price": 140,
        "category_veg": "NonVeg",
        "category": "Burger",
        "image": "https://img.freepik.com/free-photo/front-view-chicken-burgers-with-cheese-green-salad-wooden-desk-sandwich-fast-food-meal-food_140725-25955.jpg?w=996&t=st=1686543968~exp=1686544568~hmac=e2c675eba8cad06aa80c8704917c05226ec98c2b3d21441b741e41e03425a07f",
        "description": "There's something quite irresistible about the sight of a juicy burger that makes us want to bite into it right away. A juicy patty squished between buns and slathered with flavourful sauces would make anyone drool, doesn't it? But whenever we feel the urge to treat ourselves to a burger, we often prefer to eat it outside at a fast-food chain or perhaps even a fancy restaurant. But what if you could make these same yummy burgers in the comfort of your kitchen? As difficult as it may seem, making restaurant-style burgers at home is not rocket science."
    },
    {
        "id": 22,
        "name": "Portobello mushroom burger",
        "quantity": 3,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "price": 250,
        "category_veg": "NonVeg",
        "category": "Burger",
        "image": "https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_2829-5398.jpg?w=740&t=st=1686543943~exp=1686544543~hmac=bbf95fe7a3edf83a16aea086206939b83b66d214f8e54c1bfb701420c3b7b8e8",
        "description": "There are many weight loss myths out there. People are misled by the promise of 'instant' results by following fad diets and/or bizarre workouts. When it comes to food, it can get especially tricky. This is because not everyone reacts uniformly to the same ingredients and dishes. You have to figure out what works for you and what doesn't. "
    },
    {
        "id": 23,
        "name": "Veggie burger",
        "quantity": 5,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "price": 270,
        "category_veg": "NonVeg",
        "category": "Burger",
        "image": "https://img.freepik.com/free-photo/hamburger-with-cheese-lettuce-tomatoes_1232-504.jpg?w=996&t=st=1686543922~exp=1686544522~hmac=cfff6145d736590bfb89505def1a5137b4f7bb54d304e2006d3308505f643fc8",
        "description": "Who doesn't love a good burger? This decadent dish is the perfect combination of fresh veggies, flavourful sauces and scrumptious patty. Just thinking about a juicy delicious burger can have us drooling! While burger is an American delicacy, Indian foodies have fallen in love with this dish and made it their own! Nowadays, burger has become the go-to meal for any and every occasion! When we think of burger, the first option that comes to our mind is the aloo tikki burger. "
    },
    {
        "id": 24,
        "name": "Wild salmon burger",
        "quantity": 3,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "price": 370,
        "category_veg": "Veg",
        "category": "Burger",
        "image": "https://img.freepik.com/premium-photo/big-double-cheddar-cheeseburger-with-chicken-cutlet_147620-1306.jpg?w=740",
        "description": "This classic and delicious burger is one of the most popular recipes to make. In this burger recipe, you would first have to make a crunchy aloo patty packed with spices. Then simply combine it with veggies and sauces. A soul-soothing indulgence will be ready in no time."
    },
    {
        "id": 25,
        "name": "Cheeseburger",
        "quantity": 1,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "price": 270,
        "category_veg": "NonVeg",
        "category": "Burger",
        "image": "https://img.freepik.com/free-photo/front-view-delicious-meat-hamburger-with-red-tomatoes-dark-background_179666-19345.jpg?w=996&t=st=1686543872~exp=1686544472~hmac=3efa3a4fffa03b1b36f9d3119a43feb8bfa786255f14f8aba7cf664135e88e34",
        "description": "Chickpeas, like all legumes, are high in protein and nutrients and are commonly substituted for meat in vegetarian and vegan diets. Aside from that, this chickpea burger is a great way to get picky eaters to eat their protein for the day."
    },
    {
        "id": 26,
        "name": "Bean burger",
        "quantity": 1,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "price": 170,
        "category_veg": "Veg",
        "category": "Burger",
        "image": "https://img.freepik.com/free-photo/grilled-beef-burger-with-fries-cheese-tomato-generative-ai_188544-8466.jpg?w=1060&t=st=1686543851~exp=1686544451~hmac=37346ab960df59ce602923d18f7f2d6e893886b1c8d3834dab76bcb24335725b",
        "description": "Probably the most unique restaurant on the list, Santa’s Fantasea is a tribal and seafood restaurant that has become one of the favourite spots in the city. The menu has two parts — the tribal part and the seafood part. The tribal food part is intriguing with its range of food served inside bamboo stems. But its wide variety of seafood remains the best part. One of the go-to places for Octopus as you will find a range of octopus preparations on the menu here. You will also find pomfret, crab and lobster here, for when you’re feeling really fancy."
    },
    {
        "id": 31,
        "name": "Fish pellets",
        "quantity": 7,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "price": 410,
        "category_veg": "NonVeg",
        "category": "Fish",
        "image": "https://img.freepik.com/free-photo/spicy-fried-tubtim-fish-salad-spicy-thai-food_1150-26481.jpg?w=996&t=st=1686543801~exp=1686544401~hmac=8dbe7766ae0e5c7a45ffff69e9d7358373084e3af488f71ce0f4f5da0eed6ef7",
        "description": "This restaurant is every local’s favourite for its authentic Bengali fare, speaking of which, seafood is an indispensable part. Their must-haves are Gondhoraj Grilled Bhetki, Aam Tel Ilish, Loitya Shutki, which also happen to be their flagship dishes. So visit this place today to indulge in the most authentic Bengali seafood delicacies."
    },
    {
        "id": 32,
        "name": "Tablets for fish",
        "quantity": 3,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "price": 580,
        "category_veg": "NonVeg",
        "category": "Fish",
        "image": "https://img.freepik.com/free-photo/top-view-fried-fish-with-sauce-slice-orange-with-vegetables_141793-4015.jpg?w=826&t=st=1686543742~exp=1686544342~hmac=d953a33f1570d69fd7dd9f853d1733b71a249617263a331cbf087dd2a6c01cc2",
        "description": "The fish specialist in Bengal, Bijoli Grill needs no introduction to this list. It has attained the status of a heritage shop, given how much Bengalis love this place for their seafood. Visit any of their outlets today and enjoy the classic Fish and Chips and the cutlets."
    },
    {
        "id": 33,
        "name": "Fish sticks",
        "quantity": 5,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "price": 690,
        "category_veg": "NonVeg",
        "category": "Fish",
        "image": "https://img.freepik.com/free-photo/roasted-fish-garnished-with-lemon-slices-served-with-vegetables_140725-1413.jpg?w=1060&t=st=1686543711~exp=1686544311~hmac=4e2d828cc9ee1514fcac61aeb6a9079e45a49535eff37a77fa0a0f82441f106f",
        "description": "This Lebanese spot — in the gaming venue OS NYC, inside the Hotel 50 Bowery — is owned by Allen Dabagh, the chef-owner of Boutros in Brooklyn, and Samer Asfahani, the chief executive of OS NYC, both of Lebanese heritage. Some liberties are taken with traditional Lebanese fare, like the pork shawarma egg rolls, a nod to the restaurant’s location in Chinatown. "
    },
    {
        "id": 34,
        "name": "Fish wafers",
        "quantity": 9,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "price": 510,
        "category_veg": "Veg",
        "category": "Fish",
        "image": "https://img.freepik.com/premium-photo/seafood-fish_78502-22.jpg?w=996",
        "description": "With the Boka Restaurant Group, a significant player on the Chicago restaurant scene with a toehold in New York (it collaborated on Laser Wolf in Brooklyn), he has opened this classic French brasserie in the River North area. The bright, spacious restaurant designed by AvroKO has a vintage French look combined with sleek industrial elements. A classic menu includes Alsatian items like choucroute and tourte Alsacienne. "
    },
    {
        "id": 35,
        "name": "Fish chips",
        "quantity": 8,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "price": 630,
        "category_veg": "NonVeg",
        "category": "Fish",
        "image": "https://img.freepik.com/free-photo/sour-curry-with-snakehead-fish-spicy-garden-hot-pot-thai-food_1150-26404.jpg?w=996&t=st=1686543613~exp=1686544213~hmac=14e565875161777745aab59054ca6a080e5f77314d2d03aa0a134363a266fa28",
        "description": "A reopening for the restaurant, which has just signed a long lease with Brookfield Properties and WatermanClark LLC, is planned for early summer, with enhanced outdoor dining areas. An updated menu will combine the Milanese dishes for which Casa Lever, run by SA Hospitality Group (noted for its Sant Ambroeus restaurants and cafes), is known, along with some new elements."
    },
    {
        "id": 36,
        "name": "Freeze-dried fish food",
        "quantity": 6,
        "varients": [
            "small",
            "medium",
            "large"
        ],
        "price": 570,
        "category_veg": "Veg",
        "category": "Fish",
        "image": "https://img.freepik.com/free-photo/top-view-delicious-fish-meal-tray_23-2148734692.jpg?w=996&t=st=1686543564~exp=1686544164~hmac=1ecfacb63f20692f129822e065be45be8926ed2b50f7c5267d7599e4fb2c091e",
        "description": "An immense three-story restaurant from Simon Kim and his Gracious Hospitality Management, the owners of Cote in the Flatiron district, will be among the amenities at 550 Madison, the neo-Classical skyscraper designed by Philip Johnson familiarly known as the Chippendale building."
    }
]