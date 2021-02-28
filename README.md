# vue-spa-sample

## 環境構築手順

### 1. Dockerの起動

```
docker-compose build
docker-compose up
```

### 2. ライブラリのインストール&app_keyの生成

```
docker-compose run --rm app composer install
docker-compose run --rm app php artisan key:generate
```

### 3. パッケージのインストール、実行

```
docker-compose run --rm node install
docker-compose run --rm node run dev
```