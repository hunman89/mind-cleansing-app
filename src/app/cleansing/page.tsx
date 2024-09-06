"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "../../styles/Cleansing.module.css";

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
    <div className={styles.container}>
      <div className={isFading ? styles.fadeOut : ""}>{text}</div>
    </div>
  );
};

export default Cleansing;
