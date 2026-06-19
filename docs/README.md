# Nik Naks Simbas - WEDE5020 Part 3

A responsive snack shop website for Nik Naks Simbas, built with HTML, CSS, and JavaScript.

## Features Added in Part 3

### JavaScript Features
1. **Accordion Component** - Click-to-expand FAQ/info sections on About page
2. **Lightbox Gallery** - Click any product image to view full-size in overlay  
3. **Dynamic Product Search** - Live filtering on Products page using search input
4. **Contact Form Validation** - Validates name, email format, and message length before submit
5. **Enquiry Form Validation** - Validates flavor selection, quantity, phone number, and calculates estimated cost

### SEO Files Added
- `robots.txt` - Allows all crawlers and points to sitemap
- `sitemap.xml` - Lists all 5 pages for search engines

### File Structure Changes
- Added `js/` folder containing `script.js`
- Linked `script.js` to `contact.html` and `enquiry.html` using `<script src="js/script.js" defer></script>`

### HTML Elements Required for JS to Work
- **Products page** needs: `<input id="product-search">` and `<div id="product-list">`
- **Contact page** needs: `<form id="contact-form">` with inputs `id="name"`, `id="email"`, `id="message"`
- **Enquiry page** needs: `<form id="enquiry-form">` with inputs `id="product"`, `id="quantity"`, `id="phone"`

## How to Run
1. Clone this repository
2. Open the project folder in VS Code
3. Install the "Live Server" extension
4. Right-click `index.html` → "Open with Live Server"

## Screenshots

### Home Page
![Home Page](images/index.png)

### About Page  
![About Page](images/about.png)

### Products Page
![Products Page](images/product.png)

### Contact Page
![Contact Page](images/product.png)

### Enquiry Page
![Enquiry Page](images/enquiry.png)

### JS Alert / Form Success
![JS Alert](images/alert.png)

## Changelog

### Updates made for Part 3
#### JavaScript Features Added
1. **Accordion Component** - Click-to-expand FAQ/info sections on About page
2. **Lightbox Gallery** - Click any product image to view full-size in overlay
3. **Dynamic Product Search** - Live filtering on Products page using search input
4. **Contact Form Validation** - Validates name, email format, and message length before submit
5. **Enquiry Form Validation** - Validates flavor selection, quantity, phone number, and calculates estimated cost

#### SEO Files Added
- `robots.txt` - Allows all crawlers and points to sitemap
- `sitemap.xml` - Lists all 5 pages for search engines

#### File Structure Changes
- Added `js/` folder containing `script.js`
- Linked `script.js` to `contact.html` and `enquiry.html` using `<script src="js/script.js" defer></script>`

#### HTML Elements Required for JS to Work
- Products page needs: `<input id="product-search">` and `<div id="product-list">`
- Contact page needs: `<form id="contact-form">` with inputs `id="name"`, `id="email"`, `id="message"`
- Enquiry page needs: `<form id="enquiry-form">` with inputs `id="product"`, `id="quantity"`, `id="phone"`

**Date:** 2025-10-06

## Author
KhomotsoS09
