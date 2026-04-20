import { ImageResponse } from 'next/og';

// Podešavanja ikonice
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: '#ea580c', // Narandžasta boja brenda
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 900,
          // Ovde ne možemo koristiti klasičan rotate: 45deg direktno na containeru 
          // jer bi isekao ivice, pa ćemo samo stilizovati font da bude "heavy" i oštar
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    }
  );
}