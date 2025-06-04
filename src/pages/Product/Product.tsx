import { Button } from "@mui/material";
import { useState } from "react";

export default function Product() {
  const [error, setError] = useState(false);
  function generateError() {
    setError(true);
  }
  if (error) {
    throw new Error("Chill Just testing Error");
  }
  return (
    <div className="pt-20">
      <Button onClick={generateError}>Generate Error</Button>
    </div>
  );
}
