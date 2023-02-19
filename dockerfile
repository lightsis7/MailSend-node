# Node.js 버전을 인자로 받습니다
ARG NODE_VERSION=16.13.1

# 공식 Node.js 이미지를 기반으로 합니다
FROM node:$NODE_VERSION

# 작업 디렉토리를 설정합니다
WORKDIR /usr/src/app

# 필요한 패키지 설치를 위한 package.json 파일을 복사합니다
COPY package*.json ./

# 패키지 설치
RUN npm install

# 소스 코드를 복사합니다
COPY . .

# 빌드 스크립트를 실행합니다
#RUN npm run build

# 컨테이너 실행시 실행될 명령어를 지정합니다
CMD ["npm", "start"]

EXPOSE 3000

# FROM openjdk:8-jdk-alpine
# EXPOSE 8080
# ARG jar_file = AyoteraLabDockerTest-0.0.1-SNAPSHOT.jar
# COPY ${jar_file} anyjava.jar
# ENTRYPOINT ["java","-jar","/anyjava.jar"]