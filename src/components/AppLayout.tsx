import { useState } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  OverlayDrawer,
  makeStyles,
} from "@fluentui/react-components";
import { Dismiss24Regular, Navigation24Regular } from "@fluentui/react-icons";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import DashboardPage from "../pages/DashboardPage";

const SIDEBAR_WIDTH = "260px";

const useStyles = makeStyles({
  app: {
    display: "grid",
    gridTemplateColumns: `${SIDEBAR_WIDTH} minmax(0, 1fr)`,
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",

    "@media (max-width: 900px)": {
      gridTemplateColumns: "1fr",
    },
  },

  desktopSidebar: {
    borderRight: "1px solid #e1dfdd",
    backgroundColor: "#ffffff",

    "@media (max-width: 900px)": {
      display: "none",
    },
  },

  main: {
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    minHeight: "100vh",
  },

  mobileMenuBar: {
    display: "none",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 16px",
    borderBottom: "1px solid #e1dfdd",
    backgroundColor: "#ffffff",

    "@media (max-width: 900px)": {
      display: "flex",
    },
  },

  mobileMenuTitle: {
    fontSize: "20px",
    fontWeight: 700,
  },

  topBarWrap: {
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e1dfdd",
  },

  content: {
    padding: "24px",
    minWidth: 0,
    flexGrow: 1,

    "@media (max-width: 640px)": {
      padding: "16px",
    },
  },

  drawerBody: {
    padding: "0",
  },
});

export default function AppLayout() {
  const styles = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.app}>
        <aside className={styles.desktopSidebar}>
          <Sidebar />
        </aside>

        <div className={styles.main}>
          <div className={styles.mobileMenuBar}>
            <Button
              appearance="subtle"
              icon={<Navigation24Regular />}
              onClick={() => setOpen(true)}
            >
              Menu
            </Button>

            <span className={styles.mobileMenuTitle}>Dashboard</span>
          </div>

          <div className={styles.topBarWrap}>
            <TopBar />
          </div>

          <main className={styles.content}>
            <DashboardPage />
          </main>
        </div>
      </div>

      <OverlayDrawer
        open={open}
        onOpenChange={(_, data) => setOpen(data.open)}
        position="start"
        size="small"
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                icon={<Dismiss24Regular />}
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              />
            }
          >
            Menu
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody className={styles.drawerBody}>
          <Sidebar onNavigate={() => setOpen(false)} />
        </DrawerBody>
      </OverlayDrawer>
    </>
  );
}