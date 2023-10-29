import Categories from './Category/Categories';
import People from './People/People';
import Profile from './Profile/Profile';

const Sidebar = () => {
  return (
    <div className="backdrop container">
      <div className="sidebar">
        <Profile/>
        <Categories/>
        <People/>
      </div>
    </div>
  );
}

export default Sidebar;