import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const toggleLanguage = () => {
        const newLang = isRTL ? 'en' : 'ar';
        i18n.changeLanguage(newLang);
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLang;
    };

    return (
        <button
            onClick={toggleLanguage}
            className="relative flex items-center w-16 h-8 bg-muted/10 rounded-full p-1 cursor-pointer hover:bg-muted/20 transition-colors border border-border/40"
            aria-label={isRTL ? "Switch to English" : "Switch to Arabic"}
            dir="ltr" // Force LTR for the toggle internal layout
        >
            <motion.div
                className="absolute w-6 h-6 bg-[#14b8b8] rounded-full shadow-sm z-10"
                animate={{
                    x: isRTL ? 32 : 0
                }}
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                style={{ left: '4px' }}
            />
            
            <div className={`absolute inset-0 flex items-center justify-between px-2.5 z-0`}>
                <span className={`text-[9px] font-bold transition-colors ${!isRTL ? 'text-primary-foreground' : 'text-muted-foreground'}`}>EN</span>
                <span className={`text-[11px] font-bold transition-colors ${isRTL ? 'text-primary-foreground' : 'text-muted-foreground'}`}>ع</span>
            </div>
        </button>
    );
}
