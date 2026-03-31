import { Button, makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  sidebar: {
    width: "240px",
    minHeight: "100vh",
    padding: "24px 16px",
    backgroundColor: "#f3f3f3",
    boxSizing: "border-box",
    gap: "12px"
  },
  menuTitle: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "16px",
    gap: "12px"
  },
  navButton: {
    width: "100%",
    justifyContent: "flex-start",
    marginBottom: "8px",
    gap: "12px"
  },
  sectionTitle: {
    marginTop: "16px",
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#666",
    gap: "12px"
  },
});

const Sidebar = () => {
  const styles = useStyles();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.menuTitle}>Menu</div>

      <Button appearance="subtle" className={styles.navButton}>
        Dashboard
      </Button>

      <div className={styles.sectionTitle}>Lifestyle</div>
      <Button appearance="subtle" className={styles.navButton}>
        Fitness
      </Button>
      <Button appearance="subtle" className={styles.navButton}>
        Jiu Jitsu
      </Button>

      <div className={styles.sectionTitle}>Home</div>
      <Button appearance="subtle" className={styles.navButton}>
        Tasks
      </Button>
      <Button appearance="subtle" className={styles.navButton}>
        Devotions
      </Button>
    </aside>
  );
};

export default Sidebar;