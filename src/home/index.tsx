import React from 'react';
// import videoBg from '../components/assets/videoBg.mp4';

export default function Home() {
  // console.log(videoBg);

  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
      }}
    >
      <div
        className="overlay"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          // backgroundColor: 'rgba(0,0,0,.4)',
        }}
      ></div>
      <video
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        src="/video/videoBg.mp4"
        autoPlay
        loop
        muted
      />
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <h1>Welcome</h1>
        <p>To my site.</p>
      </div>
    </div>
  );
}
