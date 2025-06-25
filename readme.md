# 🌿 Flora Nest Server

This is the **backend server** for the Flora Nest project. It handles API requests, interacts with MongoDB database, performs authentication, and serves data to the client-side application.

---

## 🌐 Live Server Information

- 📍 **Base URL**: [https://flora-nest-server.vercel.app](https://flora-nest-server.vercel.app)
- 🌍 **Deployed on**: Vercel
- ⚙️ **Backend Framework**: Express.js
- 🛢️ **Database**: MongoDB Atlas (floraDB > trees collection)

### 🔗 Example Endpoints:

| Method | Endpoint            | Description                |
|--------|---------------------|----------------------------|
| GET    | `/plants`           | Get all plant data         |
| GET    | `/plants/:id`       | Get a plant by ID          |
| POST   | `/plants`           | Insert a new plant         |
| PUT    | `/plants/:id`       | Update plant information   |
| DELETE | `/plants/:id`       | Delete a plant             |

> All API endpoints are prefixed by the base URL. Example full URL:  
> `https://flora-nest-server.vercel.app/plants`

  ----

## 🛠️ Tech Stack

| Technology   | Description                        |
|--------------|------------------------------------|
| **Node.js**  | JavaScript runtime                 |
| **Express.js** | Fast and minimalist web framework |
| **MongoDB**  | NoSQL cloud database               |
| **dotenv**   | Secure environment configuration   |
| **CORS**     | Cross-Origin Resource Sharing      |
| **JWT**      | Authentication & authorization  |

---






