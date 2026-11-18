'use client';

import { useSyncExternalStore } from 'react';

interface NetworkInformation extends EventTarget {
  saveData?: boolean;
  effectiveType?: string;
}

const getConnection = (): NetworkInformation | undefined =>
  (navigator as Navigator & { connection?: NetworkInformation }).connection;

const subscribe = (callback: () => void) => {
  const connection = getConnection();
  connection?.addEventListener('change', callback);
  return () => connection?.removeEventListener('change', callback);
};

/** True when the visitor has Data Saver on or is on a slow (2G) connection */
export function useSaveData(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => {
      const connection = getConnection();
      return Boolean(connection?.saveData) || /(^|-)2g$/.test(connection?.effectiveType ?? '');
    },
    () => true,
  );
}
