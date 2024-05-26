start:
	docker compose  up -d 
start-watch:
	docker compose up
start-build:
	docker compose up --build -d
stop:
	docker compose stop
restart:
	docker compose restart
ssh-node: 
	docker compose exec node-server sh

ssh-node-root: 
	docker compose exec -uroot node-server sh
