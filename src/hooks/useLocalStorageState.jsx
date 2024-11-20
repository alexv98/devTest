import {useEffect, useState} from "react";

export const useLocalStorageState = (key, initialValue = '') => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialValue);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  useEffect(() => {
    const handleLocalStorageState = (event) => {
      if(event.key === key) {
        setValue(event.newValue);
      }
    }

    window.addEventListener("storage", handleLocalStorageState);

    return () => window.removeEventListener("storage", handleLocalStorageState);
  }, [key])

  return [value, setValue];
}

