
import type { FormValues } from "../types/TabType.ts";
import {useSendData} from "./useSendData";

export const useServerPost = (onSuccess?: () => void) => {
    const { send, loading, error } = useSendData<{ success: boolean }>();

    const onSubmit = async (data: FormValues) => {
        try {
            const result = await send({
                url: 'http://localhost:3000/api/request',
                body: {
                    ...data,
                },
            });

            if (result?.success) {
                onSuccess?.();
            }

            return result;
        } catch (err) {
            console.error('Ошибка отправки:', err);
            throw err;
        }
    };
    return { onSubmit, loading, error };

}