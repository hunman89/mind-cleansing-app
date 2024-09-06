"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [encouragementMessage, setEncouragementMessage] = useState<
    string | null
  >(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations("Home");

  useEffect(() => {
    const storedMessage = localStorage.getItem("encouragementMessage");
    if (storedMessage) {
      setEncouragementMessage(storedMessage);
    }
  }, []);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleCleansing = () => {
    router.push("/cleansing" + "?" + createQueryString("text", inputText));
  };

  return (
    <main className="">
      <div>
        <h1>{t("title")}</h1>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder={t("placeholder")}
        />
        <button onClick={handleCleansing}>{t("button")}</button>
        {encouragementMessage && (
          <div>
            <h2>{t("encouragement")}</h2>
            <p>{encouragementMessage}</p>
          </div>
        )}
      </div>
    </main>
  );
}
