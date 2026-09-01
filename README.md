# AakashHydroTech Corporate Website

A premium industrial corporate website for AakashHydroTech, built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## 1. Installation

Ensure you have Node.js 20.9.0 or later installed.

```bash
git clone <repository-url>
cd AAkashEnterprice
npm install
```

## 2. Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
# Email Configuration for Contact Forms
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
CONTACT_EMAIL=info@aakashhydrotech.com
SMTP_FROM=noreply@aakashhydrotech.com
```

## 3. Email Configuration

The website uses Nodemailer to send emails from the contact form. 
You can configure the SMTP credentials in `.env.local`. If you are using Gmail, you will need to generate an "App Password" from your Google Account settings.

## 4. Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 5. Production Build

To build the application for production:

```bash
npm run build
npm start
```

## 6. Vercel Deployment

This project is optimized for deployment on Vercel:

1. Push your code to a GitHub repository.
2. Import the project in your Vercel Dashboard.
3. Add the environment variables from your `.env.local` in the Vercel project settings.
4. Deploy!

## 7. How to Change Company Information

All global company information (name, phone, email, address, social links, stats) is centralized in:
`src/config/site.ts`

## 8. How to Add Products

To add or modify products, edit the data array in:
`src/data/products.ts`

## 9. How to Add Projects

To add new case studies or projects, edit the data array in:
`src/data/projects.ts`

## 10. How to Replace Images

All placeholder image URLs are managed centrally in:
`src/config/images.ts`

To use local images:
1. Place the images in the `public/images/` directory.
2. Update the paths in `src/config/images.ts` to reference the local paths (e.g., `/images/hero.jpg`).
