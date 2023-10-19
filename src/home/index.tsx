import { animated, useTransition } from '@react-spring/web';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

export default function Home() {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [items, set] = useState<string[]>([]);
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#8fa5b6',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [
      { color: '#c23369' },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: '#28b4d7' },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(() => set(['MÌNH', 'ĐI CHƠi', 'CÙNG NHAU NHÉ!']), 2000)
    );
    ref.current.push(
      setTimeout(() => set(['ĐI CHƠi', 'CÙNG NHAU NHÉ!']), 5000)
    );
    ref.current.push(
      setTimeout(() => set(['MÌNH', 'ĐI CHƠi', 'CÙNG NHAU NHÉ!']), 8000)
    );
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, []);

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
          backgroundColor: 'rgba(0,0,0,.4)',
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
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div
            className={styles.transitionsItem}
            style={rest}
            onClick={reset}
          >
            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
