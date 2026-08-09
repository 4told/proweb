import { t } from '../../i18.ts';

type ContactMethod = 'phone' | 'telegram' | 'email';

interface ContactMethodConfig {
  type: 'tel' | 'text' | 'email';
  inputMode: 'tel' | 'text' | 'email';
  autocomplete: string;
  placeholderKey: string;
}

const CLOSE_ANIMATION_DURATION = 600;
const DEFAULT_PHONE_CODE = '+380';

const contactMethodConfig: Record<ContactMethod, ContactMethodConfig> = {
  phone: {
    type: 'tel',
    inputMode: 'tel',
    autocomplete: 'tel',
    placeholderKey: 'contact.contactPlaceholders.phone',
  },

  telegram: {
    type: 'text',
    inputMode: 'text',
    autocomplete: 'off',
    placeholderKey: 'contact.contactPlaceholders.telegram',
  },

  email: {
    type: 'email',
    inputMode: 'email',
    autocomplete: 'email',
    placeholderKey: 'contact.contactPlaceholders.email',
  },
};

export function renderContact(): string {
  return `
<section class="contact py-5 min-vh-100">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <h2
          class="display-1 py-4 fade-up"
          data-i18="contact.title"
        ></h2>

        <p
          class="lead mb-4 fade-up"
          data-i18="contact.subtitle"
        ></p>

        <button
          class="btn contact-open px-4 py-3 fade-up"
          type="button"
          data-i18="contact.button"
        ></button>
      </div>
    </div>
  </div>

  <div
    class="modal"
    role="dialog"
    aria-modal="true"
    aria-hidden="true"
    aria-labelledby="contact-form-title"
  >
    <div class="panel">
      <button class="close" type="button" aria-label="Close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path
            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 1 1-.708-.708L7.293 8 2.146 2.854"
          />
        </svg>
      </button>

      <div class="panel-content">
        <h2
          id="contact-form-title"
          class="display-6"
          data-i18="contact.formTitle"
        ></h2>

        <form class="form" novalidate>
          <div class="field">
            <input
              class="name-input"
              name="name"
              type="text"
              autocomplete="name"
              required
              aria-describedby="contact-name-error"
              data-i18-placeholder="contact.name"
            />

            <span
              class="field-error name-error"
              id="contact-name-error"
              aria-live="polite"
            ></span>
          </div>

          <div class="field">
            <div class="contact-method">
              <div
                class="select-control contact-method-select-control"
              >
                <select
                  class="contact-method-select"
                  name="contactMethod"
                  required
                >
                  <option
                    value="phone"
                    data-i18="contact.contactMethods.phone"
                  ></option>

                  <option
                    value="telegram"
                    data-i18="contact.contactMethods.telegram"
                  ></option>

                  <option
                    value="email"
                    data-i18="contact.contactMethods.email"
                  ></option>
                </select>
              </div>

              <input
                class="contact-value"
                name="contactValue"
                type="tel"
                inputmode="tel"
                autocomplete="tel"
                required
                aria-describedby="contact-value-error"
                data-i18-placeholder="contact.contactPlaceholders.phone"
              />
            </div>

            <span
              class="field-error contact-value-error"
              id="contact-value-error"
              aria-live="polite"
            ></span>
          </div>

          <div class="field">
            <div class="select-control">
              <select
                class="project-type"
                name="projectType"
                required
                aria-describedby="contact-project-error"
              >
                <option
                  value=""
                  selected
                  disabled
                  data-i18="contact.projectType"
                ></option>

                <option
                  value="new-website"
                  data-i18="contact.projectTypes.newWebsite"
                ></option>

                <option
                  value="redesign"
                  data-i18="contact.projectTypes.redesign"
                ></option>

                <option
                  value="landing"
                  data-i18="contact.projectTypes.landing"
                ></option>

                <option
                  value="ecommerce"
                  data-i18="contact.projectTypes.ecommerce"
                ></option>

                <option
                  value="marketing"
                  data-i18="contact.projectTypes.marketing"
                ></option>

                <option
                  value="support"
                  data-i18="contact.projectTypes.support"
                ></option>

                <option
                  value="not-sure"
                  data-i18="contact.projectTypes.notSure"
                ></option>
              </select>
            </div>

            <span
              class="field-error project-type-error"
              id="contact-project-error"
              aria-live="polite"
            ></span>
          </div>

          <div class="field">
            <textarea
              class="message-input"
              name="message"
              rows="3"
              data-i18-placeholder="contact.message"
            ></textarea>
          </div>

          <input
            class="lead-context"
            name="leadContext"
            type="hidden"
            value=""
          />

          <button
            class="btn submit px-4 py-3"
            type="submit"
            data-i18="contact.send"
          ></button>
        </form>
      </div>
    </div>
  </div>
</section>
`;
}

export function initContact(): void {
  const contact = document.querySelector<HTMLElement>('.contact');
  const modal = contact?.querySelector<HTMLElement>('.modal');
  const form = contact?.querySelector<HTMLFormElement>('.form');

  const openBtn = contact?.querySelector<HTMLButtonElement>('.contact-open');

  const closeBtn = contact?.querySelector<HTMLButtonElement>('.close');

  const nameInput = contact?.querySelector<HTMLInputElement>('.name-input');

  const contactMethodField =
    contact?.querySelector<HTMLElement>('.contact-method');

  const contactMethodSelect = contact?.querySelector<HTMLSelectElement>(
    '.contact-method-select'
  );

  const contactValueInput =
    contact?.querySelector<HTMLInputElement>('.contact-value');

  const projectTypeSelect =
    contact?.querySelector<HTMLSelectElement>('.project-type');

  const messageInput =
    contact?.querySelector<HTMLTextAreaElement>('.message-input');

  const leadContextInput =
    contact?.querySelector<HTMLInputElement>('.lead-context');

  const nameError = contact?.querySelector<HTMLElement>('.name-error');

  const contactValueError = contact?.querySelector<HTMLElement>(
    '.contact-value-error'
  );

  const projectTypeError = contact?.querySelector<HTMLElement>(
    '.project-type-error'
  );

  const externalOpenButtons = document.querySelectorAll<HTMLButtonElement>(
    '[data-open-contact]'
  );

  if (
    !contact ||
    !modal ||
    !form ||
    !openBtn ||
    !closeBtn ||
    !nameInput ||
    !contactMethodField ||
    !contactMethodSelect ||
    !contactValueInput ||
    !projectTypeSelect ||
    !messageInput ||
    !leadContextInput ||
    !nameError ||
    !contactValueError ||
    !projectTypeError
  ) {
    return;
  }

  let formWasSubmitted = false;
  let closeTimer: number | undefined;

  const getContactMethod = (): ContactMethod => {
    const value = contactMethodSelect.value;

    if (value === 'phone' || value === 'telegram' || value === 'email') {
      return value;
    }

    return 'phone';
  };

  const getPhoneDigits = (value: string): string => {
    return value.replace(/\D/g, '');
  };

  const isDefaultPhoneCode = (value: string): boolean => {
    return getPhoneDigits(value) === '380';
  };

  const hasMeaningfulContactValue = (): boolean => {
    const method = getContactMethod();
    const value = contactValueInput.value.trim();

    if (!value) {
      return false;
    }

    if (method === 'phone') {
      return !isDefaultPhoneCode(value);
    }

    return true;
  };

  const setControlError = (
    control: HTMLInputElement | HTMLSelectElement,
    errorElement: HTMLElement,
    message: string
  ): void => {
    const hasError = Boolean(message);

    control.classList.toggle('is-invalid', hasError);
    control.setAttribute('aria-invalid', String(hasError));
    errorElement.textContent = message;
  };

  const setContactError = (message: string): void => {
    const hasError = Boolean(message);

    contactMethodField.classList.toggle('is-invalid', hasError);
    contactValueInput.setAttribute('aria-invalid', String(hasError));
    contactValueError.textContent = message;
  };

  const moveCaretToEnd = (): void => {
    const valueLength = contactValueInput.value.length;

    contactValueInput.setSelectionRange(valueLength, valueLength);
  };

  const updateContactInput = (clearValue: boolean): void => {
    const method = getContactMethod();
    const config = contactMethodConfig[method];

    if (clearValue) {
      contactValueInput.value = '';
      setContactError('');
    }

    contactValueInput.type = config.type;
    contactValueInput.inputMode = config.inputMode;

    contactValueInput.setAttribute('autocomplete', config.autocomplete);

    contactValueInput.setAttribute(
      'data-i18-placeholder',
      config.placeholderKey
    );

    contactValueInput.placeholder = t(config.placeholderKey);

    contactMethodSelect.setAttribute('aria-label', t('contact.contactMethod'));
  };

  const clearValidation = (): void => {
    setControlError(nameInput, nameError, '');
    setContactError('');
    setControlError(projectTypeSelect, projectTypeError, '');

    formWasSubmitted = false;
  };

  const resetForm = (): void => {
    form.reset();

    contactMethodSelect.value = 'phone';
    contactValueInput.value = '';
    leadContextInput.value = '';

    clearValidation();
    updateContactInput(false);
  };

  const validateName = (): boolean => {
    const isValid = nameInput.value.trim().length > 0;

    setControlError(
      nameInput,
      nameError,
      isValid ? '' : t('contact.validation.nameRequired')
    );

    return isValid;
  };

  const validatePhone = (value: string): boolean => {
    const digits = getPhoneDigits(value);

    if (digits.startsWith('380')) {
      return /^380[1-9]\d{8}$/.test(digits);
    }

    return digits.length >= 10 && digits.length <= 15;
  };

  const validateEmail = (value: string): boolean => {
    const normalizedValue = value.trim().toLowerCase();

    const emailPattern =
      /^[a-z0-9._%+-]+@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+$/i;

    if (!emailPattern.test(normalizedValue)) {
      return false;
    }

    const domain = normalizedValue.split('@')[1];

    const commonDomainTypos = new Set([
      'gmail.com.com',
      'gmail.con',
      'gmail.co',
      'gmai.com',
      'gmial.com',
      'googlemail.com.com',
      'outlook.com.com',
      'hotmail.com.com',
      'yahoo.com.com',
    ]);

    return !commonDomainTypos.has(domain);
  };

  const validateTelegram = (value: string): boolean => {
    const normalizedValue = value
      .trim()
      .replace(/^https?:\/\/(?:www\.)?t\.me\//i, '@')
      .replace(/\/$/, '');

    const usernamePattern = /^@[a-zA-Z0-9_]{5,32}$/;

    return (
      usernamePattern.test(normalizedValue) || validatePhone(normalizedValue)
    );
  };

  const validateContactValue = (): boolean => {
    const method = getContactMethod();
    const value = contactValueInput.value.trim();

    if (!hasMeaningfulContactValue()) {
      setContactError(t('contact.validation.contactRequired'));
      return false;
    }

    if (method === 'phone' && !validatePhone(value)) {
      setContactError(t('contact.validation.phoneInvalid'));
      return false;
    }

    if (method === 'telegram' && !validateTelegram(value)) {
      setContactError(t('contact.validation.telegramInvalid'));
      return false;
    }

    if (method === 'email' && !validateEmail(value)) {
      setContactError(t('contact.validation.emailInvalid'));
      return false;
    }

    setContactError('');

    return true;
  };

  const validateProjectType = (): boolean => {
    const isValid = Boolean(projectTypeSelect.value);

    setControlError(
      projectTypeSelect,
      projectTypeError,
      isValid ? '' : t('contact.validation.projectTypeRequired')
    );

    return isValid;
  };

  const validateForm = (): boolean => {
    const validationResults = [
      validateName(),
      validateContactValue(),
      validateProjectType(),
    ];

    const isValid = validationResults.every(Boolean);

    if (!isValid) {
      const invalidControl = [
        nameInput,
        contactValueInput,
        projectTypeSelect,
      ].find((control) => control.getAttribute('aria-invalid') === 'true');

      invalidControl?.focus();
    }

    return isValid;
  };

  const updateVisibleValidationMessages = (): void => {
    if (nameError.textContent) {
      validateName();
    }

    if (contactValueError.textContent) {
      validateContactValue();
    }

    if (projectTypeError.textContent) {
      validateProjectType();
    }
  };

  const openModal = (): void => {
    if (closeTimer !== undefined) {
      window.clearTimeout(closeTimer);
      closeTimer = undefined;
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const openContextualModal = (button: HTMLButtonElement): void => {
    resetForm();

    const projectType = button.dataset.projectType;
    const leadContext = button.dataset.leadContext;

    if (projectType) {
      const optionExists = Array.from(projectTypeSelect.options).some(
        (option) => option.value === projectType
      );

      if (optionExists) {
        projectTypeSelect.value = projectType;
      }
    }

    leadContextInput.value = leadContext ?? '';

    openModal();
  };

  const closeModal = (): void => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');

    if (closeTimer !== undefined) {
      window.clearTimeout(closeTimer);
    }

    closeTimer = window.setTimeout(() => {
      resetForm();
      document.body.style.overflow = '';
      closeTimer = undefined;
    }, CLOSE_ANIMATION_DURATION);
  };

  contactMethodSelect.addEventListener('change', () => {
    updateContactInput(true);

    if (formWasSubmitted) {
      validateContactValue();
    }

    contactValueInput.focus();
  });

  contactValueInput.addEventListener('focus', () => {
    if (getContactMethod() === 'phone' && !contactValueInput.value.trim()) {
      contactValueInput.value = DEFAULT_PHONE_CODE;
      moveCaretToEnd();
    }
  });

  contactValueInput.addEventListener('blur', () => {
    const method = getContactMethod();

    if (method === 'phone' && isDefaultPhoneCode(contactValueInput.value)) {
      contactValueInput.value = '';

      if (!formWasSubmitted) {
        setContactError('');
        return;
      }
    }

    if (formWasSubmitted || hasMeaningfulContactValue()) {
      validateContactValue();
    }
  });

  nameInput.addEventListener('input', () => {
    if (formWasSubmitted || nameError.textContent) {
      validateName();
    }
  });

  contactValueInput.addEventListener('input', () => {
    if (formWasSubmitted || contactValueError.textContent) {
      validateContactValue();
    }
  });

  projectTypeSelect.addEventListener('change', () => {
    if (formWasSubmitted || projectTypeError.textContent) {
      validateProjectType();
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    formWasSubmitted = true;

    if (!validateForm()) {
      return;
    }

    const formData = {
      name: nameInput.value.trim(),
      contactMethod: getContactMethod(),
      contactValue: contactValueInput.value.trim(),
      projectType: projectTypeSelect.value,
      message: messageInput.value.trim(),
      leadContext: leadContextInput.value,
    };

    form.dispatchEvent(
      new CustomEvent('contact:submit', {
        bubbles: true,
        detail: formData,
      })
    );
  });

  openBtn.addEventListener('click', () => {
    resetForm();
    openModal();
  });

  externalOpenButtons.forEach((button) => {
    button.addEventListener('click', () => {
      openContextualModal(button);
    });
  });

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  window.addEventListener('app:languagechange', () => {
    updateContactInput(false);
    updateVisibleValidationMessages();
  });

  updateContactInput(false);
}
