E-Commerce Price Tracking System
Developed by Ashar Afrouz
Overview
The E-Commerce Price Tracking System is a web application designed to help users monitor prices of products across various online stores. The application scrapes product data from e-commerce websites, tracks price changes, and notifies users when prices drop, helping them make informed purchasing decisions.

Features
Real-time Price Tracking: Scrapes real-time pricing data from multiple e-commerce platforms.
User Notifications: Automatic notifications for users when there is a price drop on their tracked products.
Product Management: Users can add, view, and remove products from their tracking list.
Responsive UI: A user-friendly interface that is responsive across various devices.
Data Storage: Efficient storage and retrieval of product data using MongoDB with Mongoose.

Tech Stack
Frontend:
Next.js 14: Utilized for server-side rendering and optimized performance.
TypeScript: Ensures type safety and helps catch errors during development.
Tailwind CSS: For styling and creating a responsive, visually appealing UI.
Backend:
Mongoose: Manages MongoDB, handling the storage and retrieval of product data.
Bright Data API: Used for web scraping to extract real-time pricing data from e-commerce websites.
Database:
MongoDB: Used as the primary database to store product information.

Installation
Prerequisites
Node.js v14.x or higher
MongoDB server
Bright Data API key

Setup
Clone the repository:
git clone https://github.com/asharafrouz/price-tracker.git
cd price-tracker

Install dependencies:
npm install

Environment Variables:
Create a .env file in the root directory and add the following environment variables:
MONGODB_URI=<your-mongodb-uri>
BRIGHTDATA_API_KEY=<your-brightdata-api-key>

Run the application:
npm run dev

The application should now be running on http://localhost:3000.

Usage
Add Products: Users can add products to their tracking list by entering the product URL.
Track Prices: The application will automatically scrape the latest prices and update the user's dashboard.
Receive Notifications: Users will be notified of any price drops via the interface.

Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes. Make sure to include detailed descriptions of your changes and update the documentation as needed.


Contact
For any enquiries or support, feel free to contact me at:

Email: afrouzashar@gmail.com
LinkedIn: linkedin.com/in/afrouz
GitHub: github.com/asharafrouz
