
const links = [
    {
        linkName: "FAQ",
        link: "https://help.netflix.com/en/node/412"
    },
    {
        linkName: "Help Center",
        link: "https://help.netflix.com/en/"
    },
    {
        linkName: "Account",
        link: "https://help.netflix.com/youraccount"
    },
    {
        linkName: "Media Center",
        link: "https://media.netflix.com/en/"
    },
    {
        linkName: "Investor Relations",
        link: "https://ir.netflix.net/ir-overview/profile/default.aspx"
    },
    {
        linkName: "Jobs",
        link: "https://jobs.netflix.com"
    },
    {
        linkName: "Netflix Shop",
        link: "https://www.netflix.shop"
    },
    {
        linkName: "Redeem Gift Cards",
        link: "https://www.netflix.com/redeem"
    },
    {
        linkName: "Buy Gift Cards",
        link: "https://www.netflix.com/gift-cards"
    },
    {
        linkName: "Ways to Watch",
        link: "https://devices.netflix.com/en/"
    },
    {
        linkName: "Terms of Use",
        link: "https://help.netflix.com/legal/termsofuse"
    },
    {
        linkName: "Privacy",
        link: "https://help.netflix.com/legal/privacy"
    },
    {
        linkName: "Cookie Preferences",
        link: "https://www.netflix.com/#"
    },
    {
        linkName: "Corporate Information",
        link: "https://help.netflix.com/legal/corpinfo"
    },
    {
        linkName: "Contact Us",
        link: "https://help.netflix.com/en/contactus"
    },
    {
        linkName: "Speed Test",
        link: "https://fast.com"
    },
    {
        linkName: "legal Notices",
        link: "https://help.netflix.com/legal/notices"
    },
    {
        linkName: "Only on Netflix",
        link: "https://www.netflix.com/browse/genre/839338"
    },
    {
        linkName: "Do Not Sell or Share My Personal Information",
        link: "https://help.netflix.com/legal/dnsspi"
    },
];

export function Footer() : JSX.Element
{
    return (
        <footer
            className="relative grid grid-cols-4 grid-rows-4 gap-2 lg:gap-3 py-20 lg:px-52 text-[10px] xs:text-[10px] lg:text-sm text-[#FFFFFFB3]
                         px-5"
        >
            <p className="absolute col-span-4 px-5 lg:px-52 py-14">Questions? Call <a className="underline" href="tel:+1-844-505-2993">1-844-505-2993</a></p>

            <div className="col-span-4" />

            {links.map((link, index) => (
                <a key={index} className="underline mr-auto" href={link.link} target="_blank">{link.linkName}</a>
            ))}
        </footer>
    );
}