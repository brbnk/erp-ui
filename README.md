Build and start container:
- docker-compose up --build

Install new npm packages:
- Access container: docker exec -it $(docker ps -aqf "name=^erp-ui_ui_1$") sh
- npm i <package_name>
