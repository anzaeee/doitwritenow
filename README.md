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

This project supports both **GitLab CI/CD** and **GitHub Actions** for comprehensive automation:

### Environments
- **Development** (`development` branch) - Integration testing & development
- **Staging** (`staging` branch) - Pre-production testing
- **Production** (`production` branch) - Live site deployment

### GitHub Actions Workflows

#### Main CI/CD Pipeline (`.github/workflows/ci-cd.yml`)
- **Build**: Automated building on all branches
- **Integration Tests**: Runs on `development` branch pushes
- **Staging Deploy**: Manual deployment to staging environment
- **Production Deploy**: Automated deployment to production
- **Regression Tests**: Post-production validation
- **Security Audit**: Automated vulnerability scanning
- **Performance Check**: Bundle size and performance metrics

#### Pull Request Checks (`.github/workflows/pr-checks.yml`)
- **PR Validation**: Build, test, and type checking for PRs
- **Dependency Review**: Security checks for new dependencies
- **Automated Comments**: Status updates on pull requests

#### Scheduled Maintenance (`.github/workflows/scheduled.yml`)
- **Weekly Security Audit**: Automated vulnerability scanning
- **Dependency Updates**: Check for outdated packages
- **Performance Baseline**: Track build metrics over time

### Local Testing
```sh
# Run integration tests (development environment)
npm run test:integration

# Run regression tests (production environment)
npm run regression

# Run type checking
npm run check
```

### GitLab CI/CD (Alternative)
The project also includes `.gitlab-ci.yml` for GitLab Pages deployment with identical functionality.

## Branching Strategy
- `production`: Production environment
- `staging`: Staging environment
- `development`: Development environment
- `feature/*`: Feature branches
