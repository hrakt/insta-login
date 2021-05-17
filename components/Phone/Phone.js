import { useEffect, useState } from "react";
import styles from "./Phone.module.scss";
import cx from "classnames";

export default function Phone() {
  const [animate, setAnimate] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setAnimate(1);
    }, 1000);
  }, []);
  return (
    <div className={styles.phone}>
      <div className={styles.wrapper}>
        <img
          className={cx(styles.img, { [styles.animate]: animate === 1 })}
          onTransitionEnd={() => setAnimate(2)}
          src="https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg"
        />
        <img
          onTransitionEnd={() => setAnimate(3)}
          className={cx(styles.img, { [styles.animate]: animate === 2 })}
          src="https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg"
        />
        <img
          onTransitionEnd={() => setAnimate(4)}
          className={cx(styles.img, { [styles.animate]: animate === 3 })}
          src="https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg"
        />
        <img
          onTransitionEnd={() => setAnimate(1)}
          className={cx(styles.img, { [styles.animate]: animate === 4 })}
          src="https://www.instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg"
        />
      </div>
    </div>
  );
}
