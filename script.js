let position;
let started = false;

document.getElementById("play").addEventListener("click", async () => {
    if (started) return;
    play.remove()
    started = true;
    const osc = new Tone.Oscillator("A2", "sine").toDestination();
    osc.start();
    addEventListener("mousemove", async (event) => {
        position = event.clientY;
        osc.frequency.value = 440 * (2 ** (Math.floor(((24 / innerHeight) * position) + 45 - 69) / 12));
    })
    document.querySelectorAll(".gridline").forEach((e) => {
        e.style.height = innerHeight / 24 + "px";
        e.style.visibility = "visible";
    })
});