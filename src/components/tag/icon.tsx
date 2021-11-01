import React from 'react';

const BaseIcon = ({ d }) => (
  <svg
    viewBox="0 0 16 16"
    width="1rem"
    height="1rem"
    focusable="false"
    aria-hidden="true"
  >
    <path fill="currentColor" d={d} />
  </svg>
);

export const ArchiveIcon = () => (
  <BaseIcon d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
);

export const CloseIcon = () => (
  <BaseIcon d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
);
