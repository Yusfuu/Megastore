import { AuthModal } from "@/components/AuthModal";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { ReactNode } from "react";

export const defaultLayout = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <>
      <AuthModal />
      <Header />
      <main className="mx-auto mt-4 layout-p max-w-7xl">{children}</main>
      <Navbar />
    </>
  );
};
