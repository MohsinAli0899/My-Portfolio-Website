import * as React from "react";
import "./hover-card.scss";

export const HoverCard = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={["hover-card", className].filter(Boolean).join(" ")}>
    {children}
  </div>
);

export const HoverCardTrigger = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={["hover-card-trigger", className].filter(Boolean).join(" ")}>
    {children}
  </div>
);

export const HoverCardContent = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={["hover-card-content", className].filter(Boolean).join(" ")}>
    {children}
  </div>
);
