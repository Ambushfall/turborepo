import { NextRequest, NextResponse } from 'next/server'

export async function GET (req: NextRequest) {
  let {
    // query: { hash, path, resolution },
    body,
    method,
    headers
  } = req

  if (!isAuthed(headers)) {
    return new NextResponse(null, {
      headers: {
        'WWW-Authenticate': 'Basic realm="Nextjs"'
      },
      status: 401
    })
  }

  return routeHandler(
    req,
    NextResponse.json({
      message: 'hello from protected route'
    })
  )
}

function routeHandler (req: NextRequest, res: NextResponse): NextResponse {
  return res
}

function isAuthed (headers: Headers) {
  if (headers.get('Authorization') !== null) {
    const authheader = headers.get('Authorization')

    if (authheader) {
      // buffer incoming is "Basic base64str" we split it on the space and decode it from b64
      const auth = Buffer.from(authheader.split(' ')[1], 'base64')
        .toString()
        .split(':')

      const [user, pass] = auth
      if (user == 'admin' && pass == 'admin')
        //  Further code handling
        return true
    }
    return false
  }
}

export async function POST (req: NextRequest, res: NextResponse) {
  let {
    // query: { hash, path, resolution },
    body,
    method,
    headers
  } = req

  console.log(body)

  return NextResponse.json({
    message: 'hello'
  })
}
