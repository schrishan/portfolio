// src/components/CustomCursor.tsx
import React, { useEffect, useRef } from 'react';
import './CustomCursor.scss';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorInner = cursorInnerRef.current;

    if (!cursor || !cursorInner) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      cursorInner.style.left = `${e.clientX}px`;
      cursorInner.style.top = `${e.clientY}px`;
    };

    const handleMouseDown = () => {
      cursor.classList.add('click');
      cursorInner.classList.add('cursorinnerhover');
    };

    const handleMouseUp = () => {
      cursor.classList.remove('click');
      cursorInner.classList.remove('cursorinnerhover');
    };

    const handleAnchorHover = () => {
      cursor.classList.add('hover');
    };

    const handleAnchorLeave = () => {
      cursor.classList.remove('hover');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const anchors = document.querySelectorAll('a');
    anchors.forEach((item) => {
      item.addEventListener('mouseover', handleAnchorHover);
      item.addEventListener('mouseleave', handleAnchorLeave);
    });

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);

      anchors.forEach((item) => {
        item.removeEventListener('mouseover', handleAnchorHover);
        item.removeEventListener('mouseleave', handleAnchorLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor"></div>
      <div ref={cursorInnerRef} className="cursor2"></div>
    </>
  );
};

export default CustomCursor;
