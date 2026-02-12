"use client";

import {
  ExpandableScreen,
  ExpandableScreenContent,
  ExpandableScreenTrigger,
  useExpandableScreen
} from "@/components/ui/expandable-screen";

export default function ConsultationOverlay({
  children,
  layoutId
}: {
  children?: React.ReactNode;
  layoutId?: string;
}) {
  return (
    <ExpandableScreen
      layoutId={layoutId}
      lockScroll
      triggerRadius="0px"
      contentRadius="0px"
    >
      <ExpandableScreenTrigger>{children}</ExpandableScreenTrigger>
      <ConsultationOverlayContent />
    </ExpandableScreen>
  );
}

function ConsultationOverlayContent() {
  const { isExpanded, collapse } = useExpandableScreen();

  return (
    <>
      <ExpandableScreenContent className="bg-white" showCloseButton={false}>
        <div className="flex h-full items-center justify-center p-8">
          <div className="text-primary-foreground text-4xl">
            Full Screen Content
            <p className="mt-4 text-lg">
              Is expanded: {isExpanded ? "Yes" : "No"}
            </p>
            <button
              onClick={collapse}
              className="mt-6 underline underline-offset-4"
            >
              Close
            </button>
          </div>
        </div>
      </ExpandableScreenContent>
    </>
  );
}
