
export default function Input({ label, textarea, ...props })
{
    const classes = "w-full p-1 border-b-2 rounded-t-md border-secondary-lighter bg-stone-100 text-contrast focus:outline-none focus:border-secondary-bolder";

    return(
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-primary">{label}</label>
            {textarea ? 
            ( <textarea className={classes} {...props}/> ) : 
            ( <input className={classes} {...props}/> )
            }
        </p>
    );
}