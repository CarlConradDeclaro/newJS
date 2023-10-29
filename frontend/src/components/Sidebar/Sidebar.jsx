
import Categories from './Categories';
import People from './People';
import Profile from './Profile';
=======
import { useState } from "react"


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