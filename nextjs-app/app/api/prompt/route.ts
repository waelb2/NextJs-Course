export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = req.body;
  return new Response(JSON.stringify(body), { status: 201 });
};
