import dynamic from 'next/dynamic';
import React from 'react';

const noSSR = (Component: React.FunctionComponent) => dynamic(
    () => Promise.resolve(Component),
    { ssr: false },
);

export default noSSR;