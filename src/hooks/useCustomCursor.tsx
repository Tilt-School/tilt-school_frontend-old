import React, { MouseEvent, useEffect, useRef } from 'react';
import clsx from 'clsx';

interface useCustomCursorOptions {
  className?: string;
  scaleFactor: number;
}

export interface useCustomCursorReturn {
  cursor: React.ReactNode;
  moveCursor: (e: MouseEvent) => void;
  hideCursor: () => void;
  scaleCursor: () => void;
  reduceCursorToDefaultSize: () => void;
  getAll: () => void;
}

export const useCustomCursor = ({ className, scaleFactor }: useCustomCursorOptions): useCustomCursorReturn => {
  const [cursors, setCursors] = React.useState<string[]>([]);
  const cursor = useRef<HTMLDivElement>();

  useEffect(() => {
    setCursors((prevCursors) => [...prevCursors, '1']);
  }, []);

  const moveCursor = (e: MouseEvent) => {
    if (!cursor.current) return;

    const customCursor = cursor.current;

    requestAnimationFrame(() => {
      customCursor.style.opacity = '1';
      customCursor.style.left = `${e.pageX}px`;
      customCursor.style.top = `${e.pageY}px`;
    });
  };

  const hideCursor = () => {
    if (!cursor.current) return;

    const customCursor = cursor.current;

    requestAnimationFrame(() => {
      customCursor.style.opacity = '0';
    });
  };

  const scaleCursor = () => {
    if (!cursor.current) return;

    const customCursor = cursor.current;

    requestAnimationFrame(() => {
      customCursor.style.transform = `translate(-50%, -50%) scale(${scaleFactor})`;
    });
  };

  const getAll = () => cursors;

  const reduceCursorToDefaultSize = () => {
    if (!cursor.current) return;

    const customCursor = cursor.current;

    requestAnimationFrame(() => {
      customCursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  };

  return {
    cursor: <div ref={cursor as React.RefObject<HTMLDivElement>} className={clsx(className)} />,
    moveCursor,
    hideCursor,
    scaleCursor,
    reduceCursorToDefaultSize,
    getAll,
  };
};
