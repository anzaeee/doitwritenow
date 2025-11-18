# Static Website - Do It Write Now

## Overview
This static website is built using Svelte.js to showcase our professional ghostwriting services and attract potential clients. Our aim is to provide a user-friendly, visually appealing by minimalism platform where clients can contact us for services and get a slight highlight of the services and testimonials provided.

## Features
### Home Page
- **Introduction**: Brief overview of our ghostwriting services.
- **Call to Action**: Clear and compelling call to action encouraging visitors to contact us.

### Services
- **Service Details**: Comprehensive information about the different ghostwriting services we offer (books, articles, blogs, etc.).


### Testimonials
- ** Anonymous testimonials to highlight true user experiences and thoughts **

### Contact
- **Contact Form**: Easy-to-use form for potential clients to reach out to us.
- **Contact Information**: Our email, phone number, and physical address.

## Prerequisites
- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
- **Svelete.js**
  
## Installation
1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/ghostwriting-services-website.git
   cd ghostwriting-services-website
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Run Development Server**
   ```sh
   npm run dev
   ```
   This will start the development server and you can view the website at http://localhost:5000

## CI/CD Pipeline

This project uses GitLab CI/CD for automated testing and deployment. You can run everything locally first without needing domains!

### Local Testing (No Domain Required)
```sh
# Run integration tests
npm run test:integration

# Run regression tests
npm run regression

# Run type checking
npm run check

# Build for production
npm run build
```

### Free Hosting Options (While Waiting for Domain)
- **GitLab Pages**: Automatic with your GitLab repo
- **Netlify**: Free tier with custom domains later
- **Vercel**: Free tier with custom domains later

### Environments
- **Development** (`development` branch)
- **Staging** (`staging` branch)
- **Production** (`production` branch)

See [Local Development Guide](./LOCAL-DEVELOPMENT-GUIDE.md) for detailed setup instructions.

## Branching Strategy
- `production`: Production environment
- `staging`: Staging environment
- `development`: Development environment
- `feature/*`: Feature branches
