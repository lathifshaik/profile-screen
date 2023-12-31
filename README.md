# Profile Screen - React Component
## Hosted Link https://profile-screen.vercel.app/
## Dependencies
- React
- Material UI icons library

## File Structure
- `profilescreen.js`: Main React component file.
- `profileData.json`: JSON file for profile data.
- `profilescreen.css`: CSS file for styling.
- `dp.png`, `bg.png`, `logo.svg`: Image files.

## Component Structure
The `ProfileScreen` component consists of the following sections:

### Navbar
Contains a logo and a "Courses" button.

### Background Image
Displays a background image.

### Profile Header
Includes profile picture, name, badges (diamond and verified), follower and following counts.

### Designation and Website
Displays designation and a link to the user's website.

### Profile Statistics
Shows statistics like stars, thumbs up, views, and favorites.

### Profile Articles
Utilizes `.map` function to iterate over articles in `profileData` and display them.

## Usage
To use this component, import it into your React application and include it in your JSX.

```javascript
import React from 'react';
import ProfileScreen from './path/to/ProfileScreen';

function App() {
  return (
    <div>
      <ProfileScreen />
    </div>
  );
}

export default App;
```

## Profile Data
The user's profile data is stored in profileData.json. It includes information such as name, followers, following, designation, website, and an array of articles.

## Material UI Icons
The component uses Material UI icons for various elements:

```jsx
import VerifiedIcon from '@mui/icons-material/Verified';
import DiamondIcon from '@mui/icons-material/Diamond';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';


```
