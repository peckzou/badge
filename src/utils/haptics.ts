/**
 * Apple Taptic Engine Micro-Haptics Simulator for Web & Mobile
 * Combines Vibration API (where supported) with synthesized physical acoustic
 * resonance (sub-bass damped impulse + mechanical solenoid strike at ~2.2kHz)
 * to authentically emulate Apple Watch / iPhone hardware tactile feedback.
 */

type HapticType =
  | 'tap'             // Light physical click when touching a badge
  | 'selection'       // Ultra-short crisp micro-tick (like Digital Crown notch)
  | 'flip'            // Heavier tactile mechanical thud when flipping medal 180°
  | 'unlock_step'     // Escalating tactile impulse during unlock sequencing
  | 'unlock_complete' // Resonant crystalline fanfare with multi-pulse haptic
  | 'drag_tick';      // Subtle micro-notch while dragging

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

/**
 * Triggers physical device vibration motor if supported by browser/hardware
 */
function triggerPhysicalVibration(pattern: number | number[]) {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    try {
      navigator.vibrate(pattern);
    } catch {
      // Ignore vibration errors on unsupported contexts
    }
  }
}

/**
 * Synthesizes an authentic Apple Taptic Engine solenoid micro-click & tactile body thump
 */
function playAcousticTapticPulse(
  baseFreq: number = 135,
  endFreq: number = 42,
  duration: number = 0.024,
  gainLevel: number = 0.14,
  includeClick: boolean = true
) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // 1. Low-frequency tactile body thump (135Hz down to 42Hz)
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(Math.max(10, endFreq), now + duration);

    gain.gain.setValueAtTime(gainLevel, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration);

    // 2. High-frequency solenoid mechanical click (~2.2kHz transient)
    if (includeClick) {
      const clickOsc = ctx.createOscillator();
      const clickGain = ctx.createGain();
      const clickFilter = ctx.createBiquadFilter();

      clickFilter.type = 'bandpass';
      clickFilter.frequency.setValueAtTime(2200, now);
      clickFilter.Q.setValueAtTime(4, now);

      clickOsc.type = 'triangle';
      clickOsc.frequency.setValueAtTime(2400, now);
      clickOsc.frequency.exponentialRampToValueAtTime(1200, now + 0.008);

      clickGain.gain.setValueAtTime(gainLevel * 0.45, now);
      clickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.008);

      clickOsc.connect(clickFilter);
      clickFilter.connect(clickGain);
      clickGain.connect(ctx.destination);

      clickOsc.start(now);
      clickOsc.stop(now + 0.009);
    }
  } catch {
    // Graceful fallback if audio context fails
  }
}

/**
 * Synthesizes a crystalline Apple Watch unlock fanfare with golden harmonic resonance
 */
function playUnlockFanfare() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const chords = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6

    chords.forEach((freq, idx) => {
      const startTime = now + idx * 0.06;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.08, startTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.65);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.66);
    });
  } catch {
    // Ignore fallback
  }
}

/**
 * Public Haptic Dispatcher
 */
export function triggerHaptic(type: HapticType = 'tap', stepIndex: number = 0) {
  switch (type) {
    case 'tap':
      triggerPhysicalVibration(12);
      playAcousticTapticPulse(140, 48, 0.022, 0.16, true);
      break;

    case 'selection':
      triggerPhysicalVibration(8);
      playAcousticTapticPulse(180, 80, 0.015, 0.10, true);
      break;

    case 'flip':
      triggerPhysicalVibration([18, 25, 20]);
      playAcousticTapticPulse(110, 36, 0.038, 0.22, true);
      break;

    case 'unlock_step': {
      // Escalating pitch and vibration intensity as unlock animation progresses (0 to 10)
      const freq = 110 + stepIndex * 28;
      triggerPhysicalVibration(8 + Math.min(stepIndex * 2, 20));
      playAcousticTapticPulse(freq, freq * 0.5, 0.025, 0.14 + stepIndex * 0.015, true);
      break;
    }

    case 'unlock_complete':
      triggerPhysicalVibration([25, 40, 20, 45, 55]);
      playUnlockFanfare();
      playAcousticTapticPulse(95, 30, 0.05, 0.25, true);
      break;

    case 'drag_tick':
      triggerPhysicalVibration(5);
      playAcousticTapticPulse(220, 110, 0.012, 0.06, false);
      break;
  }
}
