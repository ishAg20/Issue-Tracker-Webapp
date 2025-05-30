# Issue-Tracker

A modern web application for tracking and managing issues in software development projects. Built with Next.js, TypeScript, and Prisma.

## Project Description

Issue Tracker is a robust project management tool designed to help development teams keep track of issues in their software projects. The application provides an intuitive interface for creating, categorizing and managing issues throughout their lifecycle.

## Features

- **Dashboard**: Get a quick overview of issue statistics and status
- **Issue Management**: Create, edit, delete, and filter issues
- **Status Tracking**: Track issues through their lifecycle (Open, In Progress, Closed)
- **Filtering**: Find issues quickly with advanced filtering options
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes
- **Database**: MySQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Styling**: Radix UI components with custom styling

## Getting Started

### Prerequisites

- Node.js 14.0 or later
- npm or yarn
- MySQL database

### Installation

1. Clone this repository to your local machine.

2. Run `npm install` to install the dependencies.

3. Create a `.env` file in the root directory with the following variables:

   ```
   DATABASE_URL="mysql://username:password@localhost:3306/issue_tracker"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   ```

4. Set up the database:

   ```
   npx prisma migrate dev
   ```

5. Start the development server:

   ```
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Register or log in to your account
2. Create a new issue with relevant details (title, description, priority, etc.)
3. Track the status of your issues on the dashboard
4. Filter issues based on different criteria
5. Close issues once they're resolved

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
