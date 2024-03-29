import { LanguageButton } from '@Buttons';
import useLanguage from '@hooks/useLanguage';
import { IconProps } from '@Icons/types';

export const LanguageIcon = ({ size }: IconProps) => {
  const { changeLocale, currentLanguage, languageList, nextLanguageIndex } = useLanguage();

  return (
    <div className="group relative transition hover:scale-125 dark:fill-slate-300 dark:text-slate-200 dark:hover:fill-slate-100" onClick={undefined}>
      <div onClick={() => changeLocale(languageList[nextLanguageIndex])}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" width={size ?? 24}>
          <path d="M480 976q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-155.5t86-127Q252 239 325 207.5T480 176q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880 576q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480 976Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322 736H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584 878ZM170 656h136q-3-20-4.5-39.5T300 576q0-21 1.5-40.5T306 496H170q-5 20-7.5 39.5T160 576q0 21 2.5 40.5T170 656Zm216 0h188q3-20 4.5-39.5T580 576q0-21-1.5-40.5T574 496H386q-3 20-4.5 39.5T380 576q0 21 1.5 40.5T386 656Zm268 0h136q5-20 7.5-39.5T800 576q0-21-2.5-40.5T790 496H654q3 20 4.5 39.5T660 576q0 21-1.5 40.5T654 656Zm-16-240h118q-29-50-72.5-87T584 274q18 33 31.5 68.5T638 416Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376 274q-56 18-99.5 55T204 416Z" />
        </svg>
      </div>
      <div className="absolute top-0 left-0 ml-4 w-36 opacity-0 transition group-hover:opacity-100 sm:left-2 sm:ml-2 sm:w-24">
        {languageList
          .filter((language) => language !== currentLanguage)
          .map((language) => (
            <LanguageButton onClick={changeLocale} key={language} language={language} />
          ))}
      </div>
    </div>
  );
};
