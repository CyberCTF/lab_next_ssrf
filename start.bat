@echo off
cd deploy
docker-compose up -d
cd ..
echo Application is starting. Access it at http://localhost:3000/lab 