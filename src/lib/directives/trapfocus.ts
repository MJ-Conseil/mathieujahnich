export const handleKeyboardTrapFocus = (
    e: KeyboardEvent,
    firstFocusableElement: HTMLElement,
    lastFocusableElement: HTMLElement,
    closeModalCallBack: () => void
) => {
    if (e.key === 'Escape') {
        closeModalCallBack();

        return;
    }

    const isTabPressed = e.key === 'Tab';

    if (!isTabPressed) {
        return;
    }

    // Heavilly inspired by https://uxdesign.cc/how-to-trap-focus-inside-modal-to-make-it-ada-compliant-6a50f9a70700

    if (e.shiftKey) {
        // if shift key pressed for shift + tab combination
        if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus(); // add focus for the last focusable element
            e.preventDefault();
        }
    } else {
        // if tab key is pressed
        if (document.activeElement === lastFocusableElement) {
            // if focused has reached to last focusable element then focus first focusable element after pressing tab
            firstFocusableElement.focus(); // add focus for the first focusable element
            e.preventDefault();
        }
    }
};
