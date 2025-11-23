import DOMPurify from "dompurify";

/**
 * Sanitize HTML content to prevent XSS attacks
 * Allows safe HTML tags like strong, em, br, p, ul, li, a
 */
export const sanitizeHtml = (dirty: string): string => {
    return DOMPurify.sanitize(dirty, {
        ALLOWED_TAGS: ["strong", "em", "br", "p", "b", "i", "u", "a", "ul", "li", "ol", "span"],
        ALLOWED_ATTR: ["href", "target", "rel", "class"],
        ALLOW_DATA_ATTR: false,
    });
};

/**
 * Sanitize user input to remove potentially dangerous characters
 */
export const sanitizeInput = (input: string): string => {
    return input
        .trim()
        .replace(/[<>]/g, "") // Remove angle brackets
        .replace(/javascript:/gi, "") // Remove javascript: protocol
        .replace(/on\w+=/gi, ""); // Remove event handlers
};

/**
 * Validate URL to prevent open redirects and XSS
 */
export const isUrlSafe = (url: string): boolean => {
    try {
        const parsed = new URL(url);
        // Only allow http, https, and mailto protocols
        return ["http:", "https:", "mailto:"].includes(parsed.protocol);
    } catch {
        // If URL parsing fails, check if it's a relative path
        return url.startsWith("/") && !url.startsWith("//");
    }
};

/**
 * Sanitize email to prevent injection attacks
 */
export const sanitizeEmail = (email: string): string => {
    return email
        .trim()
        .toLowerCase()
        .replace(/[^\w@.+-]/g, ""); // Only allow valid email characters
};

/**
 * Create a safe HTML string object for React
 */
export const createSafeHtml = (dirty: string) => {
    return { __html: sanitizeHtml(dirty) };
};
