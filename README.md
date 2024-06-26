# Title

    Frontend Assignment: Implement a Charting Library in React.js

## Objective

    To Create a React.js application that displays a chart using a charting library. The chart should support timeframe breakdown, timeframe zooming, and interactive click       events. The chart data will be provided in JSON format.

## Tech Stack

    Used ReactJS, CSS
    
## Completion Instructions

### Functionality

#### Must Have

    1. Setup React.js Project:
       - Initialize a new React.js project.
       - Ensure the project is set up with TypeScript (optional but recommended for better type safety).
    
    2. Charting Library Integration:
       - Choose a charting library that supports timeframe breakdown, zooming, and click events. Recommended libraries include:
         - [Chart.js](https://www.chartjs.org/)
         - [Recharts](https://recharts.org/)
         - [ApexCharts](https://apexcharts.com/)
         - [Highcharts](https://www.highcharts.com/)
    
    3. JSON Data Handling:
       - Create a JSON file or an endpoint to serve chart data. The JSON data should include timestamps and values to be plotted. Make sure the data has over 100 points. 
       - Example JSON data structure:
         ```json
         [
           { "timestamp": "2023-01-01T00:00:00Z", "value": 10 },
           { "timestamp": "2023-01-02T00:00:00Z", "value": 12 },
           { "timestamp": "2023-01-03T00:00:00Z", "value": 5 },
           ...
         ]
         ```
    
    4. Chart Implementation:
       - Display the chart using the selected charting library.
       - Implement timeframe breakdown (e.g., daily, weekly, monthly views).
       - Enable timeframe zooming to allow users to zoom in/out on specific time periods.
       - Add click event handlers to display details of the clicked data point (e.g., show a tooltip or a modal with more information).
    
    5. User Interface:
       - Create a simple UI with buttons or dropdowns to switch between different timeframe breakdowns (e.g., daily, weekly, monthly).
       - Ensure the UI is responsive and user-friendly.
    
    6. Export the chart as png/jpg formats. 


### Guidelines to develop a project

#### Must Have

    * Create a new public repository on GitHub for the assignment.
    * Commit your code regularly and include clear commit messages.
    * Include a README file explaining the project setup, usage instructions, and any additional information.
    * Ensure the repository is well-organized and easy to navigate.

### Submission Instructions

#### Must Have

    Functionality, Code Quality, User Interface, Error Handling


## Resources

### Third-party packages

    recharts
