const languageMappings: any = {
    '/en/': '/ar/',
    '/ar/': '/en/'
};

export const handleMenuItemClicked = (link: any = null, currentUrl: any, currentLanguage: string, enLang: any, arLang: any) => {
    if (!link) {
        if (currentUrl == '/ar') {
            window.location.href = '/en'
        } else if (currentUrl == '/en') {
            window.location.href = '/ar'
        } else {
            switchLanguage(currentUrl)
        }
    } else {
        if (currentLanguage == 'ar') {
            !link.childPath ? window.location.href = `/ar/${link.path}` : window.location.href = `/ar/${link.childPath}`
        } else {
            !link.childPath ? window.location.href = `/en/${link.path}` : window.location.href = `/en/${link.childPath}`
        }
    }

};

function switchLanguage(currentUrl: string) {
    const languageCode = currentUrl.substring(0, 4);
    const remainingPath = currentUrl.substring(4); 
    if (languageMappings.hasOwnProperty(languageCode)) {
        const targetLanguage = languageMappings[languageCode];
        const newUrl = targetLanguage + remainingPath;
        window.location.href = newUrl;
    }
}