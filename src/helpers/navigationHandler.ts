export const handleMenuItemClicked = (link: any, currentLanguage: string, enLang: any, arLang: any) => {

    const translationsObject =
        currentLanguage == "en" ? enLang.header : arLang.header;
    let linkKey;
    for (const key in translationsObject) {
        if (translationsObject[key] == link.linkName) {
            linkKey = key;
        }
    }

    console.log(currentLanguage);
    console.log(linkKey);
    console.log(link);
    

    if (linkKey == "english" && currentLanguage == "ar")
        window.location.href = "/en";
    else if (linkKey == "arabic" && currentLanguage == "en")
        window.location.href = "/ar";
    else window.location.href = `/${currentLanguage}/${link.path}`;
};