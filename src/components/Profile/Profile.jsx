import css from "./Profile.module.css";

function Profile({
  username,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profileBox}>
      <div className={css.imageBox}>
        <img className={css.userAvatar} src={image} alt={name} width={300} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span className={css.statsItemValue}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span>Views</span>
          <span className={css.statsItemValue}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes</span>
          <span className={css.statsItemValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
