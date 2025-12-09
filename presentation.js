
const clickSound = new Audio('cable plug-edited-2025-12-02T14-02-51.mp3');

const modules = document.querySelectorAll('.module');

modules.forEach(module => {
    const slot = module.querySelector('.cable-slot');
    const content = module.querySelector('.content');

    const cable = document.createElement('div');
    cable.className = 'cable';
    slot.appendChild(cable);

    const led = document.createElement('div');
    led.className = 'led';
    module.appendChild(led);

    let activated = false;

    cable.addEventListener('click', () => {
        clickSound.play();

        if (activated) {
            cable.classList.remove('inserted');
            content.classList.remove('unlocked');
            led.classList.remove('on');
            activated = false;
        } else {
            cable.classList.add('inserted');
            content.classList.add('unlocked');
            led.classList.add('on');
            activated = true;
        }
    });
});