import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip: move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Home": "Home",
      "My Work": "My Work",
      "My Skill": "My Skill",
      "About Me": "About Me",
      "Contact Me": "Contact Me",
      "My Portfolio": "My Portfolio",
      "Hey, I am Ujjawal Kumar Thakur I make responsive websites.": "Hey, I am Ujjawal Kumar Thakur I make responsive websites.",
      "Skills": "Skills",
      "Frontend": "Frontend",
      "Backend": "Backend",
      "Tools": "Tools",
      "Languages": "Languages",
      "My Work": "My Work",
      "Blog Application": "Blog Application",
      "I created the blog application by using html,css,javascript and react for front end. MongoDB for the backend": "I created the blog application by using html,css,javascript and react for front end. MongoDB for the backend",
      "Coding Website": "Coding Website",
      "It is the coding work for the different projects": "It is the coding work for the different projects",
      "Library Management System": "Library Management System",
      "It is the library management system for managing the books in the library of any institution": "It is the library management system for managing the books in the library of any institution",
      "Project Structure": "Project Structure",
      "It is the structure of any project selected randomly": "It is the structure of any project selected randomly",
      "Currency Converter": "Currency Converter",
      "It is the currency converter project which converts one currency to another currency": "It is the currency converter project which converts one currency to another currency",
      "About Me": "About Me",
      "My name is Ujjawal Kumar Thakur, and I am a dedicated FrontEnd Web Developer skilled in creating responsive, user-friendly websites using HTML, CSS, JavaScript, and modern frameworks. I am passionate about delivering seamless user experiences and staying updated with the latest web technologies. 😊": "My name is Ujjawal Kumar Thakur, and I am a dedicated FrontEnd Web Developer skilled in creating responsive, user-friendly websites using HTML, CSS, JavaScript, and modern frameworks. I am passionate about delivering seamless user experiences and staying updated with the latest web technologies. 😊",
      "© 2024 Ujjawal Kumar Thakur. All rights reserved.": "© 2024 Ujjawal Kumar Thakur. All rights reserved."
    }
  },
  ne: {
    translation: {
      "Home": "गृह",
      "My Work": "मेरो काम",
      "My Skill": "मेरो कौशल",
      "About Me": "मेरो बारेमा",
      "Contact Me": "मलाई सम्पर्क गर्नुहोस्",
      "My Portfolio": "मेरो पोर्टफोलियो",
      "Hey, I am Ujjawal Kumar Thakur I make responsive websites.": "नमस्ते, म उज्जवल कुमार ठाकुर हुँ। म प्रतिक्रियाशील वेबसाइटहरू बनाउँछु।",
      "Skills": "कौशलहरू",
      "Frontend": "फ्रन्टएन्ड",
      "Backend": "ब्याकएन्ड",
      "Tools": "उपकरणहरू",
      "Languages": "भाषाहरू",
      "My Work": "मेरो काम",
      "Blog Application": "ब्लग एप्लिकेसन",
      "I created the blog application by using html,css,javascript and react for front end. MongoDB for the backend": "मैले ब्लग एप्लिकेसन html, css, javascript र react प्रयोग गरेर फ्रन्टएन्डका लागि बनाएँ। ब्याकएन्डका लागि MongoDB।",
      "Coding Website": "कोडिङ वेबसाइट",
      "It is the coding work for the different projects": "यो विभिन्न परियोजनाहरूका लागि कोडिङ काम हो।",
      "Library Management System": "पुस्तकालय व्यवस्थापन प्रणाली",
      "It is the library management system for managing the books in the library of any institution": "यो कुनै पनि संस्थाको पुस्तकालयमा पुस्तकहरू व्यवस्थापन गर्नका लागि पुस्तकालय व्यवस्थापन प्रणाली हो।",
      "Project Structure": "परियोजना संरचना",
      "It is the structure of any project selected randomly": "यो कुनै पनि परियोजना जुन अनियमित रूपमा चयन गरिएको होको संरचना हो।",
      "Currency Converter": "मुद्रा परिवर्तक",
      "It is the currency converter project which converts one currency to another currency": "यो मुद्रा परिवर्तक परियोजना हो जसले एक मुद्रालाई अर्को मुद्रामा परिवर्तन गर्दछ।",
      "About Me": "मेरो बारेमा",
      "My name is Ujjawal Kumar Thakur, and I am a dedicated FrontEnd Web Developer skilled in creating responsive, user-friendly websites using HTML, CSS, JavaScript, and modern frameworks. I am passionate about delivering seamless user experiences and staying updated with the latest web technologies. 😊": "मेरो नाम उज्जवल कुमार ठाकुर हो, र म एक समर्पित फ्रन्टएन्ड वेब डेभलपर हुँ जसले HTML, CSS, JavaScript र आधुनिक फ्रेमवर्कहरू प्रयोग गरेर प्रतिक्रियाशील, प्रयोगकर्ता-अनुकूल वेबसाइटहरू सिर्जना गर्न कौशल राख्छु। म निर्बाध प्रयोगकर्ता अनुभवहरू प्रदान गर्न र नवीनतम वेब प्रविधिहरूसँग अद्यतित रहन उत्साही छु। 😊",
      "© 2024 Ujjawal Kumar Thakur. All rights reserved.": "© २०२४ उज्जवल कुमार ठाकुर। सबै अधिकार सुरक्षित।",
      "Show More": "थप देखाउनुहोस्",
      "Show Less": "कम देखाउनुहोस्"
    }
  }
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: 'en', // language to use, more info here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already does escaping
    }
  });

export default i18n;