import {useState} from "react";

type SendOptions<T> = {
    url: string;
    method?: 'POST' | 'PUT' | 'PATCH';
    body: T;
    headers?: HeadersInit;
};

export function useSendData<TResponse>() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<TResponse | null>(null);

    const send = async <TBody>({
                                   url,
                                   method = 'POST',
                                   body,
                                   headers,
                               }: SendOptions<TBody>) => {
        setLoading(true);
        setError(null);

        try {
            console.log('Отправка запроса:', { url, method, body });

            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    ...headers,
                },
                body: JSON.stringify(body),
            });

            console.log('Ответ сервера:', {
                status: res.status,
                statusText: res.statusText,
                ok: res.ok
            });

            if (!res.ok) {
                const errorText = await res.text();
                console.error('Ошибка от сервера:', errorText);
                throw new Error(errorText || `HTTP ${res.status}: ${res.statusText}`);
            }

            const responseData: TResponse = await res.json();
            console.log('Данные ответа:', responseData);
            setData(responseData);
            return responseData;
        } catch (err: any) {
            console.error('Полная ошибка:', err);
            setError(err.message || 'Unknown error');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { send, loading, error, data };
}