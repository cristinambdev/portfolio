export default function ContactForm() {
    return (
        <form className="space-y-4 max-w-2xl">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm focus:ring-brand-brick-red focus:border-brand-brick-red"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm focus:ring-brand-brick-red focus:border-brand-brick-red"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700">
                    Message
                </label>
                <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full border border-zinc-300 rounded-md shadow-sm focus:ring-brand-brick-red focus:border-brand-brick-red"
                />
            </div>
            <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-brick-red hover:bg-brand-brick-red-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-brick-red"
            >
                Send Message
            </button>
        </form>
    );
}
