# The Food App

The Food App is a web application that allows users to search for meals, view meal details, and save their favorite meals. It utilizes an API to fetch data about various meals and provides a user-friendly interface to interact with the app.

## Features

### Home Page
- The home page serves as the main interface for the app.
- Users can enter a search query in the search bar to find meals.
- As the user types, the search results are displayed in real-time, similar to Google's suggestions.
- Each search result includes a favorite button that allows users to add the meal to their list of favorite meals.
- Clicking on a particular search result will open a new page with more detailed information about the meal.

### Meal Detail Page
- The meal detail page provides comprehensive information about a selected meal.
- It displays the meal's name, photo, instructions, and any additional relevant details.
- Users can get a better understanding of the meal and how to prepare it by viewing this page.

### My Favourite Meals Page
- This page displays a list of all the meals that the user has marked as favorites.
- The list is persistent, meaning it retains the same meals even after closing or refreshing the browser.
- Each meal in the list includes a "Remove from Favorites" button that allows users to remove a meal from their favorites.

## Usage

1. **Fetching Data from API**
   - The app relies on an API to retrieve information about meals. Ensure that the API integration is set up correctly and functional.

2. **Search Bar Functionality**
   - Implement the search bar functionality to allow users to enter search queries.
   - As the user types, send requests to the API to fetch matching meal results.
   - Display the search results dynamically as the user types, updating the suggestions in real-time.

3. **Rendering the Selected Item from Search Bar**
   - When a user selects a specific search result, navigate to a new page that displays detailed information about that meal.
   - Retrieve the necessary information from the API for the selected meal and render it on the meal detail page.

4. **Rendering All Items**
   - On the home page, display all the search results in a visually appealing manner.
   - Each search result should include the meal's name and a favorite button.
   - Implement the logic to add a meal to the user's favorite meals list when the favorite button is clicked.

5. **Create a Separate My Favorite Meals Page**
   - Design a separate page to display the user's favorite meals.
   - Retrieve the list of favorite meals from local storage or a database to render on this page.
   - Each meal in the list should include a "Remove from Favorites" button.
   - Implement the logic to remove a meal from the favorites list when the corresponding button is clicked.

## Installation

1. Clone the repository from [GitHub](https://github.com/your-username/food-app-repo).

2. Navigate to the project directory.

3. Install the required dependencies by running the following command:
   ```
   npm install
   ```

4. Start the development server with the following command:
   ```
   npm start
   ```

5. Access the app in your web browser by visiting `http://localhost:8000`.

## Technologies Used

- HTML5, CSS3, JavaScript
- EJS 
- API for meal data retrieval (e.g., [TheMealDB API](https://www.themealdb.com/api.php))

## Credits

- TheMealDB API - [https://www.themealdb.com](https://www.themealdb.com)

## Contributing

Contributions to The Food App are welcome! If you find any bugs or have suggestions for additional features, please create an issue or submit a pull request on the project's GitHub repository.

# Developed by: Victor Mitra
