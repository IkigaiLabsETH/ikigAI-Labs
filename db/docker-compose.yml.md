version: '3.9'

services:
  next:
    build:
      context: ../next
      dockerfile: ../.ergomake/next.Dockerfile
      args:
        NEXT_PUBLIC_BACKEND_URL: 'http://localhost:8000'
        NEXTAUTH_URL: "http://localhost:3000"
        DATABASE_URL: "mysql://ltl_platform:ltl_platform@db:3307/ltl_platform"
        NEXTAUTH_SECRET: "changeme"
    ports:
      - "3000:3000"
    labels:
      dev.ergomake.env.replace-arg.NEXT_PUBLIC_BACKEND_URL: 'https://{{ services.platform.url }}'
      dev.ergomake.env.replace-arg.NEXTAUTH_URL: 'https://{{ services.next.url }}'

  platform:
    build:
      context: ../platform
      dockerfile: ../.ergomake/platform.Dockerfile
    ports:
      - "8000:8000"
    environment:
      LTL_PLATFORM_HOST: 0.0.0.0
      LTL_PLATFORM_DB_HOST: db
      LTL_PLATFORM_DB_PORT: "3307"
      LTL_PLATFORM_DB_USER: "ltl_platform"
      LTL_PLATFORM_DB_PASS: "ltl_platform"
      LTL_PLATFORM_DB_BASE: "ltl_platform"
      LTL_PLATFORM_FF_MOCK_MODE_ENABLED: "true"
    labels:
      dev.ergomake.env.replace-arg.LTL_PLATFORM_FRONTEND_URL: 'https://{{ services.next.url }}'

  db:
    image: mysql:8.0
    build: ../db
    ports:
      - "3307"
    environment:
      MYSQL_DATABASE: "ltl_platform"
      MYSQL_USER: "ltl_platform"
      MYSQL_PASSWORD: "ltl_platform"
      MYSQL_ROOT_PASSWORD: "ltl_platform"
      MYSQL_TCP_PORT: 3307
    command: [ 'mysqld', '--character-set-server=utf8mb4', '--collation-server=utf8mb4_unicode_ci' ]

  weaviate:
    image: semitechnologies/weaviate:1.19.6
    ports:
      - "8080:8080"
    environment:
      QUERY_DEFAULTS_LIMIT: 25
      AUTHENTICATION_ANONYMOUS_ACCESS_ENABLED: 'true'
      PERSISTENCE_DATA_PATH: '/var/lib/weaviate'
      DEFAULT_VECTORIZER_MODULE: 'none'
      CLUSTER_HOSTNAME: 'node1'
