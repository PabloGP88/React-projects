import { useRef } from 'react';
import Input from './Input.jsx'

export default function NewProject()
{

    const title = useRef();
    const descriptiom = useRef();
    const dueDate = useRef();

    return(
        <div className='w-[35rem] mt-16'>
            <menu className='flex items-center justify-end gap-4 my-4'>
                <li><button className='text-contrast hover:text-text-color'>Cancel</button></li>
                <li><button className='px-6 py-2 rounded-md bg-secondary-bolder text-stone-50 hover:bg-contrast'>Save</button></li>
            </menu>
            <div>
                <Input label={"Tittle"} />
                <Input label={"Description"} textarea />
                <Input label={"Due Date"}  />

            </div>
        </div>
    );
}