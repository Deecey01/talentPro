---

# TalentPro

Welcome to TalentPro, a premier freelancing portal where freelancers and creators can showcase their work and collaborate with businesses. This platform allows sellers to offer their services and buyers to find and purchase high-quality gigs. Built with the MERN stack, TalentPro ensures a seamless experience for all users.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

### General
- **User Authentication**: Secure registration and login process.
- **Stripe Payment Integration**: Safe and secure payment gateway for transactions.
- **User Profiles**: Separate buyer and seller accounts.

### Seller
- **Gig Creation**: Sellers can create gigs with detailed descriptions and multiple features.
- **Order Management**: View and manage orders, review requests, and deliver finished work.
- **Chat Feature**: Direct communication with buyers, including a "mark as read" option.

### Buyer
- **Gig Search and Filters**: Search for gigs, filter by price range, and sort by newest or most popular.
- **Order and Review**: Purchase products, leave one review per product with a star rating.
- **Chat Feature**: Direct communication with sellers, including a "mark as read" option.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**: Stripe
- **Authentication**: JSON Web Tokens (JWT)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/talentpro.git
   cd talentpro
   ```

2. **Install dependencies**
   ```bash
   # Backend dependencies
   cd api
   npm install

   # Frontend dependencies
   cd ../client
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the `api` directory and add your MongoDB URI, Stripe keys, and JWT secret.

   ```env
   MONGO_URI=your_mongodb_uri
   STRIPE_SECRET_KEY=your_stripe_secret_key
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the application**
   ```bash
   # Run backend
   cd api
   yarn start

   # Run frontend
   cd ../client
   yarn start
   ```

## Usage

1. **Register and Login**
   - Create an account as a buyer or seller.
   - Use your credentials to log in.

2. **For Sellers**
   - Create and manage gigs.
   - Review and deliver orders.
   - Communicate with buyers through the chat feature.

3. **For Buyers**
   - Search for gigs using filters.
   - Purchase gigs and leave reviews.
   - Communicate with sellers through the chat feature.

## Contributing

We welcome contributions to enhance TalentPro. To contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

Please ensure your code follows our coding guidelines and includes tests where applicable.

Feel free to tweak any part of this README to better fit your project's specifics or add any additional details you find necessary.
