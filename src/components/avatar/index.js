import React, { useGlobal } from 'reactn';
import './avatar.css';

const Avatar = () => {
    const [ avatar, setAvatar ] = useGlobal('avatar');

    return (
        <img
            className="avatar"
            alt="Avatar"
            onClick={() => {
                const newAvatar = prompt('Enter new avatar url');

                if (newAvatar) setAvatar(newAvatar);
            }}
            src={avatar}
        />
    );
}

export default Avatar;