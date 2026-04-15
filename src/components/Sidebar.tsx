import { makeStyles, mergeClasses } from "@fluentui/react-components";

type SidebarProps = {
  onNavigate?: () => void;
};

const useStyles = makeStyles({
  root: {
    height: "100%",
    padding: "24px 16px",
    boxSizing: "border-box",
    backgroundColor: "#ffffff",
  },

  title: {
    fontSize: "18px",
    fontWeight: 700,
    marginBottom: "24px",
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  section: {
    marginTop: "16px",
  },

  sectionTitle: {
    fontSize: "13px",
    fontWeight: 700,
    color: "#605e5c",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    marginBottom: "8px",
    paddingLeft: "12px",
  },

  link: {
    padding: "10px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: 600,
    color: "#323130",

    ":hover": {
      backgroundColor: "#f3f2f1",
    },
  },

  activeLink: {
    backgroundColor: "#edebe9",
  },
});

export default function Sidebar({ onNavigate }: SidebarProps) {
  const styles = useStyles();

  const handleClick = () => {
    onNavigate?.();
  };

  return (
    <div className={styles.root}>
      <div className={styles.title}>Menu</div>

      <nav className={styles.nav}>
        <div
          className={mergeClasses(styles.link, styles.activeLink)}
          onClick={handleClick}
        >
          Dashboard
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>Lifestyle</div>
          <div className={styles.link} onClick={handleClick}>
            Fitness
          </div>
          <div className={styles.link} onClick={handleClick}>
            Jiu Jitsu
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>Home</div>
          <div className={styles.link} onClick={handleClick}>
            Tasks
          </div>
          <div className={styles.link} onClick={handleClick}>
            Devotions
          </div>
        </div>
      </nav>
    </div>
  );
}