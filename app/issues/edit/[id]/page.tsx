import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueFormClient from "../../_components/IssueFormClient";

const EditIssuePage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return <IssueFormClient issue={issue} />;
};

export default EditIssuePage;
