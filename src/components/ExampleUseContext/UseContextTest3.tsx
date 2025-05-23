import type { PropsWithChildren } from 'react';

export const UseContextTest3 = (props: PropsWithChildren) => {
  return <div className="border-8 border-green-500">{props.children}</div>;
};
