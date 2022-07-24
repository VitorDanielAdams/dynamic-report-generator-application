import { createContext, useState } from "react";
import { ComponentObject } from "./FormModal";

interface ContextProps {
    list?: ComponentObject[];
    addToList(newItem: {}): void;
    removeToList(index: number): void;
}

const FormModalContext = createContext<ContextProps>({
    list: [],
    addToList() {},
    removeToList() {}
});

export const FormModalProvider = ({children}:any) => {

    const [list, setList] = useState<ComponentObject[]>([]);

    function addToList(newItem: ComponentObject) {
        setList([...list,newItem]);
    }

    function removeToList(index: number) {
        setList([
            ...list.slice(0, index), 
            ...list.slice(index+1,list.length)
        ])
    }

    return <FormModalContext.Provider value={{ list, addToList, removeToList }}>{children}</FormModalContext.Provider>
}
export default FormModalContext;
