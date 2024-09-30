"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Button from "@/components/button";
import Textarea from "@/components/textarea";

const Encouragement = () => {
  const [encouragementText, setEncouragementText] = useState("");
  const router = useRouter();
  const t = useTranslations("Encouragement");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEncouragementText(e.target.value);
  };

  const handleEncourage = () => {
    localStorage.setItem("encouragementMessage", encouragementText);
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-700 gap-y-20 sm:flex-row sm:gap-x-20">
      <h1 className="text-7xl font-bold">{t("title")}</h1>
      <div className="flex w-screen flex-col items-center justify-center gap-y-5 sm:w-1/2">
        <Textarea
          id="text"
          name="text"
          value={encouragementText}
          onChange={handleInputChange}
          placeholder={t("placeholder")}
        />
        <Button onClick={handleEncourage}>{t("button")}</Button>
      </div>
    </div>
  );
};

export default Encouragement;
