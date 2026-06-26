

function FooterList({ title, items }) {
    return(
        <div className="w-36">
            <h2 className="text-white/80 text-xl tracking-tight">{title}</h2>
            <div className="border border-orange-600 w-10 mt-4"></div>
            <ul className="list-none space-y-8 pt-10 text-lg">
                {items.map(
                    (item) => { 
                        const Icon = item.icon;

                        return (
                            <li key={item.id} className="flex gap-2 items-center">
                                <span>
                                    <Icon aria-hidden="true" className="text-orange-600 text-lg" />
                                </span>
                                <span className="text-zinc-500 font-medium">
                                    {item.href
                                        ? <a href={item.href} target={item.target} rel={item.target === "_blank" ? "noopener noreferrer" : undefined} className="hover:text-orange-500">{item.name}</a>
                                        : item.name}
                                </span>
                            </li>
                        )
                    }
                )}
            </ul>
        </div>
    )
}

export default FooterList