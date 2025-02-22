import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
  return (
    <div>
      <img
        className={css.image}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
      <p className={clsx(friend.isOnline ? css.green : css.red)}>
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
