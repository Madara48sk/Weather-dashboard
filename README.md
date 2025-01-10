# Weather Dashboard

A simple and responsive weather dashboard application that allows users to search for current weather conditions in various cities.

## Features

*   **City Search:** Users can search for a city using the search bar.
*   **Current Weather:** Displays the current temperature, weather condition, humidity, wind speed, and sunrise/sunset time for the searched city.
*   **Responsive Design:** The application adapts to different screen sizes (desktop, tablet, mobile).
*  **Automatic Updates:** The weather data updates automatically every few minutes, providing the most current information.
*  **Manual Refresh:** Users can manually refresh the weather data.
*   **Error Handling:** Handles errors gracefully and displays user-friendly messages.

## Technologies Used

*   **Frontend:**
    *   React JS
    *   Tailwind CSS (or vanilla CSS)
    *   HTML
    *   JavaScript

*   **API:** OpenWeatherMap API

## Getting Started

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
    ```
    Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub username and repository name.

2.  **Navigate to the Project Directory:**

    ```bash
    cd YOUR_REPOSITORY_NAME
    ```

3.  **Install Dependencies:**

    ```bash
    npm install
    ```

4.  **Start the Development Server:**

    ```bash
    npm run dev
    ```

5.  **Open the App:** Open your web browser and go to the development server URL (usually `http://localhost:5173`).

## Optional Environment Variables

The application requires an OpenWeatherMap API key. Add the following to your `.env` file at the root of the project:
