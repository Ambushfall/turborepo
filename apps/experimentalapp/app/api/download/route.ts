import fs, { Stats } from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import { ReadableOptions } from 'stream'

function streamFile (
  path: string,
  options?: ReadableOptions
): ReadableStream<Uint8Array> {
  const downloadStream = fs.createReadStream(path, options)

  return new ReadableStream({
    start (controller) {
      downloadStream.on('data', (chunk: Buffer) =>
        controller.enqueue(new Uint8Array(chunk))
      )
      downloadStream.on('end', () => controller.close())
      downloadStream.on('error', (error: NodeJS.ErrnoException) =>
        controller.error(error)
      )
    },
    cancel () {
      downloadStream.destroy()
    }
  })
}

export async function GET (req: NextRequest): Promise<NextResponse> {
  const file = req.nextUrl.searchParams.get('file')
  console.log(file)
  if (file !== null) {
    const filePath = path.resolve('.', file)
    const stats: Stats = await fs.promises.stat(filePath)
    const data: ReadableStream<Uint8Array> = streamFile(filePath) //Stream the file with a 1kb chunk
    const res = new NextResponse(data, {
      status: 200,
      headers: new Headers({
        'content-disposition': `attachment; filename=${path.basename(
          filePath
        )}`,
        'content-type': 'application/x-msdownload',
        'content-length': stats.size + ''
      })
    })

    return res
  } else {
    return NextResponse.json({"DATA": "NO"})
  }
}
