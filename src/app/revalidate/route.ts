import { NextRequest } from 'next/server'
import { revalidateTag } from 'next/cache'
 
export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag')
  if (tag) {
    revalidateTag(tag)
  } else {
    return Response.json({ revalidated: false, now: Date.now() })
  }
  return Response.json({ revalidated: true, now: Date.now() })
}