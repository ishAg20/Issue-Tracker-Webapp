"use client";

import IssueForm from "@/app/issues/_components/IssueForm";
import { Issue } from "@prisma/client";

interface Props {
  issue: Issue;
}

const EditIssueClient = ({ issue }: Props) => {
  return <IssueForm Issue={issue} />;
};

export default EditIssueClient;
