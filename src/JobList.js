import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export default function JobList({ jobs }) {
  console.log({ jobs });

  return (
    <Paper>
      {jobs.map((job) => {
        return (
          <Box key={job.id}>
            <Box sx={{ padding: "15px" }}>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to={`/job/${job.id}`}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                  // sx={{ textAlign: "center" }}
                >
                  {job.title}
                </Typography>
              </Link>
              <Typography variant="subtitle2" gutterBottom component="div">
                Salary : {job.salary}
              </Typography>
              <Typography variant="subtitle2" gutterBottom component="div">
                Posted: {new Date(job.publication_date).getDate()} days ago
              </Typography>
              <Typography variant="subtitle2" gutterBottom component="div">
                <img
                  alt="location"
                  src=" https://assets.codepen.io/6060109/location-icon.png"
                  style={{ height: "13px", marginRight: "5px" }}
                />
                Location: Remote-{job.candidate_required_location}
              </Typography>
              <Typography variant="body2" gutterBottom>
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </Box>
            <Divider />
          </Box>
        );
      })}
    </Paper>
  );
}
