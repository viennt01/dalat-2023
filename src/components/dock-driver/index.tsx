import * as React from 'react';
import { useGesture } from '@use-gesture/react';

import { useDock } from '../dock/dock-context';
import { DOCK_ZOOM_LIMIT } from '../dock';

import styles from './styles.module.scss';

export const DockDivider = () => {
  const { zoomLevel, setIsZooming } = useDock();

  const bind = useGesture(
    {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onDrag: ({ down, offset: [_ox, oy], cancel, direction: [_dx, dy] }) => {
        /**
         * Stop the drag gesture if the user goes out of bounds otherwise
         * the animation feels stuck but it's the gesture state catching
         * up to a point where the scaling can actualy animate again.
         */
        if (oy <= DOCK_ZOOM_LIMIT[0] && dy === -1) {
          cancel();
        } else if (oy >= DOCK_ZOOM_LIMIT[1] && dy === 1) {
          cancel();
        } else if (zoomLevel) {
          zoomLevel.start(oy, {
            immediate: down,
          });
        }
      },
      onDragStart: () => {
        setIsZooming(true);
      },
      onDragEnd: () => {
        setIsZooming(false);
      },
    },
    {
      drag: {
        axis: 'y',
      },
    }
  );

  if (!zoomLevel) {
    return null;
  }

  return (
    <div className={styles.divider__container} {...bind()}>
      <span className={styles.divider}></span>
    </div>
  );
};
