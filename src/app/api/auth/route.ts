// import { removeAuth } from "@/hooks/useAuthServer";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const logoutStatus = searchParams.get('logout');
  // console.log(logoutStatus);

  if (logoutStatus == '200') {
    // removeAuth();
    return redirect('/login');
  }

  return NextResponse.json({ message: 'There"s nothing you can see here.' });
  // return NextResponse.redirect(new URL('/', req.url));
}

export async function POST(req: NextRequest) {
  const API_DKERENS = process.env.API_DKERENS;
  const DKERENS_USERNAME = process.env.DKERENS_USERNAME;
  const DKERENS_PASSWORD = process.env.DKERENS_PASSWORD;
  const DKERENS_SITEID = process.env.DKERENS_SITEID;
  const API_URL = process.env.API_URL;
  const CMS_USERNAME = process.env.CMS_USERNAME;
  const CMS_PASSWORD = process.env.CMS_PASSWORD;
  const CMS_SITE_ID = process.env.CMS_SITE_ID;

  const { site } = await req.json();
  let url, data;
  if (site == 'dkerens') {
    url = `${API_DKERENS}/api/Auth/Login/`
    data = {
      Email: DKERENS_USERNAME!,
      Password: DKERENS_PASSWORD!,
      SiteId: DKERENS_SITEID!
    };
  } else {
    url = `${API_URL}/api/Auth/Login`
    data = {
      Username: CMS_USERNAME!,
      Password: CMS_PASSWORD!,
      SiteId: CMS_SITE_ID!,
    };
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    next: {
      revalidate: 3600,
      tags: ['public-token']
    }
  });
  const responseData = await response.json();
  return NextResponse.json(responseData)
}