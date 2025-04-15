declare module 'react-parallax-tilt' {
  import React from 'react';

  export interface TiltOptions {
    max?: number;
    perspective?: number;
    scale?: number;
    speed?: number;
    transition?: boolean;
    axis?: string;
    reset?: boolean;
    easing?: string;
    glare?: boolean;
    'max-glare'?: number;
  }

  export interface TiltProps extends React.HTMLAttributes<HTMLDivElement> {
    options?: TiltOptions;
  }

  const Tilt: React.FC<TiltProps>;

  export default Tilt;
}