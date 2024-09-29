import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = "kr";

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
    timeZone: "Asia/Seoul",
  };
});
