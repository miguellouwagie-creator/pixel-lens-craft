import { z } from "zod";

/**
 * Email validation schema
 */
export const emailSchema = z
    .string()
    .email("Por favor ingresa un email válido")
    .min(5, "El email debe tener al menos 5 caracteres")
    .max(255, "El email es demasiado largo")
    .toLowerCase()
    .trim();

/**
 * Password validation schema with strength requirements
 */
export const passwordSchema = z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .max(128, "La contraseña es demasiado larga")
    .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "La contraseña debe contener al menos una mayúscula, una minúscula y un número"
    );

/**
 * Weak password schema (for compatibility with existing users)
 */
export const weakPasswordSchema = z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .max(128, "La contraseña es demasiado larga");

/**
 * Name validation schema
 */
export const nameSchema = z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre es demasiado largo")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/, "El nombre contiene caracteres inválidos")
    .trim();

/**
 * Sign up form validation schema
 */
export const signUpSchema = z.object({
    email: emailSchema,
    password: weakPasswordSchema, // Using weak schema for now
    fullName: nameSchema,
});

/**
 * Sign in form validation schema
 */
export const signInSchema = z.object({
    email: emailSchema,
    password: weakPasswordSchema,
});

/**
 * Password strength checker
 */
export const checkPasswordStrength = (
    password: string
): { strength: "weak" | "medium" | "strong"; score: number } => {
    let score = 0;

    // Length check
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;

    // Character variety
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^a-zA-Z\d]/.test(password)) score++;

    // Calculate strength
    if (score <= 2) return { strength: "weak", score };
    if (score <= 4) return { strength: "medium", score };
    return { strength: "strong", score };
};

export type SignUpForm = z.infer<typeof signUpSchema>;
export type SignInForm = z.infer<typeof signInSchema>;
