import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          hello: "Hello! 👋",
          intro: "I'm <bold>Khaleelullah Sheriff</bold>, <br/> React Developer & Frontend Enthusiast",
          description: "Passionate about building modern UI experiences with 1.5+ years in React, React Native, Node.js, SCSS, and more.",
          github: "GitHub",
          linkedin: "LinkedIn",

          projects: { /* ... your project texts ... */ },

          footer: {
            connect: "Connect with me",
            rights: "All rights reserved."
          }
        }
      },

      ta: {
        translation: {
          hello: "வணக்கம்! 👋",
          intro: "நான் <bold>Khaleelullah Sheriff</bold>, <br/> ரியாக்ட் டெவலப்பர் & முன்னணி ஆர்வலர்",
          description: "React, React Native, Node.js, SCSS மற்றும் பலவற்றில் 1.5+ ஆண்டுகள் அனுபவத்துடன் நவீன UI அனுபவங்களை உருவாக்க ஆர்வமாக உள்ளேன்.",
          github: "கிட்ஹப்",
          linkedin: "லிங்க்ட்இன்",

          projects: { /* ... */ },

          footer: {
            connect: "என்னுடன் தொடர்புகொள்ளுங்கள்",
            rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
          }
        }
      },

      te: {
        translation: {
          hello: "హలో! 👋",
          intro: "నేను <bold>Khaleelullah Sheriff</bold>, <br/> React డెవలపర్ & ఫ్రంట్‌ఎండ్ అభిమాని",
          description: "React, React Native, Node.js, SCSS లో 1.5+ సంవత్సరాల అనుభవంతో ఆధునిక UI అనుభవాలను నిర్మించడంపై ఆసక్తి ఉంది.",
          github: "గిట్‌హబ్",
          linkedin: "లింక్డిన్",

          projects: { /* ... */ },

          footer: {
            connect: "నాతో కలుపుకోండి",
            rights: "అన్ని హక్కులుสง్రహించబడ్డాయి."
          }
        }
      },

      ml: {
        translation: {
          hello: "ഹലോ! 👋",
          intro: "ഞാൻ <bold>Khaleelullah Sheriff</bold>, <br/> React ഡെവലപ്പർ & ഫ്രണ്ട്എൻഡ് ആസ്വാദകൻ",
          description: "React, React Native, Node.js, SCSS എന്നിവയിൽ 1.5+ വർഷത്തെ പരിചയത്തോടെ ആധുനിക UI അനുഭവങ്ങൾ സൃഷ്ടിക്കുന്നതിൽ താത്പര്യം.",
          github: "ഗിറ്റ്ഹബ്",
          linkedin: "ലിങ്ക്ഡ്ഇൻ",

          projects: { /* ... */ },

          footer: {
            connect: "എന്നോട് ബന്ധപ്പെടുക",
            rights: "എല്ലാ അവകാശങ്ങളും സംരക്ഷിക്കപ്പെട്ടിരിക്കുന്നു."
          }
        }
      },

      es: {
        translation: {
          hello: "¡Hola! 👋",
          intro: "Soy <bold>Khaleelullah Sheriff</bold>, <br/> Desarrollador React & Entusiasta Frontend",
          description: "Apasionado por crear experiencias modernas de UI con más de 1.5 años en React, React Native, Node.js, SCSS y más.",
          github: "GitHub",
          linkedin: "LinkedIn",

          projects: { /* ... */ },

          footer: {
            connect: "Conéctate conmigo",
            rights: "Todos los derechos reservados."
          }
        }
      },

      ar: {
        translation: {
          hello: "مرحباً! 👋",
          intro: "أنا <bold>خليل الله شريف</bold>, <br/> مطور React وهاوي الواجهة الأمامية",
          description: "شغوف ببناء تجارب واجهة مستخدم حديثة مع أكثر من 1.5 سنة خبرة في React, React Native, Node.js, SCSS والمزيد.",
          github: "جيت هب",
          linkedin: "لينكد إن",

          projects: { /* ... */ },

          footer: {
            connect: "تواصل معي",
            rights: "جميع الحقوق محفوظة."
          }
        }
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
