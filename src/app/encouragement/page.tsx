"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const Encouragement = () => {
  const [encouragementText, setEncouragementText] = useState("");
  const router = useRouter();
  const t = useTranslations("Encouragement");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEncouragementText(e.target.value);
  };

  const handleEncourage = () => {
    localStorage.setItem("encouragementMessage", encouragementText);
    router.push("/");
  };

  return (
    <div>
      <h1>{t("title")}</h1>
      <input
        type="text"
        value={encouragementText}
        onChange={handleInputChange}
        placeholder={t("placeholder")}
      />
      <button onClick={handleEncourage}>{t("button")}</button>
    </div>
  );
};

export default Encouragement;
