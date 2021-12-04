
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
    'use strict';

    const React = (() => {
        
        /**
         * An array is used here so that we can set as many states as we want,
         * not just one
         */
        let hooks = [];

        /**
         * This index will run through each and every state used in the component
         */
        let index = 0;

        /**
         * Naive implementation of useState
         */
        function useState(initialValue) {
            /** A localIndex is created as the setter function gets called after the useState call
             * and if we don't use this var, setter might set value at a wrong index
             */
            let localIndex = index;
            index++;

            if (hooks[localIndex] === undefined) {
                hooks[localIndex] = initialValue;
            }
            const setterFunction = (newValue) => {
                hooks[localIndex] = newValue;
            };
            return [hooks[localIndex], setterFunction];
        }

        /**
         * We need to reset the index after one render cycle
         */
        function resetIndex() {
            index = 0;
        }

        function useEffect(callback, dependencyArray) {
            let hasChanged = true;

            let oldDependencies = hooks[index];

            if (oldDependencies) {
                hasChanged = false;
                dependencyArray.forEach((dep, index) => {
                    if (!Object.is(dep, oldDependencies[index])) {
                        hasChanged = true;
                    }
                });
            }

            if (hasChanged) {
                callback();
            }

            hooks[index] = dependencyArray;
            index++;
        }
        
        return {
            useState,
            useEffect,
            resetIndex
        }
    })();

    const { useState, resetIndex, useEffect } = React;

    const Component = () => {
        const [counter, setCounter] = useState(0);
        const [name, setName] = useState("Sanjeet");
        console.log("Counter", counter);
        console.log("Name", name);
        
        useEffect(() => {
            console.log("useEffect");
        }, [name]);

        if (counter !== 1) {
            setCounter(1);
        }

        if (name !== "Tiwari" && counter === 1) {
            setName("Tiwari");
        }
    };

    console.log(Component());
    resetIndex();
    console.log(Component());
    resetIndex();
    console.log(Component());

})();
//# sourceMappingURL=output.js.map
