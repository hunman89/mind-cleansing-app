"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Button from "@/components/button";

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
    <div className="flex flex-col items-center justify-center h-screen text-gray-700 gap-y-10">
      <h1>{t("title")}</h1>
      <input
        type="text"
        value={encouragementText}
        onChange={handleInputChange}
        placeholder={t("placeholder")}
      />
      <Button onClick={handleEncourage}>{t("button")}</Button>
    </div>
  );
};

export default Encouragement;
