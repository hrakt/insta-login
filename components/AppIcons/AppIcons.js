import styles from "./AppIcons.module.scss";

export default function AppIcons() {
  return (
    <div className={styles.container}>
      <p>Get the app.</p>
      <a>
        <img
          className={styles.image}
          src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
        />
      </a>
      <a>
        <img
          className={styles.image}
          src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
        />
      </a>
    </div>
  );
}
