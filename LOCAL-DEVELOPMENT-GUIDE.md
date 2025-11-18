# Local Development & Testing Guide

This guide shows you how to run and test your CI/CD pipeline locally without needing domains or external hosting.

## 🏠 Local Development Setup

### Prerequisites
- Node.js 18+
- Git
- Your favorite code editor

### 1. Clone and Setup
```bash
git clone https://github.com/anzaeee/doitwritenow.git
cd doitwritenow
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit: http://localhost:5000

### 3. Test Build Process
```bash
# Build the application
npm run build

# Preview the build
npm run preview
```

## 🧪 Testing the CI/CD Pipeline Locally

### Run Integration Tests
```bash
npm run test:integration
```
This runs the same tests that would run on the development branch in GitLab CI/CD.

### Run Regression Tests
```bash
npm run regression
```
This runs the same tests that would run after production deployment.

### Run Type Checking
```bash
npm run check
```

## 🚀 Deployment Options (No Domain Required)

### Option 1: GitLab Pages (Free & Easy)
GitLab provides free hosting for static sites.

#### Setup GitLab Pages:
1. Import your repo to GitLab
2. Go to Settings → Pages
3. GitLab will automatically detect your static files
4. Your site will be available at: `https://yourusername.gitlab.io/doitwritenow`

#### Update CI/CD for GitLab Pages:
Replace the mock deployment jobs with:

```yaml
pages:
  stage: deploy
  script:
    - mv build public
  artifacts:
    paths:
      - public
  only:
    - production  # or staging, development
```

### Option 2: Netlify (Free Tier)
Since you were using Netlify before:

1. **Sign up for free Netlify account**
2. **Connect your GitLab repo**
3. **Deploy settings:**
   - Build command: `npm run build`
   - Publish directory: `build`
4. **Free URL provided:** `https://random-name.netlify.app`

### Option 3: Vercel (Free Tier)
1. **Sign up for free Vercel account**
2. **Import your GitLab repo**
3. **Auto-detects SvelteKit**
4. **Free URL provided:** `https://doitwritenow.vercel.app`

### Option 4: GitHub Pages (If keeping on GitHub)
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ development, staging, production ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

## 🔧 Mock CI/CD Testing

### Test the Pipeline Locally
You can simulate the GitLab CI/CD pipeline using:

```bash
# Install gitlab-ci-local (optional)
npm install -g gitlab-ci-local

# Run specific jobs locally
gitlab-ci-local build
gitlab-ci-local integration_tests
```

### Manual Pipeline Testing
```bash
# 1. Build
npm run build

# 2. Test (development branch simulation)
npm run test:integration

# 3. Deploy (staging simulation)
echo "Deploying to staging..."
# Add your deployment commands here

# 4. Test (production simulation)
npm run regression
```

## 🌐 Domain Setup (When Ready)

### 1. Buy a Domain
Popular registrars:
- Namecheap
- GoDaddy
- Porkbun

### 2. Point Domain to Hosting
- **Netlify:** Add custom domain in site settings
- **Vercel:** Add domain in project settings
- **GitLab Pages:** Configure DNS records

### 3. SSL Certificates
Most hosting providers provide free SSL automatically.

## 📋 Development Workflow

### Local Development
```bash
# Work on development branch
git checkout development

# Make changes
# Test locally
npm run dev

# Run tests
npm run test:integration

# Commit and push
git add .
git commit -m "feat: your feature"
git push origin development
```

### Staging Deployment
```bash
# Merge to staging
git checkout staging
git merge development
git push origin staging

# In GitLab CI/CD: Click "Play" on deploy_staging job
```

### Production Deployment
```bash
# Merge to production
git checkout production
git merge staging
git push origin production

# In GitLab CI/CD: Click "Play" on deploy_production job
```

## 🐛 Troubleshooting

### Build Issues
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Test Issues
```bash
# Run tests with verbose output
npm run test:integration

# Check Node.js version
node --version
```

### Deployment Issues
- Check build artifacts exist: `ls -la build/`
- Verify hosting provider settings
- Check deployment logs in GitLab CI/CD

## 📚 Useful Commands

```bash
# Check current branch
git branch

# Switch branches
git checkout development
git checkout staging
git checkout production

# Check GitLab CI/CD status
# Go to GitLab → CI/CD → Pipelines

# View build artifacts
# In GitLab: Pipeline → Jobs → Download artifacts
```

## 🎯 Quick Start Checklist

- [ ] Clone repository
- [ ] Install dependencies: `npm install`
- [ ] Run locally: `npm run dev`
- [ ] Test build: `npm run build`
- [ ] Run tests: `npm run test:integration`
- [ ] Choose hosting: Netlify/Vercel/GitLab Pages
- [ ] Import to GitLab
- [ ] Test CI/CD pipeline
- [ ] Get domain (when ready)
- [ ] Configure custom domain

Happy coding! 🚀
