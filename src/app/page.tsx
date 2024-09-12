"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Button from "@/components/button";

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

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleCleansing = () => {
    router.push("/cleansing" + "?" + createQueryString("text", inputText));
  };

  return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen text-gray-700 gap-y-24">
        <h1 className="text-5xl font-bold">{t("title")}</h1>
        <div className="flex flex-col items-center justify-center gap-y-10">
          <div>
            <label
              htmlFor="text"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              {t("placeholder")}
            </label>
            <textarea
              name="text"
              id="text"
              value={inputText}
              onChange={handleInputChange}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
          </div>
          <Button onClick={handleCleansing}>{t("button")}</Button>
          {encouragementMessage && (
            <p className="font-semibold">{encouragementMessage}</p>
          )}
        </div>
      </div>
    </main>
  );
}
