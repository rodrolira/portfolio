import { useRef, useState, type SubmitEvent } from 'react'
import emailjs from '@emailjs/browser'

interface EmailFormState {
    loading: boolean
    success: boolean
    error: string | null
}

export const useEmailForm = () => {
    const formRef = useRef<HTMLFormElement>(null!)
    const [state, setState] = useState<EmailFormState>({
        loading: false,
        success: false,
        error: null,
    })

    const sendEmail = async (e: SubmitEvent) => {
        e.preventDefault()
        if (!formRef.current) return

        setState({ loading: true, success: false, error: null })

        try {
            const result = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            if (result.text === 'OK') {
                setState({ loading: false, success: true, error: null })
                formRef.current.reset()
            }
        } catch (err: unknown) {
            setState({ loading: false, success: false, error: 'Error al enviar. Intenta de nuevo.' })
            console.error('EmailJS error:', err)
        }
    }

    return { formRef, sendEmail, ...state }
}
