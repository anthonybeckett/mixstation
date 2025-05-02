# Mixstation

This is an app similar to Soundcloud, Mixcloud or HearThis where users can upload their DJ mixes
for others to listen to. It is built on a VueJS frontend, Laravel backend and a MySQL 9 database.

# Development

## Getting Started

All the services required are handled with Docker & Docker Compose. This can be found in the backend directory
in the `docker-compose.yml` file.

To get started, in the root directory just run the following.

```bash
  make start
```

## Frontend (Vue 3)

To get started with the frontend run the following in a terminal.

```bash
  cd ./frontend
  
  npm i
```

The frontend should now be running on port 5173 unless specified different.

## Backend (Laravel 12)

To get started running, first we need to install the composer packages in the backend directory.

```bash
  cd ./backend

  composer install
```

Next, we need to create a .env and update the DB credentials as needed.

```bash
  cp .env.example .env
```

Now we can run the migrations then start the API. The backend uses docker through Laravel Sail.
```bash
  php artisan migrate
```

To analyse the code base, we can run PHP Stan

```bash
./vendor/bin/phpstan analyse
```

To format the codebase we can run PHP Pint  
```bash
./vendor/bin/pint
```
