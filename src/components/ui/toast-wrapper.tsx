import { useToast } from "@/components/ui/use-toast"

// Definindo tipos para as opções do toast
type ToastOptions = {
    title?: string;
    description: string;
    variant?: "default" | "destructive";
};

// Criando um hook personalizado para usar o toast
export const useCustomToast = () => {
    const { toast } = useToast();

    // Função para mostrar um toast de sucesso
    const showSuccess = (options: ToastOptions) => {
        toast({
            title: options.title || "Sucesso",
            description: options.description,
            variant: "default",
        });
    };

    // Função para mostrar um toast de erro
    const showError = (options: ToastOptions) => {
        toast({
            title: options.title || "Erro",
            description: options.description,
            variant: "destructive",
        });
    };

    return { showSuccess, showError };
};