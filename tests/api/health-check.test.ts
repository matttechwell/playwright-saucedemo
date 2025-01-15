import { test, expect } from'@playwright/test';
import { expandtestingUrls } from '@constants/urls';
import { APIRequestContext } from '@playwright/test';

const fetchHealthCheck = async (request: APIRequestContext) => {
    const response = await request.get(`${expandtestingUrls.baseUrl}${expandtestingUrls.endpoints.healthCheck}`);
    return response;
};

test.describe('Health check API tests', () => {
    test('Verify the health check endpoint', async ({ request }) => {
        console.log(`Base URL: ${expandtestingUrls.baseUrl}`);
        console.log(`Health Check Endpoint: ${expandtestingUrls.endpoints.healthCheck}`);
        console.log(`Full URL: ${expandtestingUrls.baseUrl}${expandtestingUrls.endpoints.healthCheck}`);

        const response = await fetchHealthCheck(request);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toEqual({
            success: true,
            status: 200,
            message: 'Notes API is Running',
        });
    });

    test('Verify the success field in the response', async ({ request }) => {
        const response = await fetchHealthCheck(request);
        const responseBody = await response.json();
        expect(responseBody.success).toBe(true);
    });

    test('Verify the status field in the response', async ({ request }) => {
        const response = await fetchHealthCheck(request);
        const responseBody = await response.json();
        expect(responseBody.status).toBe(200);
    });

    test('Verify the message field in the response', async ({ request }) => {
        const response = await fetchHealthCheck(request);
        const responseBody = await response.json();
        expect(responseBody.message).toBe('Notes API is Running');
    });
});
