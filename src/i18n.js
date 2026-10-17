import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const english = {
  meta: { title: "Khaleelullah Sheriff | Frontend Engineer" },
  language: { choose: "Choose language" },
  nav: {
    about: "About",
    projects: "Projects",
    skills: "Skills",
    resume: "Resume",
    contact: "Let's talk",
    main: "Main navigation",
    home: "Khaleelullah Sheriff home",
    role: "Frontend Engineer",
  },
  controls: {
    lightMode: "Switch to light mode",
    darkMode: "Switch to dark mode",
    chooseColor: "Choose theme color",
    customColor: "Custom color",
  },
  hero: {
    eyebrow: "Frontend engineer",
    specialty: "React specialist",
    title: "Building",
    accent: " better",
    ending: " digital experiences.",
    intro: "I'm Khaleelullah Sheriff — a frontend engineer who turns complex ideas into clear, reliable, and delightful web experiences.",
    description: "Passionate about building modern UI experiences with 2+ years in React, React Native, Node.js, SCSS, and more.",
    explore: "Explore my work",
    download: "Download resume",
    findMe: "Find me on",
    photoAlt: "Portrait of Khaleelullah Sheriff",
    portraitIndex: "Independent thinker. Team player.",
    location: "Frontend Engineer · Chennai, India",
  },
  about: {
    kicker: "A little about me",
    heading: "Thoughtful interfaces.",
    headingAccent: "Reliable engineering.",
    bio: "I'm Khaleelullah, a frontend engineer with 3+ years of experience designing, building, testing, and shipping production web applications. I enjoy turning complex product requirements into clear interfaces, reusable components, and responsive data-rich experiences.",
    contact: "Get in touch",
    experience: "Experience",
    education: "Education",
    jobTitle: "Frontend Developer",
    present: "Oct 2023 — Present",
    company: "Intellizest Solutions · Chennai",
    jobDescription: "Building the TurboFusion Analytics Platform with React, TypeScript, and modern frontend architecture. I translate product requirements into reusable dashboard and reporting interfaces; integrate .NET and Python REST APIs; optimize interactive chart rendering; and deliver responsive, cross-browser data visualizations for 20+ client deployments. I collaborate with product, backend, and leadership teams through requirements reviews, code reviews, and CI/CD demonstrations.",
    degree: "B.Sc. Computer Science",
    undergraduate: "Undergraduate degree",
    studyDates: "2020 — 2023",
    educationDescription: "Built a strong foundation in computer science, software development, and problem solving.",
  },
  projects: {
    kicker: "Selected work",
    heading: "Selected work, from product UI to platforms",
    description: "Professional products and independent builds from my resume and portfolio.",
    project: "Project",
    professional: "Professional project",
    independent: "Independent project",
    present: "2023 — Present",
    dashboard: "TurboFusion · Product UI",
    components: "Components",
    reusableUi: "Reusable UI",
    deployments: "Deployments",
    clients: "20+ clients",
    visualization: "Data visualisation",
    interactiveReporting: "Interactive reporting",
    illustration: "Product UI illustration",
    items: [
      {
        title: "Dynamic Data Visualization",
        description: "A data exploration experience where users upload files and turn their data into interactive visualizations, with an Excel-inspired workflow for reviewing and working with the results.",
      },
      {
        title: "Advanced React Flow Library",
        description: "A reusable flowcharting experience for dynamically designing operational workflows, connecting steps, and visually mapping processes.",
      },
      {
        title: "TurboFusion Analytics Platform",
        description: "An enterprise analytics product for building dashboards and exploring business data. Developed reusable React interfaces for configurable dashboards, chart interactions, filtering, and API-powered reporting, supporting 20+ client deployments.",
      },
      {
        title: "Live Vehicle Tracking & Warehouse Product",
        description: "A real-time operations interface connected to .NET REST APIs, with warehouse layout visualization, live vehicle telemetry, animated vehicle movement, dynamic route rendering, and map-style tracking.",
      },
      {
        title: "CITAC — Business Leads Connection Platform",
        description: "Independently designed and delivered a production platform serving 1,000+ users. Owned the React frontend and authentication flows, with real-time communication and deployments to Firebase Hosting and Vercel.",
      },
      {
        title: "VS Events Website",
        description: "Designed, built, and deployed a responsive events-management website with React as a focused personal development challenge.",
      },
      {
        title: "Tomato — Food Ordering Web App",
        description: "A multi-page food-ordering application covering the customer flow from menu browsing through delivery details and payment.",
      },
      {
        title: "Portfolio & Earlier Academic Projects",
        description: "Earlier work includes a dynamic React portfolio, a PHP/MySQL hospital management system, and frontend fixes for a .NET blood-bank management project.",
      },
    ],
  },
  skills: {
    kicker: "Technical skills",
    heading: "Tools I use to ship products",
    description: "Frontend engineering, visualisation, integrations, testing, and the practices I bring to a team.",
    toolkitKicker: "Career reference",
    toolkitHeading: "Modern JavaScript toolkit",
    toolkitDescription: "Common technologies and practices in current React roles. This is a learning reference, separate from the skills listed in my resume.",
    groups: [
      "Languages",
      "React & frontend",
      "State management & architecture",
      "APIs & integrations",
      "Data visualization",
      "Backend & data",
      "Testing, tools & delivery",
      "Engineering strengths",
    ],
    modernGroups: [
      "React and application data",
      "Testing and code quality",
      "Frontend delivery",
    ],
  },
  footer: {
    kicker: "Have a project in mind?",
    heading: "Let's build something great.",
    description: "I'm always glad to connect about thoughtful products and frontend work.",
    contact: "Contact me",
    email: "Your email",
    message: "Your message",
    send: "Send message",
    sent: "Message sent successfully!",
    failed: "Failed to send message. Please try again.",
    rights: "All rights reserved.",
  },
  social: {
    find: "Find me on",
    linkedin: "LinkedIn",
    github: "GitHub",
    youtube: "YouTube",
    facebook: "Facebook",
    instagram: "Instagram",
    email: "Email",
  },
};

const hindi = {
  meta: { title: "खलीलुल्लाह शरीफ़ | फ्रंटएंड इंजीनियर" },
  language: { choose: "भाषा चुनें" },
  nav: { about: "परिचय", projects: "प्रोजेक्ट", skills: "कौशल", resume: "रिज़्यूमे", contact: "बात करें", main: "मुख्य नेविगेशन", home: "खलीलुल्लाह शरीफ़ का होम पेज", role: "फ्रंटएंड इंजीनियर" },
  controls: { lightMode: "लाइट मोड पर जाएँ", darkMode: "डार्क मोड पर जाएँ", chooseColor: "थीम का रंग चुनें", customColor: "अपना रंग चुनें" },
  hero: {
    eyebrow: "फ्रंटएंड इंजीनियर", specialty: "React विशेषज्ञ", title: "बनाता हूँ", accent: " बेहतर", ending: " डिजिटल अनुभव।",
    intro: "मैं खलीलुल्लाह शरीफ़ हूँ — एक फ्रंटएंड इंजीनियर, जो जटिल विचारों को स्पष्ट, भरोसेमंद और आनंददायक वेब अनुभवों में बदलता है।",
    description: "React, React Native, Node.js, SCSS और अन्य तकनीकों में 2+ वर्षों के अनुभव के साथ आधुनिक UI अनुभव बनाने के लिए उत्साहित।",
    explore: "मेरा काम देखें", download: "रिज़्यूमे डाउनलोड करें", findMe: "मुझसे यहाँ जुड़ें", photoAlt: "खलीलुल्लाह शरीफ़ का चित्र", portraitIndex: "स्वतंत्र सोच। टीम के साथ।", location: "फ्रंटएंड इंजीनियर · चेन्नई, भारत",
  },
  about: {
    kicker: "मेरे बारे में", heading: "सोच-समझकर बनाए इंटरफ़ेस।", headingAccent: "भरोसेमंद इंजीनियरिंग।",
    bio: "मैं खलीलुल्लाह हूँ, 3+ वर्षों के अनुभव वाला फ्रंटएंड इंजीनियर। मैं प्रोडक्शन वेब ऐप्लिकेशन डिज़ाइन, निर्माण, परीक्षण और रिलीज़ करता हूँ। जटिल उत्पाद आवश्यकताओं को स्पष्ट इंटरफ़ेस, पुन: उपयोग योग्य कॉम्पोनेंट और उत्तरदायी, डेटा-समृद्ध अनुभवों में बदलना मुझे पसंद है।",
    contact: "संपर्क करें", experience: "अनुभव", education: "शिक्षा", jobTitle: "फ्रंटएंड डेवलपर", present: "अक्टूबर 2023 — वर्तमान", company: "Intellizest Solutions · चेन्नई",
    jobDescription: "React, TypeScript और आधुनिक फ्रंटएंड आर्किटेक्चर के साथ TurboFusion Analytics Platform बना रहा हूँ। उत्पाद की आवश्यकताओं को पुन: उपयोग योग्य डैशबोर्ड और रिपोर्टिंग इंटरफ़ेस में बदलता हूँ; .NET और Python REST API जोड़ता हूँ; इंटरैक्टिव चार्ट के प्रदर्शन को बेहतर करता हूँ; और 20+ क्लाइंट डिप्लॉयमेंट के लिए उत्तरदायी, क्रॉस-ब्राउज़र डेटा विज़ुअलाइज़ेशन देता हूँ। आवश्यकताओं की समीक्षा, कोड समीक्षा और CI/CD डेमो में उत्पाद, बैकएंड और नेतृत्व टीमों के साथ काम करता हूँ।",
    degree: "कंप्यूटर साइंस में बी.एससी.", undergraduate: "स्नातक डिग्री", studyDates: "2020 — 2023", educationDescription: "कंप्यूटर साइंस, सॉफ़्टवेयर विकास और समस्या-समाधान में मज़बूत आधार बनाया।",
  },
  projects: {
    kicker: "चुनिंदा काम", heading: "उत्पाद UI से प्लेटफ़ॉर्म तक चुनिंदा काम", description: "मेरे रिज़्यूमे और पोर्टफोलियो के पेशेवर उत्पाद और स्वतंत्र प्रोजेक्ट।",
    project: "प्रोजेक्ट", professional: "पेशेवर प्रोजेक्ट", independent: "स्वतंत्र प्रोजेक्ट", present: "2023 — वर्तमान",
    dashboard: "TurboFusion · उत्पाद UI", components: "कॉम्पोनेंट", reusableUi: "पुन: उपयोग योग्य UI", deployments: "डिप्लॉयमेंट", clients: "20+ क्लाइंट", visualization: "डेटा विज़ुअलाइज़ेशन", interactiveReporting: "इंटरैक्टिव रिपोर्टिंग", illustration: "उत्पाद UI चित्रण",
    items: [
      { title: "डायनामिक डेटा विज़ुअलाइज़ेशन", description: "डेटा खोजने का ऐसा अनुभव जहाँ उपयोगकर्ता फ़ाइलें अपलोड कर डेटा को इंटरैक्टिव विज़ुअलाइज़ेशन में बदल सकते हैं। परिणाम देखने और उनके साथ काम करने की प्रक्रिया Excel से प्रेरित है।" },
      { title: "उन्नत React Flow लाइब्रेरी", description: "ऑपरेशनल वर्कफ़्लो को गतिशील रूप से डिज़ाइन करने, चरण जोड़ने और प्रक्रियाओं का दृश्य मानचित्र बनाने के लिए पुन: उपयोग योग्य फ़्लोचार्ट अनुभव।" },
      { title: "TurboFusion Analytics Platform", description: "डैशबोर्ड बनाने और व्यावसायिक डेटा देखने के लिए एंटरप्राइज़ एनालिटिक्स उत्पाद। कॉन्फ़िगर करने योग्य डैशबोर्ड, चार्ट इंटरैक्शन, फ़िल्टर और API-आधारित रिपोर्टिंग के लिए पुन: उपयोग योग्य React इंटरफ़ेस विकसित किए, जो 20+ क्लाइंट डिप्लॉयमेंट में उपयोग हुए।" },
      { title: "लाइव वाहन ट्रैकिंग और वेयरहाउस उत्पाद", description: ".NET REST API से जुड़ा रियल-टाइम ऑपरेशंस इंटरफ़ेस। इसमें वेयरहाउस लेआउट, लाइव वाहन टेलीमेट्री, एनिमेटेड वाहन गति, गतिशील रूट और मानचित्र-जैसी ट्रैकिंग शामिल है।" },
      { title: "CITAC — बिज़नेस लीड कनेक्शन प्लेटफ़ॉर्म", description: "1,000+ उपयोगकर्ताओं वाले प्रोडक्शन प्लेटफ़ॉर्म को स्वतंत्र रूप से डिज़ाइन और रिलीज़ किया। React फ्रंटएंड और प्रमाणीकरण प्रवाह की ज़िम्मेदारी संभाली; रियल-टाइम संचार और Firebase Hosting तथा Vercel पर डिप्लॉयमेंट भी शामिल हैं।" },
      { title: "VS Events वेबसाइट", description: "व्यक्तिगत विकास चुनौती के रूप में React से उत्तरदायी इवेंट-मैनेजमेंट वेबसाइट डिज़ाइन, निर्मित और डिप्लॉय की।" },
      { title: "Tomato — फ़ूड ऑर्डरिंग वेब ऐप", description: "कई पेज वाला फ़ूड-ऑर्डरिंग ऐप, जिसमें मेनू देखने से लेकर डिलीवरी विवरण और भुगतान तक ग्राहक का पूरा प्रवाह शामिल है।" },
      { title: "पोर्टफोलियो और शुरुआती अकादमिक प्रोजेक्ट", description: "पहले के काम में डायनामिक React पोर्टफोलियो, PHP/MySQL अस्पताल प्रबंधन प्रणाली और .NET ब्लड-बैंक प्रबंधन प्रोजेक्ट के फ्रंटएंड सुधार शामिल हैं।" },
    ],
  },
  skills: {
    kicker: "तकनीकी कौशल", heading: "उत्पाद बनाने में इस्तेमाल होने वाले टूल", description: "फ्रंटएंड इंजीनियरिंग, विज़ुअलाइज़ेशन, इंटीग्रेशन, परीक्षण और टीम में अपनाई जाने वाली कार्य-पद्धतियाँ।",
    toolkitKicker: "करियर संदर्भ", toolkitHeading: "आधुनिक JavaScript टूलकिट", toolkitDescription: "वर्तमान React भूमिकाओं में उपयोग होने वाली सामान्य तकनीकें और कार्य-पद्धतियाँ। यह सीखने के लिए संदर्भ है, मेरे रिज़्यूमे में दिए कौशलों से अलग।",
    groups: ["प्रोग्रामिंग भाषाएँ", "React और फ्रंटएंड", "स्टेट प्रबंधन और आर्किटेक्चर", "API और इंटीग्रेशन", "डेटा विज़ुअलाइज़ेशन", "बैकएंड और डेटा", "परीक्षण, टूल और डिलीवरी", "इंजीनियरिंग की खूबियाँ"],
    modernGroups: ["React और ऐप्लिकेशन डेटा", "परीक्षण और कोड गुणवत्ता", "फ्रंटएंड डिलीवरी"],
  },
  footer: {
    kicker: "क्या आपके पास कोई प्रोजेक्ट है?", heading: "आइए कुछ शानदार बनाते हैं।", description: "बेहतर उत्पादों और फ्रंटएंड कार्य पर बात करने के लिए हमेशा तैयार हूँ।",
    contact: "संपर्क करें", email: "आपका ईमेल", message: "आपका संदेश", send: "संदेश भेजें", sent: "संदेश सफलतापूर्वक भेजा गया!", failed: "संदेश नहीं भेजा जा सका। कृपया फिर कोशिश करें।", rights: "सर्वाधिकार सुरक्षित।",
  },
  social: { find: "यहाँ जुड़ें", linkedin: "LinkedIn", github: "GitHub", youtube: "YouTube", facebook: "Facebook", instagram: "Instagram", email: "ईमेल" },
};

const tamil = {
  meta: { title: "கலீலுல்லா ஷெரீஃப் | ஃப்ரண்ட்எண்ட் பொறியாளர்" },
  language: { choose: "மொழியைத் தேர்ந்தெடுக்கவும்" },
  nav: { about: "என்னைப் பற்றி", projects: "திட்டங்கள்", skills: "திறன்கள்", resume: "சுயவிவரம்", contact: "பேசலாம்", main: "முதன்மை வழிசெலுத்தல்", home: "கலீலுல்லா ஷெரீஃப் முகப்புப் பக்கம்", role: "ஃப்ரண்ட்எண்ட் பொறியாளர்" },
  controls: { lightMode: "ஒளி பயன்முறைக்கு மாறவும்", darkMode: "இருள் பயன்முறைக்கு மாறவும்", chooseColor: "தீம் நிறத்தைத் தேர்ந்தெடுக்கவும்", customColor: "விருப்ப நிறம்" },
  hero: {
    eyebrow: "ஃப்ரண்ட்எண்ட் பொறியாளர்", specialty: "React நிபுணர்", title: "உருவாக்குகிறேன்", accent: " சிறந்த", ending: " டிஜிட்டல் அனுபவங்களை.",
    intro: "நான் கலீலுல்லா ஷெரீஃப் — சிக்கலான யோசனைகளைத் தெளிவான, நம்பகமான, மகிழ்ச்சியான வலை அனுபவங்களாக மாற்றும் ஃப்ரண்ட்எண்ட் பொறியாளர்.",
    description: "React, React Native, Node.js, SCSS உள்ளிட்டவற்றில் 2+ ஆண்டுகள் அனுபவத்துடன் நவீன UI அனுபவங்களை உருவாக்குவதில் ஆர்வம்.",
    explore: "என் பணிகளைப் பாருங்கள்", download: "சுயவிவரத்தைப் பதிவிறக்கவும்", findMe: "என்னை இங்கே காணலாம்", photoAlt: "கலீலுல்லா ஷெரீஃப்பின் படம்", portraitIndex: "சுயமாகச் சிந்திப்பவர். குழுவுடன் இணைந்து செயல்படுபவர்.", location: "ஃப்ரண்ட்எண்ட் பொறியாளர் · சென்னை, இந்தியா",
  },
  about: {
    kicker: "என்னைப் பற்றி", heading: "கவனமாக வடிவமைத்த இடைமுகங்கள்.", headingAccent: "நம்பகமான பொறியியல்.",
    bio: "நான் கலீலுல்லா; உற்பத்தி வலைப் பயன்பாடுகளை வடிவமைத்து, உருவாக்கி, சோதித்து வெளியிடுவதில் 3+ ஆண்டுகள் அனுபவமுள்ள ஃப்ரண்ட்எண்ட் பொறியாளர். சிக்கலான தயாரிப்புத் தேவைகளைத் தெளிவான இடைமுகங்கள், மீண்டும் பயன்படுத்தக்கூடிய கூறுகள், பதிலளிக்கும் தரவு நிறைந்த அனுபவங்களாக மாற்றுவது எனக்கு விருப்பம்.",
    contact: "தொடர்பு கொள்ளுங்கள்", experience: "அனுபவம்", education: "கல்வி", jobTitle: "ஃப்ரண்ட்எண்ட் டெவலப்பர்", present: "அக் 2023 — தற்போது", company: "Intellizest Solutions · சென்னை",
    jobDescription: "React, TypeScript மற்றும் நவீன ஃப்ரண்ட்எண்ட் கட்டமைப்புடன் TurboFusion Analytics Platform-ஐ உருவாக்குகிறேன். தயாரிப்புத் தேவைகளை மீண்டும் பயன்படுத்தக்கூடிய டாஷ்போர்டு மற்றும் அறிக்கை இடைமுகங்களாக மாற்றுகிறேன்; .NET மற்றும் Python REST API-களை இணைக்கிறேன்; ஊடாடும் விளக்கப்படங்களின் செயல்திறனை மேம்படுத்துகிறேன்; 20+ வாடிக்கையாளர் வெளியீடுகளுக்குப் பதிலளிக்கும், பல உலாவிகளில் இயங்கும் தரவு காட்சிப்படுத்தல்களை வழங்குகிறேன். தேவைகள் மற்றும் குறியீடு மதிப்பாய்வுகள், CI/CD விளக்கங்களில் தயாரிப்பு, பின்தளம், தலைமை அணிகளுடன் இணைந்து பணியாற்றுகிறேன்.",
    degree: "கணினி அறிவியலில் பி.எஸ்சி.", undergraduate: "இளநிலைப் பட்டம்", studyDates: "2020 — 2023", educationDescription: "கணினி அறிவியல், மென்பொருள் உருவாக்கம், சிக்கல் தீர்த்தல் ஆகியவற்றில் வலுவான அடித்தளத்தை உருவாக்கினேன்.",
  },
  projects: {
    kicker: "தேர்ந்தெடுத்த பணிகள்", heading: "தயாரிப்பு UI முதல் தளங்கள் வரை தேர்ந்தெடுத்த பணிகள்", description: "எனது சுயவிவரம் மற்றும் போர்ட்ஃபோலியோவில் உள்ள தொழில்முறை தயாரிப்புகள் மற்றும் தனிப்பட்ட உருவாக்கங்கள்.",
    project: "திட்டம்", professional: "தொழில்முறைத் திட்டம்", independent: "சுயாதீனத் திட்டம்", present: "2023 — தற்போது",
    dashboard: "TurboFusion · தயாரிப்பு UI", components: "கூறுகள்", reusableUi: "மீண்டும் பயன்படுத்தக்கூடிய UI", deployments: "வெளியீடுகள்", clients: "20+ வாடிக்கையாளர்கள்", visualization: "தரவு காட்சிப்படுத்தல்", interactiveReporting: "ஊடாடும் அறிக்கைகள்", illustration: "தயாரிப்பு UI விளக்கம்",
    items: [
      { title: "இயக்கநிலை தரவு காட்சிப்படுத்தல்", description: "பயனர்கள் கோப்புகளைப் பதிவேற்றி, தங்கள் தரவை ஊடாடும் காட்சிகளாக மாற்றும் தரவு ஆய்வு அனுபவம். முடிவுகளைப் பார்ப்பதும் பயன்படுத்துவதும் Excel-ஐ ஒத்த செயல்முறையில் அமைகிறது." },
      { title: "மேம்பட்ட React Flow நூலகம்", description: "செயல்பாட்டு பணிப்பாய்வுகளை இயக்கநிலையாக வடிவமைக்கவும், படிகளை இணைக்கவும், செயல்முறைகளை வரைபடமாகக் காட்டவும் உதவும் மீண்டும் பயன்படுத்தக்கூடிய ஃப்ளோசார்ட் அனுபவம்." },
      { title: "TurboFusion Analytics Platform", description: "டாஷ்போர்டுகளை உருவாக்கவும் வணிகத் தரவை ஆராயவும் உதவும் நிறுவன பகுப்பாய்வு தயாரிப்பு. அமைக்கக்கூடிய டாஷ்போர்டுகள், விளக்கப்பட ஊடாடல்கள், வடிகட்டிகள், API அறிக்கைகளுக்கான React இடைமுகங்களை உருவாக்கி 20+ வாடிக்கையாளர் வெளியீடுகளுக்கு ஆதரவளித்தேன்." },
      { title: "நேரடி வாகனக் கண்காணிப்பு மற்றும் கிடங்கு தயாரிப்பு", description: ".NET REST API-களுடன் இணைந்த நேரடி செயல்பாட்டு இடைமுகம். கிடங்கு வரைபடம், நேரடி வாகனத் தரவு, அசையும் வாகனக் காட்சி, இயக்கநிலை வழித்தடங்கள், வரைபடக் கண்காணிப்பு ஆகியவை இதில் உள்ளன." },
      { title: "CITAC — வணிகத் தொடர்பு இணைப்பு தளம்", description: "1,000+ பயனர்களுக்கான உற்பத்தித் தளத்தைத் தனியாக வடிவமைத்து வழங்கினேன். React ஃப்ரண்ட்எண்ட் மற்றும் உள்நுழைவு செயல்முறைகளைப் பொறுப்பேற்று, நேரடித் தொடர்பு மற்றும் Firebase Hosting, Vercel வெளியீடுகளையும் செய்தேன்." },
      { title: "VS Events இணையதளம்", description: "தனிப்பட்ட மேம்பாட்டு சவாலாக React மூலம் பதிலளிக்கும் நிகழ்வு மேலாண்மை இணையதளத்தை வடிவமைத்து, உருவாக்கி, வெளியிட்டேன்." },
      { title: "Tomato — உணவு ஆர்டர் வலைப் பயன்பாடு", description: "மெனு பார்வையிலிருந்து விநியோக விவரங்கள் மற்றும் கட்டணம் வரை வாடிக்கையாளர் செயல்முறையைக் கொண்ட பலபக்க உணவு ஆர்டர் பயன்பாடு." },
      { title: "போர்ட்ஃபோலியோ மற்றும் முந்தைய கல்வித் திட்டங்கள்", description: "முந்தைய பணிகளில் இயக்கநிலை React போர்ட்ஃபோலியோ, PHP/MySQL மருத்துவமனை மேலாண்மை அமைப்பு, .NET இரத்த வங்கி மேலாண்மைத் திட்டத்திற்கான ஃப்ரண்ட்எண்ட் திருத்தங்கள் அடங்கும்." },
    ],
  },
  skills: {
    kicker: "தொழில்நுட்பத் திறன்கள்", heading: "தயாரிப்புகளை வெளியிட நான் பயன்படுத்தும் கருவிகள்", description: "ஃப்ரண்ட்எண்ட் பொறியியல், காட்சிப்படுத்தல், ஒருங்கிணைப்புகள், சோதனை மற்றும் குழுவில் நான் பின்பற்றும் நடைமுறைகள்.",
    toolkitKicker: "பணி குறிப்பு", toolkitHeading: "நவீன JavaScript கருவித்தொகுப்பு", toolkitDescription: "இன்றைய React பணிகளில் பொதுவாகப் பயன்படும் தொழில்நுட்பங்களும் நடைமுறைகளும். இது கற்றலுக்கான குறிப்பு; எனது சுயவிவரத் திறன்களிலிருந்து வேறுபட்டது.",
    groups: ["நிரலாக்க மொழிகள்", "React மற்றும் ஃப்ரண்ட்எண்ட்", "நிலை மேலாண்மை மற்றும் கட்டமைப்பு", "API மற்றும் ஒருங்கிணைப்புகள்", "தரவு காட்சிப்படுத்தல்", "பின்தளம் மற்றும் தரவு", "சோதனை, கருவிகள் மற்றும் வழங்கல்", "பொறியியல் வலிமைகள்"],
    modernGroups: ["React மற்றும் பயன்பாட்டுத் தரவு", "சோதனை மற்றும் குறியீட்டுத் தரம்", "ஃப்ரண்ட்எண்ட் வழங்கல்"],
  },
  footer: {
    kicker: "உங்களிடம் திட்டம் உள்ளதா?", heading: "சிறப்பான ஒன்றை உருவாக்குவோம்.", description: "பயனுள்ள தயாரிப்புகள் மற்றும் ஃப்ரண்ட்எண்ட் பணிகள் குறித்து பேச எப்போதும் மகிழ்ச்சி.",
    contact: "தொடர்பு கொள்ளுங்கள்", email: "உங்கள் மின்னஞ்சல்", message: "உங்கள் செய்தி", send: "செய்தியை அனுப்பவும்", sent: "செய்தி வெற்றிகரமாக அனுப்பப்பட்டது!", failed: "செய்தியை அனுப்ப முடியவில்லை. மீண்டும் முயற்சிக்கவும்.", rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
  },
  social: { find: "இங்கே காணலாம்", linkedin: "LinkedIn", github: "GitHub", youtube: "YouTube", facebook: "Facebook", instagram: "Instagram", email: "மின்னஞ்சல்" },
};

const urdu = {
  meta: { title: "خلیل اللہ شریف | فرنٹ اینڈ انجینئر" },
  language: { choose: "زبان منتخب کریں" },
  nav: { about: "تعارف", projects: "منصوبے", skills: "مہارتیں", resume: "ریزیومے", contact: "بات کریں", main: "مرکزی نیویگیشن", home: "خلیل اللہ شریف کا ہوم پیج", role: "فرنٹ اینڈ انجینئر" },
  controls: { lightMode: "لائٹ موڈ پر جائیں", darkMode: "ڈارک موڈ پر جائیں", chooseColor: "تھیم کا رنگ منتخب کریں", customColor: "حسبِ منشا رنگ" },
  hero: {
    eyebrow: "فرنٹ اینڈ انجینئر", specialty: "React ماہر", title: "بناتا ہوں", accent: " بہتر", ending: " ڈیجیٹل تجربات۔",
    intro: "میں خلیل اللہ شریف ہوں — ایک فرنٹ اینڈ انجینئر جو پیچیدہ خیالات کو واضح، قابلِ اعتماد اور خوشگوار ویب تجربات میں بدلتا ہے۔",
    description: "React، React Native، Node.js، SCSS اور دیگر ٹیکنالوجیز میں 2+ سال کے تجربے کے ساتھ جدید UI تجربات بنانے کا شوق۔",
    explore: "میرا کام دیکھیں", download: "ریزیومے ڈاؤن لوڈ کریں", findMe: "مجھے یہاں تلاش کریں", photoAlt: "خلیل اللہ شریف کی تصویر", portraitIndex: "آزاد سوچ۔ ٹیم کے ساتھ کام۔", location: "فرنٹ اینڈ انجینئر · چنئی، بھارت",
  },
  about: {
    kicker: "میرے بارے میں", heading: "سوچ سمجھ کر بنائے گئے انٹرفیس۔", headingAccent: "قابلِ اعتماد انجینئرنگ۔",
    bio: "میں خلیل اللہ ہوں، ایک فرنٹ اینڈ انجینئر جسے پروڈکشن ویب ایپلی کیشنز ڈیزائن، بنانے، ٹیسٹ کرنے اور جاری کرنے کا 3+ سال کا تجربہ ہے۔ پیچیدہ پروڈکٹ ضروریات کو واضح انٹرفیس، دوبارہ استعمال ہونے والے اجزا اور جواب دہ، ڈیٹا سے بھرپور تجربات میں بدلنا پسند ہے۔",
    contact: "رابطہ کریں", experience: "تجربہ", education: "تعلیم", jobTitle: "فرنٹ اینڈ ڈیولپر", present: "اکتوبر 2023 — تاحال", company: "Intellizest Solutions · چنئی",
    jobDescription: "React، TypeScript اور جدید فرنٹ اینڈ آرکیٹیکچر کے ساتھ TurboFusion Analytics Platform بناتا ہوں۔ پروڈکٹ کی ضروریات کو دوبارہ استعمال ہونے والے ڈیش بورڈ اور رپورٹنگ انٹرفیس میں بدلتا ہوں؛ .NET اور Python REST APIs کو مربوط کرتا ہوں؛ انٹرایکٹو چارٹس کی کارکردگی بہتر بناتا ہوں؛ اور 20+ کلائنٹ ڈیپلائمنٹس کے لیے جواب دہ، مختلف براؤزرز پر چلنے والی ڈیٹا ویژولائزیشن فراہم کرتا ہوں۔ ضروریات کے جائزے، کوڈ ریویوز اور CI/CD مظاہروں میں پروڈکٹ، بیک اینڈ اور قیادت کی ٹیموں کے ساتھ کام کرتا ہوں۔",
    degree: "کمپیوٹر سائنس میں بی ایس سی", undergraduate: "انڈرگریجویٹ ڈگری", studyDates: "2020 — 2023", educationDescription: "کمپیوٹر سائنس، سافٹ ویئر ڈیولپمنٹ اور مسئلہ حل کرنے میں مضبوط بنیاد بنائی۔",
  },
  projects: {
    kicker: "منتخب کام", heading: "پروڈکٹ UI سے پلیٹ فارمز تک منتخب کام", description: "میرے ریزیومے اور پورٹ فولیو کے پیشہ ورانہ پروڈکٹس اور آزادانہ منصوبے۔",
    project: "منصوبہ", professional: "پیشہ ورانہ منصوبہ", independent: "آزاد منصوبہ", present: "2023 — تاحال",
    dashboard: "TurboFusion · پروڈکٹ UI", components: "اجزا", reusableUi: "دوبارہ استعمال ہونے والا UI", deployments: "ڈیپلائمنٹس", clients: "20+ کلائنٹس", visualization: "ڈیٹا ویژولائزیشن", interactiveReporting: "انٹرایکٹو رپورٹنگ", illustration: "پروڈکٹ UI کی مثال",
    items: [
      { title: "متحرک ڈیٹا ویژولائزیشن", description: "ڈیٹا ایکسپلور کرنے کا ایسا تجربہ جہاں صارف فائلیں اپ لوڈ کرکے اپنے ڈیٹا کو انٹرایکٹو ویژولائزیشن میں بدلتے ہیں۔ نتائج دیکھنے اور ان پر کام کرنے کا طریقہ Excel سے متاثر ہے۔" },
      { title: "جدید React Flow لائبریری", description: "آپریشنل ورک فلو کو متحرک طور پر ڈیزائن کرنے، مراحل جوڑنے اور عمل کا بصری نقشہ بنانے کے لیے دوبارہ استعمال ہونے والا فلوچارٹ تجربہ۔" },
      { title: "TurboFusion Analytics Platform", description: "ڈیش بورڈ بنانے اور کاروباری ڈیٹا دریافت کرنے کا انٹرپرائز اینالیٹکس پروڈکٹ۔ قابلِ ترتیب ڈیش بورڈز، چارٹ تعامل، فلٹرنگ اور API رپورٹنگ کے لیے دوبارہ استعمال ہونے والے React انٹرفیس بنائے، جو 20+ کلائنٹ ڈیپلائمنٹس میں کام آئے۔" },
      { title: "لائیو گاڑیوں کی ٹریکنگ اور ویئرہاؤس پروڈکٹ", description: ".NET REST APIs سے منسلک ریئل ٹائم آپریشنز انٹرفیس، جس میں ویئرہاؤس لے آؤٹ، لائیو گاڑیوں کا ڈیٹا، متحرک گاڑیوں کی حرکت، راستوں کی تیاری اور نقشے جیسی ٹریکنگ شامل ہے۔" },
      { title: "CITAC — کاروباری رابطوں کا پلیٹ فارم", description: "1,000+ صارفین کے پروڈکشن پلیٹ فارم کو آزادانہ طور پر ڈیزائن اور فراہم کیا۔ React فرنٹ اینڈ اور تصدیق کے مراحل کی ذمہ داری سنبھالی، ساتھ ہی ریئل ٹائم رابطے اور Firebase Hosting اور Vercel پر ڈیپلائمنٹس بھی کیں۔" },
      { title: "VS Events ویب سائٹ", description: "ذاتی ترقی کے چیلنج کے طور پر React سے جواب دہ ایونٹ مینجمنٹ ویب سائٹ ڈیزائن، تیار اور ڈیپلائے کی۔" },
      { title: "Tomato — کھانے کے آرڈر کی ویب ایپ", description: "کئی صفحات پر مشتمل فوڈ آرڈرنگ ایپ، جس میں مینو دیکھنے سے لے کر ڈیلیوری کی تفصیلات اور ادائیگی تک صارف کا مکمل عمل شامل ہے۔" },
      { title: "پورٹ فولیو اور پہلے کے تعلیمی منصوبے", description: "پہلے کے کام میں متحرک React پورٹ فولیو، PHP/MySQL ہسپتال مینجمنٹ سسٹم اور .NET بلڈ بینک مینجمنٹ پروجیکٹ کے فرنٹ اینڈ مسائل کی اصلاح شامل ہے۔" },
    ],
  },
  skills: {
    kicker: "تکنیکی مہارتیں", heading: "پروڈکٹس جاری کرنے کے لیے میرے ٹولز", description: "فرنٹ اینڈ انجینئرنگ، ویژولائزیشن، انٹیگریشن، ٹیسٹنگ اور وہ طریقے جو میں ٹیم کے ساتھ اپناتا ہوں۔",
    toolkitKicker: "کیریئر حوالہ", toolkitHeading: "جدید JavaScript ٹول کٹ", toolkitDescription: "موجودہ React ملازمتوں میں عام ٹیکنالوجیز اور طریقے۔ یہ سیکھنے کا حوالہ ہے اور میرے ریزیومے میں درج مہارتوں سے الگ ہے۔",
    groups: ["پروگرامنگ زبانیں", "React اور فرنٹ اینڈ", "اسٹیٹ مینجمنٹ اور آرکیٹیکچر", "APIs اور انٹیگریشن", "ڈیٹا ویژولائزیشن", "بیک اینڈ اور ڈیٹا", "ٹیسٹنگ، ٹولز اور ڈیلیوری", "انجینئرنگ کی خوبیاں"],
    modernGroups: ["React اور ایپلیکیشن ڈیٹا", "ٹیسٹنگ اور کوڈ کا معیار", "فرنٹ اینڈ ڈیلیوری"],
  },
  footer: {
    kicker: "کیا آپ کے پاس کوئی پروجیکٹ ہے؟", heading: "آئیے کچھ بہترین بناتے ہیں۔", description: "بہترین پروڈکٹس اور فرنٹ اینڈ کام کے بارے میں بات کرنے میں ہمیشہ خوشی ہوتی ہے۔",
    contact: "رابطہ کریں", email: "آپ کا ای میل", message: "آپ کا پیغام", send: "پیغام بھیجیں", sent: "پیغام کامیابی سے بھیج دیا گیا!", failed: "پیغام نہیں بھیجا جا سکا۔ دوبارہ کوشش کریں۔", rights: "جملہ حقوق محفوظ ہیں۔",
  },
  social: { find: "یہاں تلاش کریں", linkedin: "LinkedIn", github: "GitHub", youtube: "YouTube", facebook: "Facebook", instagram: "Instagram", email: "ای میل" },
};

const arabic = {
  meta: { title: "خليل الله شريف | مهندس واجهات أمامية" },
  language: { choose: "اختر اللغة" },
  nav: { about: "نبذة عني", projects: "المشاريع", skills: "المهارات", resume: "السيرة الذاتية", contact: "لنتحدث", main: "التنقل الرئيسي", home: "الصفحة الرئيسية لخليل الله شريف", role: "مهندس واجهات أمامية" },
  controls: { lightMode: "التبديل إلى الوضع الفاتح", darkMode: "التبديل إلى الوضع الداكن", chooseColor: "اختر لون السمة", customColor: "لون مخصص" },
  hero: {
    eyebrow: "مهندس واجهات أمامية", specialty: "متخصص React", title: "أبني", accent: " تجارب رقمية", ending: " أفضل.",
    intro: "أنا خليل الله شريف — مهندس واجهات أمامية يحوّل الأفكار المعقدة إلى تجارب ويب واضحة وموثوقة وممتعة.",
    description: "شغوف ببناء تجارب واجهات حديثة، مع خبرة تزيد على عامين في React وReact Native وNode.js وSCSS وغيرها.",
    explore: "استكشف أعمالي", download: "تنزيل السيرة الذاتية", findMe: "تابعني على", photoAlt: "صورة خليل الله شريف", portraitIndex: "مفكر مستقل. عضو فعّال في الفريق.", location: "مهندس واجهات أمامية · تشيناي، الهند",
  },
  about: {
    kicker: "نبذة عني", heading: "واجهات مدروسة.", headingAccent: "هندسة موثوقة.",
    bio: "أنا خليل الله، مهندس واجهات أمامية أمتلك خبرة تزيد على 3 سنوات في تصميم تطبيقات الويب الإنتاجية وبنائها واختبارها وإطلاقها. أستمتع بتحويل متطلبات المنتجات المعقدة إلى واجهات واضحة ومكونات قابلة لإعادة الاستخدام وتجارب متجاوبة غنية بالبيانات.",
    contact: "تواصل معي", experience: "الخبرة", education: "التعليم", jobTitle: "مطور واجهات أمامية", present: "أكتوبر 2023 — حتى الآن", company: "Intellizest Solutions · تشيناي",
    jobDescription: "أبني منصة TurboFusion Analytics باستخدام React وTypeScript وبنية واجهات حديثة. أحوّل متطلبات المنتج إلى واجهات قابلة لإعادة الاستخدام للوحات المعلومات والتقارير، وأدمج واجهات .NET وPython REST API، وأحسّن عرض المخططات التفاعلية، وأقدم تصورات بيانات متجاوبة ومتوافقة مع المتصفحات لأكثر من 20 عملية نشر للعملاء. أتعاون مع فرق المنتج والخلفية والقيادة في مراجعة المتطلبات والشيفرة وعروض CI/CD.",
    degree: "بكالوريوس علوم الحاسوب", undergraduate: "درجة جامعية", studyDates: "2020 — 2023", educationDescription: "أسست قاعدة قوية في علوم الحاسوب وتطوير البرمجيات وحل المشكلات.",
  },
  projects: {
    kicker: "أعمال مختارة", heading: "أعمال مختارة من واجهات المنتجات إلى المنصات", description: "منتجات احترافية ومشاريع مستقلة من سيرتي الذاتية ومعرض أعمالي.",
    project: "مشروع", professional: "مشروع احترافي", independent: "مشروع مستقل", present: "2023 — حتى الآن",
    dashboard: "TurboFusion · واجهة المنتج", components: "المكونات", reusableUi: "واجهة قابلة لإعادة الاستخدام", deployments: "عمليات النشر", clients: "أكثر من 20 عميلاً", visualization: "تصور البيانات", interactiveReporting: "تقارير تفاعلية", illustration: "تصميم توضيحي لواجهة المنتج",
    items: [
      { title: "تصور ديناميكي للبيانات", description: "تجربة لاستكشاف البيانات تتيح للمستخدمين تحميل الملفات وتحويل بياناتهم إلى تصورات تفاعلية، ضمن سير عمل مستوحى من Excel لمراجعة النتائج والعمل عليها." },
      { title: "مكتبة React Flow متقدمة", description: "تجربة مخططات انسيابية قابلة لإعادة الاستخدام لتصميم سير العمل التشغيلي ديناميكياً وربط الخطوات ورسم العمليات بصرياً." },
      { title: "منصة TurboFusion للتحليلات", description: "منتج تحليلات مؤسسي لإنشاء لوحات المعلومات واستكشاف بيانات الأعمال. طورت واجهات React قابلة لإعادة الاستخدام للوحات القابلة للتهيئة وتفاعلات المخططات والتصفية والتقارير عبر API، ودعمت أكثر من 20 عملية نشر للعملاء." },
      { title: "منتج تتبع المركبات والمستودعات المباشر", description: "واجهة عمليات آنية متصلة بواجهات .NET REST API، تعرض مخطط المستودع وبيانات المركبات الحية وحركتها المتحركة والمسارات الديناميكية والتتبع على الخريطة." },
      { title: "CITAC — منصة ربط العملاء المحتملين للأعمال", description: "صممت وقدمت بشكل مستقل منصة إنتاجية تخدم أكثر من 1,000 مستخدم. توليت واجهة React وتدفقات المصادقة والاتصال الآني والنشر على Firebase Hosting وVercel." },
      { title: "موقع VS Events", description: "صممت وبنيت ونشرت موقعاً متجاوباً لإدارة الفعاليات باستخدام React كتحدٍ شخصي للتطوير." },
      { title: "Tomato — تطبيق ويب لطلب الطعام", description: "تطبيق متعدد الصفحات لطلب الطعام يغطي رحلة العميل من تصفح القائمة إلى تفاصيل التوصيل والدفع." },
      { title: "معرض الأعمال ومشاريع أكاديمية سابقة", description: "تشمل الأعمال السابقة معرض React ديناميكياً ونظام إدارة مستشفى باستخدام PHP/MySQL وإصلاحات للواجهة الأمامية لمشروع إدارة بنك دم باستخدام .NET." },
    ],
  },
  skills: {
    kicker: "المهارات التقنية", heading: "الأدوات التي أستخدمها لإطلاق المنتجات", description: "هندسة الواجهات الأمامية والتصورات والتكاملات والاختبارات والممارسات التي أقدمها للفريق.",
    toolkitKicker: "مرجع مهني", toolkitHeading: "مجموعة أدوات JavaScript الحديثة", toolkitDescription: "تقنيات وممارسات شائعة في وظائف React الحالية. هذا مرجع للتعلم، منفصل عن المهارات المدرجة في سيرتي الذاتية.",
    groups: ["لغات البرمجة", "React والواجهات الأمامية", "إدارة الحالة والبنية", "واجهات API والتكاملات", "تصور البيانات", "الخلفية والبيانات", "الاختبار والأدوات والتسليم", "نقاط القوة الهندسية"],
    modernGroups: ["React وبيانات التطبيقات", "الاختبار وجودة الشيفرة", "تسليم الواجهات الأمامية"],
  },
  footer: {
    kicker: "هل لديك مشروع؟", heading: "لنبنِ شيئاً رائعاً.", description: "يسعدني دائماً التواصل حول المنتجات المدروسة وأعمال الواجهات الأمامية.",
    contact: "تواصل معي", email: "بريدك الإلكتروني", message: "رسالتك", send: "إرسال الرسالة", sent: "تم إرسال الرسالة بنجاح!", failed: "تعذر إرسال الرسالة. يرجى المحاولة مرة أخرى.", rights: "جميع الحقوق محفوظة.",
  },
  social: { find: "تابعني على", linkedin: "LinkedIn", github: "GitHub", youtube: "YouTube", facebook: "Facebook", instagram: "Instagram", email: "البريد الإلكتروني" },
};

const malayalam = {
  meta: { title: "ഖലീലുല്ലാഹ് ഷെരീഫ് | ഫ്രണ്ട്‌എൻഡ് എഞ്ചിനീയർ" },
  language: { choose: "ഭാഷ തിരഞ്ഞെടുക്കുക" },
  nav: { about: "എന്നെക്കുറിച്ച്", projects: "പ്രോജക്റ്റുകൾ", skills: "കഴിവുകൾ", resume: "റെസ്യൂമെ", contact: "സംസാരിക്കാം", main: "പ്രധാന നാവിഗേഷൻ", home: "ഖലീലുല്ലാഹ് ഷെരീഫിന്റെ ഹോം പേജ്", role: "ഫ്രണ്ട്‌എൻഡ് എഞ്ചിനീയർ" },
  controls: { lightMode: "ലൈറ്റ് മോഡിലേക്ക് മാറുക", darkMode: "ഡാർക്ക് മോഡിലേക്ക് മാറുക", chooseColor: "തീമിന്റെ നിറം തിരഞ്ഞെടുക്കുക", customColor: "ഇഷ്ടാനുസൃത നിറം" },
  hero: {
    eyebrow: "ഫ്രണ്ട്‌എൻഡ് എഞ്ചിനീയർ", specialty: "React വിദഗ്ധൻ", title: "സൃഷ്ടിക്കുന്നു", accent: " മികച്ച", ending: " ഡിജിറ്റൽ അനുഭവങ്ങൾ.",
    intro: "ഞാൻ ഖലീലുല്ലാഹ് ഷെരീഫ് — സങ്കീർണ്ണമായ ആശയങ്ങളെ വ്യക്തവും വിശ്വസനീയവും ആസ്വാദ്യകരവുമായ വെബ് അനുഭവങ്ങളാക്കി മാറ്റുന്ന ഫ്രണ്ട്‌എൻഡ് എഞ്ചിനീയർ.",
    description: "React, React Native, Node.js, SCSS എന്നിവയിൽ 2+ വർഷത്തെ പരിചയത്തോടെ ആധുനിക UI അനുഭവങ്ങൾ നിർമ്മിക്കുന്നതിൽ താത്പര്യം.",
    explore: "എന്റെ പ്രവർത്തനങ്ങൾ കാണുക", download: "റെസ്യൂമെ ഡൗൺലോഡ് ചെയ്യുക", findMe: "എന്നെ ഇവിടെ കണ്ടെത്തുക", photoAlt: "ഖലീലുല്ലാഹ് ഷെരീഫിന്റെ ചിത്രം", portraitIndex: "സ്വതന്ത്രമായി ചിന്തിക്കുന്നു. ടീമിനൊപ്പം പ്രവർത്തിക്കുന്നു.", location: "ഫ്രണ്ട്‌എൻഡ് എഞ്ചിനീയർ · ചെന്നൈ, ഇന്ത്യ",
  },
  about: {
    kicker: "എന്നെക്കുറിച്ച്", heading: "ശ്രദ്ധാപൂർവം രൂപകൽപ്പന ചെയ്ത ഇന്റർഫേസുകൾ.", headingAccent: "വിശ്വസനീയമായ എഞ്ചിനീയറിംഗ്.",
    bio: "ഞാൻ ഖലീലുല്ലാഹ്; പ്രൊഡക്ഷൻ വെബ് ആപ്ലിക്കേഷനുകൾ രൂപകൽപ്പന ചെയ്യാനും നിർമ്മിക്കാനും പരിശോധിക്കാനും പുറത്തിറക്കാനും 3+ വർഷത്തെ പരിചയമുള്ള ഫ്രണ്ട്‌എൻഡ് എഞ്ചിനീയറാണ്. സങ്കീർണ്ണമായ ഉൽപ്പന്ന ആവശ്യങ്ങളെ വ്യക്തമായ ഇന്റർഫേസുകളായും വീണ്ടും ഉപയോഗിക്കാവുന്ന ഘടകങ്ങളായും പ്രതികരണക്ഷമമായ ഡാറ്റാ സമ്പന്ന അനുഭവങ്ങളായും മാറ്റുന്നത് എനിക്ക് ഇഷ്ടമാണ്.",
    contact: "ബന്ധപ്പെടുക", experience: "പരിചയം", education: "വിദ്യാഭ്യാസം", jobTitle: "ഫ്രണ്ട്‌എൻഡ് ഡെവലപ്പർ", present: "ഒക്ടോ 2023 — ഇപ്പോൾ", company: "Intellizest Solutions · ചെന്നൈ",
    jobDescription: "React, TypeScript, ആധുനിക ഫ്രണ്ട്‌എൻഡ് ആർക്കിടെക്ചർ എന്നിവ ഉപയോഗിച്ച് TurboFusion Analytics Platform നിർമ്മിക്കുന്നു. ഉൽപ്പന്ന ആവശ്യങ്ങളെ വീണ്ടും ഉപയോഗിക്കാവുന്ന ഡാഷ്‌ബോർഡ്, റിപ്പോർട്ടിംഗ് ഇന്റർഫേസുകളാക്കി മാറ്റുന്നു; .NET, Python REST API-കൾ സംയോജിപ്പിക്കുന്നു; ഇന്ററാക്ടീവ് ചാർട്ടുകളുടെ പ്രകടനം മെച്ചപ്പെടുത്തുന്നു; 20+ ക്ലയന്റ് വിന്യാസങ്ങൾക്കായി പ്രതികരണക്ഷമവും വിവിധ ബ്രൗസറുകളിൽ പ്രവർത്തിക്കുന്നതുമായ ഡാറ്റാ ദൃശ്യവൽക്കരണങ്ങൾ നൽകുന്നു. ആവശ്യകതാ അവലോകനങ്ങളിലും കോഡ് അവലോകനങ്ങളിലും CI/CD ഡെമോകളിലും ഉൽപ്പന്ന, ബാക്ക്‌എൻഡ്, നേതൃത്വ ടീമുകളുമായി സഹകരിക്കുന്നു.",
    degree: "കമ്പ്യൂട്ടർ സയൻസിൽ ബി.എസ്‌സി.", undergraduate: "ബിരുദം", studyDates: "2020 — 2023", educationDescription: "കമ്പ്യൂട്ടർ സയൻസ്, സോഫ്റ്റ്‌വെയർ വികസനം, പ്രശ്നപരിഹാരം എന്നിവയിൽ ശക്തമായ അടിത്തറ നേടി.",
  },
  projects: {
    kicker: "തിരഞ്ഞെടുത്ത പ്രവർത്തനങ്ങൾ", heading: "ഉൽപ്പന്ന UI മുതൽ പ്ലാറ്റ്‌ഫോമുകൾ വരെയുള്ള പ്രവർത്തനങ്ങൾ", description: "എന്റെ റെസ്യൂമെയിലും പോർട്ട്ഫോളിയോയിലുമുള്ള പ്രൊഫഷണൽ ഉൽപ്പന്നങ്ങളും സ്വതന്ത്രമായി നിർമ്മിച്ചവയും.",
    project: "പ്രോജക്റ്റ്", professional: "പ്രൊഫഷണൽ പ്രോജക്റ്റ്", independent: "സ്വതന്ത്ര പ്രോജക്റ്റ്", present: "2023 — ഇപ്പോൾ",
    dashboard: "TurboFusion · ഉൽപ്പന്ന UI", components: "ഘടകങ്ങൾ", reusableUi: "വീണ്ടും ഉപയോഗിക്കാവുന്ന UI", deployments: "വിന്യാസങ്ങൾ", clients: "20+ ക്ലയന്റുകൾ", visualization: "ഡാറ്റാ ദൃശ്യവൽക്കരണം", interactiveReporting: "ഇന്ററാക്ടീവ് റിപ്പോർട്ടിംഗ്", illustration: "ഉൽപ്പന്ന UI ചിത്രീകരണം",
    items: [
      { title: "ഡൈനാമിക് ഡാറ്റാ ദൃശ്യവൽക്കരണം", description: "ഉപയോക്താക്കൾ ഫയലുകൾ അപ്‌ലോഡ് ചെയ്ത് ഡാറ്റയെ ഇന്ററാക്ടീവ് ദൃശ്യവൽക്കരണങ്ങളാക്കുന്ന ഡാറ്റാ പര്യവേക്ഷണ അനുഭവം. ഫലങ്ങൾ പരിശോധിക്കാനും ഉപയോഗിക്കാനുമുള്ള പ്രവർത്തനരീതി Excel-ൽ നിന്ന് പ്രചോദനം ഉൾക്കൊണ്ടതാണ്." },
      { title: "അഡ്വാൻസ്ഡ് React Flow ലൈബ്രറി", description: "പ്രവർത്തന പ്രവാഹങ്ങൾ ഡൈനാമിക്കായി രൂപകൽപ്പന ചെയ്യാനും ഘട്ടങ്ങൾ ബന്ധിപ്പിക്കാനും പ്രക്രിയകൾ ദൃശ്യമായി രേഖപ്പെടുത്താനും സഹായിക്കുന്ന വീണ്ടും ഉപയോഗിക്കാവുന്ന ഫ്ലോചാർട്ട് അനുഭവം." },
      { title: "TurboFusion Analytics Platform", description: "ഡാഷ്‌ബോർഡുകൾ നിർമ്മിക്കാനും ബിസിനസ് ഡാറ്റ പര്യവേക്ഷണം ചെയ്യാനുമുള്ള എന്റർപ്രൈസ് അനലിറ്റിക്സ് ഉൽപ്പന്നം. ക്രമീകരിക്കാവുന്ന ഡാഷ്‌ബോർഡുകൾ, ചാർട്ട് ഇടപെടലുകൾ, ഫിൽട്ടറിംഗ്, API റിപ്പോർട്ടിംഗ് എന്നിവയ്ക്കായി വീണ്ടും ഉപയോഗിക്കാവുന്ന React ഇന്റർഫേസുകൾ വികസിപ്പിച്ച് 20+ ക്ലയന്റ് വിന്യാസങ്ങളെ പിന്തുണച്ചു." },
      { title: "തത്സമയ വാഹന ട്രാക്കിംഗും വെയർഹൗസ് ഉൽപ്പന്നവും", description: ".NET REST API-കളുമായി ബന്ധിപ്പിച്ച തത്സമയ പ്രവർത്തന ഇന്റർഫേസ്. വെയർഹൗസ് ലേഔട്ട്, വാഹനങ്ങളുടെ തത്സമയ ടെലിമെട്രി, ചലന ആനിമേഷൻ, ഡൈനാമിക് റൂട്ടുകൾ, മാപ്പ് പോലുള്ള ട്രാക്കിംഗ് എന്നിവ ഇതിലുണ്ട്." },
      { title: "CITAC — ബിസിനസ് ലീഡ്സ് കണക്ഷൻ പ്ലാറ്റ്‌ഫോം", description: "1,000+ ഉപയോക്താക്കളുള്ള പ്രൊഡക്ഷൻ പ്ലാറ്റ്‌ഫോം സ്വതന്ത്രമായി രൂപകൽപ്പന ചെയ്ത് പുറത്തിറക്കി. React ഫ്രണ്ട്‌എൻഡും ഓതന്റിക്കേഷൻ പ്രവാഹങ്ങളും കൈകാര്യം ചെയ്തു; തത്സമയ ആശയവിനിമയവും Firebase Hosting, Vercel വിന്യാസങ്ങളും നടത്തി." },
      { title: "VS Events വെബ്സൈറ്റ്", description: "വ്യക്തിഗത വികസന വെല്ലുവിളിയുടെ ഭാഗമായി React ഉപയോഗിച്ച് പ്രതികരണക്ഷമമായ ഇവന്റ് മാനേജ്മെന്റ് വെബ്സൈറ്റ് രൂപകൽപ്പന ചെയ്ത് നിർമ്മിച്ച് പുറത്തിറക്കി." },
      { title: "Tomato — ഭക്ഷണ ഓർഡർ വെബ് ആപ്പ്", description: "മെനു കാണുന്നത് മുതൽ ഡെലിവറി വിവരങ്ങളും പേയ്മെന്റും വരെ ഉപഭോക്തൃ പ്രവാഹം ഉൾക്കൊള്ളുന്ന മൾട്ടി-പേജ് ഭക്ഷണ ഓർഡർ ആപ്ലിക്കേഷൻ." },
      { title: "പോർട്ട്ഫോളിയോയും മുൻകാല അക്കാദമിക് പ്രോജക്റ്റുകളും", description: "മുൻ പ്രവർത്തനങ്ങളിൽ ഡൈനാമിക് React പോർട്ട്ഫോളിയോ, PHP/MySQL ആശുപത്രി മാനേജ്മെന്റ് സിസ്റ്റം, .NET ബ്ലഡ് ബാങ്ക് മാനേജ്മെന്റ് പ്രോജക്റ്റിനായുള്ള ഫ്രണ്ട്‌എൻഡ് പരിഹാരങ്ങൾ എന്നിവ ഉൾപ്പെടുന്നു." },
    ],
  },
  skills: {
    kicker: "സാങ്കേതിക കഴിവുകൾ", heading: "ഉൽപ്പന്നങ്ങൾ പുറത്തിറക്കാൻ ഉപയോഗിക്കുന്ന ഉപകരണങ്ങൾ", description: "ഫ്രണ്ട്‌എൻഡ് എഞ്ചിനീയറിംഗ്, ദൃശ്യവൽക്കരണം, സംയോജനങ്ങൾ, പരിശോധന, ടീമിനായി കൊണ്ടുവരുന്ന പ്രവർത്തനരീതികൾ.",
    toolkitKicker: "കരിയർ റഫറൻസ്", toolkitHeading: "ആധുനിക JavaScript ടൂൾകിറ്റ്", toolkitDescription: "നിലവിലെ React ജോലികളിൽ സാധാരണയായി ഉപയോഗിക്കുന്ന സാങ്കേതികവിദ്യകളും രീതികളും. ഇത് പഠനത്തിനുള്ള റഫറൻസാണ്; റെസ്യൂമെയിലെ കഴിവുകളിൽ നിന്ന് വേറിട്ടതാണ്.",
    groups: ["പ്രോഗ്രാമിംഗ് ഭാഷകൾ", "React, ഫ്രണ്ട്‌എൻഡ്", "സ്റ്റേറ്റ് മാനേജ്മെന്റും ആർക്കിടെക്ചറും", "API-കളും സംയോജനങ്ങളും", "ഡാറ്റാ ദൃശ്യവൽക്കരണം", "ബാക്ക്‌എൻഡും ഡാറ്റയും", "പരിശോധന, ഉപകരണങ്ങൾ, വിതരണം", "എഞ്ചിനീയറിംഗ് മികവുകൾ"],
    modernGroups: ["React, ആപ്ലിക്കേഷൻ ഡാറ്റ", "പരിശോധന, കോഡ് ഗുണമേന്മ", "ഫ്രണ്ട്‌എൻഡ് വിതരണം"],
  },
  footer: {
    kicker: "ഒരു പ്രോജക്റ്റ് മനസ്സിലുണ്ടോ?", heading: "നമുക്ക് മികച്ചതൊന്ന് നിർമ്മിക്കാം.", description: "നല്ല ഉൽപ്പന്നങ്ങളെയും ഫ്രണ്ട്‌എൻഡ് പ്രവർത്തനങ്ങളെയും കുറിച്ച് സംസാരിക്കാൻ എപ്പോഴും സന്തോഷം.",
    contact: "ബന്ധപ്പെടുക", email: "നിങ്ങളുടെ ഇമെയിൽ", message: "നിങ്ങളുടെ സന്ദേശം", send: "സന്ദേശം അയയ്ക്കുക", sent: "സന്ദേശം വിജയകരമായി അയച്ചു!", failed: "സന്ദേശം അയയ്ക്കാനായില്ല. വീണ്ടും ശ്രമിക്കുക.", rights: "എല്ലാ അവകാശങ്ങളും സംരക്ഷിതം.",
  },
  social: { find: "ഇവിടെ കണ്ടെത്തുക", linkedin: "LinkedIn", github: "GitHub", youtube: "YouTube", facebook: "Facebook", instagram: "Instagram", email: "ഇമെയിൽ" },
};

const telugu = {
  meta: { title: "ఖలీలుల్లా షరీఫ్ | ఫ్రంట్‌ఎండ్ ఇంజినీర్" },
  language: { choose: "భాషను ఎంచుకోండి" },
  nav: { about: "నా గురించి", projects: "ప్రాజెక్టులు", skills: "నైపుణ్యాలు", resume: "రెజ్యూమె", contact: "మాట్లాడుకుందాం", main: "ప్రధాన నావిగేషన్", home: "ఖలీలుల్లా షరీఫ్ హోమ్ పేజీ", role: "ఫ్రంట్‌ఎండ్ ఇంజినీర్" },
  controls: { lightMode: "లైట్ మోడ్‌కు మారండి", darkMode: "డార్క్ మోడ్‌కు మారండి", chooseColor: "థీమ్ రంగును ఎంచుకోండి", customColor: "అనుకూల రంగు" },
  hero: {
    eyebrow: "ఫ్రంట్‌ఎండ్ ఇంజినీర్", specialty: "React నిపుణుడు", title: "నిర్మిస్తున్నాను", accent: " మెరుగైన", ending: " డిజిటల్ అనుభవాలను.",
    intro: "నేను ఖలీలుల్లా షరీఫ్ — క్లిష్టమైన ఆలోచనలను స్పష్టమైన, నమ్మదగిన, ఆనందకరమైన వెబ్ అనుభవాలుగా మార్చే ఫ్రంట్‌ఎండ్ ఇంజినీర్.",
    description: "React, React Native, Node.js, SCSS తదితరాల్లో 2+ సంవత్సరాల అనుభవంతో ఆధునిక UI అనుభవాలను రూపొందించడంపై ఆసక్తి.",
    explore: "నా పనిని చూడండి", download: "రెజ్యూమె డౌన్‌లోడ్ చేయండి", findMe: "ఇక్కడ నన్ను కనుగొనండి", photoAlt: "ఖలీలుల్లా షరీఫ్ చిత్రం", portraitIndex: "స్వతంత్ర ఆలోచనాపరుడు. జట్టు సభ్యుడు.", location: "ఫ్రంట్‌ఎండ్ ఇంజినీర్ · చెన్నై, భారత్",
  },
  about: {
    kicker: "నా గురించి", heading: "ఆలోచనాత్మక ఇంటర్‌ఫేస్‌లు.", headingAccent: "నమ్మదగిన ఇంజినీరింగ్.",
    bio: "నేను ఖలీలుల్లాను; ప్రొడక్షన్ వెబ్ అప్లికేషన్‌లను రూపకల్పన చేయడం, నిర్మించడం, పరీక్షించడం, విడుదల చేయడంలో 3+ సంవత్సరాల అనుభవం ఉన్న ఫ్రంట్‌ఎండ్ ఇంజినీర్‌ను. క్లిష్టమైన ఉత్పత్తి అవసరాలను స్పష్టమైన ఇంటర్‌ఫేస్‌లు, తిరిగి ఉపయోగించగల కాంపోనెంట్‌లు, ప్రతిస్పందించే డేటా-సమృద్ధ అనుభవాలుగా మార్చడం నాకు ఇష్టం.",
    contact: "సంప్రదించండి", experience: "అనుభవం", education: "విద్య", jobTitle: "ఫ్రంట్‌ఎండ్ డెవలపర్", present: "అక్టోబర్ 2023 — ప్రస్తుతం", company: "Intellizest Solutions · చెన్నై",
    jobDescription: "React, TypeScript, ఆధునిక ఫ్రంట్‌ఎండ్ ఆర్కిటెక్చర్‌తో TurboFusion Analytics Platform‌ను నిర్మిస్తున్నాను. ఉత్పత్తి అవసరాలను తిరిగి ఉపయోగించగల డ్యాష్‌బోర్డ్, రిపోర్టింగ్ ఇంటర్‌ఫేస్‌లుగా మారుస్తాను; .NET, Python REST APIలను అనుసంధానిస్తాను; ఇంటరాక్టివ్ చార్ట్‌ల పనితీరును మెరుగుపరుస్తాను; 20+ క్లయింట్ డిప్లాయ్‌మెంట్‌లకు ప్రతిస్పందించే, విభిన్న బ్రౌజర్‌లలో పనిచేసే డేటా విజువలైజేషన్‌లను అందిస్తాను. అవసరాల సమీక్షలు, కోడ్ సమీక్షలు, CI/CD ప్రదర్శనల్లో ఉత్పత్తి, బ్యాకెండ్, నాయకత్వ బృందాలతో కలిసి పనిచేస్తాను.",
    degree: "కంప్యూటర్ సైన్స్‌లో బి.ఎస్సీ.", undergraduate: "అండర్‌గ్రాడ్యుయేట్ డిగ్రీ", studyDates: "2020 — 2023", educationDescription: "కంప్యూటర్ సైన్స్, సాఫ్ట్‌వేర్ అభివృద్ధి, సమస్యల పరిష్కారంలో బలమైన పునాది ఏర్పరచుకున్నాను.",
  },
  projects: {
    kicker: "ఎంచుకున్న పనులు", heading: "ఉత్పత్తి UI నుంచి ప్లాట్‌ఫారమ్‌ల వరకు ఎంచుకున్న పనులు", description: "నా రెజ్యూమె, పోర్ట్‌ఫోలియోలోని వృత్తిపరమైన ఉత్పత్తులు మరియు స్వతంత్ర నిర్మాణాలు.",
    project: "ప్రాజెక్ట్", professional: "వృత్తిపరమైన ప్రాజెక్ట్", independent: "స్వతంత్ర ప్రాజెక్ట్", present: "2023 — ప్రస్తుతం",
    dashboard: "TurboFusion · ఉత్పత్తి UI", components: "కాంపోనెంట్‌లు", reusableUi: "తిరిగి ఉపయోగించగల UI", deployments: "డిప్లాయ్‌మెంట్‌లు", clients: "20+ క్లయింట్లు", visualization: "డేటా విజువలైజేషన్", interactiveReporting: "ఇంటరాక్టివ్ రిపోర్టింగ్", illustration: "ఉత్పత్తి UI దృశ్యరూపం",
    items: [
      { title: "డైనమిక్ డేటా విజువలైజేషన్", description: "వినియోగదారులు ఫైళ్లను అప్‌లోడ్ చేసి తమ డేటాను ఇంటరాక్టివ్ విజువలైజేషన్‌లుగా మార్చుకునే డేటా అన్వేషణ అనుభవం. ఫలితాలను సమీక్షించి వాటితో పనిచేసే విధానం Excel నుంచి ప్రేరణ పొందింది." },
      { title: "అధునాతన React Flow లైబ్రరీ", description: "ఆపరేషనల్ వర్క్‌ఫ్లోలను డైనమిక్‌గా రూపకల్పన చేయడానికి, దశలను అనుసంధానించడానికి, ప్రక్రియలను దృశ్యరూపంలో మ్యాప్ చేయడానికి తిరిగి ఉపయోగించగల ఫ్లోచార్ట్ అనుభవం." },
      { title: "TurboFusion Analytics Platform", description: "డ్యాష్‌బోర్డ్‌లను రూపొందించడానికి, వ్యాపార డేటాను అన్వేషించడానికి ఎంటర్‌ప్రైజ్ అనలిటిక్స్ ఉత్పత్తి. కాన్ఫిగర్ చేయగల డ్యాష్‌బోర్డ్‌లు, చార్ట్ పరస్పర చర్యలు, ఫిల్టరింగ్, API ఆధారిత రిపోర్టింగ్ కోసం తిరిగి ఉపయోగించగల React ఇంటర్‌ఫేస్‌లను అభివృద్ధి చేసి 20+ క్లయింట్ డిప్లాయ్‌మెంట్‌లకు మద్దతిచ్చాను." },
      { title: "లైవ్ వాహన ట్రాకింగ్ మరియు గిడ్డంగి ఉత్పత్తి", description: ".NET REST APIలకు అనుసంధానమైన రియల్‌టైమ్ ఆపరేషన్స్ ఇంటర్‌ఫేస్. ఇందులో గిడ్డంగి లేఅవుట్, లైవ్ వాహన టెలిమెట్రీ, యానిమేటెడ్ వాహన కదలిక, డైనమిక్ మార్గాలు, మ్యాప్ తరహా ట్రాకింగ్ ఉన్నాయి." },
      { title: "CITAC — వ్యాపార లీడ్స్ కనెక్షన్ ప్లాట్‌ఫారమ్", description: "1,000+ వినియోగదారులకు సేవలందించే ప్రొడక్షన్ ప్లాట్‌ఫారమ్‌ను స్వతంత్రంగా రూపకల్పన చేసి అందించాను. React ఫ్రంట్‌ఎండ్, ఆథెంటికేషన్ ప్రవాహాలకు బాధ్యత వహించడంతో పాటు రియల్‌టైమ్ కమ్యూనికేషన్, Firebase Hosting మరియు Vercel డిప్లాయ్‌మెంట్‌లు చేశాను." },
      { title: "VS Events వెబ్‌సైట్", description: "వ్యక్తిగత అభివృద్ధి సవాలుగా Reactతో ప్రతిస్పందించే ఈవెంట్ మేనేజ్‌మెంట్ వెబ్‌సైట్‌ను రూపకల్పన చేసి, నిర్మించి, డిప్లాయ్ చేశాను." },
      { title: "Tomato — ఆహార ఆర్డర్ వెబ్ యాప్", description: "మెనూ బ్రౌజింగ్ నుంచి డెలివరీ వివరాలు, చెల్లింపు వరకు కస్టమర్ ప్రయాణాన్ని కలిగిన బహుళ పేజీల ఆహార ఆర్డర్ అప్లికేషన్." },
      { title: "పోర్ట్‌ఫోలియో మరియు గత విద్యా ప్రాజెక్టులు", description: "గత పనుల్లో డైనమిక్ React పోర్ట్‌ఫోలియో, PHP/MySQL హాస్పిటల్ మేనేజ్‌మెంట్ సిస్టమ్, .NET బ్లడ్ బ్యాంక్ మేనేజ్‌మెంట్ ప్రాజెక్ట్‌కు ఫ్రంట్‌ఎండ్ పరిష్కారాలు ఉన్నాయి." },
    ],
  },
  skills: {
    kicker: "సాంకేతిక నైపుణ్యాలు", heading: "ఉత్పత్తులను విడుదల చేయడానికి ఉపయోగించే సాధనాలు", description: "ఫ్రంట్‌ఎండ్ ఇంజినీరింగ్, విజువలైజేషన్, ఇంటిగ్రేషన్‌లు, టెస్టింగ్, బృందానికి అందించే పద్ధతులు.",
    toolkitKicker: "కెరీర్ సూచన", toolkitHeading: "ఆధునిక JavaScript టూల్‌కిట్", toolkitDescription: "ప్రస్తుత React ఉద్యోగాల్లో సాధారణంగా ఉపయోగించే సాంకేతికతలు, పద్ధతులు. ఇది నేర్చుకోవడానికి సూచన మాత్రమే; నా రెజ్యూమెలోని నైపుణ్యాల నుండి వేరు.",
    groups: ["ప్రోగ్రామింగ్ భాషలు", "React మరియు ఫ్రంట్‌ఎండ్", "స్టేట్ నిర్వహణ మరియు ఆర్కిటెక్చర్", "APIలు మరియు ఇంటిగ్రేషన్‌లు", "డేటా విజువలైజేషన్", "బ్యాకెండ్ మరియు డేటా", "టెస్టింగ్, సాధనాలు మరియు డెలివరీ", "ఇంజినీరింగ్ బలాలు"],
    modernGroups: ["React మరియు అప్లికేషన్ డేటా", "టెస్టింగ్ మరియు కోడ్ నాణ్యత", "ఫ్రంట్‌ఎండ్ డెలివరీ"],
  },
  footer: {
    kicker: "మీకు ప్రాజెక్ట్ ఉందా?", heading: "గొప్పదాన్ని నిర్మిద్దాం.", description: "ఆలోచనాత్మక ఉత్పత్తులు, ఫ్రంట్‌ఎండ్ పనుల గురించి మాట్లాడటం ఎప్పుడూ ఆనందంగా ఉంటుంది.",
    contact: "సంప్రదించండి", email: "మీ ఈమెయిల్", message: "మీ సందేశం", send: "సందేశం పంపండి", sent: "సందేశం విజయవంతంగా పంపబడింది!", failed: "సందేశం పంపలేకపోయాం. దయచేసి మళ్లీ ప్రయత్నించండి.", rights: "అన్ని హక్కులూ ప్రత్యేకించబడ్డాయి.",
  },
  social: { find: "ఇక్కడ కనుగొనండి", linkedin: "LinkedIn", github: "GitHub", youtube: "YouTube", facebook: "Facebook", instagram: "Instagram", email: "ఈమెయిల్" },
};

const resources = {
  en: { translation: english },
  hi: { translation: hindi },
  ta: { translation: tamil },
  ur: { translation: urdu },
  ar: { translation: arabic },
  ml: { translation: malayalam },
  te: { translation: telugu },
};

const languageDirections = { ar: "rtl", ur: "rtl" };

const updateDocumentLanguage = (language) => {
  const baseLanguage = language.split("-")[0];
  document.documentElement.lang = baseLanguage;
  document.documentElement.dir = languageDirections[baseLanguage] || "ltr";
  document.title = i18n.t("meta.title", { lng: baseLanguage });
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: Object.keys(resources),
    fallbackLng: "en",
    load: "languageOnly",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

i18n.on("initialized", (options) => {
  updateDocumentLanguage(i18n.resolvedLanguage || i18n.language || options.lng || "en");
});
i18n.on("languageChanged", updateDocumentLanguage);
if (i18n.isInitialized) {
  updateDocumentLanguage(i18n.resolvedLanguage || i18n.language || "en");
}

export default i18n;
