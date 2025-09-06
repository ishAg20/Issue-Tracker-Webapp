import { NextRequest, NextResponse } from "next/server";
import { patchIssueSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import authOptions from "../../../auth/authOptions";
import { getServerSession } from "next-auth";
import delay from "delay";

export async function PATCH(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop();
  const issueId = id ? parseInt(id) : null;
  if (!issueId) {
    return NextResponse.json({ error: "Invalid issue ID" }, { status: 400 });
  }

  const body = await request.json();
  const validation = patchIssueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const { assignedToUserId, title, description } = body;

  if (assignedToUserId) {
    const user = await prisma.user.findUnique({
      where: { id: assignedToUserId },
    });
    if (!user)
      return NextResponse.json({ error: "Invalid user." }, { status: 400 });
  }
  const issue = await prisma.issue.findUnique({
    where: { id: issueId },
  });
  if (!issue)
    return NextResponse.json({ error: "Invalid issue" }, { status: 404 });

  const UpdatedIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: {
      title,
      description,
      assignedToUserId,
    },
  });

  return NextResponse.json(UpdatedIssue);
}

export async function DELETE(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop();
  const issueId = id ? parseInt(id) : null;
  if (!issueId) {
    return NextResponse.json({ error: "Invalid issue ID" }, { status: 400 });
  }
  await delay(100);
  const issue = await prisma.issue.findUnique({
    where: { id: issueId },
  });
  if (!issue)
    return NextResponse.json({ error: "Invalid issue" }, { status: 404 });

  await prisma.issue.delete({
    where: { id: issue.id },
  });

  return NextResponse.json({});
}
