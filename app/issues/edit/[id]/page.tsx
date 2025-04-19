import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import EditIssueClient from "./EditIssueClient"; // 👈 Import client component

interface Props {
  params: Promise<{ id: string }>;
}

const EditIssuePage = async ({ params }: Props) => {
  const { id } = await params;
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) notFound();

  return <EditIssueClient issue={issue} />;
};

export default EditIssuePage;
