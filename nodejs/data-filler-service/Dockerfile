FROM mongo:3.2.6

WORKDIR /data

COPY . .

RUN ["chmod", "+x", "import.sh"]

CMD ./import.sh
