import React from "react";
import MainHeading from "./MainHeading";

type MysectionProps = {
  title: string;
  children: React.ReactNode;
};

const Mysection = ({ title, children }: MysectionProps) => {
  return (
    <section className="pt-6">
      <div className="container">
        <MainHeading title={title} />
        {children}
      </div>
    </section>
  );
};

export default Mysection;
