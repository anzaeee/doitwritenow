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

This project uses GitLab CI/CD for automated testing and deployment across three environments:

### Environments
- **Development** (`development` branch): https://dev.doitwritenow.com
- **Staging** (`staging` branch): https://staging.doitwritenow.com
- **Production** (`production` branch): https://doitwritenow.com

### Pipeline Features
- **Automated Builds**: Runs on every push to main branches
- **Integration Tests**: Runs on development branch updates
- **Regression Tests**: Runs after production deployments
- **Manual Deployments**: All deployments require manual approval

### Running Tests Locally
```sh
# Run integration tests
npm run test:integration

# Run regression tests
npm run regression

# Run type checking
npm run check
```

### Documentation
- [CI/CD Pipeline Guide](./docs/CI-CD-GUIDE.md)
- [Deployment Configuration](./docs/DEPLOYMENT-CONFIG.md)

## Branching Strategy
- `production`: Production environment
- `staging`: Staging environment
- `development`: Development environment
- `feature/*`: Feature branches
