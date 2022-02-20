import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => (
  <main className="px-10 pb-10">{children}</main>
);

export default Container;
