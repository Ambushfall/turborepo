import { ImageResponse } from 'next/og';
 
export const size = {
  width: 14,
  height: 14,
};
export const contentType = 'image/png';
export const runtime = 'edge';
 
export default function icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          // background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // color: 'white',
        }}
      >
        †
      </div>
    ),
    size,
  );
}