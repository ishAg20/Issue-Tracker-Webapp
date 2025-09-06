import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueFormClient from "../../_components/IssueFormClient";

interface Props {
  params: { id: string };
}

const EditIssuePage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return <IssueFormClient issue={issue} />;
};

export default EditIssuePage;
