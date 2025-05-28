import { Box, Typography } from "@mui/material";

interface ErrorProp {
  error: string;
  title?: string;
}
const ErrorMessage = ({
  error,
  title = " Something went wrong. Please try again later.",
}: ErrorProp) => {
  return (
    <Box
      sx={{
        color: "red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        textAlign: "center",
        p: 2,
      }}
    >
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="subtitle2">{error}</Typography>
    </Box>
  );
};

export default ErrorMessage;
