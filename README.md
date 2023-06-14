
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