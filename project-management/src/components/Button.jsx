export default function Button({ children, ...props })
{
    return<button className="px-4 py-2 text-xs md:text-base rounded-md bg-secondary-bolder text-background hover:bg-secondary-lighter hover:text-stone-100" {...props}>{children}</button>
}