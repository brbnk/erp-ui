git clone https://github.com/brbnk/erp-ui.git --config core.autocrlf=false

Build and start container:
- (PRD): docker-compose -f docker-compose.yml up --build -d
- (DEV): docker-compose -f docker-compose.dev.yml up --build -d 
- localhost:3000

Install new npm packages:
- Access container: docker exec -it $(docker ps -aqf "name=^erp-ui-dev$") sh
- npm i <package_name>
