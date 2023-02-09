import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Drawer } from "@mui/material";
import { getMenus } from "../services";

function Tabs() {
  const [menus, setMenus] = React.useState([]);
  const [showMenu, setShowMenu] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    getMenus().then((menusData) => {
      setMenus(menusData.data.data);
    });
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setShowMenu(false);
  };

  return (
    <div>
      <Button onClick={() => setShowMenu(true)}>Menu</Button>
      <Drawer anchor="left" open={showMenu}>
        {menus.map((item, index) => {
          return (
            <Button onClick={() => handleNavigation(item.attributes.url)}>
              {item.attributes.tab}
            </Button>
          );
        })}
      </Drawer>
    </div>
  );
}

export default Tabs;
export { Tabs };
