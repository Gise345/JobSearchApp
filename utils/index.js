export const checkImageURL = (url) => {
    if (!url) return false;
    // Just check if it's a valid HTTP/HTTPS URL
    try {
        const urlObj = new URL(url);
        return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
    } catch {
        return false;
    }
};
