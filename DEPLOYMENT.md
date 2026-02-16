# Deployment

This project uses GitHub Actions for Continuous Integration (CI) and Vercel for Continuous Deployment (CD).

## CI Checks

On every push to the `main` branch and on every pull request, a GitHub Actions workflow (`.github/workflows/ci.yml`) is triggered. This workflow performs the following checks:

1.  **Dependencies Installation**: Installs project dependencies using `npm ci`.
2.  **Linting**: Runs `npm run lint` to check for code style and potential errors.
3.  **Build**: Runs `npm run build` to ensure the project builds successfully.

You can verify the status of these checks in the "Actions" tab of the GitHub repository or on the pull request page.

## Vercel Deployment

The documentation site is deployed on Vercel.

### Setup

To set up automatic deployments:

1.  Go to the [Vercel Dashboard](https://vercel.com).
2.  Click "Add New..." -> "Project".
3.  Import the `taskel-docs` repository from GitHub.
4.  Vercel will automatically detect the Next.js framework and configure the build settings.
5.  Click "Deploy".

Once set up, every push to the `main` branch will automatically trigger a production deployment on Vercel. Pull requests will generate preview deployments.
