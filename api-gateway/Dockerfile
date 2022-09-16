FROM openjdk:11
ADD ./target/api-gateway-0.0.1-SNAPSHOT.jar /usr/src/api-gateway-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
EXPOSE 8080
ENTRYPOINT ["java","-jar", "api-gateway-0.0.1-SNAPSHOT.jar"]