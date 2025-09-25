# Shivansh Garg - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Showcasing my projects, skills, and experience as a full-stack developer.

🌐 **Live Site**: [shivanshgarg.me](https://shivanshgarg.me)

## 🚀 Features

- **Modern Design**: Clean, responsive UI with smooth animations
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Mobile Responsive**: Optimized for all device sizes
- **Interactive Components**: Smooth scrolling navigation and hover effects
- **Project Showcase**: Detailed project cards with links to GitHub repositories
- **Skills Display**: Visual representation of technical skills
- **Contact Section**: Easy ways to get in touch

## 🛠️ Tech Stack

- **Frontend**: React 19, Tailwind CSS 4
- **Build Tool**: Vite
- **Deployment**: GitHub Pages with custom domain
- **Development**: ESLint for code quality

## 📂 Project Structure

```
shivanshgarg-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── Avtar.png
├── package.json
├── vite.config.js
└── README.md
```

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shivansh1251/Shivanshgarg-portfolio.git
   cd Shivanshgarg-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📦 Build & Deployment

### Build for production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

The deployment script automatically:
- Builds the project
- Adds custom domain (CNAME file)
- Deploys to GitHub Pages

## 🎨 Customization

### Adding New Projects
Edit `src/components/Projects.jsx` and add new project objects to the `projects` array:

```javascript
{
  title: "Your Project Name",
  desc: "Brief description of your project",
  link: "https://github.com/yourusername/your-repo"
}
```

### Updating Skills
Modify the `skills` array in `src/components/Skills.jsx`:

```javascript
const skills = [
  "Your Skill", "Another Skill", "..."
];
```

### Changing Contact Information
Update the contact details in `src/components/Contact.jsx`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📟 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🔧 Development Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Deploy to GitHub Pages |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Shivansh1251/Shivanshgarg-portfolio/issues).

## 📧 Contact

**Shivansh Garg**
- Email: shivanshgarg2005@gmail.com
- GitHub: [@Shivansh1251](https://github.com/Shivansh1251)
- LinkedIn: [Shivansh Garg](https://www.linkedin.com/in/shivansh-garg-22113a294/)
- Website: [shivanshgarg.me](https://shivanshgarg.me)

---

⭐ Star this repo if you like it!
