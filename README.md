
This guide shows how to set up GitHub authentication in a Next.js application running in Google IDX using the pre-built repository.

## Prerequisites

- GitHub account
- Google IDX account
- Basic understanding of Next.js and TypeScript

## Setting Up Your Development Environment

### 1. Import the Repository in Google IDX

1. Open Google IDX
2. Click on \"Import\" or \"Import Repository\"
3. Paste this repository URL: `https://github.com/securethinker295/idx-next-auth.git`
4. Click \"Import\" and wait for the repository to be cloned

### 2. Install Dependencies

Once the repository is imported, in the terminal run:

```bash
npm install
```

## GitHub OAuth Setup

### 1. Get Your IDX Preview URL

Start the application in development mode:

```bash
npm run dev
```

Google IDX will assign a preview URL to your application. **This is crucial for the next steps.**

### 2. Make Your Workspace Public

For GitHub authentication to work, your IDX workspace must be set to public:

1. Click on the workspace settings icon
2. Under \"Visibility\", select \"Public\"
3. Save your changes

### 3. Create a GitHub OAuth Application

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click \"New OAuth App\"
3. Fill in the following details:
   - **Application name**: Your choice (e.g., \"My IDX Auth App\")
   - **Homepage URL**: Your IDX preview URL (from step 1)
   - **Authorization callback URL**: `<your-idx-preview-url>/api/auth/callback/github`
4. Click \"Register application\"
5. On the next page, note your Client ID
6. Click \"Generate a new client secret\" and note the secret value

### 4. Configure Environment Variables

Create a `.env.local` file in your project root with the following content:

```
NEXTAUTH_URL=https://your-idx-preview-url
NEXTAUTH_SECRET=your_generated_secret_key
GITHUB_ID=your_github_oauth_app_client_id
GITHUB_SECRET=your_github_oauth_app_client_secret
```

Replace the placeholder values with your actual IDX preview URL and GitHub OAuth credentials.

## Important Notes

### URL Management

The most challenging aspect of using NextAuth in Google IDX is managing the callback URLs:

1. **IDX Preview URLs may change**: Every time you start a new workspace session, check if your preview URL has changed
2. **Update both locations**: If your URL changes, you must:
   - Update the `NEXTAUTH_URL` in your `.env.local` file
   - Update the Authorization callback URL in your GitHub OAuth app settings

### When Returning to Your Project

Each time you return to your IDX workspace:

1. Start your application
2. Check your current preview URL
3. Verify it matches the URL in both:
   - Your `.env.local` file
   - Your GitHub OAuth app settings
4. Update both if necessary

## Troubleshooting

### Authentication Not Working

1. **Check URLs**: Ensure your preview URL matches both your `.env.local` file and GitHub OAuth settings
2. **Verify Workspace Visibility**: Your workspace must be public for callbacks to work
3. **Client ID and Secret**: Make sure these are correctly entered in your `.env.local` file
4. **Environment File Loading**: Ensure your application is reading the `.env.local` file correctly

### GitHub OAuth Errors

If you're seeing OAuth errors when attempting to sign in with GitHub:

1. Check the callback URL in your GitHub OAuth app settings
2. Ensure your NEXTAUTH_SECRET is properly set
3. Verify your workspace is publicly accessible
