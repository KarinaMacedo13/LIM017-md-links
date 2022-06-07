# MDLINKS
[![coin.png](https://i.postimg.cc/V6QCqBZr/coin.png)](https://postimg.cc/06njxmsP)
## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Instalación](#2-instalación)
* [3. Instrucciones de Uso](#3-instrucciones-de-uso)
* [4. Documentación del Proyecto](#4-documentación-del-proyecto)
* [5. Autor](#5-autor)

***
## 1. Preámbulo
Programa desarrollado en node.js que busca links de archivos.md. y permite la validación de estos como data estadística.

## 2. Instalación
Instale la librería con el siguiente comando:
`npm i md-Links-karina-macedo`
## 3. Instrucciones de Uso
`mdLinks <filepath> [options]`
- filepath: Es la ruta del archivo a ejecutar en el programa.

Las **[options]** en este programa son:
- --validate: Podrás ver si sus enlaces están rotos o bien y obtener el estado de http
- --stats: Podrás ver enlaces totales y únicos.
- --stats --validate: Podrás ver enlaces totales, únicos y rotos

Los comandos a ejecutar son los siguientes:

:tw-2b50: `mdLinks --help`
Obtendrá los comando relacionados al programa:

[![1.jpg](https://i.postimg.cc/rFvwbFcx/1.jpg)](https://postimg.cc/GHxRTR4m)

:tw-2b50: `mdLinks filepath`

[![2.jpg](https://i.postimg.cc/28CsSswM/2.jpg)](https://postimg.cc/jCkg8kB4)

Obtendrá los datos de la siguiente manera:
- href: URL encontrada.
- text: Texto que aparece dentro del link.
- file: Ruta del archivo donde se encontró el link.

:tw-2b50: `mdLinks filepath --validate`

[![5.jpg](https://i.postimg.cc/xdL5HCjR/5.jpg)](https://postimg.cc/8FPLgT6J)

Obtendrá los datos de la siguiente manera:
- href: URL encontrada.
- text: Texto que aparece dentro del link.
- file: Ruta del archivo donde se encontró el link.
- status: Código de respuesta HTTP.
- ok: Mensaje fail en caso de fallo u ok en caso de éxito.

:tw-2b50: `mdLinks filepath --stats`

[![3.jpg](https://i.postimg.cc/NjmjwqfV/3.jpg)](https://postimg.cc/rDykSH4C)

Obtendrá los datos de la siguiente manera:
- total: Cantidad de links en la ruta
- unique: Cantidad de links unicos en la ruta

:tw-2b50:`mdLinks filepath --stats --validate`

[![4.jpg](https://i.postimg.cc/Gpj3HFDx/4.jpg)](https://postimg.cc/Y4hBPmbv)

- total: Cantidad de links en la ruta
- unique: Cantidad de links unicos en la ruta
- broken: Cantidad de links rotos en la ruta

## 4. Documentación del Proyecto
La documentación de la realización de este proyectos se encuentra en el siguiente apartado:

[Documentación del Proyecto](documentacion\README.md)
## 5. Autor
[Karina Macedo](https://github.com/KarinaMacedo13)
