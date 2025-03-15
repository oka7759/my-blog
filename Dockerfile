FROM node:23-alpine AS builder
WORKDIR /app

# 패키지 파일 복사 및 종속성 설치
COPY package.json package-lock.json ./
RUN npm install

# 소스 파일 복사 및 빌드
COPY . .
RUN npm run build

# 프로덕션 이미지
FROM node:23-alpine
WORKDIR /app

# 빌드 단계에서 생성된 standalone 폴더와 필요한 파일만 복사
COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nextjs /app/public ./public
COPY --from=builder --chown=nextjs:nextjs /app/package.json ./package.json



# 포트 노출
EXPOSE 3000

# 앱 실행
CMD ["node", "server.js"]
