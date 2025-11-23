import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { isUrlSafe } from '@/lib/security';

/**
 * Hook for secure navigation that prevents open redirect vulnerabilities
 */
export const useSecureNavigation = () => {
    const navigate = useNavigate();

    const secureNavigate = useCallback(
        (to: string, options?: { replace?: boolean; state?: any }) => {
            // Validate the URL before navigating
            if (!isUrlSafe(to)) {
                console.error(`Blocked navigation to potentially unsafe URL: ${to}`);
                return;
            }

            navigate(to, options);
        },
        [navigate]
    );

    /**
     * Safely open external links with security attributes
     */
    const secureExternalLink = useCallback((url: string) => {
        if (!isUrlSafe(url)) {
            console.error(`Blocked opening potentially unsafe URL: ${url}`);
            return;
        }

        // Open with security attributes
        window.open(url, '_blank', 'noopener,noreferrer');
    }, []);

    return {
        secureNavigate,
        secureExternalLink,
    };
};
