import section from './section.vue'

const name = "wwbuilder_A";

const addComponent = function () {
    if (window.vm) {
        window.vm.addComponent(name, section);
        console.log('wwbuilder_A add Component : ', { name: name, section: section })
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