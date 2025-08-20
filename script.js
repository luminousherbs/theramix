let started = false;

document.getElementById("play").addEventListener("click", async () => {
    if (started) return;
    play.remove()
    started = true;
    const osc = new Tone.Oscillator("A2", "triangle").toDestination();
    osc.start();
    addEventListener("mousemove", async (event) => {
        osc.frequency.value = 440 * (2 ** (Math.floor(((24 / innerHeight) * event.clientY) + 45 - 69) / 12));
    })
    document.querySelectorAll(".gridline").forEach((e) => {
        e.style.height = innerHeight / 24 + "px";
        e.style.visibility = "visible";
    })
});