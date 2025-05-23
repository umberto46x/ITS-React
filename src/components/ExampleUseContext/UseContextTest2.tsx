import type { PropsWithChildren } from 'react';

export const UseContextTest2 = (props: PropsWithChildren) => {
  return <div className="border-8 border-yellow-500">{props.children}</div>;
};
