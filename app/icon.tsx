import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 22,
          background: 'linear-gradient(135deg, #F36B7F 0%, #8B3FE4 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '24%',
          fontWeight: 900,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        A
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
