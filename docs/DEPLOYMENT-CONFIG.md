# Deployment Configuration Guide

## Overview

This document outlines the deployment configurations for different environments in the DoItWriteNow CI/CD pipeline. Each environment has specific settings and deployment strategies.

## Environment Configurations

### Development Environment

**Branch:** `development`
**URL:** `https://dev.doitwritenow.com`
**Purpose:** Feature testing and development validation

**Configuration:**
```javascript
// Environment variables for development
VITE_ENV=development
VITE_API_URL=https://api-dev.doitwritenow.com
VITE_DEBUG=true
VITE_ANALYTICS_ID=dev-analytics-id
```

**Deployment Strategy:**
- Automatic build on push
- Manual deployment trigger
- Debug logging enabled
- Development API endpoints

### Staging Environment

**Branch:** `staging`
**URL:** `https://staging.doitwritenow.com`
**Purpose:** Pre-production testing and user acceptance

**Configuration:**
```javascript
// Environment variables for staging
VITE_ENV=staging
VITE_API_URL=https://api-staging.doitwritenow.com
VITE_DEBUG=false
VITE_ANALYTICS_ID=staging-analytics-id
```

**Deployment Strategy:**
- Automatic build on push
- Manual deployment trigger
- Production-like settings
- Staging API endpoints
- Smoke tests included

### Production Environment

**Branch:** `main`
**URL:** `https://doitwritenow.com`
**Purpose:** Live production environment

**Configuration:**
```javascript
// Environment variables for production
VITE_ENV=production
VITE_API_URL=https://api.doitwritenow.com
VITE_DEBUG=false
VITE_ANALYTICS_ID=prod-analytics-id
```

**Deployment Strategy:**
- Automatic build on push
- Manual deployment trigger
- Optimized settings
- Production API endpoints
- Regression tests after deployment

## Hosting Provider Setup

### Option 1: Netlify (Recommended)

If you're migrating from Netlify, use this configuration:

**GitLab CI/CD Variables to Set:**
```
NETLIFY_SITE_ID=your-netlify-site-id
NETLIFY_AUTH_TOKEN=your-netlify-auth-token
```

**Update `.gitlab-ci.yml` deployment jobs:**
```yaml
deploy_development:
  script:
    - npm install -g netlify-cli
    - netlify deploy --dir=build --site=$NETLIFY_SITE_ID_DEV --auth=$NETLIFY_AUTH_TOKEN

deploy_staging:
  script:
    - npm install -g netlify-cli
    - netlify deploy --dir=build --site=$NETLIFY_SITE_ID_STAGING --auth=$NETLIFY_AUTH_TOKEN --prod

deploy_production:
  script:
    - npm install -g netlify-cli
    - netlify deploy --dir=build --site=$NETLIFY_SITE_ID_PROD --auth=$NETLIFY_AUTH_TOKEN --prod
```

### Option 2: Vercel

**GitLab CI/CD Variables to Set:**
```
VERCEL_TOKEN=your-vercel-token
VERCEL_PROJECT_ID=your-project-id
VERCEL_ORG_ID=your-org-id
```

**Update `.gitlab-ci.yml` deployment jobs:**
```yaml
deploy_production:
  script:
    - npm install -g vercel
    - vercel --prod --yes --token=$VERCEL_TOKEN
```

### Option 3: GitLab Pages

For GitLab Pages deployment:

**Update `.gitlab-ci.yml`:**
```yaml
deploy_production:
  stage: deploy
  script:
    - mv build public
  artifacts:
    paths:
      - public
  only:
    - main
```

### Option 4: AWS S3 + CloudFront

**GitLab CI/CD Variables to Set:**
```
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_DEFAULT_REGION=us-east-1
S3_BUCKET_DEV=dev.doitwritenow.com
S3_BUCKET_STAGING=staging.doitwritenow.com
S3_BUCKET_PROD=doitwritenow.com
CLOUDFRONT_DISTRIBUTION_ID=your-distribution-id
```

**Update `.gitlab-ci.yml` deployment jobs:**
```yaml
deploy_production:
  image: amazon/aws-cli:latest
  script:
    - aws s3 sync build/ s3://$S3_BUCKET_PROD --delete
    - aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"
```

## Environment-Specific Files

### Environment Variables

Create `.env` files for different environments:

**`.env.development`:**
```bash
VITE_ENV=development
VITE_API_BASE_URL=https://api-dev.doitwritenow.com
VITE_APP_TITLE="DoItWriteNow (Dev)"
VITE_DEBUG=true
```

**`.env.staging`:**
```bash
VITE_ENV=staging
VITE_API_BASE_URL=https://api-staging.doitwritenow.com
VITE_APP_TITLE="DoItWriteNow (Staging)"
VITE_DEBUG=false
```

**`.env.production`:**
```bash
VITE_ENV=production
VITE_API_BASE_URL=https://api.doitwritenow.com
VITE_APP_TITLE="DoItWriteNow"
VITE_DEBUG=false
```

### Build Commands per Environment

Update `package.json` scripts:

```json
{
  "scripts": {
    "build:dev": "vite build --mode development",
    "build:staging": "vite build --mode staging",
    "build:prod": "vite build --mode production"
  }
}
```

Update `.gitlab-ci.yml` to use environment-specific builds:

```yaml
build:
  script:
    - |
      if [ "$CI_COMMIT_BRANCH" = "development" ]; then
        npm run build:dev
      elif [ "$CI_COMMIT_BRANCH" = "staging" ]; then
        npm run build:staging
      else
        npm run build:prod
      fi
```

## SSL/TLS Configuration

### HTTPS Setup

Ensure all environments use HTTPS:

1. **Development:** Use self-signed certificates or HTTP (acceptable for dev)
2. **Staging:** Use valid SSL certificates
3. **Production:** Use valid SSL certificates with auto-renewal

### Security Headers

Configure security headers based on your hosting provider:

**Netlify `_headers` file:**
```
/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Content-Security-Policy: default-src 'self'
```

## Monitoring and Logging

### Error Tracking

Set up error tracking for each environment:

**Sentry Configuration:**
```javascript
// In your Svelte app
import * as Sentry from "@sentry/svelte";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.VITE_ENV,
  // ... other config
});
```

### Analytics

Configure analytics tracking:

**Google Analytics:**
```javascript
// gtag configuration
gtag('config', import.meta.env.VITE_ANALYTICS_ID, {
  custom_map: {'dimension1': import.meta.env.VITE_ENV}
});
```

## Rollback Strategy

### Automatic Rollback

Implement rollback mechanisms:

**GitLab CI/CD Rollback Job:**
```yaml
rollback_production:
  stage: deploy
  script:
    - echo "Rolling back to previous deployment"
    - # Add your rollback commands here
  when: manual
  only:
    - main
```

### Manual Rollback Steps

1. Identify the last working commit
2. Revert to that commit on main branch
3. Trigger production deployment
4. Monitor application health
5. Run regression tests

## Performance Optimization

### Build Optimization

**Vite Configuration:**
```javascript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['svelte', 'svelte/store'],
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
});
```

### CDN Configuration

Configure CDN for static assets:

- Use a CDN provider (Cloudflare, AWS CloudFront, etc.)
- Set appropriate cache headers
- Configure asset optimization

## Backup and Recovery

### Database Backups

If using a database:

- Set up automated backups
- Test backup restoration
- Store backups securely

### Static Asset Backups

- Backup build artifacts
- Version control important assets
- Implement asset CDN redundancy

## Testing Deployment

### Pre-deployment Checks

1. **Build Verification**
   ```bash
   npm run build
   npm run preview
   ```

2. **Smoke Tests**
   ```bash
   # Test basic functionality
   curl -f https://your-deployment-url
   ```

3. **Integration Tests**
   ```bash
   npm run test:integration
   ```

### Post-deployment Validation

1. **Health Checks**
   - Monitor application logs
   - Check error rates
   - Validate core functionality

2. **Performance Monitoring**
   - Check load times
   - Monitor resource usage
   - Validate SEO metrics

## Maintenance

### Regular Maintenance Tasks

- Update SSL certificates
- Review and rotate secrets
- Update dependencies
- Monitor performance metrics
- Review access logs

### Emergency Contacts

Document emergency contacts for:
- Hosting provider support
- Domain registrar
- SSL certificate provider
- Team members on call

## Troubleshooting

### Common Deployment Issues

1. **Build Failures**
   - Check Node.js version
   - Verify environment variables
   - Review build logs

2. **Runtime Errors**
   - Check environment configuration
   - Validate API endpoints
   - Review application logs

3. **Performance Issues**
   - Check CDN configuration
   - Review asset optimization
   - Monitor server resources

### Debug Commands

```bash
# Check environment variables
printenv | grep VITE_

# Test build locally
npm run build && npm run preview

# Check GitLab CI/CD variables
# GitLab UI → Settings → CI/CD → Variables
```

## Support

For deployment issues:
1. Check this documentation
2. Review GitLab pipeline logs
3. Contact hosting provider support
4. Reach out to development team

---

## Quick Reference

### Environment Variables Summary
| Variable | Development | Staging | Production |
|----------|-------------|---------|------------|
| VITE_ENV | development | staging | production |
| VITE_DEBUG | true | false | false |
| VITE_API_URL | dev-api | staging-api | prod-api |

### Deployment Commands
```bash
# Local testing
npm run build:dev
npm run build:staging
npm run build:prod

# CI/CD deployment
# Handled automatically by GitLab CI/CD
```

### Health Check Endpoints
- `/` - Main application
- `/health` - Health check (if implemented)
- `/api/status` - API status (if applicable)
