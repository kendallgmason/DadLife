import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "24px",
    padding: "16px 24px",
    backgroundColor: "#ffffff",
    minHeight: "72px",
    boxSizing: "border-box",

    "@media (max-width: 900px)": {
      display: "none",
    },
  },

  text: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#323130",
    whiteSpace: "nowrap",
  },
});

export default function TopBar() {
  const styles = useStyles();

  const now = new Date();

  const date = now.toLocaleDateString("en-GB");
  const time = now.toLocaleTimeString("en-GB");

  return (
    <div className={styles.root}>
      <span className={styles.text}>Welcome, Kendall</span>
      <span className={styles.text}>
        Date: {date} Time: {time}
      </span>
    </div>
  );
}