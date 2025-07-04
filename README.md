# StrongLift Timer

A timer application for weight training that accurately measures and records rest periods between sets.

## 🚀 Key Features

- **Multiple Timer Settings**: 1min 30sec, 3min, 5min (First Timer) / 40sec, 1min, 1min 30sec (Second Timer)
- **Real-time Countdown**: Precise time measurement down to milliseconds
- **Set Recording**: Automatically records completed set times
- **Audio Alerts**: Beep sound notification when timer ends
- **Responsive Design**: Works on both mobile and desktop
- **Dark Theme**: Eye-friendly dark mode UI

## 🛠️ Tech Stack

- **Frontend**: React 17, TypeScript
- **Styling**: Tailwind CSS, Styled Components
- **Routing**: React Router DOM
- **Icons**: Font Awesome
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages

## 📱 How to Use

1. **Select Timer**: Choose your preferred timer mode from the bottom navigation
2. **Set Time**: Click on the desired rest time button
3. **Start**: Press the "Start" button to begin countdown
4. **Stop/Reset**: Pause or reset the timer as needed
5. **Set Recording**: Timer completion automatically records to the set list
6. **Clear**: Use the "Clear" button to delete all set records

## 🎯 Timer Modes

### First Timer (😠)
- 1 minute 30 seconds (90 seconds)
- 3 minutes (180 seconds)
- 5 minutes (300 seconds)

### Second Timer (😊)
- 40 seconds
- 1 minute (60 seconds)
- 1 minute 30 seconds (90 seconds)

## 🚀 Installation and Setup

### Prerequisites
- Node.js 14.0.0 or higher
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/limfull/stronglift-timer.git

# Navigate to project directory
cd stronglift-timer

# Install dependencies
npm install
# or
yarn install
```

### Run Development Server
```bash
npm start
# or
yarn start
```

### Build
```bash
npm run build
# or
yarn build
```

### Deploy
```bash
npm run deploy
# or
yarn deploy
```

## 📁 Project Structure

```
src/
├── components/
│   ├── BottomNav.tsx      # Bottom navigation
│   ├── Button.tsx         # Reusable button component
│   ├── SetList.tsx        # Set record list
│   ├── TimeButton.tsx     # Time setting button
│   ├── Timer.tsx          # Timer logic
│   └── TimerContainer.tsx # Timer container
├── assets/
│   └── sounds/
│       └── beepbeep.mp3   # Timer end notification sound
├── utils/
│   ├── index.tsx          # Utility functions
│   └── useEffectOnlyOnce.tsx
└── App.tsx                # Main app component
```

## 🎨 UI/UX Features

- **Intuitive Interface**: Large buttons and clear layout
- **Color Coding**: Different color themes for each timer mode
- **Mobile Optimized**: Touch-friendly design
- **Accessibility**: High contrast colors and large font sizes

## 🔧 Development Information

- **React 17**: Functional components and Hooks
- **TypeScript**: Type safety guaranteed
- **Tailwind CSS**: Utility-first CSS framework
- **Styled Components**: Dynamic styling
- **React Router**: SPA routing

## 📄 License

This project is licensed under the MIT License.

## 🌐 Deployment

This project is deployed via GitHub Pages.

**Deployment URL**: https://limfull.github.io/stronglift-timer/

---

Make your weight training more systematic and efficient! 💪
