FROM openjdk:11
ADD ./target/eureka-server-0.0.1-SNAPSHOT.jar /usr/src/eureka-server-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
 EXPOSE 8761
ENTRYPOINT ["java","-jar", "eureka-server-0.0.1-SNAPSHOT.jar"]