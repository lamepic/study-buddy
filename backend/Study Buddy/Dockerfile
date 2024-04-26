FROM eclipse-temurin:21-jre-alpine
FROM maven:3.9.6-eclipse-temurin-21-alpine

WORKDIR /app
COPY . /app

RUN mvn -B -DskipTests clean package

EXPOSE 8080

CMD ["java", "-jar", "target/StudyBuddy-0.0.1-SNAPSHOT.jar"]