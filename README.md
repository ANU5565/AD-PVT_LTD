# Ochi Agency Clone

This project is a high-fidelity, responsive clone of the Ochi Design Agency website. It serves as an advanced portfolio piece designed to demonstrate technical proficiency in modern frontend development, specifically focusing on complex animations, smooth scrolling mechanics, and responsive design patterns.

## 🚀 Key Features

* Fluid Parallax Scrolling: Utilizes `locomotive-scroll` to create smooth, performant parallax effects that provide a premium, agency-grade user experience.
* Complex Motion Design: Leveraged `framer-motion` for scroll-triggered entrance animations, infinite marquee loops, and interactive hover states[cite: 1].
* Pixel-Perfect Design: Replicated custom design components like typography maskers, staggered section overlaps, and unique layout structures[cite: 1].
* Responsive Architecture: A mobile-first design approach using Tailwind CSS to ensure a consistent experience across devices ranging from mobile phones to high-resolution desktops[cite: 1].

## 🛠️ Technical Stack

* Framework: [React](https://react.dev/) with [Vite](https://vitejs.dev/)[cite: 1]
* Styling: [Tailwind CSS](https://tailwindcss.com/)[cite: 1]
* Animation: [Framer Motion](https://www.framer.com/motion/)[cite: 1]
* Scrolling Mechanics: [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/)[cite: 1]
* Icons: [React Icons](https://react-icons.github.io/react-icons/)[cite: 1]

## 📂 Project Structure

The project follows a clean, modular structure to ensure maintainability[cite: 1]:

```text
ochi-clone/
├── public/            
├── src/
│   ├── components/    
│   │   ├── Navbar.jsx
│   │   ├── LandingPage.jsx
│   │   ├── Marquee.jsx
│   │   ├── About.jsx
│   │   ├── Eyes.jsx
│   │   ├── Cards.jsx
│   │   └── Footer.jsx
│   ├── App.jsx        
│   ├── index.css      
│   └── main.jsx       
├── tailwind.config.js 
└── package.json
```
## 🚀 How to Run Locally
To get a local copy of this project up and running on your machine, follow these simple steps[cite: 1]:

* Prerequisites
Make sure you have Node.js installed on your computer[cite: 1].

* Installation
Clone the repository:
git clone https://github.com/codewithakshyaaa/OCHI-a-redesign.git

* Navigate to the project directory:
cd OCHI-a-redesign

* Install dependencies:
npm install

* Start the development server:
npm run dev

* Open your browser and visit http://localhost:5173 to view the site[cite: 1].

## 💡 Lessons Learned
Building this clone highlighted the importance of Z-Index management and DOM structure when dealing with parallax sections[cite: 1]. The most significant challenge was orchestrating the overlap effects between sections, which required a deep understanding of relative positioning and the initialization lifecycle of the scroll engine[cite: 1].

## 📬 Contact
I am always open to feedback, discussions, or potential collaboration opportunities! Feel free to reach out:
* GitHub:https://github.com/codewithakshyaaa
* Email:akshyatiwary7@gmail.com
* Linkdln: https://www.linkedin.com/in/akshya-tiwary-2659b0371/

## Closing Statement
This project was a rewarding challenge that allowed me to bridge the gap between creative design and high-performance engineering. It has significantly deepened my understanding of animation orchestration and the importance of performance-oriented development in modern web applications. Thank you for checking out my work-do star the repository if you like it.