FROM openjdk:11
ADD ./target/config-server-0.0.1-SNAPSHOT.jar /usr/src/config-server-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
EXPOSE 8888
ENTRYPOINT ["java","-jar", "config-server-0.0.1-SNAPSHOT.jar"]