export const React = (() => {
    
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
        }
        return [hooks[localIndex], setterFunction];
    }

    /**
     * We need to reset the index after one render cycle
     */
    function resetIndex() {
        index = 0;
    }

    /**
     * Naive implementation of useEffect
     */
    function useEffect(callback, dependencyArray) {
        /** Initial value is true because if no dependencyArray is provided,
         * callback should execute
         */
        let hasChanged = true;

        let oldDependencies = hooks[index];

        if (oldDependencies) {
            /** It is set to false here first because, if we pass an empty array,
             * callback should not execute after the first time
             */
            hasChanged = false;
            dependencyArray.forEach((dep, index) => {
                if (!Object.is(dep, oldDependencies[index])) {
                    hasChanged = true;
                }
            })
        }

        /** If any dependency has changed, execute the callback */
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