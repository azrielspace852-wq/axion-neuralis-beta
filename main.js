/**
 * =====================================================================
 * AXION NEURALIS - MAIN.JS (INTERACTIONS & LOGIC)
 * Versi: 1.0.0
 * PIC: GP-03 (Interactions)
 * Status: W3 (Interactive)
 * =====================================================================
 * Catatan: File ini mengonsumsi Object `window.axionContent` dari GP-06.
 * Jika GP-06 belum load, sistem akan fallback dengan aman (tidak blank).
 * =====================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    try {
        // 1. GLOBAL STATE & HELPERS
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let currentLang = localStorage.getItem('axion_lang') || 'id';
        const isOnboarded = localStorage.getItem('axion_onboarded');
        
        // Fallback Mock Object jika GP-06 (raw-main.js) belum diload (Mencegah Error)
        if (!window.axionContent) {
            console.warn('[GP-03] axionContent belum ditemukan. Menggunakan fallback mock.');
            window.axionContent = {
                id: { meta: { title: 'AXION Neuralis — Beranda', desc: 'Profil perusahaan AXION Neuralis.' } },
                en: { meta: { title: 'AXION Neuralis — Home', desc: 'AXION Neuralis company profile.' } }
            };
        }

        // Path Helper (Menyesuaikan struktur folder /pages/ ke /assets/)
        const assetPath = (path) => `../assets/${path}`;

        // 2. MODULE: LOADING SCREEN
        const LoadingScreen = {
            init: () => {
                window.addEventListener('load', () => {
                    const loader = document.getElementById('loading-screen');
                    if (!loader) return;
                    
                    if (prefersReducedMotion) {
                        loader.style.display = 'none';
                    } else {
                        loader.classList.add('fade-out');
                        loader.addEventListener('transitionend', () => {
                            loader.style.display = 'none';
                        });
                    }
                });
            }
        };

        // 3. MODULE: ONBOARDING MODAL (Focus Trap & Steps)
        const OnboardingModal = {
            modal: document.getElementById('onboarding-modal'),
            steps: document.querySelectorAll('.onboarding-step'),
            currentStep: 0,

            init: () => {
                if (!OnboardingModal.modal) return;
                
                if (!isOnboarded) {
                    OnboardingModal.show();
                } else {
                    OnboardingModal.hide();
                }

                // Event Delegation untuk tombol di dalam modal
                OnboardingModal.modal.addEventListener('click', (e) => {
                    if (e.target.matches('.btn-lang')) {
                        currentLang = e.target.dataset.lang;
                        localStorage.setItem('axion_lang', currentLang);
                        I18nEngine.render(currentLang);
                        OnboardingModal.nextStep();
                    }
                    if (e.target.matches('.btn-next')) OnboardingModal.nextStep();
                    if (e.target.matches('.btn-finish')) OnboardingModal.finish();
                    if (e.target.matches('.btn-close-modal')) OnboardingModal.finish(); // Skip
                });

                // Focus Trap (Aksesibilitas Keyboard)
                document.addEventListener('keydown', OnboardingModal.trapFocus);
            },

            show: () => {
                OnboardingModal.modal.classList.add('active');
                OnboardingModal.modal.setAttribute('aria-hidden', 'false');
                OnboardingModal.showStep(0);
            },

            hide: () => {
                OnboardingModal.modal.classList.remove('active');
                OnboardingModal.modal.setAttribute('aria-hidden', 'true');
            },

            showStep: (index) => {
                OnboardingModal.steps.forEach((step, i) => {
                    step.classList.toggle('active', i === index);
                });
                OnboardingModal.currentStep = index;
            },

            nextStep: () => {
                if (OnboardingModal.currentStep < OnboardingModal.steps.length - 1) {
                    OnboardingModal.showStep(OnboardingModal.currentStep + 1);
                }
            },

            finish: () => {
                localStorage.setItem('axion_onboarded', 'true');
                OnboardingModal.hide();
            },

            trapFocus: (e) => {
                if (e.key !== 'Tab' || !OnboardingModal.modal.classList.contains('active')) return;
                
                const focusable = OnboardingModal.modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        // 4. MODULE: I18N ENGINE & META TAGS
        const I18nEngine = {
            render: (lang) => {
                try {
                    const content = window.axionContent[lang];
                    if (!content) return;

                    // Update HTML Lang Attribute (BIBLE 5.3)
                    document.documentElement.lang = lang;

                    // Looping DOM untuk data-i18n
                    document.querySelectorAll('[data-i18n]').forEach(el => {
                        const key = el.getAttribute('data-i18n');
                        if (content[key]) el.textContent = content[key];
                    });

                    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                        const key = el.getAttribute('data-i18n-placeholder');
                        if (content[key]) el.setAttribute('placeholder', content[key]);
                    });

                    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
                        const key = el.getAttribute('data-i18n-alt');
                        if (content[key]) el.setAttribute('alt', content[key]);
                    });

                    // Dynamic Meta Tags
                    if (content.meta) {
                        const titleEl = document.getElementById('meta-title') || document.querySelector('title');
                        const descEl = document.querySelector('meta[name="description"]');
                        const ogTitle = document.querySelector('meta[property="og:title"]');
                        const ogDesc = document.querySelector('meta[property="og:description"]');

                        if (titleEl && content.meta.title) titleEl.textContent = content.meta.title;
                        if (descEl && content.meta.desc) descEl.setAttribute('content', content.meta.desc);
                        if (ogTitle && content.meta.title) ogTitle.setAttribute('content', content.meta.title);
                        if (ogDesc && content.meta.desc) ogDesc.setAttribute('content', content.meta.desc);
                    }

                    // Update Lang Switch Button Text/Icon
                    const langBtn = document.getElementById('lang-switch-btn');
                    if (langBtn) langBtn.textContent = lang === 'id' ? 'EN' : 'ID';

                } catch (error) {
                    console.error('[GP-03] i18n Render Error:', error);
                }
            }
        };

        // 5. MODULE: NAVBAR (Scroll Spy & Hamburger)
        const Navbar = {
            init: () => {
                const nav = document.getElementById('main-nav');
                const hamburger = document.querySelector('.nav-hamburger');
                const menu = document.querySelector('.nav-menu');

                // Scroll Spy
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 50) {
                        nav.classList.add('scrolled');
                    } else {
                        nav.classList.remove('scrolled');
                    }
                });

                // Hamburger Toggle
                if (hamburger && menu) {
                    hamburger.addEventListener('click', () => {
                        const isActive = menu.classList.toggle('active');
                        hamburger.classList.toggle('active', isActive);
                        hamburger.setAttribute('aria-expanded', isActive);
                    });
                }
            }
        };

        // 6. MODULE: AUDIO PLAYERS (Lazy Load & Mutual Exclusion)
        const AudioPlayers = {
            cache: {},
            currentAudio: null,
            currentBtn: null,
            tracks: { summary: 1, about: 2, services: 3, contact: 4 }, // Mapping topik ke file

            init: () => {
                const audioBtns = document.querySelectorAll('[id$="-audio-btn"]');
                audioBtns.forEach(btn => {
                    btn.addEventListener('click', () => AudioPlayers.toggle(btn));
                });
            },

            getAudioElement: (topicId) => {
                const trackNum = AudioPlayers.tracks[topicId] || 1; // Fallback ke tp1
                const suffix = currentLang === 'en' ? 'E' : 'I';
                const fileName = `tp${trackNum}${suffix}.mp3`;
                
                // Lazy Loading: Hanya buat instance Audio saat dibutuhkan
                if (!AudioPlayers.cache[fileName]) {
                    AudioPlayers.cache[fileName] = new Audio(assetPath(`audio/${fileName}`));
                    AudioPlayers.cache[fileName].preload = 'none'; // Hemat bandwidth
                }
                return AudioPlayers.cache[fileName];
            },

            toggle: (btn) => {
                const topicId = btn.id.replace('-audio-btn', '');
                const audio = AudioPlayers.getAudioElement(topicId);

                // Mutual Exclusion: Pause audio lain jika ada
                if (AudioPlayers.currentAudio && AudioPlayers.currentAudio !== audio) {
                    AudioPlayers.currentAudio.pause();
                    AudioPlayers.currentAudio.currentTime = 0;
                    AudioPlayers.updateIcon(AudioPlayers.currentBtn, false);
                }

                if (audio.paused) {
                    audio.play().catch(e => console.warn('Audio play failed:', e));
                    AudioPlayers.currentAudio = audio;
                    AudioPlayers.currentBtn = btn;
                    AudioPlayers.updateIcon(btn, true);
                } else {
                    audio.pause();
                    AudioPlayers.updateIcon(btn, false);
                }
            },

            updateIcon: (btn, isPlaying) => {
                if (!btn) return;
                btn.classList.toggle('playing', isPlaying);
                const img = btn.querySelector('img');
                if (img) {
                    img.src = isPlaying ? assetPath('icons/pause.svg') : assetPath('icons/play.svg');
                }
            }
        };

        // 7. MODULE: PLAY ALL (Playlist Logic)
        const PlayAll = {
            playlist: ['summary', 'about', 'services', 'contact'],
            currentIndex: 0,
            isPlaying: false,
            btn: document.getElementById('play-all-btn'),

            init: () => {
                if (!PlayAll.btn) return;
                PlayAll.btn.addEventListener('click', PlayAll.togglePlaylist);
            },

            togglePlaylist: () => {
                if (PlayAll.isPlaying) {
                    PlayAll.stop();
                } else {
                    PlayAll.start();
                }
            },

            start: () => {
                PlayAll.isPlaying = true;
                PlayAll.currentIndex = 0;
                PlayAll.updateMainIcon(true);
                PlayAll.playNext();
            },

            stop: () => {
                PlayAll.isPlaying = false;
                if (AudioPlayers.currentAudio) {
                    AudioPlayers.currentAudio.pause();
                    AudioPlayers.updateIcon(AudioPlayers.currentBtn, false);
                }
                PlayAll.updateMainIcon(false);
            },

            playNext: () => {
                if (!PlayAll.isPlaying || PlayAll.currentIndex >= PlayAll.playlist.length) {
                    PlayAll.stop();
                    return;
                }

                const topicId = PlayAll.playlist[PlayAll.currentIndex];
                const btn = document.getElementById(`${topicId}-audio-btn`);
                const audio = AudioPlayers.getAudioElement(topicId);

                // Trigger play
                AudioPlayers.toggle(btn);

                // Listen for end to play next
                audio.onended = () => {
                    PlayAll.currentIndex++;
                    PlayAll.playNext();
                };
            },

            updateMainIcon: (isPlaying) => {
                const img = PlayAll.btn.querySelector('img');
                if (img) {
                    img.src = isPlaying ? assetPath('icons/close.svg') : assetPath('icons/speaker.svg'); // Ganti ke stop/close saat play all
                }
            }
        };

        // 8. MODULE: CONTACT FORM VALIDATION
        const ContactForm = {
            init: () => {
                const form = document.getElementById('contact-form');
                if (!form) return;

                form.addEventListener('submit', (e) => {
                    e.preventDefault(); // Intercept submit
                    if (ContactForm.validate()) {
                        ContactForm.submitMailto();
                    }
                });
            },

            validate: () => {
                let isValid = true;
                const name = document.getElementById('contact-name');
                const email = document.getElementById('contact-email');
                const message = document.getElementById('contact-message');

                // Reset Errors
                document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
                document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

                // Name Validation (Min 2)
                if (name.value.trim().length < 2) {
                    ContactForm.showError(name, 'contact-name-error', 'Nama minimal 2 karakter.');
                    isValid = false;
                }

                // Email Validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.value.trim())) {
                    ContactForm.showError(email, 'contact-email-error', 'Format email tidak valid.');
                    isValid = false;
                }

                // Message Validation (Min 10)
                if (message.value.trim().length < 10) {
                    ContactForm.showError(message, 'contact-message-error', 'Pesan minimal 10 karakter.');
                    isValid = false;
                }

                return isValid;
            },

            showError: (input, errorId, msg) => {
                input.classList.add('error');
                const errorEl = document.getElementById(errorId);
                if (errorEl) errorEl.textContent = msg;
            },

            submitMailto: () => {
                const name = document.getElementById('contact-name').value;
                const email = document.getElementById('contact-email').value;
                const message = document.getElementById('contact-message').value;

                const subject = encodeURIComponent(`Pesan dari ${name} via Website AXION`);
                const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);
                
                // Fallback mailto: (BIBLE 5.9)
                window.location.href = `mailto:azrielspace852@gmail.com?subject=${subject}&body=${body}`;
                
                // Show Success UI
                const successMsg = document.getElementById('contact-success');
                if (successMsg) {
                    successMsg.style.display = 'block';
                    document.getElementById('contact-form').reset();
                }
            }
        };

        // 9. INITIALIZATION SEQUENCE
        LoadingScreen.init();
        OnboardingModal.init();
        Navbar.init();
        I18nEngine.render(currentLang);
        AudioPlayers.init();
        PlayAll.init();
        ContactForm.init();

        // Global Event Listeners
        const langSwitchBtn = document.getElementById('lang-switch-btn');
        if (langSwitchBtn) {
            langSwitchBtn.addEventListener('click', () => {
                currentLang = currentLang === 'id' ? 'en' : 'id';
                localStorage.setItem('axion_lang', currentLang);
                I18nEngine.render(currentLang);
            });
        }

        console.log('%c[AXION NEURALIS] Interactions Engine Loaded successfully.', 'color: #00D4FF; font-weight: bold;');

    } catch (error) {
        // Progressive Enhancement: Mencegah Blank Screen jika ada Fatal Error
        console.error('[GP-03] Fatal JS Error:', error);
        const loader = document.getElementById('loading-screen');
        if (loader) loader.style.display = 'none'; // Paksa hide loader jika JS crash
    }
});