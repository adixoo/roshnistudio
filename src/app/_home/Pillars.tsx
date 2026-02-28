"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import PillarsMobile from "./PillarsMobile";
import PillarsStack from "./PillarsStack";

export default function Pillars() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return isDesktop ? <PillarsStack /> : <PillarsMobile />;
}
