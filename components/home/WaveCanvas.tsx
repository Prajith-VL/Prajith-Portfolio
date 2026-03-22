"use client";

import dynamic from "next/dynamic";

const WaveBackground = dynamic(() => import("@/components/background/WaveBackground"), {
  ssr: false,
  loading: () => null,
});

export default function WaveCanvas() {
  return <WaveBackground />;
}
