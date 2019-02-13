import section from './section.vue'

const addComponent = function () {
    if (window.vm) {
        window.vm.addComponent("__NAME__", section);
        return true;
    }
    return false;
}

if (!addComponent()) {
    const iniInterval = setInterval(function () {
        if (addComponent()) {
            clearInterval(iniInterval);
        }
    }, 10);
}