import React from 'react';
import profileData from './profileData.json';
import './profilescreen.css';
import dp from './dp.png';
import bg from './bg.png';
import logo from './logo.svg'
import VerifiedIcon from '@mui/icons-material/Verified';
import DiamondIcon from '@mui/icons-material/Diamond';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';


const ProfileScreen = () => {
  console.log('ProfileScreen component loading');
 

  return (
    <div>
  {/* Profile header */}
  <div className='navbar'>
    <img className='dp' src={logo} alt='Terribly Tiny Tales' />
    <button className='courses-btn'>Courses</button>
  </div>

  <div>
    <img className='bg' src={bg} alt='background image' />
  </div>

  <div className="profile-header">
    <img className='dp' src={dp} alt={profileData.name} />
    <h2>{profileData.name} <DiamondIcon style={{ color: 'purple' }} /> <VerifiedIcon style={{ color: 'green' }} /></h2>
    <div className="profile-info">
      <button>{profileData.followers}</button> <p></p><button>&nbsp;{profileData.following}&nbsp;</button>
      
    </div>
    <h6>Followers &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Following</h6>

  </div>
  <div>
  <h3 className='designation'>{profileData.designation}</h3>
  <a href={profileData.website}>{profileData.website}</a>
  <div className='designation'>
    <StarIcon style={{ color: 'lightblue' }} /> 125 &nbsp;
    <ThumbUpIcon style={{ color: 'gold' }} /> 12 &nbsp;
    <VisibilityIcon style={{ color: 'lightgray' }} /> 57.8k &nbsp;
    <FavoriteBorderIcon style={{ color: 'Red' }} /> 26.0k &nbsp;
  </div>

  </div>
  <div><br/><br/></div>
  
  <div className="profile-stats">
    <div className="stat-item">
      <div className="line" />
      <h3 style={{ color: 'skyblue' }}>{profileData.posts} Posts</h3>
    </div>
  </div>

 <div className="profile-articles">
  <ul>
    {profileData.articles.map((article) => (
      <p key={article.title} className="article-item">
        <h2 style={{ fontWeight: 'bold' }}>{article.title} <ThumbUpIcon style={{ color: 'gold' }} /> </h2>
        <a href={article.description} style={{ color:'black' , textDecoration: 'none' }}>
          <p>{article.description}</p>
        </a>
        <p>{article.readTime} &nbsp; &nbsp; {article.views} views</p>
        <div className="article-line"></div>
      </p>
    ))}
  </ul>
</div>



  
</div>

  );
};

export default ProfileScreen;
