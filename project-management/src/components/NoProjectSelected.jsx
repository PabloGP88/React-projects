import noProjectImg from '../assets/no-projects.png'
import Button from './Button';

export default function NoProjectSelected({ onStartAddProject })
{
    return(
        <div className="mt-24 text-center w-2/3">
            <img className='w-16 object-contain mx-auto' src={noProjectImg} alt="An empty task list" />
            <h2 className='text-xl font-bold text-text-color mt-4 my-4'>No project Selected</h2>
            <p className='text-contrast mb-4'>Select a project or get started with a new one</p>
            <p className='mt-8'>
                <Button onClick={onStartAddProject}>
                    Create new project
                </Button>
            </p>
        </div>
    );
}