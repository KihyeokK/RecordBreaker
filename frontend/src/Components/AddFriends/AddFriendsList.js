import React from 'react';

const AddFriendsList = ({ friends, addFriend }) => {
    return (
        <div>
        <h3>Friends List</h3>
        <ul>
            {friends.map((friend, index) => (
            <li key={index}>
                {friend.name}
                <button onClick={() => addFriend(friend)}>Add Friend</button>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default AddFriendsList;