import { useState, useEffect, useRef } from "react"

const useFocusInsideContentEditable = (initialState = false) => {
    const [state, setState] = useState(initialState),
        myRef = useRef(null);

    useEffect(() => {
        const range = document.createRange(),
            selection = window.getSelection();
        range.selectNodeContents(myRef.current);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
        myRef.current.focus();
    }, [state]);

    const handleTrue = () => setState(true);
    const handleFalse = () => setState(false);
    const handleToggle = () => setState(!state);

    return [
        state,
        myRef, {
            setContentTrue: handleTrue,
            setContentFalse: handleFalse,
            setContentToggle: handleToggle,
        }
    ]
}

export default useFocusInsideContentEditable;