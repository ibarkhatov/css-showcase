import styles from "./loading.module.css";

const Loading = () => {
  const NUMBER_OF_DOTS = 20;
  const dotsNumberList = [...Array(NUMBER_OF_DOTS).keys()];

  return (
    <section className={styles.loaderSection}>
      <div className={styles.loaderContainer}>
        {dotsNumberList.map((number) => (
          <span
            key={number}
            className={styles.loaderDot}
            style={
              {
                "--i": number,
              } as React.CSSProperties
            }
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Loading;
