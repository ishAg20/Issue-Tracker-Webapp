"use client";
import { TextArea, TextField, Button } from "@radix-ui/themes";
import React from "react";

const newIssuePage = () => {
  return (
    <div className="max-w-xl space-y-5">
      <TextField.Root placeholder="Title"></TextField.Root>
      <TextArea placeholder="Description"></TextArea>
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default newIssuePage;
