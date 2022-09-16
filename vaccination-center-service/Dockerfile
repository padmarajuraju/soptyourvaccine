FROM openjdk:11
ADD ./target/vaccination-center-service-0.0.1-SNAPSHOT.jar /usr/src/vaccination-center-service-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
EXPOSE 8084
ENTRYPOINT ["java","-jar", "vaccination-center-service-0.0.1-SNAPSHOT.jar"]