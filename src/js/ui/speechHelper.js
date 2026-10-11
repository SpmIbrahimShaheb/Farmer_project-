// Speech Synthesis Helper for Farmer Voice Advisory (Kisan Vaani / Kisan Sahayak)
// Provides Melodious Female and Grounded Male Voices tailored for Hindi (hi-IN) and Indian English (en-IN)

class SpeechHelper {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.isSpeaking = false;
    this.currentUtterance = null;
    this.onStateChangeCallbacks = [];
    this.voiceGender = this.loadSavedGender(); // 'female' (default) | 'male'
    this.voices = [];

    if (this.synth) {
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  loadSavedGender() {
    try {
      return localStorage.getItem('kisansetu_voice_gender') || 'female';
    } catch (e) {
      return 'female';
    }
  }

  loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
  }

  setGender(gender) {
    this.voiceGender = gender === 'male' ? 'male' : 'female';
    try {
      localStorage.setItem('kisansetu_voice_gender', this.voiceGender);
    } catch (e) {}
  }

  getGender() {
    return this.voiceGender;
  }

  onStateChange(cb) {
    this.onStateChangeCallbacks.push(cb);
  }

  notifyState(speaking) {
    this.isSpeaking = speaking;
    this.onStateChangeCallbacks.forEach(cb => cb(speaking));
  }

  getBestVoice(lang, gender) {
    if (!this.voices || this.voices.length === 0) {
      this.loadVoices();
    }
    const voices = this.voices || [];
    const isHi = lang === 'hi' || lang.startsWith('hi');

    // Name priority patterns for female/male Indian voices
    const femaleHiKeywords = ['swara', 'kalpana', 'shruti', 'heera', 'priya', 'aditi', 'female', 'natural', 'google हिन्दी'];
    const maleHiKeywords = ['madhur', 'hemant', 'ravi', 'male', 'google हिन्दी'];
    const femaleEnKeywords = ['neerja', 'veena', 'aditi', 'heera', 'female', 'google english (india)', 'india'];
    const maleEnKeywords = ['prabhat', 'ravi', 'male', 'google english (india)', 'india'];

    const targetKeywords = isHi
      ? (gender === 'female' ? femaleHiKeywords : maleHiKeywords)
      : (gender === 'female' ? femaleEnKeywords : maleEnKeywords);

    // 1. Try matching language and specific gender keywords in voice name
    for (const kw of targetKeywords) {
      const match = voices.find(v => {
        const langMatch = isHi
          ? (v.lang.includes('hi') || v.name.toLowerCase().includes('hindi'))
          : (v.lang.includes('en-IN') || v.name.toLowerCase().includes('india'));
        return langMatch && v.name.toLowerCase().includes(kw);
      });
      if (match) return match;
    }

    // 2. Fallback to any voice in that language
    const fallbackLangVoice = voices.find(v =>
      isHi
        ? (v.lang.includes('hi') || v.name.toLowerCase().includes('hindi'))
        : (v.lang.includes('en-IN') || v.name.toLowerCase().includes('india'))
    );
    if (fallbackLangVoice) return fallbackLangVoice;

    // 3. Last fallback
    return voices[0] || null;
  }

  speak(text, lang = 'hi-IN') {
    if (!this.synth) {
      console.warn("Audio speech is not supported in this browser.");
      return;
    }

    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    const isHi = lang === 'hi' || lang.startsWith('hi');
    utterance.lang = isHi ? 'hi-IN' : 'en-IN';

    // Tune pitch and rate for melodious listening
    if (this.voiceGender === 'female') {
      // Melodious, musical, gentle cadence easy for farmers to hear
      utterance.pitch = 1.08;
      utterance.rate = 0.90; // smooth melodic cadence
    } else {
      // Deep, clear, grounded male cadence
      utterance.pitch = 0.88;
      utterance.rate = 0.92;
    }

    const voice = this.getBestVoice(utterance.lang, this.voiceGender);
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onstart = () => {
      this.notifyState(true);
    };

    utterance.onend = () => {
      this.notifyState(false);
      this.currentUtterance = null;
    };

    utterance.onerror = (e) => {
      console.warn('Speech synthesis error', e);
      this.notifyState(false);
      this.currentUtterance = null;
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  previewVoice(gender, lang = 'hi') {
    this.setGender(gender);
    const isHi = lang === 'hi' || lang.startsWith('hi');

    let previewText = "";
    if (gender === 'female') {
      previewText = isHi
        ? "नमस्ते किसान भाई! मैं आपकी मधुर महिला वाणी सहायक हूँ। मैं आपको मंडी भाव और फसल की सलाह स्पष्ट सुनाऊँगी।"
        : "Hello! I am your melodious female voice assistant. I am ready to guide you on mandi prices and crop logistics.";
    } else {
      previewText = isHi
        ? "नमस्ते किसान भाई! मैं आपका पुरुष वाणी सहायक हूँ। बोलिए, आज आपको किस मंडी या फसल का भाव जानना है?"
        : "Hello! I am your male voice assistant. Ask me anytime for mandi rates, transport advice, or soil health.";
    }

    this.speak(previewText, lang);
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
      this.notifyState(false);
    }
  }

  toggle(text, lang = 'hi-IN') {
    if (this.isSpeaking) {
      this.stop();
    } else {
      this.speak(text, lang);
    }
  }
}

export const speechHelper = new SpeechHelper();
