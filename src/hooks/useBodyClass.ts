import { useState } from 'react';
import clsx from 'clsx';

export const useBodyClass = () => {
  const [classes, setClasses] = useState<string[]>([]);

  const addClass = (classToAdd: string) => {
    if (!classToAdd || document.body.classList.contains(classToAdd)) return;

    document.body.classList.add(clsx(classToAdd));
    setClasses((prevClasses) => [...prevClasses, classToAdd]);
  };

  const removeClass = (classToRemove: string) => {
    if (!classToRemove || !document.body.classList.contains(classToRemove)) return;

    document.body.classList.remove(clsx(classToRemove));
    setClasses((prevClasses) => prevClasses.filter((className) => className !== classToRemove));
  };

  return {
    classes,
    addClass,
    removeClass,
  };
};
