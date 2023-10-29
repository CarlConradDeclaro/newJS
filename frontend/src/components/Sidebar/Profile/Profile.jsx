import DefaultImage from '../../../assets/defaultProfile.jpg';
import '../Sidebar.css';


const Profile = () => {
    return (
        <div className='sections profile-section'>   
        <h2 className='section-title'>Profile</h2>
        <figure>
            <img className='profile' src={DefaultImage} alt="Default Profile" />
        </figure>

        <h3 className='userInfo'>Username</h3>
        <h5 className='userCourse'>Course</h5>
        <button className='profileButton'>View Profile</button>
        </div>
    );
}

export default Profile;