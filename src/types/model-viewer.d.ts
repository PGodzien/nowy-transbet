// <model-viewer> web component (loaded from Google's CDN on product pages with a 3D model).
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        src: string;
        alt?: string;
        'camera-controls'?: string;
        'auto-rotate'?: string;
        'shadow-intensity'?: string;
      };
    }
  }
}
