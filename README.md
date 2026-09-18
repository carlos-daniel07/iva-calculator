# 🧮 Calculadora de IVA en Tiempo Real

Herramienta simple para calcular el IVA de un producto: el importe del impuesto y el precio final se actualizan al instante mientras se escribe, sin necesidad de botón de "calcular". Construida con **HTML, CSS y JavaScript puro**.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🔗 Proyecto en vivo

👉 [Ver proyecto en vivo](https://ivacalculator.netlify.app/)

## ✨ Características

- Cálculo del IVA y el precio final **en tiempo real**, mientras el usuario escribe (sin botón de envío).
- Dos campos editables: precio sin IVA y tasa de IVA (%), ambos disparando el recálculo con el evento `input`.
- Resultado formateado a **2 decimales** (`toFixed(2)`) para mostrar valores monetarios de forma correcta.
- Diseño responsive básico con ajuste de tamaños de fuente y padding para pantallas pequeñas.

## 🛠️ Tecnologías utilizadas

- **HTML5** — formulario simple con dos inputs numéricos y área de resultados.
- **CSS3** — diseño de tarjeta centrada con sombra, y media query para adaptar el formulario en móvil.
- **JavaScript (Vanilla)** — escucha del evento `input` en ambos campos para recalcular y actualizar el DOM al instante.

## 📂 Estructura del proyecto

```
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 Cómo usarlo localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/carlos-daniel07/iva-calculator.git
   ```
2. Entra a la carpeta del proyecto:
   ```bash
   cd iva-calculator
   ```
3. Abre `index.html` en tu navegador (o usa la extensión Live Server en VS Code).

## 🧠 Qué aprendí / practiqué

- Actualizar la interfaz en tiempo real usando el evento `input` en vez de esperar un `submit`, evitando además que el formulario recargue la página.
- Formatear correctamente valores monetarios con `toFixed(2)` para evitar resultados con demasiados decimales.
- Manejar conversión de porcentaje a decimal (`iva / 100`) de forma clara dentro del cálculo.

## 📸 Vista previa

<img width="1920" height="1536" alt="image" src="https://github.com/user-attachments/assets/9f6c7c4f-20de-4da7-bcb7-9758d22feb0a" />

## 📄 Licencia

Este proyecto es de uso libre con fines educativos y de portfolio.

---

Hecho con 💻 por [Carlos Daniel](https://github.com/carlos-daniel07)
