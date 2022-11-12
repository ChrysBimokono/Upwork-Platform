import { useState } from "react";
import TopNav from "./TopNav";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import CategoryMenu from "./CategoryMenu";
import BodySearch from "./BodySearch";
import JobList from "./JobList";

export default function JobBoard({ allJobs }) {
  const [selectedCategory, setSelectedCategory] = useState(" ");

  const categories = [];

  for (let job of allJobs) {
    if (!categories.includes(job.category)) {
      categories.push(job.category);
    }
  }
  console.log(categories);
  return (
    <>
      <TopNav />
      <Box
        sx={{
          height: "500px",
          display: "flex",
          padding: "50px 5%"
        }}
      >
        <Box sx={{ width: "2" }}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ textAlign: "center", marginBottom: "30px" }}
          >
            Find Work
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            sx={{ textAlign: "center" }}
          >
            Categories
          </Typography>
          <CategoryMenu
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />
        </Box>
        <Box sx={{ width: "70%" }}>
          <BodySearch />
          <JobList
            jobs={allJobs.filter((job) => job.category === selectedCategory)}
          />
        </Box>
      </Box>
    </>
  );
}
