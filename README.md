# API DB Godot

This project is an Express.js API that connects to a PostgreSQL database. It includes database migrations and environment configuration.


## Getting Started

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/AHuyHarryIT/api-db-godot.git
    cd api-db-godot
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create and configure environment files:
    - `.env.local`

4. Update `database.json` with your database configuration.

### Running the Application

1. Build the project:
    ```sh
    npm run build
    ```

2. Start the application:
    ```sh
    npm start
    ```

3. For development mode with hot-reloading:
    ```sh
    npm run dev
    ```

### Database Migrations

1. To run migrations:
    ```sh
    npm run migrate
    ```

## API Endpoints

### Get All Users

- **URL:** `/users`
- **Method:** `GET`
- **Response:**
    ```json
    [
      {
        "id": "uuid",
        "name": "string",
        "score": "number"
      }
    ]
    ```

### Create a New User

- **URL:** `/users`
- **Method:** `GET`
- **Body:**
    ```json
    {
      "name": "string",
      "score": "number"
    }
    ```
- **Response:**
    ```json
    {
      "id": "uuid",
      "name": "string",
      "score": "number"
    }
    ```

## License

This project is licensed under the ISC License.
