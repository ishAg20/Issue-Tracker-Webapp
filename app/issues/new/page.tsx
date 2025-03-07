"use client";
import { TextField, Button } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const newIssuePage = () => {
  return (
    <div className="max-w-xl space-y-5">
      <TextField.Root placeholder="Title"></TextField.Root>
      <SimpleMDE placeholder="Description"></SimpleMDE>
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default newIssuePage;
