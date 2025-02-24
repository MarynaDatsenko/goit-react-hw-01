import css from "./Profile.module.css";

const Profile = ({ username, tag, location, image, stats }) => {
  return (
    <div className={css.profileBox}>
      <div className={css.imageBox}>
        <img className={css.userAvatar} src={image} alt="User avatar" />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span className={css.statsItemValue}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span>Views</span>
          <span className={css.statsItemValue}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes</span>
          <span className={css.statsItemValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
