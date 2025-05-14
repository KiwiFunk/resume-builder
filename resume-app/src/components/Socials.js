export default function Socials({ data, className = "", styles = {} }) {
  // Default styles if none provided
  const defaultStyles = {
    container: "font-sans",
    socialItem: "flex items-center mt-4",
    iconWrapper: "w-6 h-6 bg-blue-500",
    link: "flex items-center gap-2",
    linkText: "text-gray-700 text-sm",
    showIcons: true // By default, show icons
  };

  // Merge provided styles with defaults
  const mergedStyles = { ...defaultStyles, ...styles };

  function formatURL(url) {
    // Format the URL to remove "https://" and "www." if present using regex.
    // If a slash is present at the end of URL (check with $), remove it as well.
    return url.replace(/^(https?:\/\/)?(www\.)?(\/)?/, "").replace(/\/$/, "");
  }

  return (
    <div className={`${mergedStyles.container} ${className}`}>
      {/* Map the social media objects */}
      {data.socials && data.socials.map((social, index) =>
        // Check if the social media platform is in use
        social.inUse ? (
          <div key={index} className={mergedStyles.socialItem}>
            <a href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={mergedStyles.link}
            >

              {/* Tailwind Mask */}
              {mergedStyles.showIcons && (
                <div
                  className={mergedStyles.iconWrapper}
                  style={{
                    maskImage: `url('/icons/${social.platform.toLowerCase()}.svg')`,
                    WebkitMaskImage: `url('/icons/${social.platform.toLowerCase()}.svg')`
                  }}
                  aria-label={social.platform}
                ></div>
              )}
              {/* Display the social media platform name */}

              <span className={mergedStyles.linkText}>{formatURL(social.url)}</span>
            </a>
          </div>
        ) : null
      )}
    </div>
  );
}