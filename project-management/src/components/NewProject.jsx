import { useRef } from 'react';
import Input from './Input.jsx'
import Modal from './Modal.jsx';

export default function NewProject({ onAdd, onCancel })
{
    const modalRef = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave()
    {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === '' 
        || enteredDescription.trim() === '' 
        || enteredDueDate.trim() === '')
        {
            modalRef.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    return(
        <>
            <Modal ref={modalRef} buttonCaption={'Close'}>
                <h2 className='text-xl font-bold text-text-color mt-4 my-4'>Invalid Input</h2>
                <p className='text-contrast mb-4'>Oops...looks like you forgot to enter a value.</p>
                <p className='text-contrast mb-4'>Please make sure you provide a valie value for every input field.</p>
            </Modal>
            <div className='w-[35rem] mt-16'>
                <menu className='flex items-center justify-end gap-4 my-4'>
                    <li>
                        <button className='text-contrast hover:text-text-color' onClick={onCancel}>
                        Cancel
                        </button>
                    </li>
                    <li>
                        <button className='px-6 py-2 rounded-md bg-secondary-bolder text-stone-50 hover:bg-contrast' onClick={handleSave}>
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input type='text' ref={title} label={"Tittle"} />
                    <Input ref={description} label={"Description"} textarea />
                    <Input type='date' ref={dueDate} label={"Due Date"}  />

                </div>
            </div>
        </>
    );
}