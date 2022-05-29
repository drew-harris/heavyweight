import * as Tone from "tone";
export function endOfRestBeep() {
  // make a beep
  try {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C6", 0.1);
    synth.triggerAttackRelease("G6", 0.1, "+0.13");
    synth.triggerAttackRelease("D6", 0.1, "+0.24");
    synth.triggerAttackRelease("C6", 0.1, "+1");
    synth.triggerAttackRelease("G6", 0.1, "+1.13");
    synth.triggerAttackRelease("D6", 0.1, "+1.24");
  } catch (error) {
    alert(error);
  }
}
