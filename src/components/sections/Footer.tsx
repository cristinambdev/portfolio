import Socials from "../common/Socials";

export default function Footer () {

    return (
        <footer className="flex flex-col items-center text-center text-sm text-zinc-500 dark:text-zinc-400 py-2">
            &copy; {new Date().getFullYear()} crismbdev.
            <Socials animated={false} />
        </footer>
    )
}
