# 🛒 Full E-Commerce Web Application

A **feature-rich, modern e-commerce web application** built with **Next.js 14**, **Tailwind CSS**, and **React.js**. This project demonstrates a complete and scalable user journey — from product discovery to checkout — including user authentication, cart management, wishlist, and account dashboard.

---

### 🌐 Live Preview

Check out the live demo here:  
🔗 [https://full-e-commerce-w.netlify.app/](https://full-e-commerce-w.netlify.app/)

---

## ✨ Features at a Glance

### 🏠 Homepage
- Highlights **featured**, **new arrivals**, and **best-selling** products.

### 🔍 Search & Discovery
- Advanced **search page** with real-time filtering.
- Filter by **category**, **color**, **size**, and **price**.
- **Dynamic category**-based product listings.

### 📄 Product Details
- Interactive **image gallery** using Swiper.js.
- Selectable **color** and **size** options.
- Detailed **description**, **features**, and **customer reviews**.

### 🛒 Shopping Cart
- Add/update/remove items.
- Quick-view **cart drawer**.
- **Full cart page** with order summary.

### ❤️ Wishlist
- Add or remove items from personal wishlist.
- Accessible via user account.

### 🔐 Authentication & Account
- User-friendly **login/signup** pages.
- **Account dashboard** with:
  - Profile management
  - Address book (Add/Edit/Delete)
  - Order history
  - Wishlist management
  - Change password

### 💳 Checkout Flow
- Seamless **multi-step form** to capture shipping and payment info.

### 📱 Responsive UI
- **Fully responsive** and optimized for mobile, tablet, and desktop.

### 🌐 Static Pages
- Includes **Contact Us** and other essential static pages.

---

## 🛠️ Tech Stack

| Tool | Description |
|------|-------------|
| **Next.js 15** | App Router architecture |
| **React.js** | UI logic and dynamic behavior |
| **Tailwind CSS** | Utility-first styling |
| **React Context API** | Global state management |
| **Framer Motion** | Smooth UI animations |
| **Swiper.js** | Image sliders and galleries |
| **Lucide & React Icons** | Iconography |

---

## 📁 Project Structure

Organized for scalability and maintainability using the App Router structure:

```
/app
├── (auth)/              # Login & Signup pages
├── Cart/                # Cart pages and components
├── Categories/          # Dynamic category pages
├── Checkout/            # Checkout flow
├── Contact/             # Contact Us page
├── Product/             # Dynamic product detail pages
├── Search/              # Search & filtering UI
├── account/             # User dashboard
├── _components/         # Reusable components (e.g., Header, Footer, Cards)
├── _context/            # Global contexts (Cart, User, Products, Wishlist)
│   ├── CartContext.js
│   ├── ProductsContext.js
│   ├── UserContext.js
│   └── WishlistContext.js
├── layout.js            # Root layout
└── page.js              # Home page
```

---

## 🚀 Getting Started

### ⚙️ Prerequisites

- **Node.js v18+**
- **npm** or **Yarn** package manager

### 🧪 Local Setup

1. **Clone the repo**:
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd your-repository-name
   ```

3. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Visit the app** at:
   ```
   http://localhost:3000
   ```

---

## 🙌 Contributions

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).

---

## 📬 Contact

Feel free to reach out for any questions, ideas, or collaboration opportunities.

---