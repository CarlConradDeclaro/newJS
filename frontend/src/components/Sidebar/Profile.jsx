import DefaultImage from '../../assets/defaultProfile.jpg';

const Profile = () => {
  return (
    <div className='sections profile-section'>   

        <figure>
            <img className='profile' src={DefaultImage} alt="Default Profile" />
        </figure>

        <h3 className='userName userInfo'>Username</h3>
        <h4 className='userCourse userInfo'>Course</h4>
        <button className='profileButton'>View Profile</button>
    </div>
  );
}

export default Profile;