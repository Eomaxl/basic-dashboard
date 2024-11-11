// eslint-disable-next-line no-unused-vars
import React from "react";
import ProfileHeader from "./ProfileHeader.jsx";
import '../styles/profile.css';
import userImage from  '../assets/image.png';
import {BiBook} from "react-icons/bi";
const courses = [
    {
      title: 'English',
      duration: '2 Hours',
      icon: <BiBook/>
    },
    {
        title: 'English',
        duration: '2 Hours',
        icon: <BiBook/>
    },
    {
        title: 'English',
        duration: '2 Hours',
        icon: <BiBook/>
    },
    {
        title: 'English',
        duration: '2 Hours',
        icon: <BiBook/>
    },

]
const Profile = () => {
    return(
        <div className='profile'>
            <ProfileHeader/>
            <div className='user--profile'>
                <div className='user--detail'>
                    <img src={userImage} alt="" />
                    <h3 className='username'>Jhone Doe</h3>
                    <span className='profession'>Teacher</span>
                </div>
                <div className='user-courses'>
                    {courses.map((course) => (
                        <div className="course">
                            <div className="course-detail">
                                <div className="course-cover">
                                    {course.icon}
                                </div>
                                <div className="course-name">
                                    <h5 className="title">{course.title}</h5>
                                    <span className="duration">{course.duration}</span>
                                </div>
                            </div>
                            <div className="action">:</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile;