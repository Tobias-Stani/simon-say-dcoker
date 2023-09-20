FROM php:7.4-apache

RUN apt update &&\
    apt install -y git libzip-dev zlib1g-dev unzip vim &&\
    docker-php-ext-install pdo_mysql mysqli &&\
    curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer