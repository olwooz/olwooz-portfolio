import { useRouter } from 'next/router';

const useLanguage = () => {
  const router = useRouter();

  const languageList = ['en', 'ko', 'zh'];
  const currentLanguage = router.locale ?? 'en';

  const changeLocale = (language: string) => {
    router.push(router.basePath, router.basePath, { locale: language, scroll: false });
  };

  return { currentLanguage, changeLocale, languageList };
};

export default useLanguage;
