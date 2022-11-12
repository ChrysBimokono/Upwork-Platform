import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";

import { PRIMARY_GREEN } from "./StyledComponents";

export default function CategoryMenu({
  categories,
  selectedCategory,
  setSelectedCategory
}) {
  return (
    <MenuList sx={{ textAlign: "center" }}>
      {categories.map((category) => (
        <MenuItem onClick={() => setSelectedCategory(category)}>
          <ListItemText
            sx={category === selectedCategory ? { color: PRIMARY_GREEN } : {}}
          >
            {category}
          </ListItemText>
        </MenuItem>
      ))}
    </MenuList>
  );
}
