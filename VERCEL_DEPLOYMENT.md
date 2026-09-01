# Deploy Your Portfolio to Vercel

## Quick Steps:

1. **Navigate to correct directory:**
   ```bash
   cd portfolio/portfolio
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Initialize Git:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio deployment"
   ```

4. **Create GitHub repository** and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

5. **Deploy on Vercel:**
   - Go to Vercel.com
   - Import your GitHub repository
   - Click Deploy

Your site will be live at: `https://your-project-name.vercel.app`