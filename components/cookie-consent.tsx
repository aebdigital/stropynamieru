"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  consentedAt: string;
};

type DraftPreferences = Omit<CookiePreferences, "consentedAt">;

type CookieConsentContextValue = {
  openSettings: () => void;
};

const STORAGE_KEY = "stropy-cookie-preferences";

const defaultDraft: DraftPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

function persistPreferences(nextPreferences: CookiePreferences) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextPreferences));
  window.dispatchEvent(
    new CustomEvent("cookie-preferences-updated", {
      detail: nextPreferences,
    }),
  );
}

function createSavedPreferences(
  draft: DraftPreferences,
): CookiePreferences {
  return {
    ...draft,
    necessary: true,
    consentedAt: new Date().toISOString(),
  };
}

type ToggleCardProps = {
  description: string;
  disabled?: boolean;
  label: string;
  onToggle: () => void;
  value: boolean;
};

function ToggleCard({
  description,
  disabled = false,
  label,
  onToggle,
  value,
}: ToggleCardProps) {
  return (
    <div className="cookie-toggle-card">
      <div>
        <h4>{label}</h4>
        <p>{description}</p>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={value}
        aria-label={label}
        className={`cookie-toggle ${value ? "is-on" : ""}`}
        disabled={disabled}
        onClick={onToggle}
      >
        <span className="cookie-toggle-thumb" />
      </button>
    </div>
  );
}

export function CookieConsentProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [bannerVisible, setBannerVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [preferences, setPreferences] = useState<DraftPreferences>(defaultDraft);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const storedValue = localStorage.getItem(STORAGE_KEY);

      if (!storedValue) {
        setBannerVisible(true);
        return;
      }

      try {
        const parsed = JSON.parse(storedValue) as Partial<CookiePreferences>;
        setPreferences({
          necessary: true,
          analytics: Boolean(parsed.analytics),
          marketing: Boolean(parsed.marketing),
        });
      } catch {
        setBannerVisible(true);
      }
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    document.body.style.overflow = settingsOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [settingsOpen]);

  const savePreferences = (nextDraft: DraftPreferences) => {
    const nextPreferences = createSavedPreferences(nextDraft);
    setPreferences(nextDraft);
    persistPreferences(nextPreferences);
    setBannerVisible(false);
    setSettingsOpen(false);
  };

  const contextValue = useMemo<CookieConsentContextValue>(
    () => ({
      openSettings: () => setSettingsOpen(true),
    }),
    [],
  );

  return (
    <CookieConsentContext.Provider value={contextValue}>
      {children}

      {bannerVisible ? (
        <div className="cookie-banner" role="dialog" aria-live="polite">
          <div className="cookie-banner__content">
            <div>
              <p className="cookie-banner__eyebrow">Cookies</p>
              <h3>Používame cookies pre lepší výkon webu</h3>
              <p>
                Nevyhnutné cookies držia web funkčný. Voliteľné analytické a
                marketingové cookies nám pomáhajú zlepšovať obsah a kampane.
              </p>
            </div>

            <div className="cookie-banner__actions">
              <button
                type="button"
                className="cookie-text-link"
                onClick={() => setSettingsOpen(true)}
              >
                Nastavenia
              </button>
              <button
                type="button"
                className="cookie-secondary-btn"
                onClick={() => savePreferences(defaultDraft)}
              >
                Len nevyhnutné
              </button>
              <button
                type="button"
                className="cookie-primary-btn"
                onClick={() =>
                  savePreferences({
                    necessary: true,
                    analytics: true,
                    marketing: true,
                  })
                }
              >
                Prijať všetko
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {settingsOpen ? (
        <>
          <button
            type="button"
            aria-label="Zatvoriť nastavenia cookies"
            className="cookie-modal-backdrop"
            onClick={() => setSettingsOpen(false)}
          />

          <div
            className="cookie-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
          >
            <div className="cookie-modal__header">
              <div>
                <p className="cookie-banner__eyebrow">Nastavenia cookies</p>
                <h3 id="cookie-settings-title">Spravujte súhlas po kategóriách</h3>
              </div>

              <button
                type="button"
                className="cookie-close-btn"
                onClick={() => setSettingsOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="cookie-modal__body">
              <ToggleCard
                disabled
                description="Tieto cookies sú potrebné pre základné fungovanie webu, formulárov a navigácie."
                label="Nevyhnutné"
                onToggle={() => undefined}
                value
              />
              <ToggleCard
                description="Pomáhajú nám merať návštevnosť, výkon stránok a zlepšovať obsah."
                label="Analytické"
                onToggle={() =>
                  setPreferences((current) => ({
                    ...current,
                    analytics: !current.analytics,
                  }))
                }
                value={preferences.analytics}
              />
              <ToggleCard
                description="Umožňujú personalizovať reklamné kampane a remarketing v budúcnosti."
                label="Marketingové"
                onToggle={() =>
                  setPreferences((current) => ({
                    ...current,
                    marketing: !current.marketing,
                  }))
                }
                value={preferences.marketing}
              />
            </div>

            <div className="cookie-modal__actions">
              <button
                type="button"
                className="cookie-secondary-btn"
                onClick={() => savePreferences(defaultDraft)}
              >
                Zamietnuť voliteľné
              </button>
              <button
                type="button"
                className="cookie-primary-btn"
                onClick={() => savePreferences(preferences)}
              >
                Uložiť nastavenia
              </button>
            </div>
          </div>
        </>
      ) : null}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);

  if (!context) {
    throw new Error("useCookieConsent must be used inside CookieConsentProvider.");
  }

  return context;
}
