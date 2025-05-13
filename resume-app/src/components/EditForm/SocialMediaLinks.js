import DeleteButton from "@/components/DeleteButton";

export default function SocialMediaLinks({ data, inputClasses, updateNestedState, handleDeletion }) {

    // Array to contain platforms we have icons for in the public/icons folder
    // Is there a way to dynamically get this list from the public/icons folder?
    const supportedPlatforms = [
        "artstation", "linkedin", "github", "twitter", "stackoverflow",
    ];

    const setPlatfrom = (url, i) => {
        let hostname = new URL(url).hostname;                               // Extract the domain name from the URL (also known as the hostname)
        hostname = hostname.replace(/^www\.|\.com|\.net|\.org|\.io/g, "");  // Remove 'www.', '.com', '.net', '.org', and '.io' from the hostname
    
        hostname = supportedPlatforms.includes(hostname) ? hostname : "website";        
        
        // Update the platform name in the state
        updateNestedState("socials", i, "platform", hostname);          // Update the platform name in the state
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Map through the current social media data */}
            {data.socials.map((social, index) => (
                <div key={index} className="flex items-center gap-2">
                    {/* Social Media Icon */}
                    <div
                        className="w-7 h-7 bg-(--accent)"
                        style={{
                            maskImage: `url('/icons/${social.platform.toLowerCase()}.svg')`,
                            WebkitMaskImage: `url('/icons/${social.platform.toLowerCase()}.svg')`,
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat'
                        }}
                        aria-label={social.platform}
                    ></div>

                    {/* Social Media URL Input */}
                    <input
                        type="text"
                        value={social.url}
                        className={inputClasses}
                        onChange={(e) => updateNestedState("socials", index, "url", e.target.value)}
                        /* Dynamically set social icon by parsing the name from the url */
                        onBlur={() => setPlatfrom(social.url, index)}
                    />
                    <DeleteButton onDelete={() => handleDeletion("socials", index)} />
                </div>
            ))}
        </div>
    );
}