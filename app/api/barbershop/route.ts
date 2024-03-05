import { BARBER_SHOPS_DATA } from "@/utils/data";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve(BARBER_SHOPS_DATA), 4000)
  );

  return NextResponse.json(data);
}
