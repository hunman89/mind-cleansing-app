"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Cleansing = () => {
  const router = useRouter();
  const [isFading, setIsFading] = useState(false);
  const text = useSearchParams().get("text");

  useEffect(() => {
    setIsFading(true);

    const timer = setTimeout(() => {
      setIsFading(false);
      router.push("/encouragement");
    }, 2000); // 애니메이션 시간과 동일한 시간으로 설정

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-slate-500 text-white text-2xl">
      <div className={isFading ? "animate-fadeOut" : ""}>{text}</div>
    </div>
  );
};

export default Cleansing;
