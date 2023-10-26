import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  let where: any = {};

  const searchParams = request.nextUrl.searchParams;
  const searchQuery = searchParams.get("searchQuery");

  if (searchQuery) {
    where = {
      title: {
        contains: searchQuery,
      },
    };
  }

  const subjects = await prisma.subject.findMany({
    where,
  });
  return NextResponse.json(subjects);
}
