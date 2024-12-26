# Game Updates Page

This is a dynamic updates page for your game. It displays the latest updates, features, and improvements in a responsive grid layout.

## Setup Instructions

1. Place your update images in the `images` folder with the following naming convention:
   - `update1.jpg`
   - `update2.jpg`
   - `update3.jpg`
   etc.

2. Add a default image named `default-update.jpg` in the `images` folder. This will be shown if an update image is missing.

3. To add new updates, modify the `updates` array in `script.js`:
```javascript
const updates = [
    {
        id: [number],
        title: "Update Title",
        date: "Month DD, YYYY",
        description: "Update description",
        image: "images/updateX.jpg",
        tag: "Update X"
    }
    // ... add more updates
];
```

## Features
- Responsive grid layout
- Smooth animations on scroll
- Mobile-friendly design
- Dynamic image loading with fallback
- Automatic update card generation
