const translations = window.portfolioTranslations;
const supportedLanguages = new Set(Object.keys(translations));
const languageButtons = document.querySelectorAll("[data-language]");

function getValue(source, path) {
  return path.split(".").reduce((value, key) => value?.[key], source);
}

function translateElements(language) {
  const dictionary = translations[language];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getValue(dictionary, element.dataset.i18n);
    if (typeof value === "string") element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = getValue(dictionary, element.dataset.i18nAriaLabel);
    if (typeof value === "string") element.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = getValue(dictionary, element.dataset.i18nAlt);
    if (typeof value === "string") element.setAttribute("alt", value);
  });

  document.title = dictionary.meta.title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", dictionary.meta.description);
  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute("content", dictionary.meta.ogDescription);
}

function saveLanguage(language) {
  try {
    localStorage.setItem("portfolio-language", language);
  } catch {
    // The language still works if storage is unavailable.
  }
}

function applyLanguage(language, updateUrl = false) {
  if (!supportedLanguages.has(language)) return;

  document.documentElement.lang = language;
  translateElements(language);

  languageButtons.forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.language === language),
    );
  });

  saveLanguage(language);

  if (updateUrl) {
    try {
      const url = new URL(window.location.href);
      if (language === "en") url.searchParams.delete("lang");
      else url.searchParams.set("lang", language);
      history.replaceState({}, "", url);
    } catch {
      // Local file previews can restrict History API updates.
    }
  }
}

function getInitialLanguage() {
  const urlLanguage = new URLSearchParams(window.location.search).get("lang");
  if (supportedLanguages.has(urlLanguage)) return urlLanguage;

  try {
    const savedLanguage = localStorage.getItem("portfolio-language");
    if (supportedLanguages.has(savedLanguage)) return savedLanguage;
  } catch {
    // Fall back to the browser language.
  }

  return navigator.language.toLowerCase().startsWith("sv") ? "sv" : "en";
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () =>
    applyLanguage(button.dataset.language, true),
  );
});

applyLanguage(getInitialLanguage());

document.querySelector("#year").textContent = new Date().getFullYear();

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}
