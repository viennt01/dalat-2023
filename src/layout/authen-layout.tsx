import React from 'react';
import { Layout } from 'antd';
import Head from 'next/head';
import { Dock } from '@/components/dock';
import { DockCard } from '@/components/dock-card';
import { DockDivider } from '@/components/dock-driver';
import { Card } from '@/components/card';

const { Content } = Layout;
export const HEADER_HEIGHT = 64;
export const FOOTER_HEIGHT = 38;

interface Props {
  children: React.ReactNode;
}
export function AppLayout(props: Props) {
  const GRADIENTS = [
    {
      name: 'vien',
      image: 'https://live.staticflickr.com/65535/53267196519_61da275f01.jpg',
    },
    {
      name: 'vi',
      image: 'https://live.staticflickr.com/65535/53265955637_11fa3f3d5a_z.jpg',
    },
    {
      name: 'ha',
      image: 'https://live.staticflickr.com/65535/53265955652_5c6e8e6cbb_z.jpg',
    },
    {
      name: 'bao',
      image: 'https://live.staticflickr.com/65535/53265955647_ce7cac32ac.jpg',
    },
    {
      name: 'giau',
      image: 'https://live.staticflickr.com/65535/53267315345_0bb8cb28a0.jpg',
    },
    {
      name: 'quynh',
      image: 'https://live.staticflickr.com/65535/53267315375_2e3f0c1b9b.jpg',
    },
    null,
    {
      name: 'hai',
      image: 'https://live.staticflickr.com/65535/53267196444_fa6ba1a1a2.jpg',
    },
    {
      name: 'huy',
      image: 'https://live.staticflickr.com/65535/53265955702_cbb530c285.jpg',
    },
    {
      name: 'thuy',
      image: 'https://live.staticflickr.com/65535/53265955727_fbc4cdb31d.jpg',
    },
    {
      name: 'sy',
      image: 'https://live.staticflickr.com/65535/53266847556_69bc969479.jpg',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Head>
        <link rel="favicon" href="/images/logo.png" />
        <link rel="shortcut icon" href="/images/logo.png" />
      </Head>
      <Layout>
        <Content
          style={{
            maxHeight: `calc(100vh)`,
            overflowY: 'auto',
          }}
        >
          <main>
            {props.children}

            <Dock>
              {GRADIENTS.map((src, index) =>
                src ? (
                  <DockCard key={src.name}>
                    <Card src={src.image} name={src.name} />
                  </DockCard>
                ) : (
                  <DockDivider key={index} />
                )
              )}
            </Dock>
          </main>
        </Content>
      </Layout>
    </Layout>
  );
}
