import * as React from "react";
//import { LoadingButton } from "@mui/lab";
import Stack from "@mui/material/Stack";

export const LoadingButtons = () => {
  return (
    <Stack direction="row" spacing={2}>
      <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
        Fetch data
      </LoadingButton>
    </Stack>
  );
};
