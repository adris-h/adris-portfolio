import React, { useContext, useState, type ReactNode} from 'react';
import translationEN from "../translations/en/translation.json"
import translationCZ from "../translations/cz/translation.json"


const translations = {
    en: translationEN,
    cz: translationCZ,
} as const;

type LanguageType = keyof typeof translations;


interface LanguageHandlerProps {
    language: LanguageType;
    changeLanguage: (lang: LanguageType) => void;
    t: (key: string) => string;
}

const LanguageContext = React.createContext<LanguageHandlerProps | undefined>(undefined);

export const LanguageProvider = ({children}: {children: ReactNode}) => {
    const [language, setLanguage] = useState<LanguageType>(() => {
        const saved = localStorage.getItem("language");
        return (saved === "en" || saved === "cz") ? saved : "cz";
    });

    function changeLanguage(newLanguage: LanguageType) {
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    }
    const t = (key: string) => {
        const translationSet = translations[language] as Record<string, string>;
        return translationSet[key] || key;
    }

    return (
        <LanguageContext.Provider value={{language, changeLanguage, t}}>
            {children}
        </LanguageContext.Provider>
    )

}

export const useLanguage = () =>{
    const ctx = useContext(LanguageContext);
    if (ctx === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return ctx;
}
