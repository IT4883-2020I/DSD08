# DSD_08
Phát triển phần mềm phân tán 20201 - Nhóm 08

### ENV backend

```
DB_CONNECTION=pgsql
DB_HOST=ec2-174-129-205-197.compute-1.amazonaws.com
DB_PORT=5432
DB_DATABASE=d26i149tkpjamk
DB_USERNAME=sevqggnbwcmmil
DB_PASSWORD=1d019ac2cee816ca7beb95216efbc70157514767d752f4cf173b554b877a95d4
DATABASE_URL=postgres://sevqggnbwcmmil:1d019ac2cee816ca7beb95216efbc70157514767d752f4cf173b554b877a95d4@ec2-174-129-205-197.compute-1.amazonaws.com:5432/d26i149tkpjamk

CLOUDINARY_API_KEY=524531131596614
CLOUDINARY_API_SECRET=gaY-hfxMvxZn2ZARfo9gC52uVHc
CLOUDINARY_CLOUD_NAME=ninjahh
```

### Install Dependencies
```
cd frontend
npm install
cd backend
composer install
```

### Run
```
cd frontend
npm start
cd backend
php artisan serve
```
