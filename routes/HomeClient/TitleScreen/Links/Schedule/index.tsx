'use client';

import { FunctionComponent } from 'react';
import { Locale } from '@/i18n';
import styles from './index.module.css';
import scheduleRu from './schedule-ru.webp';
import scheduleHe from './schedule-he.webp';
import { X } from 'lucide-react';
import Image from 'next/image';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

interface ScheduleProps {
  locale: Locale;
  onClose: () => void;
}

const Schedule: FunctionComponent<ScheduleProps> = ({ locale, onClose }) => {
  return (
    <>
      {/* stays fixed, not zoomed */}
      <X className={styles.closeIcon} onClick={onClose} />

      {/* stays fixed, not zoomed */}

      {/* only this container zooms */}
      <div
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          inset: '0',
          zIndex: 10,
          direction: 'ltr',
        }}
      >
        <TransformWrapper
          initialScale={1}
          minScale={1}
          maxScale={4}
          doubleClick={{ disabled: false }} // click zoom enabled
          wheel={{ disabled: false, smoothStep: 0.01, step: 0.2 }}
          //   pinch={{ disabled: false, step: 0.2 }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <TransformComponent
              wrapperStyle={{
                width: '100%',
                height: '100%',
                overflow: 'visible',
              }}
              contentStyle={{ width: '100%', height: '100%', overflow: 'visible' }}
            >
              <div className={styles.bg} onClick={onClose} />
              <div
                style={{
                  //   ['--aspect-ratio' as string]: scheduleRu.width / scheduleRu.height,
                  height: `min(100vh, calc(${scheduleRu.height / scheduleRu.width} * 100vw))`,
                  width: `min(100vw, calc(${scheduleRu.width / scheduleRu.height} * 100vh))`,
                  position: 'relative',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 11,
                }}
                className={styles.wrapper}
              >
                <Image
                  alt="schedule"
                  src={locale === 'ru' ? scheduleRu.src : scheduleHe.src}
                  fill
                  draggable={false}
                  unoptimized
                />
              </div>
            </TransformComponent>
          )}
        </TransformWrapper>
      </div>
    </>
  );
};

export default Schedule;
