import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => (
  <main className="container grid gap-8 px-10 pt-6 pb-10 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {children}
  </main>
);

export default Container;
