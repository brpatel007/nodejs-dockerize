build_image:
	docker build -t myapp:latest .

create_container:
	docker run -d --name myapp_container -p 3000:3000 myapp:latest

stop_container:
	docker stop myapp_container

kill_container:
	docker rm -f myapp_container
