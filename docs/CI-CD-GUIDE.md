# CI/CD Pipeline Guide for DoItWriteNow

## Overview

This document provides comprehensive information about the GitLab CI/CD pipeline setup for the DoItWriteNow project. The pipeline supports three environments: development, staging, and production, with automated testing and deployment processes.

## Pipeline Architecture

### Environments

1. **Development Environment**
   - Branch: `development`
   - URL: `https://dev.doitwritenow.com`
   - Purpose: Feature development and integration testing

2. **Staging Environment**
   - Branch: `staging`
   - URL: `https://staging.doitwritenow.com`
   - Purpose: Pre-production testing and validation

3. **Production Environment**
   - Branch: `main`
   - URL: `https://doitwritenow.com`
   - Purpose: Live production environment

### Pipeline Stages

The CI/CD pipeline consists of four main stages:

1. **Build** - Compile and prepare the application
2. **Test** - Run various types of tests
3. **Deploy** - Deploy to different environments
4. **Regression** - Run post-deployment validation tests

## Pipeline Configuration

### Prerequisites

Before setting up the pipeline, ensure you have:

- GitLab repository with the following branches:
  - `production` (production)
  - `staging` (staging environment)
  - `development` (development environment)
- GitLab Runner configured with Docker support
- Environment variables configured in GitLab CI/CD settings

### Required Environment Variables

Set these variables in GitLab CI/CD settings:

```bash
# Deployment URLs
DEV_URL=https://dev.doitwritenow.com
STAGING_URL=https://staging.doitwritenow.com
PROD_URL=https://doitwritenow.com

# Optional: Deployment tokens/keys for your hosting provider
# DEPLOY_TOKEN=your_deployment_token
# SSH_PRIVATE_KEY=your_ssh_private_key
```

### Pipeline Jobs

#### Build Job
- **Trigger**: All branches (`main`, `staging`, `development`)
- **Purpose**: Build the Svelte application
- **Commands**:
  - Install dependencies (`npm ci`)
  - Run type checking (`npm run check`)
  - Build application (`npm run build`)
- **Artifacts**: Build output stored for 1 hour

#### Integration Tests (Development)
- **Trigger**: `development` branch only
- **Purpose**: Validate new features and integrations
- **Manual Trigger**: Must be triggered manually
- **Tests Include**:
  - Build output validation
  - Essential files check
  - Component structure validation
  - Routes configuration check
  - Package.json scripts validation
  - TypeScript configuration check

#### Deploy Jobs
- **Development Deploy**
  - Trigger: `development` branch
  - Manual trigger required
  - Deploys to development environment

- **Staging Deploy**
  - Trigger: `staging` branch
  - Manual trigger required
  - Includes smoke tests
  - Deploys to staging environment

- **Production Deploy**
  - Trigger: `main` branch
  - Manual trigger required
  - Deploys to production environment

#### Regression Tests (Production)
- **Trigger**: `main` branch after production deployment
- **Purpose**: Ensure no regressions in production
- **Manual Trigger**: Must be triggered manually
- **Tests Include**:
  - Build integrity validation
  - Static assets check
  - Svelte components validation
  - Routes configuration check
  - Performance metrics (file sizes)
  - API endpoints simulation
  - Security headers simulation
  - Accessibility basics check

#### Rollback Job
- **Trigger**: `main` branch
- **Purpose**: Emergency rollback for production
- **Manual Trigger**: Must be triggered manually

## Workflow

### Development Workflow

1. **Feature Development**
   ```bash
   git checkout development
   git pull origin development
   # Make changes
   git add .
   git commit -m "feat: add new feature"
   git push origin development
   ```

2. **Automatic Build**
   - Pipeline automatically builds on push to `development`

3. **Integration Testing**
   - Go to GitLab Pipelines
   - Find the pipeline for your commit
   - Click "Play" button next to `integration_tests` job

4. **Deploy to Development**
   - After successful tests, click "Play" next to `deploy_development` job

### Staging Workflow

1. **Merge to Staging**
   ```bash
   git checkout staging
   git merge development
   git push origin staging
   ```

2. **Deploy to Staging**
   - Pipeline builds automatically
   - Click "Play" next to `deploy_staging` job for deployment

### Production Workflow

1. **Merge to Production**
   ```bash
   git checkout production
   git merge staging
   git push origin production
   ```

2. **Deploy to Production**
   - Pipeline builds automatically
   - Click "Play" next to `deploy_production` job for deployment

3. **Run Regression Tests**
   - After deployment, click "Play" next to `regression_tests` job

## Branching Strategy

```
production (production) ──► Production Environment
    ▲
    │
staging                  ──► Staging Environment
    ▲
    │
development             ──► Development Environment
```

### Branch Naming Convention

- `feature/feature-name`: New features
- `bugfix/bug-description`: Bug fixes
- `hotfix/critical-fix`: Critical production fixes

## Testing Strategy

### Integration Tests (Development)
Run automatically when pushing to `development` branch. These tests ensure:
- Code compiles successfully
- All essential files are present
- Component structure is valid
- Routes are properly configured
- Dependencies are correctly installed

### Regression Tests (Production)
Run after production deployment to ensure:
- No functionality is broken
- Performance metrics are within acceptable ranges
- Security configurations are maintained
- Accessibility standards are met

## Deployment Configuration

### Environment-Specific Settings

Each environment can have different configurations:

- **Development**: Debug mode enabled, verbose logging
- **Staging**: Production-like settings, monitoring enabled
- **Production**: Optimized settings, error tracking enabled

### Deployment Scripts

The pipeline uses placeholder deployment commands. Update these based on your hosting provider:

```yaml
# Example for Vercel deployment
deploy_production:
  script:
    - npm install -g vercel
    - vercel --prod --yes

# Example for Netlify deployment
deploy_production:
  script:
    - npm install -g netlify-cli
    - netlify deploy --prod --dir=build
```

## Monitoring and Alerts

### Pipeline Monitoring

- Monitor pipeline success/failure rates
- Set up alerts for failed deployments
- Track deployment duration trends

### Application Monitoring

Consider implementing:
- Error tracking (Sentry, Rollbar)
- Performance monitoring (Lighthouse, WebPageTest)
- User analytics (Google Analytics, Mixpanel)

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are properly installed
   - Check for TypeScript compilation errors

2. **Test Failures**
   - Review test output for specific error messages
   - Check if required files are present
   - Verify component and route configurations

3. **Deployment Failures**
   - Check deployment credentials
   - Verify environment URLs are correct
   - Review hosting provider logs

### Pipeline Logs

Access detailed logs by:
1. Going to GitLab project → CI/CD → Pipelines
2. Clicking on the pipeline run
3. Clicking on individual job names to see logs

## Security Considerations

### Secrets Management

- Store sensitive data as GitLab CI/CD variables
- Use protected variables for production secrets
- Rotate credentials regularly

### Access Control

- Limit who can trigger manual deployments
- Use protected branches for production
- Implement code review requirements

## Maintenance

### Regular Tasks

- Update Node.js version when needed
- Review and update dependencies
- Monitor pipeline performance
- Update deployment scripts as needed

### Pipeline Updates

When updating the pipeline:
1. Test changes on a feature branch first
2. Update documentation accordingly
3. Communicate changes to the team
4. Monitor for any issues after deployment

## Support

For issues with the CI/CD pipeline:
1. Check this documentation first
2. Review GitLab pipeline logs
3. Check GitLab issues for known problems
4. Contact the development team

---

## Quick Reference

### Trigger Pipeline Manually
```bash
# From GitLab UI: Pipelines → Run Pipeline
# Or push to trigger branch
```

### View Pipeline Status
- GitLab → CI/CD → Pipelines

### Environment URLs
- Development: https://dev.doitwritenow.com
- Staging: https://staging.doitwritenow.com
- Production: https://doitwritenow.com

### Key Files
- `.gitlab-ci.yml`: Pipeline configuration
- `scripts/run-integration-tests.js`: Integration tests
- `scripts/run-regression-tests.js`: Regression tests
- `docs/CI-CD-GUIDE.md`: This documentation
