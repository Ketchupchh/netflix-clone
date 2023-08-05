import { CustomIcon } from "./custom-icon";

type LanguageSelectorProps = {
    className?: string;
}

const langs = [
    "English",
    "Español"
];

export function LanguageSelector({
    className
} : LanguageSelectorProps) : JSX.Element
{
    return (
        <>
            <label className="invisible">Select Language</label>
            <div
                className={className ?? "flex flex-row gap-3 w-20"}
            >
                <CustomIcon className="w-5 h-5" iconName='GlobeIcon' solid={false} />
                <select
                    className="bg-inherit outline-none"
                    name="LangaugeSelect"
                >
                    {langs.map((lang, index) => (
                        <option key={index}>{lang}</option>
                    ))}
                </select>
            </div>
        </>
    );
}