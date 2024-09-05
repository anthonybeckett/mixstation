# Mixstation

This is an app similar to Soundcloud, Mixcloud or HearThis where users can upload their DJ mixes
for others to listen to. It is built on a VueJS frontend, Laravel backend and a MySQL 9 database.

# Development

## Frontend (Vue 3)

To get started with the frontend run the following in a terminal.

```bash
  cd ./frontend
  
  npm i
  
  npm run dev
```

The frontend should now be running on port 5173 unless specified different.

## Backend (Laravel 11)

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
  
  ./vendor/bin/sail up -d
```

To analyse the code base, we can run PHP Stan

```bash
./vendor/bin/phpstan analyse
```

To format the codebase we can run PHP Pint  
```bash
./vendor/bin/pint
```


## Todo:

### Frontend
- [x] Setup VueJS
- [x] Install Vue Router
- [x] Install Pinia
- [x] Setup PrimeVue - https://primevue.org/
- [x] Setup Vue Audio Visual - https://github.com/staskobzar/vue-audio-visual
- [x] Setup Tailwind CSS
- [x] Setup ESLint
- [ ] Setup docker

### Backend
- [x] Setup Laravel
- [x] Init API mode
- [x] Setup Larastan - https://github.com/larastan/larastan
- [x] Setup Laravel Pint - https://laravel.com/docs/11.x/pint
- [x] Setup Laravel Data & Actions

### Functionality
- [ ] User login/logout and authentication
- [ ] Forgot credentials feature
- [ ] Upload mixes (MP3 or WAV)
- [ ] List mixes they have uploaded
- [ ] Profile page
- [ ] Follow other users
- [ ] Dashboard page with mixes of users followed
- [ ] Stats of listeners and how many plays etc
- [ ] Search for users or mixes
- [ ] Favourite mixes
- [ ] Comments on mixes?
- [ ] Global player on bottom of screen
- [ ] Download mixes and ability to disable
- [ ] Invite users
- [ ] Mix tags for genre
- [ ] User can create playlists to group their mixes
- [ ] Player has custom playlist ability to add multiple mixes

### Docker
This will come later when the project is at a decent point
- [ ] Setup and containerise Vue JS frontend
- [ ] Make global docker compose file including the files from both directories

### React Native
Will need to flesh this out more but not a high priority for a mobile app

### Other
- [ ] Find a free service to create a task board or host something on a raspberry pi
  - Set up a local Raspberry Pi
  - Host Youtrack - https://www.jetbrains.com/youtrack/
    - https://www.jetbrains.com/help/youtrack/server/7.0/Install-YouTrack-ZIP-Installation.html