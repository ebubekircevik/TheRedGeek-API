# TheRedGeek API

A professional Node.js REST API for blog and user management, using MongoDB Atlas.

## Features
- User and blog CRUD operations
- MongoDB Atlas integration
- Modular structure (models, controllers, routes)
- Environment variable support (.env)
- TypeScript support

## Getting Started

### Prerequisites
- Node.js >= 18.x
- MongoDB Atlas account

### Installation
```sh
git clone https://github.com/<your-username>/<your-repo>.git
cd TheRedGeek-API
npm install
```

### Configuration
Create a `.env` file in the project root:
```
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=5001
```

### Development
```sh
npm run dev
```

### Production Build
```sh
npm run build
npm start
```

## API Endpoints

### Users
- `GET    /api/users/`           — List all users
- `POST   /api/users/`           — Create a new user
- `GET    /api/users/:id`        — Get user by ID
- `PUT    /api/users/:id`        — Update user
- `DELETE /api/users/:id`        — Delete user

### Blogs
- `GET    /api/blogs/`           — List all blogs
- `POST   /api/blogs/`           — Create a new blog
- `GET    /api/blogs/:id`        — Get blog by ID
- `PUT    /api/blogs/:id`        — Update blog
- `DELETE /api/blogs/:id`        — Delete blog

## Deployment
- You can deploy this project to Render, Railway, Heroku, or any Node.js-compatible cloud platform.
- Set your environment variables (MONGODB_URI, PORT) in the platform’s dashboard.

## License
MIT
