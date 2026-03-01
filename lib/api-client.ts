export class ApiError extends Error {
    constructor(public status: number, message: string, public data?: any) {
        super(message);
        this.name = 'ApiError';
    }
}

export async function fetchApi<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {
    const defaultHeaders = {
        'Content-Type': 'application/json',
    };

    const response = await fetch(endpoint, {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
    });

    let data;
    try {
        if (response.status === 204) {
            return null as unknown as T;
        }
        data = await response.json();
    } catch (error) {
        if (response.ok) {
            throw new ApiError(response.status, 'Yanıt JSON olarak ayrıştırılamadı');
        }
        data = null;
    }

    if (!response.ok) {
        throw new ApiError(
            response.status,
            data?.message || response.statusText || 'Bilinmeyen bir hata oluştu',
            data
        );
    }

    return data as T;
}
