# vue-spa-sample

## 環境構築手順

### Dockerの起動

```
docker-compose build
docker-compose up
```

### Composerのインストール&app_keyの生成

```
docker-compose run --rm app composer install
docker-compose run --rm app php artisan key:generate
```

### Nodeのインストール

```
docker-compose run --rm node install
```