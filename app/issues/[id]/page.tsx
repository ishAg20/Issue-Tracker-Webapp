import prisma from "@/prisma/client";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { notFound } from "next/navigation";
import React from "react";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";

interface Props {
  params: { id: string };
}

const IssueDetailsPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();
  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex className="space-x-3" my="2">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card>
        {" "}
        <p>{issue.description}</p>
      </Card>
    </div>
  );
};

export default IssueDetailsPage;
