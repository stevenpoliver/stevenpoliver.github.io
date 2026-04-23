# Steven Oliver - Portfolio

This is a presentation-first single-page React + Tailwind CSS landing page built with Vite.

## How to run locally

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run the development server:
   ```bash
   pnpm --filter @workspace/portfolio run dev
   ```

## Links Configuration

Before deploying, make sure to update your social links in `src/config/links.ts`:
- Replace `<MY_GITHUB_USERNAME>` with your actual GitHub username.
- Replace `<MY_LINKEDIN_HANDLE>` with your actual LinkedIn handle.

## How to deploy to GitHub Pages

To host this on GitHub Pages as a user site (e.g., `https://<YOUR_GITHUB_USERNAME>.github.io`):

1. Create a fresh GitHub repository named `<YOUR_GITHUB_USERNAME>.github.io`
2. Update the build configuration if necessary to ensure `base: "/"` is used during the build.
3. Build the project:
   ```bash
   cd artifacts/portfolio
   VITE_BASE=/ pnpm run build
   ```
4. Push the contents of the `artifacts/portfolio/dist/public` directory to the main branch of your new repository.

Alternatively, you can set up a GitHub Action to automate the build and deployment process directly to GitHub Pages.
