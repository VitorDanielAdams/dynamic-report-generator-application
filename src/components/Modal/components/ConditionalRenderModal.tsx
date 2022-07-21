import { Dispatch, SetStateAction, useState } from 'react';
import FormModal from './FormModal/FormModal';
import MenuModal from './MenuModal/MenuModal';

interface ConditionalRenderModalProps {
    menuModal: boolean;
    setMenuModal:  Dispatch<SetStateAction<boolean>>;
}

function ConditionalRenderModal({menuModal, setMenuModal}:ConditionalRenderModalProps) {
    
    const [selectedForm, setSelectedForm] = useState('');

    if (menuModal === true) {
        return (
            <MenuModal setMenuModal={setMenuModal} setSelectedForm={setSelectedForm} />
        );
    } 
    return (
        <FormModal  menuModal={menuModal} selectedForm={selectedForm} setMenuModal={setMenuModal} />
    );
}
export default ConditionalRenderModal;